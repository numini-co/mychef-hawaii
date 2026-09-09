import type { FaqItem } from '@/platform/types';
import FAQAccordion from '@/components/FAQAccordion';

/**
 * Authored FAQ only — never interpolates page titles into sentences.
 * The old expandRecord longform ("What this page covers / Who books X in Y")
 * was removed after the 2026-09-09 site audit: it leaked SEO notes and
 * produced ungrammatical copy on trust-sensitive pages.
 */
export default function PageFaq({
  items,
  heading = 'Questions, answered',
}: {
  items?: FaqItem[];
  heading?: string;
}) {
  if (!items?.length) return null;
  return (
    <section className="mx-auto mt-12 max-w-3xl px-4 sm:mt-16 sm:px-6" aria-label="Frequently asked questions">
      <h2 className="h2-site mb-6">{heading}</h2>
      <FAQAccordion items={items} />
    </section>
  );
}
