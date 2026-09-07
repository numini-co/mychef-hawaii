import type { ContentRecord } from '@/platform/types';
import { PageHeader, PageTail, SectionBody, SectionMedia } from './shared';
import { useSiteContent } from '../contentContext';
import { useSite } from '@/platform/IslandProvider';
import { useCrumbs } from './shared';
import SectionReveal from '@/components/SectionReveal';

/** ServicePage — 'core' and 'service' categories: split first section, then prose flow. */
export default function ServicePage({ record }: { record: ContentRecord }) {
  useSite();
  const crumbs = useCrumbs(record, useSiteContent());
  const [first, ...rest] = record.sections;
  return (
    <article>
      <div className="section-pad mx-auto max-w-6xl px-6">
        <PageHeader record={record} crumbs={crumbs} />
        {first ? (
          <div className="mt-14 grid items-start gap-10 md:grid-cols-2">
            <SectionBody section={first} index={0} />
            <SectionMedia section={first} />
          </div>
        ) : null}
        <div className="mt-16 space-y-16">
          {rest.map((s, i) => (
            <div key={s.id ?? s.heading ?? i} className={s.band ? 'band-site section-pad -mx-6 px-6' : ''}>
              {s.band ? (
                <div className="mx-auto max-w-6xl">
                  <SectionBody section={s} index={i + 1} />
                </div>
              ) : (
                <div className="grid items-start gap-10 md:grid-cols-2">
                  <SectionBody section={s} index={i + 1} />
                  <SectionMedia section={s} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <SectionReveal>
        <PageTail record={record} />
      </SectionReveal>
    </article>
  );
}
