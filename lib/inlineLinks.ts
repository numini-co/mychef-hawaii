/**
 * Lightweight inline-link markup for copy strings: `[anchor text](/path)`.
 * A target may name another host: `[Kauai catering](kauai:/catering)` or
 * `[Hawaii catering](root:/catering)`. Without a prefix the link stays on the
 * current host. Plain-text consumers (JSON-LD, meta) use `stripInlineLinks`.
 */
export const INLINE_LINK = /\[([^\]\n]+)\]\(((?:root|oahu|maui|kauai|bigisland):)?(\/[^)\s]*)\)/g;

export function stripInlineLinks(text: string): string {
  return text.replace(INLINE_LINK, '$1');
}

/** Deep-strip inline link markup from any JSON-serialisable value. */
export function stripInlineLinksDeep<T>(value: T): T {
  if (typeof value === 'string') return stripInlineLinks(value) as T;
  if (Array.isArray(value)) return value.map((v) => stripInlineLinksDeep(v)) as T;
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) out[k] = stripInlineLinksDeep(v);
    return out as T;
  }
  return value;
}
