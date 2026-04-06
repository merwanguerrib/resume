import { servicePageSlugs } from '../data/service-pages-data';

export const SITE_URL = 'https://merwanguerrib.com';

type Locale = 'en' | 'fr';

type SitemapEntry = {
  path: string;
  changefreq: 'weekly' | 'monthly';
  priority: string;
};

type StaticPathItem = {
  params?: Record<string, string | number | null | undefined>;
};

type PageModule = {
  getStaticPaths?: () => StaticPathItem[] | Promise<StaticPathItem[]>;
};

const PAGE_MODULES = import.meta.glob('../pages/**/*.{astro,md,mdx}', {
  eager: true,
}) as Record<string, PageModule>;

const EXCLUDED_PATHS = new Set([
  '/404/',
  '/sitemap/',
  '/sitemap.xml/',
  '/sitemap-en/',
  '/sitemap-en.xml/',
  '/sitemap-fr/',
  '/sitemap-fr.xml/',
]);

const DYNAMIC_ROUTE_EXPANDERS: Record<string, () => string[]> = {
  '/services/[slug]/': () => servicePageSlugs.map((slug) => `/services/${slug}/`),
  '/fr/services/[slug]/': () =>
    servicePageSlugs.map((slug) => `/fr/services/${slug}/`),
};

const escapeXml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const normalizePath = (value: string): string => {
  if (value === '') return '/';
  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`;
  if (withLeadingSlash === '/') return '/';
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
};

const fileToRoutePattern = (file: string): string => {
  const withoutPrefix = file.replace('../pages', '');
  const withoutExt = withoutPrefix.replace(/\.(astro|md|mdx)$/u, '');
  const withoutIndex = withoutExt.endsWith('/index')
    ? withoutExt.slice(0, -'/index'.length)
    : withoutExt;
  return normalizePath(withoutIndex);
};

const isDynamicSegment = (segment: string): boolean =>
  segment.startsWith('[') && segment.endsWith(']');

const getDynamicParamName = (segment: string): string => {
  if (segment.startsWith('[[...') && segment.endsWith(']]')) {
    return segment.slice('[[...'.length, -']]'.length);
  }
  if (segment.startsWith('[...') && segment.endsWith(']')) {
    return segment.slice('[...'.length, -']'.length);
  }
  return segment.slice(1, -1);
};

const isOptionalCatchAll = (segment: string): boolean =>
  segment.startsWith('[[...') && segment.endsWith(']]');

const routeFromPatternAndParams = (
  pattern: string,
  params: StaticPathItem['params']
): string | null => {
  const segments = pattern.split('/').filter(Boolean);
  const resolved: string[] = [];

  for (const segment of segments) {
    if (!isDynamicSegment(segment)) {
      resolved.push(segment);
      continue;
    }

    const paramName = getDynamicParamName(segment);
    const rawValue = params?.[paramName];

    if (rawValue == null || rawValue === '') {
      if (isOptionalCatchAll(segment)) continue;
      return null;
    }

    resolved.push(String(rawValue));
  }

  return normalizePath(resolved.join('/'));
};

const expandRoutePattern = (pattern: string): string[] => {
  if (!pattern.includes('[')) return [pattern];
  const expander = DYNAMIC_ROUTE_EXPANDERS[pattern];
  return expander ? expander() : [];
};

const isFrenchPath = (path: string): boolean => path === '/fr/' || path.startsWith('/fr/');

const getPageMetadata = (path: string): Omit<SitemapEntry, 'path'> => {
  if (path === '/' || path === '/fr/') {
    return { changefreq: 'weekly', priority: '1.0' };
  }
  return { changefreq: 'monthly', priority: '0.8' };
};

const collectAllPaths = async (): Promise<string[]> => {
  const paths = new Set<string>();

  for (const [file, pageModule] of Object.entries(PAGE_MODULES)) {
    const pattern = fileToRoutePattern(file);
    if (EXCLUDED_PATHS.has(pattern)) continue;

    if (!pattern.includes('[')) {
      paths.add(pattern);
      continue;
    }

    const dynamicPaths =
      typeof pageModule.getStaticPaths === 'function'
        ? await pageModule.getStaticPaths()
        : [];

    if (dynamicPaths.length > 0) {
      for (const dynamicPath of dynamicPaths) {
        const builtPath = routeFromPatternAndParams(pattern, dynamicPath.params);
        if (builtPath && !EXCLUDED_PATHS.has(builtPath)) paths.add(builtPath);
      }
      continue;
    }

    for (const fallbackPath of expandRoutePattern(pattern)) {
      if (!EXCLUDED_PATHS.has(fallbackPath)) paths.add(fallbackPath);
    }
  }

  return [...paths].sort((a, b) => a.localeCompare(b));
};

export const getSitemapEntries = async (locale: Locale): Promise<SitemapEntry[]> => {
  const allPaths = await collectAllPaths();
  const filtered = allPaths.filter((path) =>
    locale === 'fr' ? isFrenchPath(path) : !isFrenchPath(path)
  );

  return filtered.map((path) => ({
    path,
    ...getPageMetadata(path),
  }));
};

export const buildSitemapUrlSetXml = (
  entries: SitemapEntry[],
  lastmod: string
): string => {
  const urls = entries
    .map((entry) => {
      const loc = `${SITE_URL}${entry.path}`;
      return [
        '  <url>',
        `    <loc>${escapeXml(loc)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');
};

export const buildSitemapIndexXml = (lastmod: string): string => {
  const sitemapUrls = ['sitemap-en.xml', 'sitemap-fr.xml'].map(
    (name) => `${SITE_URL}/${name}`
  );

  const body = sitemapUrls
    .map((loc) =>
      [
        '  <sitemap>',
        `    <loc>${escapeXml(loc)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        '  </sitemap>',
      ].join('\n')
    )
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    body,
    '</sitemapindex>',
    '',
  ].join('\n');
};
