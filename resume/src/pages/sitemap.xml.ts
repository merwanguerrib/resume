import type { APIRoute } from 'astro';

const SITE_URL = 'https://merwanguerrib.com';

type Alternate = {
  hreflang: string;
  href: string;
};

type UrlEntry = {
  loc: string;
  alternates: Alternate[];
};

const urls: UrlEntry[] = [
  {
    loc: `${SITE_URL}/`,
    alternates: [
      { hreflang: 'en', href: `${SITE_URL}/` },
      { hreflang: 'fr', href: `${SITE_URL}/fr/` },
      { hreflang: 'x-default', href: `${SITE_URL}/` },
    ],
  },
  {
    loc: `${SITE_URL}/fr/`,
    alternates: [
      { hreflang: 'fr', href: `${SITE_URL}/fr/` },
      { hreflang: 'en', href: `${SITE_URL}/` },
      { hreflang: 'x-default', href: `${SITE_URL}/` },
    ],
  },
];

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
${entry.alternates
  .map(
    (alt) =>
      `    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}" />`
  )
  .join('\n')}
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
    },
  });
};
