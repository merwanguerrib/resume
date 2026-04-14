#!/usr/bin/env node

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

function usage() {
  console.log(`Usage:
  node scripts/validate-schema-dist.mjs [dist-dir]

Options:
  --strict   Fail when warnings are found (default: fail on errors only)
`);
}

function walkHtmlFiles(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const absolute = join(dir, entry);
    const stats = statSync(absolute);

    if (stats.isDirectory()) {
      files.push(...walkHtmlFiles(absolute));
      continue;
    }

    if (absolute.endsWith('.html')) {
      files.push(absolute);
    }
  }

  return files;
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

function inferRequiredTypes(distRelativePath) {
  const normalized = distRelativePath.replace(/\\/g, '/');

  if (normalized === '404.html') {
    return ['Organization', 'Person', 'ProfessionalService', 'WebSite', 'WebPage', 'BreadcrumbList'];
  }

  if (
    normalized === 'index.html' ||
    normalized === 'fr/index.html' ||
    /^services\/[^/]+\/index\.html$/.test(normalized) ||
    /^fr\/services\/[^/]+\/index\.html$/.test(normalized)
  ) {
    return [
      'Organization',
      'Person',
      'ProfessionalService',
      'WebSite',
      'WebPage',
      'BreadcrumbList',
      'Service',
      'FAQPage',
    ];
  }

  return ['Organization', 'Person', 'ProfessionalService', 'WebSite', 'WebPage', 'BreadcrumbList'];
}

function ensureRequiredTypes(types, findings, distRelativePath) {
  const required = inferRequiredTypes(distRelativePath);

  required.forEach((type) => {
    if (!types.has(type)) {
      findings.push(
        createFinding(
          'error',
          `MISSING_TYPE_${type.toUpperCase()}`,
          `Expected schema type "${type}" is missing from JSON-LD.`,
          distRelativePath
        )
      );
    }
  });
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

  if (hasType('Service') && Object.prototype.hasOwnProperty.call(node, 'inLanguage')) {
    findings.push(
      createFinding(
        'error',
        'SERVICE_IN_LANGUAGE',
        'Service should not define inLanguage.',
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

function validateHtmlFile(filePath, distRoot) {
  const relativePath = relative(distRoot, filePath).replace(/\\/g, '/');
  const html = readFileSync(filePath, 'utf8');
  const blocks = extractJsonLdBlocks(html);
  const findings = [];
  const types = new Set();

  if (blocks.length === 0) {
    findings.push(
      createFinding(
        'error',
        'JSONLD_MISSING',
        'No JSON-LD block found on this page.',
        relativePath
      )
    );

    return {
      relativePath,
      blocks: 0,
      types: [],
      findings,
    };
  }

  blocks.forEach((raw, index) => {
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

  ensureRequiredTypes(types, findings, relativePath);

  return {
    relativePath,
    blocks: blocks.length,
    types: [...types].sort(),
    findings,
  };
}

function main() {
  const argv = process.argv.slice(2);
  const strict = argv.includes('--strict');
  const args = argv.filter((arg) => arg !== '--strict');

  if (args.includes('--help') || args.includes('-h')) {
    usage();
    process.exit(0);
  }

  const distRoot = args[0] ?? 'dist';
  let htmlFiles = [];

  try {
    htmlFiles = walkHtmlFiles(distRoot);
  } catch (error) {
    console.error(`Could not read dist directory "${distRoot}": ${error.message}`);
    process.exit(1);
  }

  if (htmlFiles.length === 0) {
    console.error(`No HTML files found under "${distRoot}".`);
    process.exit(1);
  }

  const targetFiles = htmlFiles
    .map((filePath) => relative(distRoot, filePath).replace(/\\/g, '/'))
    .filter((relativePath) => !/^\d{3}\.html$/.test(relativePath) || relativePath === '404.html')
    .map((relativePath) => join(distRoot, relativePath));

  const results = targetFiles
    .sort((a, b) => a.localeCompare(b))
    .map((filePath) => validateHtmlFile(filePath, distRoot));

  let totalErrors = 0;
  let totalWarnings = 0;

  for (const result of results) {
    const errors = result.findings.filter((finding) => finding.level === 'error');
    const warnings = result.findings.filter((finding) => finding.level === 'warning');
    totalErrors += errors.length;
    totalWarnings += warnings.length;

    console.log(`\nPage: ${result.relativePath}`);
    console.log(`JSON-LD blocks: ${result.blocks}`);
    console.log(`Detected types: ${result.types.join(', ')}`);
    console.log(`Errors: ${errors.length}`);
    console.log(`Warnings: ${warnings.length}`);

    errors.forEach((finding) => {
      console.log(`- ERROR ${finding.code}: ${finding.message} [${finding.path}]`);
    });

    warnings.forEach((finding) => {
      console.log(`- WARNING ${finding.code}: ${finding.message} [${finding.path}]`);
    });
  }

  if (totalErrors > 0) {
    console.error(`\nSchema validation failed with ${totalErrors} error(s).`);
    process.exit(2);
  }

  if (strict && totalWarnings > 0) {
    console.error(`\nSchema validation failed in strict mode with ${totalWarnings} warning(s).`);
    process.exit(3);
  }

  console.log('\nSchema validation passed for all HTML pages.');
}

main();
