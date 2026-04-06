#!/usr/bin/env node

const VALIDATOR_ENDPOINT = 'https://validator.schema.org/validate';
const RETRYABLE_STATUS_CODES = new Set([429, 500, 502, 503, 504]);

function usage() {
  console.log(`Usage:
  node scripts/validate-schema.mjs <base-url>
  node scripts/validate-schema.mjs <url1> <url2> ...

Options:
  --strict         Fail when warnings are found (default: fail on errors only)
  --remote         Also query validator.schema.org/validate (best effort)
  --remote-strict  Fail if remote validator is unavailable or blocked
`);
}

function normalizeBaseUrl(input) {
  const url = new URL(input);
  return url.toString().replace(/\/+$/, '');
}

function buildUrls(args) {
  if (args.length === 0) {
    const envBase = process.env.DEPLOY_PRIME_URL || process.env.URL;
    if (!envBase) return [];
    const base = normalizeBaseUrl(envBase);
    return [`${base}/`, `${base}/fr/`];
  }

  if (args.length === 1) {
    const base = normalizeBaseUrl(args[0]);
    return [`${base}/`, `${base}/fr/`];
  }

  return args.map((arg) => new URL(arg).toString());
}

function extractJsonLdBlocks(html) {
  const regex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const blocks = [];
  let match = null;

  while ((match = regex.exec(html)) !== null) {
    blocks.push(match[1].trim());
  }

  return blocks;
}

function toTypeList(node) {
  const raw = node?.['@type'];
  if (!raw) return [];
  return Array.isArray(raw) ? raw : [raw];
}

function createFinding(level, code, message, path) {
  return { level, code, message, path };
}

function collectTypes(node, output) {
  if (Array.isArray(node)) {
    node.forEach((item) => collectTypes(item, output));
    return;
  }

  if (!node || typeof node !== 'object') return;

  toTypeList(node).forEach((type) => output.add(type));

  for (const value of Object.values(node)) {
    collectTypes(value, output);
  }
}

function ensureCoreTypes(types, findings) {
  const requiredTypes = ['Organization', 'Person', 'WebSite', 'WebPage', 'BreadcrumbList', 'Service'];

  requiredTypes.forEach((type) => {
    if (!types.has(type)) {
      findings.push(
        createFinding(
          'error',
          `MISSING_TYPE_${type.toUpperCase()}`,
          `Expected schema type "${type}" is missing from JSON-LD.`,
          'jsonld'
        )
      );
    }
  });

  if (!types.has('FAQPage')) {
    findings.push(
      createFinding(
        'warning',
        'MISSING_TYPE_FAQPAGE',
        'FAQPage not found in JSON-LD. If this page contains FAQ content, add FAQPage markup.',
        'jsonld'
      )
    );
  }
}

function traverseSchemaNode(node, path, findings) {
  if (Array.isArray(node)) {
    node.forEach((item, index) => traverseSchemaNode(item, `${path}[${index}]`, findings));
    return;
  }

  if (!node || typeof node !== 'object') return;

  const types = toTypeList(node);
  const hasType = (t) => types.includes(t);

  if (hasType('Service') && Object.prototype.hasOwnProperty.call(node, 'availableLanguage')) {
    findings.push(
      createFinding(
        'error',
        'SERVICE_AVAILABLE_LANGUAGE',
        'Service should not define availableLanguage. Use knowsLanguage on Person/Organization and availableLanguage on ContactPoint.',
        path
      )
    );
  }

  if (hasType('ProfessionalService') && Object.prototype.hasOwnProperty.call(node, 'inLanguage')) {
    findings.push(
      createFinding(
        'error',
        'PROFESSIONAL_SERVICE_IN_LANGUAGE',
        'ProfessionalService should not define inLanguage.',
        path
      )
    );
  }

  if (hasType('ProfessionalService') && Object.prototype.hasOwnProperty.call(node, 'availableLanguage')) {
    findings.push(
      createFinding(
        'warning',
        'PROFESSIONAL_SERVICE_AVAILABLE_LANGUAGE',
        'ProfessionalService availableLanguage may be rejected by validators; prefer knowsLanguage.',
        path
      )
    );
  }

  if (hasType('LocalBusiness') && Object.prototype.hasOwnProperty.call(node, 'availableLanguage')) {
    findings.push(
      createFinding(
        'warning',
        'LOCAL_BUSINESS_AVAILABLE_LANGUAGE',
        'LocalBusiness availableLanguage may be rejected by validators; prefer knowsLanguage.',
        path
      )
    );
  }

  if (hasType('Offer') && Object.prototype.hasOwnProperty.call(node, 'position')) {
    findings.push(
      createFinding(
        'error',
        'OFFER_POSITION',
        'Offer should not define position. Use ListItem.position when ordering items.',
        path
      )
    );
  }

  if (Object.prototype.hasOwnProperty.call(node, 'potentialAction')) {
    const action = node.potentialAction;
    const actions = Array.isArray(action) ? action : [action];

    actions.forEach((candidate, index) => {
      if (!candidate || typeof candidate !== 'object') return;
      const actionTypes = toTypeList(candidate);
      if (actionTypes.includes('ContactAction')) {
        findings.push(
          createFinding(
            'error',
            'CONTACT_ACTION_INVALID',
            'ContactAction is not a valid Schema.org type. Use a valid Action subtype such as CommunicateAction or SearchAction.',
            `${path}.potentialAction${Array.isArray(action) ? `[${index}]` : ''}`
          )
        );
      }
    });
  }

  for (const [key, value] of Object.entries(node)) {
    if (key === '@context' || key === '@type') continue;
    traverseSchemaNode(value, `${path}.${key}`, findings);
  }
}

function parseValidatorPayload(raw) {
  if (raw.startsWith(")]}'")) {
    return JSON.parse(raw.split('\n').slice(1).join('\n'));
  }
  return JSON.parse(raw);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function tryRemoteValidation(url) {
  const maxAttempts = 4;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const body = new URLSearchParams({ url });
    const res = await fetch(VALIDATOR_ENDPOINT, {
      method: 'POST',
      headers: {
        'user-agent': 'resume-schema-validator/1.1',
      },
      body,
      redirect: 'manual',
    });

    if (res.ok) {
      const data = parseValidatorPayload(await res.text());
      const list = Array.isArray(data.errors) ? data.errors : [];
      return {
        available: true,
        severe: list.filter((f) => Boolean(f.isSevere)).length,
        warnings: list.filter((f) => !f.isSevere).length,
      };
    }

    if (!RETRYABLE_STATUS_CODES.has(res.status)) break;
    await sleep(400 * attempt);
  }

  return {
    available: false,
    severe: 0,
    warnings: 0,
  };
}

async function validateUrl(url, withRemote) {
  const htmlRes = await fetch(url);
  if (!htmlRes.ok) {
    throw new Error(`Could not fetch ${url} (HTTP ${htmlRes.status})`);
  }

  const html = await htmlRes.text();
  const jsonLdBlocks = extractJsonLdBlocks(html);
  const findings = [];
  const types = new Set();

  jsonLdBlocks.forEach((raw, index) => {
    try {
      const parsed = JSON.parse(raw);
      collectTypes(parsed, types);
      traverseSchemaNode(parsed, `jsonld[${index}]`, findings);
    } catch (error) {
      findings.push(
        createFinding(
          'error',
          'JSONLD_PARSE_ERROR',
          `Invalid JSON-LD block: ${error.message}`,
          `jsonld[${index}]`
        )
      );
    }
  });

  ensureCoreTypes(types, findings);

  const errors = findings.filter((f) => f.level === 'error');
  const warnings = findings.filter((f) => f.level === 'warning');
  const remote = withRemote ? await tryRemoteValidation(url) : null;

  return {
    url,
    blocks: jsonLdBlocks.length,
    types: [...types].sort(),
    errors,
    warnings,
    remote,
  };
}

async function main() {
  const argv = process.argv.slice(2);
  const strict = argv.includes('--strict');
  const withRemote = argv.includes('--remote');
  const remoteStrict = argv.includes('--remote-strict');
  const args = argv.filter((arg) => !['--strict', '--remote', '--remote-strict'].includes(arg));

  if (args.includes('--help') || args.includes('-h')) {
    usage();
    process.exit(0);
  }

  const urls = buildUrls(args);
  if (urls.length === 0) {
    usage();
    console.error('No URL provided and no DEPLOY_PRIME_URL/URL environment variable found.');
    process.exit(1);
  }

  let totalErrors = 0;
  let totalWarnings = 0;
  let remoteUnavailable = 0;

  for (const url of urls) {
    const result = await validateUrl(url, withRemote);
    totalErrors += result.errors.length;
    totalWarnings += result.warnings.length;

    console.log(`\nURL: ${url}`);
    console.log(`JSON-LD blocks: ${result.blocks}`);
    console.log(`Detected local types: ${result.types.join(', ')}`);
    console.log(`Local errors: ${result.errors.length}`);
    console.log(`Local warnings: ${result.warnings.length}`);

    result.errors.forEach((f) => console.log(`- ERROR ${f.code}: ${f.message} [${f.path}]`));
    result.warnings.forEach((f) => console.log(`- WARNING ${f.code}: ${f.message} [${f.path}]`));

    if (withRemote) {
      if (!result.remote?.available) {
        remoteUnavailable += 1;
        console.log('- Remote validator: unavailable/blocked (rate limit or anti-bot).');
      } else {
        console.log(`- Remote validator: severe=${result.remote.severe}, warnings=${result.remote.warnings}`);
      }
    }
  }

  if (totalErrors > 0) {
    console.error(`\nSchema validation failed with ${totalErrors} local error(s).`);
    process.exit(2);
  }

  if (strict && totalWarnings > 0) {
    console.error(`\nSchema validation failed in strict mode with ${totalWarnings} local warning(s).`);
    process.exit(3);
  }

  if (remoteStrict && remoteUnavailable > 0) {
    console.error('\nSchema validation failed: remote validator unavailable in --remote-strict mode.');
    process.exit(4);
  }

  console.log('\nSchema validation passed.');
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
