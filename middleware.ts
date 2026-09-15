import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PRODUCTION_ROOT = 'mychef-hawaii.com';
const ISLANDS = ['oahu', 'maui', 'kauai', 'bigisland'] as const;

/** Live corridor slugs — must match `moneyNeighborhoods` in data/offers.ts. */
const CORRIDORS: Record<(typeof ISLANDS)[number], readonly string[]> = {
  oahu: ['honolulu', 'waikiki', 'kailua', 'north-shore', 'kahala', 'ko-olina'],
  maui: ['wailea', 'kaanapali', 'lahaina', 'kihei', 'kapalua', 'makena'],
  kauai: ['princeville', 'poipu', 'hanalei', 'kapaa'],
  bigisland: ['kona', 'waimea', 'waikoloa', 'kohala'],
};

function firstLabel(hostname: string): string {
  return hostname.split(':')[0]?.split('.')[0]?.toLowerCase() ?? '';
}

function isApexNetwork(hostname: string): boolean {
  const h = hostname.split(':')[0]?.toLowerCase() ?? '';
  return h === PRODUCTION_ROOT || h === `www.${PRODUCTION_ROOT}` || h.endsWith(`.${PRODUCTION_ROOT}`);
}

function isIsland(value: string): value is (typeof ISLANDS)[number] {
  return (ISLANDS as readonly string[]).includes(value);
}

function isStaticAsset(pathname: string): boolean {
  if (pathname.startsWith('/_next/')) return true;
  if (pathname.startsWith('/photos/')) return true;
  if (pathname.startsWith('/about/') && /\.[a-zA-Z0-9]+$/.test(pathname)) return true;
  if (pathname.startsWith('/api/')) return true;
  if (pathname === '/favicon.ico') return true;
  if (pathname === '/logo.svg') return true;
  return (
    /\.[a-zA-Z0-9]+$/.test(pathname) &&
    pathname !== '/sitemap.xml' &&
    pathname !== '/sitemap-index.xml' &&
    pathname !== '/robots.txt'
  );
}

function sitemapStaticPath(host: string, path: string): string | null {
  if (path === '/sitemap-index.xml' || path === '/_sitemaps/index.xml') return '/_sitemaps/index.xml';
  if (path === '/_sitemaps/hub.xml') return '/_sitemaps/hub.xml';
  const islandFile = path.match(/^\/_sitemaps\/(oahu|maui|kauai|bigisland)\.xml$/);
  if (islandFile) return path;
  if (path === '/sitemap.xml') {
    const label = firstLabel(host);
    if (isIsland(label) && (host.endsWith(`.${PRODUCTION_ROOT}`) || host.endsWith('.localhost'))) {
      return `/_sitemaps/${label}.xml`;
    }
    return '/_sitemaps/hub.xml';
  }
  return null;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '')
    .split(':')[0]
    .toLowerCase();
  const path = url.pathname;

  // Sitemaps are static CDN files. Never send them through App Router —
  // RSC / non-Googlebot UAs 500 on the dynamic /sitemap.xml route.
  const sitemapDest = sitemapStaticPath(host, path);
  if (sitemapDest) {
    const dest = url.clone();
    dest.pathname = sitemapDest;
    return NextResponse.rewrite(dest);
  }

  if (isStaticAsset(path)) return NextResponse.next();

  {
    const segs = path.split('/').filter(Boolean);
    if (segs.length === 1 && segs[0] === 'wedding-catering') {
      const dest = url.clone();
      dest.pathname = '/weddings';
      return NextResponse.redirect(dest, 301);
    }
    if (segs.length === 2 && isIsland(segs[0]) && segs[1] === 'wedding-catering') {
      const dest = url.clone();
      dest.pathname = `/${segs[0]}/weddings`;
      return NextResponse.redirect(dest, 301);
    }
    if (segs.length === 1 && (segs[0] === 'reviews' || segs[0] === 'reviews-policy')) {
      const dest = url.clone();
      dest.pathname = '/trust';
      return NextResponse.redirect(dest, 301);
    }
    if (segs.length === 2 && isIsland(segs[0]) && (segs[1] === 'reviews' || segs[1] === 'reviews-policy')) {
      const dest = url.clone();
      dest.pathname = `/${segs[0]}/trust`;
      return NextResponse.redirect(dest, 301);
    }
  }

  if (host === `www.${PRODUCTION_ROOT}`) {
    const dest = url.clone();
    dest.hostname = PRODUCTION_ROOT;
    dest.protocol = 'https:';
    dest.port = '';
    return NextResponse.redirect(dest, 308);
  }

  const label = firstLabel(host);
  if (host.endsWith(`.${PRODUCTION_ROOT}`) && host !== `www.${PRODUCTION_ROOT}`) {
    if (!isIsland(label)) {
      return new NextResponse('Unknown island department', { status: 404 });
    }
  }

  if (isApexNetwork(host) && (host === PRODUCTION_ROOT || host === `www.${PRODUCTION_ROOT}`)) {
    const seg = path.split('/').filter(Boolean)[0];
    if (seg && isIsland(seg)) {
      const rest = path.slice(seg.length + 1) || '/';
      const dest = new URL(rest.startsWith('/') ? rest : `/${rest}`, `https://${seg}.${PRODUCTION_ROOT}`);
      dest.search = url.search;
      return NextResponse.redirect(dest, 301);
    }
  }

  // Next rejects folders named `*.xml` (the live /sitemap.xml 500). Serve both
  // XML endpoints from undotted route handlers via internal rewrite.
  if (path === '/sitemap-index.xml' || path === '/sitemap-index') {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-request-host', host);
    requestHeaders.set('x-pathname', path);
    const rewriteUrl = url.clone();
    rewriteUrl.pathname = '/sitemap-index';
    return NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
  }
  if (path === '/sitemap.xml' || path === '/sitemap-xml') {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-request-host', host);
    requestHeaders.set('x-pathname', path);
    const rewriteUrl = url.clone();
    rewriteUrl.pathname = '/sitemap-xml';
    return NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
  }

  const islandHost =
    isIsland(label) && (host.endsWith(`.${PRODUCTION_ROOT}`) || host.endsWith('.localhost')) ? label : null;

  if (islandHost && isIsland(islandHost)) {
    const segs = path.split('/').filter(Boolean);
    const first = segs[0] ?? '';
    const corridors = CORRIDORS[islandHost];
    if (first === 'locations') {
      const slug = segs[1] ?? '';
      if (slug) {
        const dest = url.clone();
        dest.pathname = corridors.includes(slug) ? `/${slug}` : '/';
        return NextResponse.redirect(dest, 301);
      }
    }
    if (first === 'private-chef' && segs.length > 1) {
      const dest = url.clone();
      dest.pathname = '/private-chef';
      return NextResponse.redirect(dest, 301);
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-request-host', host);
  requestHeaders.set('x-pathname', path);

  if (islandHost && isIsland(islandHost)) {
    requestHeaders.set('x-island', islandHost);
    requestHeaders.set('x-host-mode', '1');
    if (
      path === '/sitemap.xml' ||
      path === '/sitemap-xml' ||
      path === '/sitemap-index.xml' ||
      path === '/sitemap-index' ||
      path === '/robots.txt'
    ) {
      return NextResponse.next({ request: { headers: requestHeaders } });
    }
    const alreadyPrefixed = path === `/${islandHost}` || path.startsWith(`/${islandHost}/`);
    if (!alreadyPrefixed) {
      const rewriteUrl = url.clone();
      rewriteUrl.pathname = path === '/' ? `/${islandHost}` : `/${islandHost}${path}`;
      return NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
    }
  } else {
    const seg = path.split('/').filter(Boolean)[0];
    if (seg && isIsland(seg)) {
      requestHeaders.set('x-island', seg);
      requestHeaders.set('x-host-mode', '0');
    }
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
