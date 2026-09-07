#!/usr/bin/env node
/** Capture named viewport shots: node scripts/shoot.mjs <path> <name> [scrollY] [w] [h] */
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const ROOT = new URL('..', import.meta.url).pathname;
const BASE = process.env.BASE_URL || 'http://localhost:3001';
const OUT = join(ROOT, 'output/readability');
mkdirSync(OUT, { recursive: true });

// shots: path|name|scrollY|width|height  (one per CLI arg)
const shots = process.argv.slice(2).map((a) => {
  const [path, name, y = '0', w = '1440', h = '900'] = a.split('|');
  return { path, name, y: Number(y), w: Number(w), h: Number(h) };
});

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.w, height: s.h } });
  await page.goto(BASE + s.path, { waitUntil: 'networkidle' });
  if (s.y === -1) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  } else if (s.y) {
    await page.evaluate((y) => window.scrollTo(0, y), s.y);
  }
  await page.waitForTimeout(500);
  const file = join(OUT, `${s.name}.png`);
  await page.screenshot({ path: file });
  console.log(file);
  await page.close();
}
await browser.close();
