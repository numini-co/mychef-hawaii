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

/** Old island-host aliases. Returns the same array instance when nothing changes. */
function aliasIslandPath(segs: string[], island: (typeof ISLANDS)[number]): string[] {
  if (segs.length === 1 && segs[0] === 'wedding-catering') return ['weddings'];
  if (segs.length === 1 && (segs[0] === 'reviews' || segs[0] === 'reviews-policy')) return ['trust'];
  if (segs[0] === 'locations' && segs[1]) return CORRIDORS[island].includes(segs[1]) ? [segs[1]] : [];
  if (segs[0] === 'private-chef' && segs.length > 1) return ['private-chef'];
  return segs;
}

/** Old hub aliases. Returns the same array instance when nothing changes. */
function aliasHubPath(segs: string[]): string[] {
  if (segs.length === 1 && segs[0] === 'wedding-catering') return ['weddings'];
  if (segs.length === 1 && (segs[0] === 'reviews' || segs[0] === 'reviews-policy')) return ['trust'];
  return segs;
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

  // Legacy addresses resolve in ONE hop to the clean canonical URL:
  //   island host  /{same-island}/...  -> same host, prefix stripped
  //   hub (apex/www) /{island}/...      -> https://{island}.mychef-hawaii.com/...
  // then the old aliases (wedding-catering, reviews, locations/<slug>, private-chef/<x>)
  // are applied to the stripped path so prefix + alias never chain.
  {
    const segs = path.split('/').filter(Boolean);
    const hostLabel = firstLabel(host);
    const onIslandHost =
      isIsland(hostLabel) && (host.endsWith(`.${PRODUCTION_ROOT}`) || host.endsWith('.localhost'));
    const onHub = host === PRODUCTION_ROOT || host === `www.${PRODUCTION_ROOT}`;
    let target: (typeof ISLANDS)[number] | null = null;
    let rest = segs;
    let moved = false;
    if (onIslandHost && isIsland(hostLabel)) {
      target = hostLabel;
      if (segs[0] === hostLabel) {
        rest = segs.slice(1);
        moved = true;
      }
    } else if (onHub && segs[0] && isIsland(segs[0])) {
      target = segs[0];
      rest = segs.slice(1);
      moved = true;
    }
    const aliased = target ? aliasIslandPath(rest, target) : aliasHubPath(rest);
    if (moved || aliased !== rest) {
      const cleanPath = `/${aliased.join('/')}`;
      if (target && onHub) {
        const dest = new URL(cleanPath, `https://${target}.${PRODUCTION_ROOT}`);
        dest.search = url.search;
        return NextResponse.redirect(dest, 301);
      }
      const dest = url.clone();
      dest.pathname = cleanPath;
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

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-request-host', host);
  requestHeaders.set('x-pathname', path);
  if (url.search) requestHeaders.set('x-search', url.search);

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
