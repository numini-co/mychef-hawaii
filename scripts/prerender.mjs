#!/usr/bin/env node
/**
 * prerender.mjs — Static Site Generation (SSG) / HTML Pre-Rendering for Vite build.
 *
 * Runs after `vite build`.
 * 1. Builds the SSR bundle via Vite SSR.
 * 2. Loads dist/index.html as template.
 * 3. Dynamically discovers and renders all key commercial routes across all 5 sites.
 * 4. Injects extracted metadata (<title>, <meta>, canonical, og:*) cleanly into <head>.
 * 5. Cleans and formats body HTML with semantic newlines and indentation so that
 *    ALL crawlers (Googlebot, Bingbot, LLM crawlers, text-based scrapers) receive
 *    hundreds of well-formed, readable lines with full H1, prices, FAQs, and links.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = new URL('..', import.meta.url).pathname;
const DIST = join(ROOT, 'dist');
const TEMPLATE_PATH = join(DIST, 'index.html');
const SITES_DIR = join(ROOT, 'src/sites');

if (!existsSync(TEMPLATE_PATH)) {
  console.error('prerender.mjs: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = readFileSync(TEMPLATE_PATH, 'utf8');

console.log('⚡ Building SSR bundle with Vite...');
execSync('npx vite build --ssr src/entry-server.tsx --outDir dist-ssr', {
  cwd: ROOT,
  stdio: 'inherit',
});

const ssrEntryPath = join(ROOT, 'dist-ssr/entry-server.js');
const { render } = await import(`file://${ssrEntryPath}`);

// Dynamically collect key commercial routes from all sites
const BASE_MAP = { hub: '', oahu: '/oahu', maui: '/maui', kauai: '/kauai', bigisland: '/bigisland' };
const discoveredRoutes = new Set([
  '/',
  '/pricing',
  '/multi-island-catering-hawaii',
  '/calculator',
  '/islands',
  '/quote',
]);

for (const siteId of Object.keys(BASE_MAP)) {
  const base = BASE_MAP[siteId];
  if (!base) continue;
  discoveredRoutes.add(base);
  discoveredRoutes.add(`${base}/quote`);
  discoveredRoutes.add(`${base}/pricing`);
  discoveredRoutes.add(`${base}/private-chef`);
  discoveredRoutes.add(`${base}/stay-chef`);
  discoveredRoutes.add(`${base}/catering`);
  discoveredRoutes.add(`${base}/weddings`);
  if (siteId === 'oahu') {
    discoveredRoutes.add(`${base}/corporate`);
  }
  if (siteId === 'maui') {
    discoveredRoutes.add(`${base}/services/date-night`);
    discoveredRoutes.add(`${base}/weddings/wedding-week`);
  }
  if (siteId === 'kauai') {
    discoveredRoutes.add(`${base}/retreat-catering`);
  }

  const contentFile = join(SITES_DIR, siteId, 'content.ts');
  if (existsSync(contentFile)) {
    const src = readFileSync(contentFile, 'utf8');
    for (const m of src.matchAll(/slug:\s*'([^']*)'/g)) {
      const slug = m[1];
      // Include key commercial categories: core, service, pricing, wedding, locations
      if (
        slug.startsWith('locations/') ||
        slug.startsWith('services/') ||
        slug.startsWith('pricing/') ||
        slug.startsWith('menus/') ||
        slug.startsWith('weddings/') ||
        slug === 'private-chef' ||
        slug === 'catering' ||
        slug === 'weddings' ||
        slug === 'pricing'
      ) {
        discoveredRoutes.add(`${base}/${slug}`);
      }
    }
  }
}

const routes = [...discoveredRoutes];
console.log(`⚡ Pre-rendering ${routes.length} key commercial routes across all 5 sites...`);

let successCount = 0;
for (const route of routes) {
  try {
    const { html: rawBodyHtml } = await render(route);

    let pageHtml = template;
    let cleanBodyHtml = rawBodyHtml;

    // 1. Extract page-specific SEO tags rendered by React and inject into <head>
    const titleMatch = cleanBodyHtml.match(/<title[^>]*>(.*?)<\/title>/);
    if (titleMatch) {
      pageHtml = pageHtml.replace(/<title>.*?<\/title>/, `<title>${titleMatch[1]}</title>`);
      // Remove title from body
      cleanBodyHtml = cleanBodyHtml.replace(/<title[^>]*>.*?<\/title>/g, '');
    }

    const descMatch = cleanBodyHtml.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/);
    if (descMatch) {
      pageHtml = pageHtml.replace(
        /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/,
        `<meta name="description" content="${descMatch[1]}" />`
      );
      cleanBodyHtml = cleanBodyHtml.replace(/<meta[^>]*name=["']description["'][^>]*\/?>/g, '');
    }

    const canonicalMatch = cleanBodyHtml.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/);
    if (canonicalMatch) {
      pageHtml = pageHtml.replace(/<link\s+rel=["']canonical["'][^>]*\/?>/g, '');
      pageHtml = pageHtml.replace('</head>', `  <link rel="canonical" href="${canonicalMatch[1]}" />\n  </head>`);
      cleanBodyHtml = cleanBodyHtml.replace(/<link[^>]*rel=["']canonical["'][^>]*\/?>/g, '');
    }

    const ogTitleMatch = cleanBodyHtml.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/);
    if (ogTitleMatch) {
      pageHtml = pageHtml.replace(
        /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/,
        `<meta property="og:title" content="${ogTitleMatch[1]}" />`
      );
      cleanBodyHtml = cleanBodyHtml.replace(/<meta[^>]*property=["']og:title["'][^>]*\/?>/g, '');
    }

    const ogDescMatch = cleanBodyHtml.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/);
    if (ogDescMatch) {
      pageHtml = pageHtml.replace(
        /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/,
        `<meta property="og:description" content="${ogDescMatch[1]}" />`
      );
      cleanBodyHtml = cleanBodyHtml.replace(/<meta[^>]*property=["']og:description["'][^>]*\/?>/g, '');
    }

    const ogImageMatch = cleanBodyHtml.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/);
    if (ogImageMatch) {
      pageHtml = pageHtml.replace(/<meta\s+property=["']og:image["'][^>]*\/?>/g, '');
      pageHtml = pageHtml.replace('</head>', `  <meta property="og:image" content="${ogImageMatch[1]}" />\n  </head>`);
      cleanBodyHtml = cleanBodyHtml.replace(/<meta[^>]*property=["']og:image["'][^>]*\/?>/g, '');
    }

    // Clean any remaining meta tags from body
    cleanBodyHtml = cleanBodyHtml.replace(/<meta[^>]*property=["']og:type["'][^>]*\/?>/g, '');
    cleanBodyHtml = cleanBodyHtml.replace(/<meta[^>]*property=["']og:url["'][^>]*\/?>/g, '');

    // Strip out code-path attributes injected by debug tools
    cleanBodyHtml = cleanBodyHtml.replace(/\s*code-path="[^"]*"/g, '');

    // 2. Format HTML with clean semantic line breaks so crawlers can easily parse line by line
    cleanBodyHtml = cleanBodyHtml
      .replace(/<(header|nav|main|section|article|footer|h1|h2|h3|h4|p|ul|ol|li|details|summary|table|thead|tbody|tr|td|th|div|a|span|button|svg|form|label|input|select)\b/gi, '\n<$1')
      .replace(/<\/(header|nav|main|section|article|footer|h1|h2|h3|h4|p|ul|ol|li|details|summary|table|thead|tbody|tr|td|th|div|a|span|button|svg|form|label|input|select)>/gi, '</$1>\n')
      .replace(/\n\s*\n/g, '\n');

    // 3. Inject formatted body HTML into <div id="root">
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">\n${cleanBodyHtml}\n</div>`);

    // Clean up destination path
    let outFilePath;
    if (route === '/' || route === '') {
      outFilePath = join(DIST, 'index.html');
    } else {
      const cleanRoute = route.replace(/^\//, '');
      const outDir = join(DIST, cleanRoute);
      mkdirSync(outDir, { recursive: true });
      outFilePath = join(outDir, 'index.html');
    }

    writeFileSync(outFilePath, pageHtml, 'utf8');
    successCount++;
  } catch (err) {
    console.warn(`⚠️ Warning: Failed to prerender ${route}:`, err.message);
  }
}

console.log(`✅ Pre-rendered ${successCount}/${routes.length} routes into dist/`);

// Clean up dist-ssr
try {
  rmSync(join(ROOT, 'dist-ssr'), { recursive: true, force: true });
} catch {
  // ignore
}
