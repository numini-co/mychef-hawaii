import { PRODUCTION_ROOT, detectIslandFromHost } from '@/lib/site';
import {
  MASTER_MAP,
  masterHostName,
  ISLAND_SITEMAP_HOSTS,
  type MasterHost,
  type IslandSitemapHost,
} from '@/data/commercialGraph';
import { HUB_ALL_PICKER_PATHS } from '@/data/hubDirectories';

/** Key hub landing routes that must always be crawlable from the hub sitemap. */
export const HUB_KEY_PATHS = ['/pricing', '/estimate', '/islands', '/quote', '/trust'] as const;

type SitemapRow = { host: MasterHost; path: string; priority?: string };

function xmlEscape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function loc(host: MasterHost, path: string): string {
  const hostname = masterHostName(host);
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `https://${hostname}${clean === '/' ? '/' : clean}`;
}

function urlset(rows: SitemapRow[]): string {
  const seen = new Set<string>();
  const entries: string[] = [];
  for (const r of rows) {
    const href = loc(r.host, r.path);
    if (seen.has(href)) continue;
    seen.add(href);
    const priority =
      r.priority ??
      (r.path === '/' ? (r.host === 'hub' ? '1.0' : '0.9') : r.path === '/about' ? '0.6' : '0.8');
    const changefreq = r.path === '/' ? 'weekly' : 'monthly';
    entries.push(`  <url>
    <loc>${xmlEscape(href)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`);
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
}

function fallbackUrlset(): string {
  return urlset([{ host: 'hub', path: '/' }, ...HUB_KEY_PATHS.map((path) => ({ host: 'hub' as const, path }))]);
}

async function islandExtras(island: IslandSitemapHost): Promise<SitemapRow[]> {
  const { moneyNeighborhoods } = await import('@/data/offers');
  const { SUPPORT_PATHS } = await import('@/data/islandSupport');
  const { uniqueCells } = await import('@/data/uniqueCells');
  const { islandServices } = await import('@/data/islandServices');
  const { occasionPages } = await import('@/data/occasionPages');
  const { cateringFormats } = await import('@/data/cateringFormats');
  const { fineDiningPages } = await import('@/data/fineDining');
  const { staffingPages } = await import('@/data/staffingPages');
  const { menuSkuPages } = await import('@/data/menuSkus');
  const { helpArticles } = await import('@/data/helpArticles');
  const { journalArticles } = await import('@/data/journalArticles');
  const { blogArticles } = await import('@/data/blogArticles');

  const support = [
    ...SUPPORT_PATHS,
    '/estimate',
    '/about',
    '/events',
    '/mobile-bar',
    '/personal-chef',
    '/vacation-chef',
    '/legal',
    '/journal',
    '/blog',
    '/locations',
    '/areas',
    '/contact',
    '/trust',
    '/services',
    '/help',
    '/fine-dining',
    '/staffing',
    '/corporate',
    '/gatherings',
    '/islands',
    '/sitemap',
  ].map((path) => ({ host: island, path, priority: '0.6' }));

  const neighborhoods = moneyNeighborhoods[island].map((hood) => ({
    host: island,
    path: `/${hood.slug}`,
    priority: '0.7',
  }));

  const cells = [
    ...uniqueCells[island].map((cell) => ({ host: island, path: `/${cell.slug}`, priority: '0.55' })),
    ...islandServices[island]
      .filter((cell) => cell.slug !== 'personal-chef')
      .map((cell) => ({ host: island, path: `/${cell.slug}`, priority: '0.5' })),
    ...occasionPages[island].map((cell) => ({ host: island, path: `/events/${cell.slug}`, priority: '0.5' })),
    ...cateringFormats[island].map((cell) => ({ host: island, path: `/catering/${cell.slug}`, priority: '0.5' })),
    ...fineDiningPages[island].map((cell) => ({ host: island, path: `/fine-dining/${cell.slug}`, priority: '0.45' })),
    ...staffingPages[island].map((cell) => ({ host: island, path: `/staffing/${cell.slug}`, priority: '0.45' })),
    ...menuSkuPages[island].map((cell) => ({ host: island, path: `/menus/${cell.slug}`, priority: '0.45' })),
    ...helpArticles[island].map((cell) => ({ host: island, path: `/help/${cell.slug}`, priority: '0.4' })),
    ...journalArticles[island].map((cell) => ({ host: island, path: `/journal/${cell.slug}`, priority: '0.35' })),
    ...blogArticles[island].map((cell) => ({ host: island, path: `/blog/${cell.slug}`, priority: '0.35' })),
  ];

  return [...neighborhoods, ...support, ...cells];
}

function hubRows(): SitemapRow[] {
  return [
    ...HUB_KEY_PATHS.map((path) => ({ host: 'hub' as const, path, priority: '0.8' })),
    ...HUB_ALL_PICKER_PATHS.map((path) => ({ host: 'hub' as const, path, priority: '0.55' })),
  ];
}

/**
 * Production-shaped urlset.
 * Hub: money map + key hub URLs (pricing/quote/trust/…). Island extras stay on island sitemaps.
 * Island host: that island's money URLs + corridors + support/editorial cells.
 */
export async function buildSitemapXml(hostHeader: string): Promise<string> {
  try {
    const host = (hostHeader || PRODUCTION_ROOT).split(':')[0].toLowerCase();
    const island = detectIslandFromHost(host);
    if (island) {
      let extras: SitemapRow[] = [];
      try {
        extras = await islandExtras(island);
      } catch {
        extras = [];
      }
      return urlset([...MASTER_MAP.filter((r) => r.host === island), ...extras]);
    }
    return urlset([...MASTER_MAP, ...hubRows()]);
  } catch {
    return fallbackUrlset();
  }
}

export function buildSitemapIndexXml(): string {
  try {
    const hosts: MasterHost[] = ['hub', ...ISLAND_SITEMAP_HOSTS];
    const entries = hosts.map(
      (host) => `  <sitemap>
    <loc>${xmlEscape(`https://${masterHostName(host)}/sitemap.xml`)}</loc>
  </sitemap>`,
    );
    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</sitemapindex>
`;
  } catch {
    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://${PRODUCTION_ROOT}/sitemap.xml</loc>
  </sitemap>
</sitemapindex>
`;
  }
}

export const SITEMAP_HEADERS = {
  'content-type': 'application/xml; charset=utf-8',
  'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
} as const;
