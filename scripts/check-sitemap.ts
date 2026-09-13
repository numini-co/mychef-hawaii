import { buildSitemapIndexXml, buildSitemapXml } from '../lib/sitemapXml';

function assert(cond: unknown, msg: string): asserts cond {
  if (!cond) throw new Error(msg);
}

async function main() {
  const hub = await buildSitemapXml('mychef-hawaii.com');
  const kauai = await buildSitemapXml('kauai.mychef-hawaii.com');
  const idx = buildSitemapIndexXml();

  assert(hub.startsWith('<?xml') && hub.includes('<urlset'), 'hub not urlset');
  assert(kauai.includes('<urlset'), 'kauai not urlset');
  assert(idx.includes('<sitemapindex'), 'index missing');
  assert(hub.includes('https://mychef-hawaii.com/pricing'), 'hub missing /pricing');
  assert(hub.includes('https://mychef-hawaii.com/quote'), 'hub missing /quote');
  assert(hub.includes('https://mychef-hawaii.com/trust'), 'hub missing /trust');
  assert(hub.includes('https://kauai.mychef-hawaii.com/'), 'hub missing kauai home');
  assert(idx.includes('https://oahu.mychef-hawaii.com/sitemap.xml'), 'index missing oahu child');
  assert(idx.includes('https://kauai.mychef-hawaii.com/sitemap.xml'), 'index missing kauai child');
  assert(kauai.includes('https://kauai.mychef-hawaii.com/'), 'kauai missing home');

  console.log(
    `ok · hub ${(hub.match(/<loc>/g) || []).length} locs · kauai ${(kauai.match(/<loc>/g) || []).length} locs · index children ${(idx.match(/<loc>/g) || []).length}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
