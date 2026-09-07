import type { ContentRecord } from '@/platform/types';
import { useSite } from '@/platform/IslandProvider';
import { useSiteContent } from '../contentContext';
import { PageHeader, PageTail, SectionBody, SectionMedia, useCrumbs } from './shared';
import SectionReveal from '@/components/SectionReveal';

/** WeddingPage — the week as a stepped arc: list sections render as numbered steps. */
export default function WeddingPage({ record }: { record: ContentRecord }) {
  useSite();
  const crumbs = useCrumbs(record, useSiteContent());
  return (
    <article>
      <div className="section-pad mx-auto max-w-6xl px-6">
        <PageHeader record={record} crumbs={crumbs} eyebrow="Weddings" />
        <div className="mt-16 space-y-16">
          {record.sections.map((s, i) => (
            <SectionReveal key={s.id ?? s.heading ?? i} delay={Math.min(i, 4) * 60}>
              {s.band ? (
                <div className="band-site section-pad -mx-6 px-6">
                  <div className="mx-auto max-w-6xl">
                    <SectionBody section={s} index={i} />
                  </div>
                </div>
              ) : (
                <div className={`grid items-start gap-10 ${s.media ? 'md:grid-cols-2' : ''}`}>
                  <div>
                    {s.list?.length ? (
                      <>
                        {s.eyebrow ? <p className="eyebrow-site mb-3">{s.eyebrow}</p> : null}
                        {s.heading ? <h2 className="h2-site">{s.heading}</h2> : null}
                        <ol className="mt-6 space-y-4">
                          {s.list.map((item, j) => (
                            <li key={item} className="flex gap-4">
                              <span aria-hidden="true" className="font-display text-2xl text-accent-site">
                                {String(j + 1).padStart(2, '0')}
                              </span>
                              <span className="pt-1">{item}</span>
                            </li>
                          ))}
                        </ol>
                        {s.body?.map((p, k) => (
                          <p key={k} className="measure-site mt-4 text-ink-2">{p}</p>
                        ))}
                      </>
                    ) : (
                      <SectionBody section={s} index={i} />
                    )}
                  </div>
                  <SectionMedia section={s} />
                </div>
              )}
            </SectionReveal>
          ))}
        </div>
      </div>
      <PageTail record={record} />
    </article>
  );
}
