import { PRODUCTION_ROOT } from '@/lib/site';
import { ISLAND_SITEMAP_HOSTS, masterHostName, type MasterHost } from '@/data/commercialGraph';

function xmlEscape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function sitemapLoc(host: MasterHost): string {
  return `https://${masterHostName(host)}/sitemap.xml`;
}

/** Network sitemap index: hub sitemap plus each island host's sitemap. */
function sitemapIndexXml(): string {
  const hosts: MasterHost[] = ['hub', ...ISLAND_SITEMAP_HOSTS];
  const entries = hosts.map(
    (host) => `  <sitemap>
    <loc>${xmlEscape(sitemapLoc(host))}</loc>
  </sitemap>`,
  );
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</sitemapindex>
`;
}

/** Minimal valid index so the route never 500s, even if generation throws. */
function fallbackIndexXml(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://${PRODUCTION_ROOT}/sitemap.xml</loc>
  </sitemap>
</sitemapindex>
`;
}

export async function GET() {
  let body: string;
  try {
    body = sitemapIndexXml();
  } catch {
    body = fallbackIndexXml();
  }
  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

export const dynamic = 'force-dynamic';
