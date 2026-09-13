import { buildSitemapXml, SITEMAP_HEADERS } from '@/lib/sitemapXml';

/**
 * /sitemap.xml is rewritten here. Next.js rejects a folder named `sitemap.xml`
 * (same class of 500 as /sitemap-index.xml before it moved to /sitemap-index).
 */
export async function GET(request: Request) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || '';
  const body = await buildSitemapXml(host);
  return new Response(body, { status: 200, headers: SITEMAP_HEADERS });
}

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const maxDuration = 60;
