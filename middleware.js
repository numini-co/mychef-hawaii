/**
 * Edge Middleware — HTTP 404 for cross-island paths on island hosts
 * (audit Phase 3 §9). Must run before SPA rewrites.
 *
 * Example: kauai.mychef-hawaii.com/oahu/pricing → 404
 */
const ISLANDS = ['oahu', 'maui', 'kauai', 'bigisland'];

export default function middleware(request) {
  const host = (request.headers.get('host') || '').toLowerCase().split(':')[0];
  const sub = host.split('.')[0];
  if (!ISLANDS.includes(sub)) return;

  const { pathname } = new URL(request.url);
  for (const other of ISLANDS) {
    if (other === sub) continue;
    if (pathname === `/${other}` || pathname.startsWith(`/${other}/`)) {
      return new Response('Not Found', {
        status: 404,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'x-robots-tag': 'noindex',
        },
      });
    }
  }
}

export const config = {
  matcher: ['/((?!assets/|img/|videos/|api/|.*\\..*).*)'],
};
