import type { ContentRecord } from '@/platform/types';
import { useSite } from '@/platform/IslandProvider';
import { useSiteContent } from '../contentContext';
import { PageHeader, PageTail, SectionBody, SectionMedia, useCrumbs } from './shared';
import SectionReveal from '@/components/SectionReveal';

/** GuidePage — editorial / decision / comparison pages. */
export default function GuidePage({ record }: { record: ContentRecord }) {
  useSite();
  const crumbs = useCrumbs(record, useSiteContent());
  return (
    <article>
      <div className="section-pad mx-auto max-w-3xl px-6">
        <PageHeader record={record} crumbs={crumbs} eyebrow="Guides" />
        <div className="mt-12 space-y-12">
          {record.sections.map((s, i) => (
            <SectionReveal key={s.id ?? s.heading ?? i} delay={Math.min(i, 3) * 60}>
              {s.media ? (
                <div className="grid items-start gap-8 md:grid-cols-5">
                  <div className="md:col-span-3">
                    <SectionMedia section={s} />
                  </div>
                  <div className="md:col-span-2">
                    <SectionBody section={s} index={i} />
                  </div>
                </div>
              ) : (
                <SectionBody section={s} index={i} />
              )}
            </SectionReveal>
          ))}
        </div>
      </div>
      <PageTail record={record} />
    </article>
  );
}
