#!/usr/bin/env node
/**
 * Readability sweep.
 *
 * Pass 1 (DOM) finds text whose colour is close to its composited backdrop.
 * Pass 2 (pixels) re-checks every candidate against what is actually painted
 * behind it — so light text over a dark photo is not reported as a failure,
 * and light text over a light card still is.
 *
 * Also reports horizontal overflow and text clipped out of its own box.
 *
 * Usage: node scripts/audit-contrast.mjs [--all] [--mobile] [--shots]
 *   PLAYWRIGHT_MODULE=<path to a playwright install matching your browsers>
 */
import { createRequire } from 'node:module';
import { readFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const ROOT = new URL('..', import.meta.url).pathname;
const BASE = process.env.BASE_URL || 'http://localhost:3001';
const args = new Set(process.argv.slice(2));
const MOBILE = args.has('--mobile');
const SHOTS = args.has('--shots');
const SHOT_DIR = join(ROOT, 'output/readability');

function sitemapPaths() {
  const xml = readFileSync(join(ROOT, 'public/sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>https:\/\/mychef-hawaii\.com([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
}

const SAMPLE = [
  '/', '/islands', '/pricing', '/private-chef-cost', '/quote', '/guides', '/trust', '/villa-chef',
  '/oahu', '/oahu/pricing', '/oahu/private-chef', '/oahu/catering', '/oahu/weddings',
  '/oahu/locations/waikiki', '/oahu/services/date-night', '/oahu/ja',
  '/maui', '/maui/pricing', '/maui/private-chef', '/maui/catering', '/maui/weddings',
  '/maui/weddings/wedding-week', '/maui/locations/wailea',
  '/kauai', '/kauai/pricing', '/kauai/private-chef', '/kauai/catering', '/kauai/weddings',
  '/kauai/retreat-catering', '/kauai/locations/princeville',
  '/bigisland', '/bigisland/pricing', '/bigisland/private-chef', '/bigisland/catering',
  '/bigisland/weddings', '/bigisland/locations/kona',
];

const PATHS = process.env.AUDIT_PATHS
  ? process.env.AUDIT_PATHS.split(',')
  : args.has('--all')
    ? sitemapPaths()
    : SAMPLE;

/** Force every scroll-reveal into its final state so nothing reads as "ghosted". */
const SETTLE_CSS = `
  .reveal-site, .word-rise, [class*="reveal"] {
    opacity: 1 !important; transform: none !important;
    animation: none !important; transition: none !important;
  }`;

/** Pass 1: candidates + layout problems. Runs in the page. */
const COLLECT = () => {
  const parse = (c) => {
    const m = String(c).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(',').map(parseFloat);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const over = (fg, bg) => ({
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  });

  const candidates = [];
  const layout = [];
  let idx = 0;

  for (const el of document.querySelectorAll('body *')) {
    const direct = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1);
    if (!direct) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || parseFloat(cs.opacity) < 0.15) continue;
    // WCAG exempts disabled controls; sr-only text is never painted.
    if (el.closest('[disabled], [aria-disabled="true"], .sr-only')) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width < 4 || rect.height < 4) continue;

    const fg = parse(cs.color);
    if (!fg || fg.a === 0) continue;

    // Approximate backdrop only to composite semi-transparent text; the real
    // background comes from the pixel pass.
    let node = el.parentElement;
    let acc = null;
    while (node && !acc) {
      const c = parse(getComputedStyle(node).backgroundColor);
      if (c && c.a >= 1) acc = c;
      node = node.parentElement;
    }
    const eff = fg.a < 1 ? over(fg, acc || { r: 255, g: 255, b: 255, a: 1 }) : fg;

    const size = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight, 10) >= 700;
    el.setAttribute('data-audit-id', String(idx));
    candidates.push({
      id: idx++,
      tag: el.tagName.toLowerCase(),
      cls: String(el.getAttribute('class') || '').slice(0, 70),
      text: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60),
      color: `rgb(${Math.round(eff.r)}, ${Math.round(eff.g)}, ${Math.round(eff.b)})`,
      rgb: [eff.r, eff.g, eff.b],
      need: size >= 24 || (size >= 18.66 && bold) ? 3 : 4.5,
      rect: {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
        w: rect.width,
        h: rect.height,
      },
    });
  }

  const de = document.documentElement;
  if (de.scrollWidth > de.clientWidth + 1) {
    const wide = [];
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.right > de.clientWidth + 1 || r.left < -1)) {
        wide.push(`${el.tagName.toLowerCase()}.${String(el.getAttribute('class') || '').split(' ')[0]} [${Math.round(r.left)}→${Math.round(r.right)}]`);
      }
    }
    layout.push(`overflow-x: page ${de.scrollWidth}px > viewport ${de.clientWidth}px — ${wide.slice(0, 4).join(', ')}`);
  }

  for (const el of document.querySelectorAll('h1, h2, h3, p, li, a, button, td, th')) {
    if (el.classList.contains('sr-only')) continue;
    const cs = getComputedStyle(el);
    const clipped = cs.overflow === 'hidden' && !cs.webkitLineClamp.startsWith('2') && el.scrollHeight > el.clientHeight + 4;
    if (clipped) layout.push(`clipped <${el.tagName.toLowerCase()}>: “${(el.textContent || '').trim().slice(0, 44)}”`);
  }

  return { candidates, layout, title: document.title, height: de.scrollHeight };
};

const lum = (r, g, b) => {
  const f = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const contrast = (a, b) => {
  const l1 = lum(...a);
  const l2 = lum(...b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

const browser = await chromium.launch();
const viewport = MOBILE ? { width: 390, height: 844 } : { width: 1440, height: 900 };
const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
// Second page used purely to decode screenshots into pixel data.
const lab = await browser.newPage();
await lab.setContent('<body></body>');

if (SHOTS) mkdirSync(SHOT_DIR, { recursive: true });

let withIssues = 0;
let totalFails = 0;
const offenders = new Map();

let done = 0;
for (const path of PATHS) {
  if (++done % 25 === 0) process.stderr.write(`… ${done}/${PATHS.length} routes\n`);
  await page.goto(BASE + path, { waitUntil: 'networkidle' });
  // The dev server hot-reloads on file change; a reload mid-measure can swap
  // the theme between the DOM read and the screenshot. Wait until the page is
  // stable before collecting anything.
  await page.waitForFunction(() => document.readyState === 'complete');
  await page.addStyleTag({ content: SETTLE_CSS });
  // Lazy images below the fold load during the full-page capture and reflow the
  // document, so element rects would no longer line up with the screenshot.
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

  const { candidates, layout, title, height } = await page.evaluate(COLLECT);
  const best = new Map();

  if (candidates.length) {
    await page.evaluate(() => {
      const s = document.createElement('style');
      s.id = 'audit-blank';
      s.textContent = '[data-audit-id] { color: transparent !important; }';
      document.head.appendChild(s);
    });

    // Walk the page a viewport at a time. Full-page captures reflow the
    // document and paint fixed overlays out of place, so the only reliable
    // reading is the real viewport at a real scroll offset.
    for (let top = 0; top < height; top += viewport.height - 80) {
      const visible = await page.evaluate((y) => {
        window.scrollTo(0, y);
        const real = window.scrollY;
        // The nav and the rate bar legitimately cover content mid-scroll, so
        // only judge text sitting in the clear part of the viewport.
        const navH = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
        const barH = document.querySelector('.rate-bar-site')?.getBoundingClientRect().height ?? 0;
        return [...document.querySelectorAll('[data-audit-id]')]
          .map((el) => ({ id: +el.getAttribute('data-audit-id'), r: el.getBoundingClientRect() }))
          .filter(({ r }) => r.top >= navH + 2 && r.bottom <= window.innerHeight - barH - 2 && r.width > 3 && r.height > 3)
          .map(({ id, r }) => ({ id, x: r.left, y: r.top, w: r.width, h: r.height, scrollY: real }));
      }, top);
      if (!visible.length) continue;

      await page.waitForTimeout(60);
      const png = await page.screenshot();
      const read = await measure(png, visible);
      for (const b of read) {
        const c = candidates[b.id];
        if (!c || b.skip) continue;
        const cr = contrast(c.rgb, b.mid);
        const prev = best.get(b.id);
        if (!prev || cr > prev.cr) best.set(b.id, { cr, mid: b.mid, edge: Math.min(contrast(c.rgb, b.lo), contrast(c.rgb, b.hi)) });
      }
    }

    await page.evaluate(() => {
      document.getElementById('audit-blank')?.remove();
      window.scrollTo(0, 0);
    });
  }

  const fails = [];
  for (const c of candidates) {
    const b = best.get(c.id);
    if (!b) continue; // never fully clear of the nav/rate bar — nothing to judge
    if (b.cr < c.need) {
      fails.push({ ...c, cr: Math.round(b.cr * 100) / 100, mid: b.mid, edge: Math.round(b.edge * 100) / 100 });
    }
  }

  async function measure(png, rects) {
    return lab.evaluate(
      async ({ dataUrl, rects }) => {
        const bmp = await createImageBitmap(await (await fetch(dataUrl)).blob());
        const cv = new OffscreenCanvas(bmp.width, bmp.height);
        const ctx = cv.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(bmp, 0, 0);
        return rects.map(({ id, x, y, w, h }) => {
          const X = Math.max(0, Math.round(x));
          const Y = Math.max(0, Math.round(y));
          const W = Math.min(Math.round(w), bmp.width - X);
          const H = Math.min(Math.round(h), bmp.height - Y);
          if (W < 1 || H < 1) return { id, skip: true };
          const d = ctx.getImageData(X, Y, W, H).data;
          const rel = (r, g, b) => {
            const f = (v) => {
              v /= 255;
              return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
            };
            return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
          };
          // Judge against the median backdrop pixel. Extremes inside a text box
          // are usually its own underline, border or button edge, not the
          // surface the glyphs sit on.
          const px = [];
          const step = Math.max(1, Math.floor((W * H) / 5000));
          for (let p = 0; p < W * H; p += step) {
            const i = p * 4;
            px.push([rel(d[i], d[i + 1], d[i + 2]), d[i], d[i + 1], d[i + 2]]);
          }
          if (!px.length) return { id, skip: true };
          px.sort((a, b) => a[0] - b[0]);
          const at = (q) => px[Math.min(px.length - 1, Math.floor(px.length * q))].slice(1);
          return { id, mid: at(0.5), lo: at(0.1), hi: at(0.9) };
        });
      },
      { dataUrl: `data:image/png;base64,${png.toString('base64')}`, rects },
    );
  }

  if (fails.length || layout.length) {
    withIssues++;
    totalFails += fails.length;
    console.log(`\n${path}  — ${title.slice(0, 58)}`);
    for (const f of fails) {
      console.log(
        `  ${String(f.cr).padStart(5)} (need ${f.need}, worst ${f.edge})  <${f.tag} class="${f.cls}">  ${f.color} on rgb(${f.mid.join(',')})\n      “${f.text}”`,
      );
      const k = `${f.tag}.${f.cls.split(' ')[0]} ${f.color}`;
      offenders.set(k, (offenders.get(k) || 0) + 1);
    }
    for (const l of layout) console.log(`  ${l}`);
  }

  if (SHOTS) {
    const name = (path === '/' ? 'home' : path.slice(1).replace(/\//g, '_')) + (MOBILE ? '.m' : '') + '.png';
    await page.screenshot({ path: join(SHOT_DIR, name) });
  }
}

console.log(
  `\n=== ${PATHS.length} routes · ${withIssues} with issues · ${totalFails} unreadable elements (${MOBILE ? 'mobile 390px' : 'desktop 1440px'}) ===`,
);
if (offenders.size) {
  console.log('\nrepeat offenders:');
  [...offenders.entries()].sort((a, b) => b[1] - a[1]).slice(0, 20).forEach(([k, n]) => console.log(` ${String(n).padStart(4)}×  ${k}`));
}

await browser.close();
process.exit(totalFails ? 1 : 0);
