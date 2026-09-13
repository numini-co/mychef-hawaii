import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { detectIslandFromHost } from '@/lib/site';
import { buildSitemapXml, SITEMAP_HEADERS } from '@/lib/sitemapXml';

/** Last-resort reader if a rewrite misses the static file. Always 200 XML. */
export async function GET(request: Request) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || '';
  const island = detectIslandFromHost(host);
  const name = island ? `${island}.xml` : 'hub.xml';
  try {
    const body = await readFile(join(process.cwd(), 'public', '_sitemaps', name), 'utf8');
    return new Response(body, { status: 200, headers: SITEMAP_HEADERS });
  } catch {
    const body = await buildSitemapXml(host);
    return new Response(body, { status: 200, headers: SITEMAP_HEADERS });
  }
}

export const dynamic = 'force-static';
export const runtime = 'nodejs';
