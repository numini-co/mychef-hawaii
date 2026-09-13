import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildSitemapIndexXml, buildSitemapXml } from '../lib/sitemapXml';

function assert(cond: unknown, msg: string): asserts cond {
  if (!cond) throw new Error(msg);
}

const HUB_MUST = [
  'https://mychef-hawaii.com/',
  'https://mychef-hawaii.com/pricing',
  'https://mychef-hawaii.com/quote',
  'https://mychef-hawaii.com/faq',
  'https://mychef-hawaii.com/trust',
  'https://mychef-hawaii.com/catering',
  'https://mychef-hawaii.com/weddings',
  'https://mychef-hawaii.com/about',
  'https://mychef-hawaii.com/private-chef-cost',
  'https://mychef-hawaii.com/vacation-chef',
  'https://mychef-hawaii.com/islands',
  'https://oahu.mychef-hawaii.com/',
  'https://maui.mychef-hawaii.com/',
  'https://kauai.mychef-hawaii.com/',
  'https://bigisland.mychef-hawaii.com/',
  'https://oahu.mychef-hawaii.com/pricing',
  'https://oahu.mychef-hawaii.com/quote',
  'https://maui.mychef-hawaii.com/pricing',
  'https://maui.mychef-hawaii.com/quote',
  'https://kauai.mychef-hawaii.com/pricing',
  'https://kauai.mychef-hawaii.com/quote',
  'https://bigisland.mychef-hawaii.com/pricing',
  'https://bigisland.mychef-hawaii.com/quote',
];

async function main() {
  const hub = await buildSitemapXml('mychef-hawaii.com');
  const kauai = await buildSitemapXml('kauai.mychef-hawaii.com');
  const idx = buildSitemapIndexXml();

  assert(hub.startsWith('<?xml') && hub.includes('<urlset'), 'hub not urlset');
  assert(kauai.includes('<urlset'), 'kauai not urlset');
  assert(idx.includes('<sitemapindex'), 'index missing');
  for (const loc of HUB_MUST) {
    assert(hub.includes(`<loc>${loc}</loc>`), `hub missing ${loc}`);
  }
  for (const loc of [
    'https://kauai.mychef-hawaii.com/',
    'https://kauai.mychef-hawaii.com/pricing',
    'https://kauai.mychef-hawaii.com/quote',
  ]) {
    assert(kauai.includes(`<loc>${loc}</loc>`), `kauai missing ${loc}`);
  }
  assert(idx.includes('https://oahu.mychef-hawaii.com/sitemap.xml'), 'index missing oahu child');
  assert(idx.includes('https://kauai.mychef-hawaii.com/sitemap.xml'), 'index missing kauai child');

  const publicHub = readFileSync(join(process.cwd(), 'public/sitemap.xml'), 'utf8');
  const publicIdx = readFileSync(join(process.cwd(), 'public/sitemap-index.xml'), 'utf8');
  assert(publicHub.includes('<urlset'), 'public/sitemap.xml missing');
  assert(publicIdx.includes('<sitemapindex'), 'public/sitemap-index.xml missing');

  console.log(
    `ok · hub ${(hub.match(/<loc>/g) || []).length} locs · kauai ${(kauai.match(/<loc>/g) || []).length} locs · index children ${(idx.match(/<loc>/g) || []).length}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
