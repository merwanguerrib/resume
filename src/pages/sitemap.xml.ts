import type { APIRoute } from 'astro';
import { buildSitemapIndexXml } from '../lib/sitemap';

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];
  const xml = buildSitemapIndexXml(lastmod);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
};
