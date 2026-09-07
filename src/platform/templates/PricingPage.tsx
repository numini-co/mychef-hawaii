import type { ContentRecord } from '@/platform/types';
import { useSite } from '@/platform/IslandProvider';
import { useSiteContent } from '../contentContext';
import { PageHeader, PageTail, SectionBody, useCrumbs } from './shared';
import { RateTable } from '@/components/RateTable';
import FeeStack from '@/components/FeeStack';
import SectionReveal from '@/components/SectionReveal';

/** PricingPage — tariff-first: the rate table IS the hero, fee stack adjacent. */
export default function PricingPage({ record }: { record: ContentRecord }) {
  const { siteId } = useSite();
  const crumbs = useCrumbs(record, useSiteContent());
  return (
    <article>
      <div className="section-pad mx-auto max-w-4xl px-6">
        <PageHeader record={record} crumbs={crumbs} eyebrow="Published prices" />
        {record.priceTable ? (
          <SectionReveal className="mt-12">
            <RateTable
              rows={record.priceTable.rows}
              title={record.priceTable.title}
              footnote={record.priceTable.footnote}
            />
            <FeeStack className="mt-8" mono={siteId === 'bigisland'} />
          </SectionReveal>
        ) : null}
        <div className="mt-16 space-y-14">
          {record.sections.map((s, i) => (
            <SectionBody key={s.id ?? s.heading ?? i} section={s} index={i} />
          ))}
        </div>
      </div>
      <PageTail record={{ ...record, priceTable: undefined }} />
    </article>
  );
}
