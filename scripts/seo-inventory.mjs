#!/usr/bin/env node
/**
 * Builds the Page Master Table for the local site: every sitemap URL rendered
 * in a real browser, with the SEO fields a crawler would collect after JS runs.
 *
 * Output: output/seo/pages.json + pages.csv  (no network/API cost)
 * Usage: node scripts/seo-inventory.mjs [--limit=N]
 */
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const ROOT = new URL('..', import.meta.url).pathname;
const BASE = process.env.BASE_URL || 'http://localhost:3001';
const OUT = join(ROOT, 'output/seo');
const args = process.argv.slice(2);
const LIMIT = Number((args.find((a) => a.startsWith('--limit=')) || '').split('=')[1] || 0);

const xml = readFileSync(join(ROOT, 'public/sitemap.xml'), 'utf8');
let paths = [...xml.matchAll(/<loc>https:\/\/mychef-hawaii\.com([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
if (LIMIT) paths = paths.slice(0, LIMIT);

// The Chapter 4 brief is the site's existing keyword-ownership source of truth.
const ch4src = readFileSync(join(ROOT, 'src/platform/longform/chapter4.ts'), 'utf8');
const CH4 = {};
for (const m of ch4src.matchAll(/'([^']+)':\s*\{\s*keyword:\s*'([^']*)',\s*category:\s*'([^']*)',\s*notes:\s*'((?:[^'\\]|\\.)*)'/g)) {
  CH4[m[1]] = { keyword: m[2], category: m[3], notes: m[4].replace(/\\'/g, "'") };
}

const siteOf = (p) => {
  const seg = p.split('/')[1] || '';
  return ['oahu', 'maui', 'kauai', 'bigisland'].includes(seg) ? seg : 'hub';
};
const slugOf = (p, site) => (site === 'hub' ? p.replace(/^\//, '') : p.replace(`/${site}`, '').replace(/^\//, ''));

const EXTRACT = () => {
  const meta = (sel, attr = 'content') => document.querySelector(sel)?.getAttribute(attr) || '';
  const text = (el) => (el?.textContent || '').replace(/\s+/g, ' ').trim();
  const main = document.querySelector('main') || document.body;
  const body = text(main);
  const words = (body.replace(/[\u3040-\u30ff\u4e00-\u9faf]/g, ' ').match(/[A-Za-z0-9$%'’–—-]+/g) || []).length +
    Math.round((body.match(/[\u3040-\u30ff\u4e00-\u9faf]/g) || []).length / 2);

  const here = location.pathname;
  const links = [...main.querySelectorAll('a[href^="/"]')]
    .map((a) => ({ href: a.getAttribute('href').split('#')[0].replace(/\/$/, '') || '/', anchor: text(a).slice(0, 60) }))
    .filter((l) => l.href !== here);

  const schema = [...document.querySelectorAll('script[type="application/ld+json"]')]
    .flatMap((s) => {
      try {
        const j = JSON.parse(s.textContent);
        return (Array.isArray(j) ? j : [j]).map((x) => x['@type']).filter(Boolean);
      } catch {
        return [];
      }
    });

  return {
    title: document.title,
    title_len: document.title.length,
    meta_description: meta('meta[name="description"]'),
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
    robots: meta('meta[name="robots"]'),
    h1: [...main.querySelectorAll('h1')].map(text),
    h2: [...main.querySelectorAll('h2')].map(text),
    h3_count: main.querySelectorAll('h3').length,
    word_count: words,
    images: main.querySelectorAll('img').length,
    images_no_alt: [...main.querySelectorAll('img')].filter((i) => !i.getAttribute('alt')).length,
    schema,
    internal_links_out: links,
    hreflang: [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => l.getAttribute('hreflang')),
  };
};

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const pages = [];
let n = 0;
for (const path of paths) {
  if (++n % 50 === 0) process.stderr.write(`… ${n}/${paths.length}\n`);
  const res = await page.goto(BASE + path, { waitUntil: 'networkidle' });
  const data = await page.evaluate(EXTRACT);
  const site = siteOf(path);
  const slug = slugOf(path, site);
  const brief = CH4[`${site}:${slug}`];
  pages.push({
    url: path,
    domain: 'mychef-hawaii.com',
    section: site,
    slug,
    http_status: res?.status() ?? 0,
    assigned_keyword: brief?.keyword || '',
    category: brief?.category || '',
    brief_notes: brief?.notes || '',
    ...data,
  });
}
await browser.close();

// Inbound internal links, counted across the whole site.
const inbound = new Map();
for (const p of pages) for (const l of p.internal_links_out) inbound.set(l.href, (inbound.get(l.href) || 0) + 1);
for (const p of pages) {
  p.internal_links_in = inbound.get(p.url.replace(/\/$/, '') || '/') || 0;
  p.internal_links_out_count = p.internal_links_out.length;
}

writeFileSync(join(OUT, 'pages.json'), JSON.stringify(pages, null, 1));

const cols = [
  'url', 'section', 'slug', 'category', 'assigned_keyword', 'http_status', 'title', 'title_len',
  'meta_description', 'canonical', 'word_count', 'internal_links_in', 'internal_links_out_count',
  'images', 'images_no_alt',
];
const csv = [cols.join(',')]
  .concat(
    pages.map((p) =>
      cols.map((c) => {
        const v = Array.isArray(p[c]) ? p[c].join(' | ') : (p[c] ?? '');
        return `"${String(v).replace(/"/g, '""')}"`;
      }).join(','),
    ),
  )
  .join('\n');
writeFileSync(join(OUT, 'pages.csv'), csv);

console.log(`Page Master Table: ${pages.length} URLs → output/seo/pages.json + pages.csv`);
