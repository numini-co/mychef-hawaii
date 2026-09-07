#!/usr/bin/env node
/** Diff Chapter 4 sitemap tables vs content.ts slugs. */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../..', import.meta.url).pathname;
const APP = join(ROOT, 'app');
const ch4 = readFileSync(join(ROOT, 'mychef-hawaii-discovery_sec04.md'), 'utf8');

function sectionFor(site) {
  const markers = {
    oahu: ['#### 4.2.1', '#### 4.2.2'],
    maui: ['#### 4.2.2', '#### 4.2.3'],
    kauai: ['#### 4.2.3', '#### 4.2.4'],
    bigisland: ['#### 4.2.4', '### 4.3'],
    hub: ['#### 4.3.1', '### 4.4'],
  };
  const [a, b] = markers[site];
  const i = ch4.indexOf(a);
  const j = ch4.indexOf(b, i + 1);
  return i >= 0 ? ch4.slice(i, j > 0 ? j : undefined) : '';
}

function urlsFrom(md) {
  const out = [];
  for (const m of md.matchAll(/\|\s*`(\/[^`]*)`\s*\|/g)) {
    const path = m[1].replace(/\/$/, '') || '/';
    out.push(path);
  }
  return [...new Set(out)];
}

function slugsFrom(siteId) {
  const file = join(APP, 'src/sites', siteId, 'content.ts');
  const slugs = new Set(['', 'quote']);
  if (existsSync(file)) {
    const src = readFileSync(file, 'utf8');
    for (const m of src.matchAll(/slug:\s*'([^']*)'/g)) slugs.add(m[1]);
  }
  return [...slugs].map((s) => (s ? `/${s}` : '/'));
}

const sites = ['oahu', 'maui', 'kauai', 'bigisland', 'hub'];
let missing = 0;
let extra = 0;
for (const site of sites) {
  const doc = urlsFrom(sectionFor(site));
  const live = slugsFrom(site);
  const docSet = new Set(doc);
  const liveSet = new Set(live);
  const miss = doc.filter((u) => !liveSet.has(u));
  const extras = live.filter((u) => !docSet.has(u));
  missing += miss.length;
  extra += extras.length;
  console.log(`\n=== ${site}  doc ${doc.length}  live ${live.length} ===`);
  if (miss.length) {
    console.log('  MISSING on site:');
    miss.forEach((u) => console.log('   -', u));
  }
  if (extras.length) {
    console.log('  EXTRA on site (not in Ch4 tables):');
    extras.forEach((u) => console.log('   +', u));
  }
  if (!miss.length && !extras.length) console.log('  exact match');
}
console.log(`\nmissing ${missing} · extra ${extra}`);
