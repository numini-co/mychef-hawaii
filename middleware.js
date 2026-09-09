/**
 * Edge Middleware — runs BEFORE the static filesystem.
 *
 * Host-based vercel.json rewrites do NOT fire when index.html already exists.
 * Island hosts are rewritten here so crawlers get island HTML, not the hub shell.
 *
 * Uses Response headers (x-middleware-rewrite / x-middleware-next) so we do not
 * depend on @vercel/edge helpers that break the edge bundle.
 */
const ISLANDS = ['oahu', 'maui', 'kauai', 'bigisland'];

function pass() {
  return new Response(null, {
    headers: { 'x-middleware-next': '1' },
  });
}

function rewriteTo(destination) {
  return new Response(null, {
    headers: {
      'x-middleware-rewrite': typeof destination === 'string' ? destination : destination.toString(),
    },
  });
}

export default function middleware(request) {
  const url = new URL(request.url);
  const host = (request.headers.get('host') || '').toLowerCase().split(':')[0];

  // www → apex (all hosts)
  if (host.startsWith('www.')) {
    url.host = host.slice(4);
    return Response.redirect(url, 301);
  }

  const sub = host.split('.')[0];
  if (!ISLANDS.includes(sub)) {
    return pass();
  }

  const path = url.pathname;

  // Wrong-island paths → hard 404
  for (const other of ISLANDS) {
    if (other === sub) continue;
    if (path === `/${other}` || path.startsWith(`/${other}/`)) {
      return new Response('Not Found', {
        status: 404,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'x-robots-tag': 'noindex',
        },
      });
    }
  }

  // Already prefixed after rewrite destination
  if (path === `/${sub}` || path.startsWith(`/${sub}/`)) {
    return pass();
  }

  if (path === '/robots.txt') {
    return rewriteTo(new URL(`/robots-${sub}.txt`, request.url));
  }
  if (path === '/sitemap.xml') {
    return rewriteTo(new URL(`/_sitemaps/${sub}.xml`, request.url));
  }

  // Skip files with extensions
  const last = path.split('/').pop() || '';
  if (last.includes('.')) {
    return pass();
  }

  const destPath = path === '/' ? `/${sub}` : `/${sub}${path}`;
  return rewriteTo(new URL(destPath, request.url));
}
