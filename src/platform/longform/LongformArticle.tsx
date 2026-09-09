import { Link } from 'react-router';
import type { ContentRecord } from '@/platform/types';
import type { SiteId } from '@/platform/tokens';
import { useSite } from '@/platform/IslandProvider';
import { expandRecord } from './expand';
import { bodyShots } from '@/platform/media';
import FAQAccordion from '@/components/FAQAccordion';
import SectionReveal from '@/components/SectionReveal';

/** Keyword-led longform appended to every indexable page. */
export default function LongformArticle({ record }: { record: ContentRecord }) {
  const { siteId, link } = useSite();
  const extra = expandRecord(record, siteId as SiteId);
  // Cap supporting shots so pages don't fill with large empty-looking image cards.
  const shots = bodyShots(record, siteId as SiteId, 3);
  const resolve = (href: string) => (href.startsWith('/') ? href : link(href));
  // Place images after every other section (and once before FAQ), not after every block.
  const imageAfterSection = (i: number) => i % 2 === 1;

  return (
    <div className="longform-site mx-auto max-w-3xl px-4 sm:px-6">
      <div className="rule-t mt-12 space-y-10 pt-10 sm:mt-16 sm:space-y-12 sm:pt-14">
        {extra.sections.map((s, i) => {
          const shotIndex = Math.floor(i / 2);
          const shot = imageAfterSection(i) ? shots[shotIndex] : undefined;
          return (
          <div key={s.id ?? s.heading ?? i} className="space-y-8 sm:space-y-10">
            <SectionReveal as="section">
              {s.heading ? <h2 className="h2-site">{s.heading}</h2> : null}
              {s.body?.map((p) => (
                <p key={p.slice(0, 48)} className="measure-site mt-4 text-ink-2">
                  {p}
                </p>
              ))}
              {s.list?.length ? (
                <ul className="mt-5 space-y-2">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="text-accent-site">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {s.links?.length ? (
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {s.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link to={resolve(l.href)} className="link-site">
                        {l.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </SectionReveal>

            {shot ? (
              <SectionReveal as="div" className="overflow-hidden rounded-[var(--site-card-radius)] border border-line-site bg-card-site shadow-[var(--site-card-shadow)]">
                <figure className="m-0">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    decoding="async"
                    width={1536}
                    height={1024}
                    className="aspect-[3/2] h-auto w-full object-cover max-h-56 sm:max-h-64"
                  />
                  <figcaption className="px-4 py-2.5 text-xs text-ink-2">
                    {shot.alt}
                  </figcaption>
                </figure>
              </SectionReveal>
            ) : null}
          </div>
          );
        })}
      </div>
      {extra.faq.length ? (
        <section className="mt-12 sm:mt-16" aria-label="More questions">
          {shots[2] ? (
            <figure className="mb-10 overflow-hidden rounded-[var(--site-card-radius)] border border-line-site bg-card-site shadow-[var(--site-card-shadow)]">
              <img
                src={shots[2].src}
                alt={shots[2].alt}
                loading="lazy"
                decoding="async"
                width={1536}
                height={1024}
                className="aspect-[3/2] h-auto w-full object-cover max-h-56 sm:max-h-64"
              />
              <figcaption className="px-4 py-2.5 text-xs text-ink-2">
                {shots[2].alt}
              </figcaption>
            </figure>
          ) : null}
          <h2 className="h2-site mb-6">More questions about this page</h2>
          <FAQAccordion items={extra.faq} />
        </section>
      ) : null}
    </div>
  );
}
