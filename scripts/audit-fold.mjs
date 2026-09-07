#!/usr/bin/env node
/**
 * Above-the-fold sell check. For every route, at desktop and mobile, asks the
 * only question that matters on first paint: does the visitor see what this is,
 * what it costs, and how to start — or just a photo?
 *
 * Reports pages where the H1, the supporting line, or the CTA falls below the
 * fold, and pages whose fold is mostly image.
 *
 * Usage: node scripts/audit-fold.mjs [--all] [--mobile]
 */
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const ROOT = new URL('..', import.meta.url).pathname;
const BASE = process.env.BASE_URL || 'http://localhost:3001';
const args = new Set(process.argv.slice(2));
const MOBILE = args.has('--mobile');

function sitemapPaths() {
  const xml = readFileSync(join(ROOT, 'public/sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>https:\/\/mychef-hawaii\.com([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
}

const SAMPLE = [
  '/', '/islands', '/pricing', '/quote', '/guides', '/trust', '/villa-chef',
  '/oahu', '/oahu/pricing', '/oahu/private-chef', '/oahu/catering', '/oahu/weddings', '/oahu/locations/waikiki',
  '/maui', '/maui/pricing', '/maui/private-chef', '/maui/catering', '/maui/weddings', '/maui/locations/wailea',
  '/kauai', '/kauai/pricing', '/kauai/private-chef', '/kauai/catering', '/kauai/weddings',
  '/bigisland', '/bigisland/pricing', '/bigisland/private-chef', '/bigisland/catering', '/bigisland/weddings',
  '/bigisland/locations/kona',
];

const PATHS = args.has('--all') ? sitemapPaths() : SAMPLE;

const FOLD = () => {
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const seen = (el) => {
    const r = el.getBoundingClientRect();
    return { top: Math.round(r.top), bottom: Math.round(r.bottom), h: Math.round(r.height), w: Math.round(r.width) };
  };
  const inFold = (r) => r.top < vh - 8 && r.bottom > 0;
  const main = document.querySelector('main') || document.body;

  const h1 = main.querySelector('h1');
  const h1r = h1 ? seen(h1) : null;

  // Everything here is scoped to <main>, so the site nav is already out. Only
  // the fixed rate bar needs excluding — a page's own <header> is the hero.
  let copyChars = 0;
  const skip = (el) => el.closest('.rate-bar-site');
  for (const el of main.querySelectorAll('h1, h2, p, li')) {
    if (skip(el)) continue;
    const r = seen(el);
    if (!inFold(r)) continue;
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (t) copyChars += Math.min(t.length, 220);
  }

  // A form in the fold is itself the call to action.
  const formInFold = [...main.querySelectorAll('form, fieldset')].some((el) => inFold(seen(el)));

  // Match on the CTA classes, not wording — labels vary by island and the
  // Japanese cluster has none of the English verbs.
  const ctas = [...main.querySelectorAll('.cta-site, .cta-secondary-site, a[href*="quote"], button[type="submit"]')]
    .filter((el) => !skip(el))
    .map((el) => ({ ...seen(el), txt: (el.textContent || '').trim().slice(0, 30) }))
    .filter((r) => inFold(r));

  // How much of the fold is a single image?
  let imgCover = 0;
  let heroImg = '';
  for (const img of main.querySelectorAll('img')) {
    const r = seen(img);
    if (!inFold(r)) continue;
    const vis = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0)) * Math.min(r.w, vw);
    if (vis > imgCover) {
      imgCover = vis;
      heroImg = img.getAttribute('src') || '';
    }
  }

  return {
    vh,
    h1Top: h1r ? h1r.top : null,
    h1Text: h1 ? (h1.textContent || '').trim().slice(0, 50) : '(no h1)',
    h1InFold: h1r ? h1r.top < vh - 8 : false,
    copyChars,
    ctaCount: ctas.length + (formInFold ? 1 : 0),
    firstCta: ctas[0]?.txt || '',
    imgFoldPct: Math.round((imgCover / (vh * vw)) * 100),
    heroImg,
  };
};

const browser = await chromium.launch();
const viewport = MOBILE ? { width: 390, height: 844 } : { width: 1440, height: 900 };
const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });

let bad = 0;
let n = 0;
const rows = [];

for (const path of PATHS) {
  if (++n % 50 === 0) process.stderr.write(`… ${n}/${PATHS.length}\n`);
  await page.goto(BASE + path, { waitUntil: 'networkidle' });
  await page.addStyleTag({
    content: '.reveal-site,.word-rise,[class*="reveal"]{opacity:1!important;transform:none!important;animation:none!important}',
  });
  await page.waitForTimeout(180);
  const f = await page.evaluate(FOLD);

  const problems = [];
  if (!f.h1InFold) problems.push(`H1 below fold (${f.h1Top}px vs ${f.vh}px)`);
  if (f.copyChars < 90) problems.push(`almost no copy in fold (${f.copyChars} chars)`);
  if (f.ctaCount === 0) problems.push('no CTA in fold');
  // A full-bleed photo is fine when the headline is laid over it; it is only a
  // problem when the image is all there is.
  if (f.imgFoldPct >= 85 && !(f.h1InFold && (f.copyChars >= 120 || f.ctaCount))) {
    problems.push(`fold is ${f.imgFoldPct}% one image`);
  }

  if (problems.length) {
    bad++;
    rows.push({ path, problems, f });
    console.log(`\n${path}`);
    console.log(`  ${problems.join(' · ')}`);
    console.log(`  h1 “${f.h1Text}” · copy ${f.copyChars}ch · CTA ${f.ctaCount}${f.firstCta ? ` (“${f.firstCta}”)` : ''} · image ${f.imgFoldPct}% ${f.heroImg}`);
  }
}

console.log(`\n=== ${PATHS.length} routes · ${bad} with a weak fold (${MOBILE ? 'mobile 390px' : 'desktop 1440px'}) ===`);
const byProblem = new Map();
for (const r of rows) for (const p of r.problems) {
  const k = p.replace(/\(.*\)/, '').trim();
  byProblem.set(k, (byProblem.get(k) || 0) + 1);
}
[...byProblem.entries()].sort((a, b) => b[1] - a[1]).forEach(([k, c]) => console.log(` ${String(c).padStart(4)}×  ${k}`));

await browser.close();
process.exit(bad ? 1 : 0);
