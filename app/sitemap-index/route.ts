import { buildSitemapIndexXml, SITEMAP_HEADERS } from '@/lib/sitemapXml';

/** Network sitemap index: hub sitemap plus each island host's sitemap. */
export async function GET() {
  return new Response(buildSitemapIndexXml(), { status: 200, headers: SITEMAP_HEADERS });
}

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
