import { stripInlineLinksDeep } from '@/lib/inlineLinks';

/** Drop FAQPage blocks whose question list is empty — invalid structured data. */
function isEmptyFaq(block: unknown): boolean {
  if (!block || typeof block !== 'object') return false;
  const b = block as { '@type'?: unknown; mainEntity?: unknown };
  return b['@type'] === 'FAQPage' && Array.isArray(b.mainEntity) && b.mainEntity.length === 0;
}

export default function JsonLd({ data }: { data: unknown }) {
  const cleaned = Array.isArray(data) ? data.filter((d) => !isEmptyFaq(d)) : isEmptyFaq(data) ? null : data;
  if (cleaned === null || (Array.isArray(cleaned) && cleaned.length === 0)) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(stripInlineLinksDeep(cleaned)) }}
    />
  );
}
