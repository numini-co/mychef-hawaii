import type { ContentRecord } from '@/platform/types';
import { useSite } from '@/platform/IslandProvider';
import { useSiteContent } from '../contentContext';
import { PageHeader, PageTail, SectionBody, SectionMedia, useCrumbs } from './shared';

/** LocationPage — media-led hero frame, logistics lists, price excerpt. */
export default function LocationPage({ record }: { record: ContentRecord }) {
  useSite();
  const crumbs = useCrumbs(record, useSiteContent());
  const [hero, ...rest] = record.sections;
  return (
    <article>
      <div className="section-pad mx-auto max-w-6xl px-6">
        <PageHeader record={record} crumbs={crumbs} />
        {hero?.media ? (
          <div className="mt-12">
            <SectionMedia section={hero} />
            {hero.heading || hero.body ? (
              <div className="mt-10">
                <SectionBody section={hero} index={0} />
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {rest.map((s, i) => (
            <div key={s.id ?? s.heading ?? i} className={s.band ? 'band-site -mx-6 px-6 py-10 md:mx-0 md:px-8' : ''}>
              <SectionBody section={s} index={i + 1} />
            </div>
          ))}
        </div>
      </div>
      <PageTail record={record} />
    </article>
  );
}
