import type { ContentRecord } from '@/platform/types';
import { useSite } from '@/platform/IslandProvider';
import { useSiteContent } from '../contentContext';
import { PageHeader, PageTail, SectionBody, useCrumbs } from './shared';
import SectionReveal from '@/components/SectionReveal';

/** TrustPage — the policy-document register: ruled clauses, numbered where the copy numbers them. */
export default function TrustPage({ record }: { record: ContentRecord }) {
  useSite();
  const crumbs = useCrumbs(record, useSiteContent());
  return (
    <article>
      <div className="section-pad mx-auto max-w-3xl px-6">
        <PageHeader record={record} crumbs={crumbs} />
        <div className="mt-12">
          {record.sections.map((s, i) => (
            <SectionReveal
              key={s.id ?? s.heading ?? i}
              className={`py-8 ${i > 0 ? 'rule-t' : 'rule-y'}`}
            >
              <SectionBody section={s} index={i} />
            </SectionReveal>
          ))}
        </div>
      </div>
      <PageTail record={record} />
    </article>
  );
}
