#!/usr/bin/env node
/**
 * Empty-space sweep. Renders each route and reports:
 *   - images that failed to load or render at zero height
 *   - containers that reserve height but paint nothing
 *   - runs of flat, page-coloured pixel rows taller than --gap (default 260px),
 *     named by the sections above and below them
 *
 * Usage: node scripts/audit-gaps.mjs [--all] [--mobile] [--gap=260]
 */
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const ROOT = new URL('..', import.meta.url).pathname;
const BASE = process.env.BASE_URL || 'http://localhost:3001';
const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const MOBILE = has('--mobile');
/** Fixed threshold in px; 0 (the default) means "1.5× the site's section pad". */
const GAP = Number((args.find((a) => a.startsWith('--gap=')) || '').split('=')[1] || 0);

function sitemapPaths() {
  const xml = readFileSync(join(ROOT, 'public/sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>https:\/\/mychef-hawaii\.com([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
}

const SAMPLE = [
  '/', '/islands', '/pricing', '/private-chef-cost', '/quote', '/guides', '/trust', '/villa-chef',
  '/oahu', '/oahu/pricing', '/oahu/private-chef', '/oahu/catering', '/oahu/weddings',
  '/oahu/locations/waikiki', '/oahu/services/date-night', '/oahu/ja',
  '/maui', '/maui/pricing', '/maui/private-chef', '/maui/catering', '/maui/weddings',
  '/maui/locations/wailea',
  '/kauai', '/kauai/pricing', '/kauai/private-chef', '/kauai/catering', '/kauai/weddings',
  '/kauai/locations/princeville',
  '/bigisland', '/bigisland/pricing', '/bigisland/private-chef', '/bigisland/catering',
  '/bigisland/weddings', '/bigisland/locations/kona',
];

const PATHS = has('--all') ? sitemapPaths() : SAMPLE;

const SETTLE_CSS = `
  .reveal-site, .word-rise, [class*="reveal"] {
    opacity: 1 !important; transform: none !important;
    animation: none !important; transition: none !important;
  }`;

/** Broken images and height-reserving-but-empty containers. */
const DOM_HOLES = () => {
  const label = (el) => `${el.tagName.toLowerCase()}.${String(el.getAttribute('class') || '').split(' ').slice(0, 2).join('.')}`;

  const brokenImages = [...document.images]
    .filter((i) => {
      const r = i.getBoundingClientRect();
      return r.width > 0 && (i.naturalWidth === 0 || !i.complete || r.height < 2);
    })
    .map((i) => ({ src: i.getAttribute('src'), w: i.naturalWidth, h: Math.round(i.getBoundingClientRect().height) }));

  const MEDIA = ['IMG', 'SVG', 'VIDEO', 'CANVAS', 'PICTURE', 'IFRAME', 'HR', 'INPUT', 'SELECT', 'TEXTAREA'];
  const emptyBoxes = [];
  for (const el of document.querySelectorAll('main *')) {
    if (MEDIA.includes(el.tagName)) continue;
    const r = el.getBoundingClientRect();
    if (r.height < 120 || r.width < 40) continue;
    if ((el.textContent || '').trim().length) continue;
    if (el.querySelector('img, svg, video, canvas, picture, iframe')) continue;
    const cs = getComputedStyle(el);
    const painted =
      (cs.backgroundImage && cs.backgroundImage !== 'none') ||
      (cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)') ||
      cs.borderTopWidth !== '0px';
    if (painted) continue;
    // Skip wrappers whose only job is to hold a painted child.
    if ([...el.children].some((c) => c.getBoundingClientRect().height > 20)) continue;
    emptyBoxes.push({ el: label(el), h: Math.round(r.height), y: Math.round(r.top + window.scrollY) });
  }

  return { brokenImages, emptyBoxes, height: document.documentElement.scrollHeight, title: document.title };
};

/** Names the last thing above a document-Y and the first thing below it. */
const NEIGHBOURS = (gaps) => {
  const blocks = [];
  for (const el of document.querySelectorAll('main h1, main h2, main h3, main p, main img, main ul, main ol, main table, main section, main figure, main aside')) {
    const r = el.getBoundingClientRect();
    if (r.height < 8) continue;
    blocks.push({
      top: r.top + window.scrollY,
      bottom: r.bottom + window.scrollY,
      tag: el.tagName.toLowerCase(),
      cls: String(el.getAttribute('class') || '').split(' ').slice(0, 2).join('.'),
      text: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40),
    });
  }
  const name = (b) => `<${b.tag}${b.cls ? '.' + b.cls : ''}>${b.text ? ` “${b.text}”` : ''}`;
  return gaps.map((g) => {
    const above = blocks.filter((b) => b.bottom <= g.top + 4 && b.tag !== 'section').sort((a, b) => b.bottom - a.bottom)[0];
    const below = blocks.filter((b) => b.top >= g.bottom - 4 && b.tag !== 'section').sort((a, b) => a.top - b.top)[0];
    return { ...g, above: above ? name(above) : '(start)', below: below ? name(below) : '(end)' };
  });
};

const browser = await chromium.launch();
const viewport = MOBILE ? { width: 390, height: 844 } : { width: 1440, height: 900 };
const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
const lab = await browser.newPage();
await lab.setContent('<body></body>');

let flagged = 0;
let done = 0;

for (const path of PATHS) {
  if (++done % 25 === 0) process.stderr.write(`… ${done}/${PATHS.length} routes\n`);
  await page.goto(BASE + path, { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: SETTLE_CSS });
  await page.evaluate(async () => {
    const imgs = [...document.images];
    imgs.forEach((i) => {
      i.loading = 'eager';
    });
    await Promise.all(
      imgs.filter((i) => !i.complete).map((i) => new Promise((res) => {
        i.addEventListener('load', res, { once: true });
        i.addEventListener('error', res, { once: true });
      })),
    );
  });
  await page.waitForTimeout(250);

  const { brokenImages, emptyBoxes, title } = await page.evaluate(DOM_HOLES);

  // Each island sets its own section rhythm, so "too much space" is relative:
  // anything beyond 1.5 pads is wider than the page's own breathing room.
  const rhythm = await page.evaluate(() => {
    const w = document.querySelector('[data-site]');
    const v = w ? getComputedStyle(w).getPropertyValue('--site-section-pad-desktop').trim() : '';
    return { site: w?.getAttribute('data-site') || '?', pad: parseFloat(v) || 120 };
  });
  const minGap = GAP > 0 ? GAP : Math.round(rhythm.pad * 1.5);

  const png = await page.screenshot({ fullPage: true });

  const gaps = await lab.evaluate(
    async ({ dataUrl, minGap }) => {
      const bmp = await createImageBitmap(await (await fetch(dataUrl)).blob());
      const cv = new OffscreenCanvas(bmp.width, bmp.height);
      const ctx = cv.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(bmp, 0, 0);
      const d = ctx.getImageData(0, 0, bmp.width, bmp.height).data;

      const xs = [];
      for (let i = 0; i < 48; i++) xs.push(Math.floor((bmp.width - 1) * (i / 47)));

      const rowColour = [];
      for (let y = 0; y < bmp.height; y++) {
        let min = [255, 255, 255];
        let max = [0, 0, 0];
        for (const x of xs) {
          const i = (y * bmp.width + x) * 4;
          for (let c = 0; c < 3; c++) {
            if (d[i + c] < min[c]) min[c] = d[i + c];
            if (d[i + c] > max[c]) max[c] = d[i + c];
          }
        }
        const flat = max[0] - min[0] < 7 && max[1] - min[1] < 7 && max[2] - min[2] < 7;
        rowColour.push(flat ? min : null);
      }

      const out = [];
      let start = null;
      const same = (a, b) => a && b && Math.abs(a[0] - b[0]) < 7 && Math.abs(a[1] - b[1]) < 7 && Math.abs(a[2] - b[2]) < 7;
      for (let y = 0; y <= rowColour.length; y++) {
        if (start === null) {
          if (rowColour[y]) start = y;
        } else if (!rowColour[y] || !same(rowColour[y], rowColour[start])) {
          if (y - start >= minGap) out.push({ top: start, bottom: y, h: y - start, colour: rowColour[start] });
          start = rowColour[y] ? y : null;
        }
      }
      return out;
    },
    { dataUrl: `data:image/png;base64,${png.toString('base64')}`, minGap },
  );

  const named = gaps.length ? await page.evaluate(NEIGHBOURS, gaps) : [];

  if (brokenImages.length || emptyBoxes.length || named.length) {
    flagged++;
    console.log(`\n${path}  — ${title.slice(0, 56)}  [${rhythm.site}, pad ${rhythm.pad}px, flagging ≥ ${minGap}px]`);
    for (const b of brokenImages) console.log(`  BROKEN IMAGE  ${b.src}  (natural ${b.w}px, rendered ${b.h}px tall)`);
    for (const e of emptyBoxes) console.log(`  EMPTY BOX     ${e.el}  ${e.h}px tall at y=${e.y}`);
    for (const g of named) {
      console.log(`  GAP ${String(g.h).padStart(4)}px  y ${g.top}–${g.bottom}  rgb(${g.colour.join(',')})`);
      console.log(`      after  ${g.above}`);
      console.log(`      before ${g.below}`);
    }
  }
}

console.log(
  `\n=== ${PATHS.length} routes · ${flagged} with empty space (${MOBILE ? 'mobile 390px' : 'desktop 1440px'}, ${GAP ? `gap ≥ ${GAP}px` : 'gap ≥ 1.5× section pad'}) ===`,
);
await browser.close();
