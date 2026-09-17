import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { buildSitemapIndexXml, SITEMAP_HEADERS } from '@/lib/sitemapXml';

/** Last-resort reader if /sitemap-index.xml misses the static file. Always 200 XML. */
export async function GET() {
  try {
    const body = await readFile(join(process.cwd(), 'public', '_sitemaps', 'index.xml'), 'utf8');
    return new Response(body, { status: 200, headers: SITEMAP_HEADERS });
  } catch {
    return new Response(buildSitemapIndexXml(), { status: 200, headers: SITEMAP_HEADERS });
  }
}

export const dynamic = 'force-static';
export const runtime = 'nodejs';
