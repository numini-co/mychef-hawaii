/**
 * Programmatic longform was removed after the 2026-09-09 audit
 * (broken variable soup + SERP notes leaking into customer-facing HTML).
 * expandRecord / mergeLongform are inert stubs so old imports cannot
 * reintroduce banned copy. Word-count helpers remain for offline scripts.
 */
import type { ContentRecord, ContentSection, FaqItem } from '@/platform/types';
import type { SiteId } from '@/platform/tokens';

export interface Longform {
  sections: ContentSection[];
  faq: FaqItem[];
}

function flatten(sections: ContentSection[], faq: FaqItem[], extra: string[]): string {
  const bits = [...extra];
  for (const s of sections) {
    if (s.heading) bits.push(s.heading);
    if (s.body) bits.push(...s.body);
    if (s.list) bits.push(...s.list);
  }
  for (const f of faq) bits.push(f.q, f.a);
  return bits.join(' ');
}

/** English tokens + Japanese characters/2 (approx. word equivalent). */
export function countWords(text: string): number {
  const ja = (text.match(/[\u3040-\u30ff\u4e00-\u9faf]/g) || []).length;
  const en = text.replace(/[\u3040-\u30ff\u4e00-\u9faf]/g, ' ').match(/[A-Za-z0-9$%ʻ''’–—-]+/g) || [];
  return en.length + Math.round(ja / 2);
}

export function authoredWords(record: ContentRecord): number {
  return countWords(
    flatten(record.sections, record.faq ?? [], [record.h1, record.intro ?? '', record.meta.description]),
  );
}

/** @deprecated Always empty — do not rebuild programmatic SEO soup. */
export function expandRecord(_record: ContentRecord, _siteId: SiteId): Longform {
  return { sections: [], faq: [] };
}

/** @deprecated Pass-through — longform merge disabled. */
export function mergeLongform(record: ContentRecord, _siteId: SiteId): ContentRecord {
  return record;
}

export function renderedWordCount(record: ContentRecord, _siteId: SiteId): number {
  return authoredWords(record);
}
