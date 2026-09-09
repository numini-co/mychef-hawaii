/**
 * Edge Middleware — runs BEFORE the static filesystem.
 *
 * Critical: host-based vercel.json rewrites do NOT fire when index.html /
 * robots.txt already exist. Island hosts must be rewritten here so crawlers
 * get Oʻahu/Maui/… HTML instead of the hub shell.
 */
import { next, rewrite, redirect } from '@vercel/edge';

const ISLANDS = ['oahu', 'maui', 'kauai', 'bigisland'];

export default function middleware(request) {
  const url = new URL(request.url);
  const host = (request.headers.get('host') || '').toLowerCase().split(':')[0];

  // www → apex (all hosts)
  if (host.startsWith('www.')) {
    url.host = host.slice(4);
    return redirect(url, 301);
  }

  const sub = host.split('.')[0];
  if (!ISLANDS.includes(sub)) {
    return next();
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

  // Already prefixed (after a prior rewrite destination) — serve as-is
  if (path === `/${sub}` || path.startsWith(`/${sub}/`)) {
    return next();
  }

  // Static assets / known public files with extensions (except we handle robots/sitemap)
  if (path === '/robots.txt') {
    return rewrite(new URL(`/robots-${sub}.txt`, request.url));
  }
  if (path === '/sitemap.xml') {
    return rewrite(new URL(`/_sitemaps/${sub}.xml`, request.url));
  }

  // Skip files with extensions (assets, images, pdf, etc.)
  const last = path.split('/').pop() || '';
  if (last.includes('.')) {
    return next();
  }

  // Strip duplicate island prefix if client requested /oahu on oahu host → already handled above
  const destPath = path === '/' ? `/${sub}` : `/${sub}${path}`;
  return rewrite(new URL(destPath, request.url));
}
