#!/usr/bin/env node
/** Approximate rendered longform words from expand.ts source interpolation. */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const src = readFileSync(join(new URL('..', import.meta.url).pathname, 'src/platform/longform/expand.ts'), 'utf8');
const strings = [...src.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
const words = strings.join(' ').match(/[A-Za-z0-9$%]+/g) || [];
console.log(`template string words in expand.ts: ${words.length}`);
console.log('(per page interpolates a subset — typical render is ~1,100–1,400 words + authored copy)');
