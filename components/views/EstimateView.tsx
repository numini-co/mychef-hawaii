import CostEstimator from '@/components/CostEstimator';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { QuoteCta } from '@/components/Cta';
import { DocumentCopy, LongFaq, SiblingCluster, type CopyFaq } from '@/components/Longform';
import { feeStack, FEE_DISCLOSURE } from '@/data/rateCard';
import { estimateStill } from '@/data/estimateStills';
import { islands, type IslandId } from '@/data/islands';
import { PRODUCTION_ROOT } from '@/lib/site';
import { islandHref } from '@/lib/paths';
import { GET_LABEL } from '@/lib/estimate';

function origin(islandId: IslandId | null): string {
  return islandId ? `https://${islandId}.${PRODUCTION_ROOT}` : `https://${PRODUCTION_ROOT}`;
}

const HUB_FAQS: CopyFaq[] = [
  {
    q: 'Is this estimate a quote?',
    a: 'No. It is a range built from our published starting prices. Your written quote — sent by a real coordinator — is the confirmed total, itemised line by line.',
  },
  {
    q: 'What is inside the per-guest dinner band?',
    a: 'For a signature dinner the band covers menu design, shopping, cooking, service and cleanup — and the groceries. That is why signature-dinner groceries are already in the estimated subtotal.',
  },
  {
    q: 'How do groceries work for Stay Chef or the weekly household line?',
    a: 'Differently, on purpose. There the chef fee is the published number, and groceries bill separately at cost with receipts — never marked up. The estimator shows that as an at-cost line outside the total.',
  },
  {
    q: 'What are the service charge and GET lines?',
    a: `A 20% service charge is market convention and is distributed to staff or disclosed in writing. Hawaiʻi GET is added at up to ${GET_LABEL} as its own line. Both are shown separately here and on the written quote.`,
  },
  {
    q: 'Why a range instead of one number?',
    a: 'Because the menu tier (entry through chef’s-table halo) and the guest count both move the figure. The estimate brackets it; the written quote fixes it once we know the kitchen and the menu.',
  },
  {
    q: 'Does the estimate include gratuity?',
    a: 'No. Gratuity is always voluntary and is never built into the bill or this estimate.',
  },
];

function islandFaqs(islandId: IslandId): CopyFaq[] {
  const island = islands[islandId];
  const inquiry = island.state === 'inquiry';
  return [
    {
      q: `Is this ${island.name} estimate a quote?`,
      a: `No. It is a range from ${island.name} published starting prices. ${
        inquiry
          ? `${island.name} is inquiry stage, so we confirm what we can staff — and the total — in writing.`
          : `The ${island.name} team sends a written quote that is the confirmed total.`
      }`,
    },
    {
      q: `What moves the ${island.name} number the most?`,
      a: 'The menu tier and the guest count for a dinner; the number of days for a Stay Chef week. The estimator lets you slide each and watch the range move.',
    },
    {
      q: 'Are groceries in the figure?',
      a: 'For a signature dinner, yes — they sit inside the per-guest band. For a Stay Chef week or the weekly household line, the chef fee is estimated here and groceries bill at cost with receipts.',
    },
    {
      q: `What is added on top on ${island.name}?`,
      a: `A 20% service charge and Hawaiʻi GET up to ${GET_LABEL}, each on its own line — plus a travel-zone fee only outside base zones, always published, never silent.`,
    },
    {
      q: 'Why not just show one price?',
      a: 'Because an honest number depends on the house, the menu and the count. The estimate brackets the night; the written quote is the total.',
    },
  ];
}

export default function EstimateView({
  islandId,
  hostMode,
}: {
  islandId: IslandId | null;
  hostMode: boolean;
}) {
  const island = islandId ? islands[islandId] : null;
  const still = estimateStill(islandId);
  const faqs = islandId ? islandFaqs(islandId) : HUB_FAQS;
  const base = origin(islandId);
  const href = (path: string) => islandHref(islandId, hostMode, path);

  const kicker = island ? `${island.shortName} · Cost estimator` : 'Four islands · Cost estimator';
  const h1 = island
    ? `${island.name} private chef cost estimator`
    : 'Hawaiʻi private chef cost estimator';
  const lede = island
    ? `Slide the menu tier, guests and days for ${island.name} and watch a range built straight from our published rate card. It is an estimate — the written quote is the total.`
    : 'Pick an island, a service and a guest count, and see a range built straight from our published rate card across Oʻahu, Maui, Kauaʻi and the Big Island. It is an estimate — the written quote is the total.';

  const webApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: h1,
    url: `${base}/estimate`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: lede,
    isPartOf: {
      '@type': 'WebSite',
      name: island ? `myCHEF ${island.name}` : 'myCHEF Hawaii',
      url: base,
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: island ? island.name : 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Cost estimator', item: `${base}/estimate` },
    ],
  };

  return (
    <>
      <JsonLd data={webApp} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumb} />

      <Hero src={still.file} alt={still.alt} min="short">
        <p className="text-[13px] text-mute">{kicker}</p>
        <LineReveal
          text={h1}
          className="mt-4 max-w-[22ch] font-display text-[clamp(2.25rem,5.5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.6] text-ink">{lede}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} variant="light" />
        </div>
      </Hero>

      <section className="bg-paper">
        <CostEstimator islandId={islandId} hostMode={hostMode} />
      </section>

      <section className="border-t border-line bg-paper py-16 lg:py-20">
        <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-[1.15] text-ink">
            Every line on the written quote
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-mute">
            The estimate above uses the same lines your quote will. Nothing is hidden; nothing is invented.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {feeStack.map((row) => (
              <li key={row.label} className="flex items-start justify-between gap-4 py-4">
                <span className="text-[15px] leading-6 text-ink">{row.label}</span>
                <span className="shrink-0 rounded-[2px] border border-line px-2 py-0.5 text-[11px] uppercase tracking-[0.1em] text-mute">
                  {row.chip}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] leading-5 text-mute">{FEE_DISCLOSURE}</p>
        </div>
      </section>

      <DocumentCopy
        heading="An estimate, not a booking price"
        paras={[
          'This tool exists because “how much does a private chef cost in Hawaiʻi” deserves a real answer, not a form. Every figure is pulled from the published rate card — the same card our coordinators quote from.',
          'Groceries follow two honest models. For a signature dinner, dinner for two, or a wedding reception, the food is inside the per-guest band, so the estimate already covers it. For a Stay Chef week or the weekly household line, the chef fee is the published number and groceries bill separately at cost, with receipts, never marked up.',
          'Two lines always sit on top: a 20% service charge and Hawaiʻi general excise tax, up to ' +
            GET_LABEL +
            ', each shown on its own line. A travel-zone fee applies only outside base zones and is always published. Gratuity stays voluntary. When you are ready, a written quote turns this range into one confirmed total.',
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={href('/pricing')} className="text-ink underline underline-offset-4">
            The published rate card
          </a>
          <a href={href('/private-chef-cost')} className="text-ink underline underline-offset-4">
            What the fee stack means
          </a>
          <a href={href('/quote')} className="text-ink underline underline-offset-4">
            Turn it into a written quote
          </a>
        </div>
      </DocumentCopy>

      <LongFaq items={faqs} title="Estimator questions." />
      <SiblingCluster island={islandId} href={href} />
    </>
  );
}
