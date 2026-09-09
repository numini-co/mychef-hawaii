import type { ContentRecord } from '@/platform/types';
import PageFaq from '@/components/PageFaq';

/**
 * @deprecated The programmatic SEO longform block was removed (audit 2026-09-09).
 * This shim only renders hand-authored FAQ from the content record.
 */
export default function LongformArticle({ record }: { record: ContentRecord }) {
  return <PageFaq items={record.faq} heading="More questions about this page" />;
}
