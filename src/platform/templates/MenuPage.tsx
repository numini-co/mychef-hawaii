import type { ContentRecord } from '@/platform/types';
import { useSite } from '@/platform/IslandProvider';
import { useSiteContent } from '../contentContext';
import { PageHeader, PageTail, SectionLinks, useCrumbs } from './shared';
import SectionReveal from '@/components/SectionReveal';

/** MenuPage — sections render as course/menu cards: media, name, provenance prose. */
export default function MenuPage({ record }: { record: ContentRecord }) {
  useSite();
  const crumbs = useCrumbs(record, useSiteContent());
  return (
    <article>
      <div className="section-pad mx-auto max-w-6xl px-6">
        <PageHeader record={record} crumbs={crumbs} eyebrow="Menus" />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {record.sections.map((s, i) => (
            <SectionReveal key={s.id ?? s.heading ?? i} delay={(i % 3) * 80} className="card-site overflow-hidden">
              {s.media ? (
                <img
                  src={s.media.src}
                  alt={s.media.alt}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ aspectRatio: s.media.ratio ?? '3/2' }}
                />
              ) : null}
              <div className="p-6">
                {s.heading ? <h2 className="font-display text-2xl">{s.heading}</h2> : null}
                {s.body?.map((p, k) => (
                  <p key={k} className="mt-3 text-sm text-ink-2">{p}</p>
                ))}
                {s.list?.length ? (
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {s.list.map((item) => (
                      <li key={item} className="rule-t pt-1.5">{item}</li>
                    ))}
                  </ul>
                ) : null}
                <SectionLinks section={s} />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
      <PageTail record={record} />
    </article>
  );
}
