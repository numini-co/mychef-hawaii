#!/usr/bin/env node
/**
 * Media census: how many images each route actually renders, whether it has a
 * hero, and how tall the page is relative to its imagery — so long pages
 * carrying a single photo (or none) are easy to spot.
 *
 * Usage: node scripts/audit-media.mjs [--all]
 */
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const ROOT = new URL('..', import.meta.url).pathname;
const BASE = process.env.BASE_URL || 'http://localhost:3001';
const args = new Set(process.argv.slice(2));

const xml = readFileSync(join(ROOT, 'public/sitemap.xml'), 'utf8');
const all = [...xml.matchAll(/<loc>https:\/\/mychef-hawaii\.com([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
const PATHS = args.has('--all') ? all : all.filter((_, i) => i % 12 === 0);

const CENSUS = () => {
  const main = document.querySelector('main') || document.body;
  const imgs = [...main.querySelectorAll('img')].map((i) => {
    const r = i.getBoundingClientRect();
    return { src: i.getAttribute('src') || '', h: Math.round(r.height), w: Math.round(r.width), alt: (i.getAttribute('alt') || '').length };
  }).filter((i) => i.w > 24 && i.h > 24);
  const first = imgs[0];
  return {
    pageHeight: document.documentElement.scrollHeight,
    imageCount: imgs.length,
    uniqueSrc: [...new Set(imgs.map((i) => i.src))].length,
    heroTall: first ? first.h : 0,
    srcs: [...new Set(imgs.map((i) => i.src))],
    missingAlt: imgs.filter((i) => !i.alt).length,
    inlineSvg: main.querySelectorAll('svg').length,
  };
};

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const rows = [];
let n = 0;
for (const path of PATHS) {
  if (++n % 50 === 0) process.stderr.write(`… ${n}/${PATHS.length}\n`);
  await page.goto(BASE + path, { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: '.reveal-site,.word-rise,[class*="reveal"]{opacity:1!important;transform:none!important;animation:none!important}' });
  await page.evaluate(async () => {
    const imgs = [...document.images];
    imgs.forEach((i) => { i.loading = 'eager'; });
    await Promise.all(imgs.filter((i) => !i.complete).map((i) => new Promise((r) => {
      i.addEventListener('load', r, { once: true });
      i.addEventListener('error', r, { once: true });
    })));
  });
  await page.waitForTimeout(150);
  rows.push({ path, ...(await page.evaluate(CENSUS)) });
}
await browser.close();

mkdirSync(join(ROOT, 'output/seo'), { recursive: true });
writeFileSync(join(ROOT, 'output/seo/media.json'), JSON.stringify(rows, null, 1));

const buckets = { none: 0, one: 0, two: 0, three_plus: 0 };
for (const r of rows) {
  if (r.uniqueSrc === 0) buckets.none++;
  else if (r.uniqueSrc === 1) buckets.one++;
  else if (r.uniqueSrc === 2) buckets.two++;
  else buckets.three_plus++;
}

console.log(`\n=== media census · ${rows.length} routes ===`);
console.log(` no images       ${buckets.none}`);
console.log(` one image       ${buckets.one}`);
console.log(` two images      ${buckets.two}`);
console.log(` three or more   ${buckets.three_plus}`);

const thin = rows.filter((r) => r.pageHeight > 4000 && r.uniqueSrc <= 1);
console.log(`\nlong pages (>4000px) carrying 0–1 images: ${thin.length}`);
for (const r of thin.slice(0, 15)) console.log(`  ${String(r.pageHeight).padStart(6)}px  ${String(r.uniqueSrc)} img  ${r.path}`);

const missingAlt = rows.reduce((a, r) => a + r.missingAlt, 0);
console.log(`\nimages missing alt text: ${missingAlt}`);
console.log(`distinct image files used across sampled routes: ${new Set(rows.flatMap((r) => r.srcs)).size}`);
