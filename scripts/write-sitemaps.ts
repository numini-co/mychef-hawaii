/**
 * Build-time static sitemaps. Served from public/_sitemaps so /sitemap.xml
 * never hits an App Router function (RSC / bot UAs 500 on the dynamic route).
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildSitemapIndexXml, buildSitemapXml } from '../lib/sitemapXml';

const PUBLIC = join(process.cwd(), 'public');
const OUT = join(PUBLIC, '_sitemaps');

async function main() {
  mkdirSync(OUT, { recursive: true });

  const hub = await buildSitemapXml('mychef-hawaii.com');
  const index = buildSitemapIndexXml();
  writeFileSync(join(OUT, 'hub.xml'), hub);
  writeFileSync(join(PUBLIC, 'sitemap.xml'), hub);
  writeFileSync(join(OUT, 'index.xml'), index);
  writeFileSync(join(PUBLIC, 'sitemap-index.xml'), index);

  const counts: string[] = [`hub ${(hub.match(/<loc>/g) || []).length}`];
  for (const island of ['oahu', 'maui', 'kauai', 'bigisland'] as const) {
    const body = await buildSitemapXml(`${island}.mychef-hawaii.com`);
    writeFileSync(join(OUT, `${island}.xml`), body);
    counts.push(`${island} ${(body.match(/<loc>/g) || []).length}`);
  }

  console.log(`wrote static sitemaps · ${counts.join(' · ')} · index 5`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
