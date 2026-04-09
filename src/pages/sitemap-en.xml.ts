import type { APIRoute } from 'astro';
import { buildSitemapUrlSetXml, getSitemapEntries } from '../lib/sitemap';

export const GET: APIRoute = async () => {
  const lastmod = new Date().toISOString().split('T')[0];
  const entries = await getSitemapEntries('en');
  const xml = buildSitemapUrlSetXml(entries, lastmod);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
};
