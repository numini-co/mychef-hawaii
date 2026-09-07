#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SITES_DIR = join(ROOT, 'src/sites');
const TARGET = 1000;

function words(s) {
  return (s.match(/[A-Za-zĀ-žʻ''0-9$%–—-]+/g) || []).length;
}

function extractRecords(src) {
  const records = [];
  const slugRe = /slug:\s*'([^']*)'/g;
  const matches = [...src.matchAll(slugRe)];
  for (let i = 0; i < matches.length; i++) {
    const slug = matches[i][1];
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : src.length;
    const block = src.slice(start, end);
    const kw = [...block.matchAll(/'([^']{8,80})'/g)]
      .map((m) => m[1])
      .find((t) => /private chef|catering|wedding|stay chef|pricing|guide/i.test(t));
    const cat = (block.match(/category:\s*'([^']+)'/) || [])[1] || '?';
    records.push({ slug, category: cat, words: words(block), keyword: kw || '' });
  }
  return records;
}

const sites = [];
for (const siteId of readdirSync(SITES_DIR)) {
  const file = join(SITES_DIR, siteId, 'content.ts');
  if (!existsSync(file)) continue;
  const recs = extractRecords(readFileSync(file, 'utf8'));
  sites.push({ siteId, recs });
}

let total = 0;
let thin = 0;
const buckets = { under400: 0, w400: 0, w800: 0, w1000: 0, w1500: 0 };
for (const s of sites) {
  console.log(`\n=== ${s.siteId} (${s.recs.length} records) ===`);
  const sorted = [...s.recs].sort((a, b) => a.words - b.words);
  for (const r of s.recs) {
    total++;
    if (r.words < TARGET) thin++;
    if (r.words < 400) buckets.under400++;
    else if (r.words < 800) buckets.w400++;
    else if (r.words < 1000) buckets.w800++;
    else if (r.words < 1500) buckets.w1000++;
    else buckets.w1500++;
  }
  console.log('  thinnest 8:');
  for (const r of sorted.slice(0, 8)) {
    console.log(`    ${String(r.words).padStart(5)}w  ${r.category.padEnd(10)} ${r.slug || '(home)'}`);
  }
  const avg = Math.round(s.recs.reduce((n, r) => n + r.words, 0) / s.recs.length);
  const below = s.recs.filter((r) => r.words < TARGET).length;
  console.log(`  avg ${avg} words · ${below}/${s.recs.length} below ${TARGET}`);
}

console.log('\n=== NETWORK ===');
console.log(`records: ${total}`);
console.log(`<400: ${buckets.under400}`);
console.log(`400–799: ${buckets.w400}`);
console.log(`800–999: ${buckets.w800}`);
console.log(`1000–1499: ${buckets.w1000}`);
console.log(`1500+: ${buckets.w1500}`);
console.log(`below ${TARGET}: ${thin} (${Math.round((thin / total) * 100)}%)`);
