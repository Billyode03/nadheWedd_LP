import type { APIRoute, GetStaticPaths } from 'astro';
import { SITE_URL } from '../config/site';

// robots.txt and sitemap.xml are only generated once SITE_URL is set.
export const getStaticPaths: GetStaticPaths = () =>
  SITE_URL ? [{ params: { seo: 'robots.txt' } }, { params: { seo: 'sitemap.xml' } }] : [];

export const GET: APIRoute = ({ params }) => {
  const home = new URL('/', SITE_URL).href;
  if (params.seo === 'robots.txt') {
    return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', SITE_URL).href}\n`, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${home}</loc></url>\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
