#!/usr/bin/env node
/**
 * prerender.mjs — Static Site Generation (SSG) / HTML Pre-Rendering for Vite build.
 *
 * Runs after `vite build`.
 * 1. Builds the SSR bundle via Vite SSR.
 * 2. Loads dist/index.html as template.
 * 3. Renders key commercial and landing routes to static HTML files in dist/.
 * 4. Injects rendered body into <div id="root">, ensuring crawlers (Google, Bing, AI bots)
 *    get full static HTML, headings, structured data, and content on initial GET.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = new URL('..', import.meta.url).pathname;
const DIST = join(ROOT, 'dist');
const TEMPLATE_PATH = join(DIST, 'index.html');

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

// Primary commercial routes that require 100% crawlable static pre-rendering
const CORE_ROUTES = [
  '/',
  '/pricing',
  '/multi-island-catering-hawaii',
  '/calculator',
  '/islands',
  '/quote',

  // Oʻahu Flagship commercial hierarchy & locations
  '/oahu',
  '/oahu/quote',
  '/oahu/private-chef',
  '/oahu/pricing',
  '/oahu/catering',
  '/oahu/weddings',
  '/oahu/locations/waikiki',
  '/oahu/locations/honolulu',
  '/oahu/locations/kahala-gold-coast',
  '/oahu/locations/ko-olina',
  '/oahu/locations/kailua-lanikai',
  '/oahu/locations/north-shore',
  '/oahu/locations/turtle-bay',
  '/oahu/locations/kapolei',
  '/oahu/locations/hawaii-kai',
  '/oahu/services/dinner-party-chef',
  '/oahu/services/stay-chef',
  '/oahu/services/wedding-catering',
  '/oahu/services/corporate-retreat',
  '/oahu/services/bbq-catering',
  '/oahu/services/birthday-catering',
  '/oahu/services/production-catering',

  // Maui Flagship
  '/maui',
  '/maui/pricing',
  '/maui/private-chef',
  '/maui/catering',
  '/maui/weddings',

  // Kauaʻi Flagship
  '/kauai',
  '/kauai/pricing',
  '/kauai/private-chef',
  '/kauai/catering',
  '/kauai/weddings',

  // Big Island Flagship
  '/bigisland',
  '/bigisland/pricing',
  '/bigisland/private-chef',
  '/bigisland/catering',
  '/bigisland/weddings',
];

// Deduplicate routes
const routes = [...new Set(CORE_ROUTES)];
console.log(`⚡ Pre-rendering ${routes.length} key commercial routes...`);

let successCount = 0;
for (const route of routes) {
  try {
    const { html: bodyHtml } = await render(route);

    let pageHtml = template;

    // 1. Extract page-specific SEO tags rendered by React and inject into <head>
    const titleMatch = bodyHtml.match(/<title[^>]*>(.*?)<\/title>/);
    if (titleMatch) {
      pageHtml = pageHtml.replace(/<title>.*?<\/title>/, `<title>${titleMatch[1]}</title>`);
    }

    const descMatch = bodyHtml.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/);
    if (descMatch) {
      pageHtml = pageHtml.replace(/<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/, `<meta name="description" content="${descMatch[1]}" />`);
    }

    const canonicalMatch = bodyHtml.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/);
    if (canonicalMatch) {
      // Remove any existing canonical in template and insert new
      pageHtml = pageHtml.replace(/<link\s+rel=["']canonical["'][^>]*\/?>/g, '');
      pageHtml = pageHtml.replace('</head>', `  <link rel="canonical" href="${canonicalMatch[1]}" />\n  </head>`);
    }

    const ogTitleMatch = bodyHtml.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/);
    if (ogTitleMatch) {
      pageHtml = pageHtml.replace(/<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/, `<meta property="og:title" content="${ogTitleMatch[1]}" />`);
    }

    const ogDescMatch = bodyHtml.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/);
    if (ogDescMatch) {
      pageHtml = pageHtml.replace(/<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/, `<meta property="og:description" content="${ogDescMatch[1]}" />`);
    }

    const ogImageMatch = bodyHtml.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/);
    if (ogImageMatch) {
      pageHtml = pageHtml.replace(/<meta\s+property=["']og:image["']\s+content=["'][^"']*["']\s*\/?>/g, '');
      pageHtml = pageHtml.replace('</head>', `  <meta property="og:image" content="${ogImageMatch[1]}" />\n  </head>`);
    }

    // 2. Inject body HTML into <div id="root">
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

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
