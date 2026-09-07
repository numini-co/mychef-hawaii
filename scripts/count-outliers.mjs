import { createServer } from 'vite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const vite = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { renderedWordCount } = await vite.ssrLoadModule('/src/platform/longform/expand.ts');
const sites = {
  hub: (await vite.ssrLoadModule('/src/sites/hub/content.ts')).content,
  oahu: (await vite.ssrLoadModule('/src/sites/oahu/content.ts')).content,
  maui: (await vite.ssrLoadModule('/src/sites/maui/content.ts')).content,
  kauai: (await vite.ssrLoadModule('/src/sites/kauai/content.ts')).content,
  bigisland: (await vite.ssrLoadModule('/src/sites/bigisland/content.ts')).content,
};
for (const [id, recs] of Object.entries(sites)) {
  for (const r of recs) {
    const n = renderedWordCount(r, id);
    if (n < 1000 || n > 1600) console.log(n, `${id}/${r.slug || '(home)'}`);
  }
}
await vite.close();
