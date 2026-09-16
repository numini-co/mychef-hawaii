import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { Longform, LongFaq } from '@/components/Longform';
import { CtaLink, QuoteCta } from '@/components/Cta';
import { whatsappHref } from '@/lib/whatsapp';
import { GET_LABEL } from '@/lib/estimate';
import { PRODUCTION_ROOT } from '@/lib/site';
import { islandOrder, islands } from '@/data/islands';
import {
  dayRates,
  mobileBarRates,
  otherOffers,
  STAFFING,
  formatDayRate,
  formatFrom,
  formatMobileBarPackage,
  formatMobileBarGuest,
  formatOtherOffer,
  getDayRate,
  getOtherOffer,
} from '@/data/rateCard';
import {
  IN_VILLA_AREAS,
  IN_VILLA_TRUST,
  getInVillaPage,
  inVillaChildren,
  type InVillaId,
  type InVillaPage,
  type RateBlockKind,
} from '@/data/inVillaServices';

const ORIGIN = `https://${PRODUCTION_ROOT}`;

interface RateRow {
  label: string;
  value: string;
  note?: string;
}

function rateBlockTitle(kind: RateBlockKind): string {
  switch (kind) {
    case 'stay-chef':
      return 'Stay Chef — chef + assistant, groceries at cost';
    case 'staffing':
      return 'Service staff — servers & lead hosts';
    case 'bar':
      return 'Bar service — hourly and packaged';
    case 'vacation-chef':
      return 'Vacation chef — per person, per day';
    case 'weekly-meal-prep':
      return 'Weekly meal prep';
  }
}

function rateBlockRows(kind: RateBlockKind): RateRow[] {
  switch (kind) {
    case 'stay-chef':
      return islandOrder.map((id) => ({
        label: islands[id].name,
        value: formatDayRate(id),
        note: getDayRate(id).model,
      }));
    case 'staffing':
      return [
        {
          label: 'Server',
          value: `${formatFrom(STAFFING.serverHourly)} / hour`,
          note: `${STAFFING.minimumHours}–5 hour minimum · statewide`,
        },
        {
          label: 'Sous-chef',
          value: `${formatFrom(STAFFING.sousHourly)} / hour`,
          note: `${STAFFING.minimumHours}–5 hour minimum · statewide`,
        },
      ];
    case 'bar':
      return islandOrder.map((id) => ({
        label: islands[id].name,
        value: formatMobileBarPackage(id),
        note: `${formatMobileBarGuest(id)} · ${islands[id].state === 'inquiry' ? 'inquiry-stage' : 'live'}`,
      }));
    case 'vacation-chef': {
      const offer = getOtherOffer('vacation-chef');
      return islandOrder.map((id) => ({
        label: islands[id].name,
        value: formatOtherOffer(offer, id),
        note: 'groceries at cost with receipts',
      }));
    }
    case 'weekly-meal-prep': {
      const offer = getOtherOffer('weekly-meal-prep');
      return islandOrder.map((id) => ({
        label: islands[id].name,
        value: formatOtherOffer(offer, id),
        note: 'groceries at cost with receipts',
      }));
    }
  }
}

/** Published offers → JSON-LD Offer nodes (numeric published rates only). */
function serviceOffers(page: InVillaPage) {
  const offers: Record<string, unknown>[] = [];
  for (const kind of page.rateBlocks) {
    if (kind === 'stay-chef') {
      for (const d of dayRates) {
        offers.push({
          '@type': 'Offer',
          name: `Stay Chef — ${islands[d.island].name}`,
          itemOffered: { '@type': 'Service', name: `Stay Chef — ${islands[d.island].name}`, serviceType: 'Stay Chef' },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: d.from,
            unitText: 'USD per day',
          },
        });
      }
    }
    if (kind === 'staffing') {
      offers.push({
        '@type': 'Offer',
        name: 'Villa service staff',
        itemOffered: { '@type': 'Service', name: 'Villa service staff', serviceType: 'Event staffing' },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: STAFFING.serverHourly,
          unitText: 'USD per hour',
        },
      });
    }
    if (kind === 'bar') {
      for (const b of mobileBarRates) {
        offers.push({
          '@type': 'Offer',
          name: `Villa bar — ${islands[b.island].name}`,
          itemOffered: { '@type': 'Service', name: `Villa bar — ${islands[b.island].name}`, serviceType: 'Bartending' },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: b.packageFrom,
            unitText: 'USD per 4-hour package',
          },
        });
      }
    }
    if (kind === 'vacation-chef') {
      const offer = otherOffers.find((o) => o.key === 'vacation-chef')!;
      for (const id of islandOrder) {
        offers.push({
          '@type': 'Offer',
          name: `Vacation chef — ${islands[id].name}`,
          itemOffered: { '@type': 'Service', name: `Vacation chef — ${islands[id].name}`, serviceType: 'Vacation chef' },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: offer.byIsland[id].from,
            unitText: 'USD per person per day',
          },
        });
      }
    }
  }
  return offers;
}

function areaPlaces() {
  return islandOrder.flatMap((id) => IN_VILLA_AREAS[id].map((name) => ({ '@type': 'Place', name })));
}

function RateBlocks({ page }: { page: InVillaPage }) {
  if (page.rateBlocks.length === 0 && !page.quoteOnlyNote) return null;
  return (
    <section className="border-t border-line bg-paper py-16 lg:py-20">
      <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
        <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-[1.15] text-ink">
          {page.rateHeading ?? 'Published rates'}
        </h2>
        {page.rateIntro ? (
          <p className="mt-5 text-[17px] leading-[1.7] text-mute">{page.rateIntro}</p>
        ) : null}

        {page.rateBlocks.map((kind) => (
          <div key={kind} className="mt-8">
            <p className="text-[13px] uppercase tracking-[0.1em] text-mute">{rateBlockTitle(kind)}</p>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {rateBlockRows(kind).map((row) => (
                <li key={row.label} className="flex items-start justify-between gap-4 py-4">
                  <span className="text-[15px] leading-6 text-ink">
                    {row.label}
                    {row.note ? <span className="mt-0.5 block text-[13px] text-mute">{row.note}</span> : null}
                  </span>
                  <span className="shrink-0 text-[15px] font-medium text-ink">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {page.quoteOnlyNote ? (
          <p className="mt-8 rounded-[2px] border border-line bg-paper px-4 py-4 text-[15px] leading-[1.7] text-mute">
            {page.quoteOnlyNote}
          </p>
        ) : null}

        <p className="mt-6 text-[13px] leading-5 text-mute">
          Published starting prices. A 20% service charge and Hawaiʻi GET up to {GET_LABEL} are added as their own lines.
          A 50% deposit locks the date. Gratuity is voluntary. The written quote is the total.
        </p>
      </div>
    </section>
  );
}

function RelatedBlock({ page }: { page: InVillaPage }) {
  return (
    <nav aria-label="Related services" className="border-t border-line bg-paper py-10">
      <div className="mx-auto flex w-full max-w-container flex-wrap gap-x-6 gap-y-2 px-5 text-sm lg:px-10">
        {page.related.map((r) => (
          <Link key={r.path} href={r.path} className="text-ink underline underline-offset-4">
            {r.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function ChildDirectory() {
  const kids = inVillaChildren();
  return (
    <section className="border-t border-line bg-paper py-16 lg:py-20">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-[1.15] text-ink">
          Build your team, role by role
        </h2>
        <p className="mt-5 max-w-[60ch] text-[17px] leading-[1.7] text-mute">
          Every role can be booked on its own or combined into one managed team. Open any service for its scope,
          published rates and questions.
        </p>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2">
          {kids.map((child) => (
            <li key={child.path} className="bg-paper">
              <Link href={child.path} className="block h-full px-5 py-5 hover:bg-paper/60">
                <p className="font-display text-[1.25rem] font-light text-ink">{child.breadcrumbName}</p>
                <p className="mt-1 text-[14px] leading-[1.5] text-mute">{child.lede.slice(0, 118)}…</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function InVillaServicesView({ id }: { id: InVillaId }) {
  const slug = id === 'hub' ? '' : id;
  const page = getInVillaPage(slug);
  if (!page) return null;
  const isHub = page.id === 'hub';
  const canonical = `${ORIGIN}${page.path}`;

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    serviceType: page.serviceType,
    url: canonical,
    provider: {
      '@type': 'Organization',
      name: 'myCHEF Hawaii',
      url: ORIGIN,
      parentOrganization: { '@type': 'Organization', name: 'myCHEF' },
    },
    areaServed: [{ '@type': 'Place', name: 'Hawaiʻi' }, ...areaPlaces()],
    description: page.lede,
    ...(serviceOffers(page).length
      ? {
          offers: {
            '@type': 'OfferCatalog',
            name: `${page.breadcrumbName} — published starting prices`,
            itemListElement: serviceOffers(page),
          },
        }
      : {}),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: 'In-Villa Services', item: `${ORIGIN}/in-villa-services` },
      ...(isHub
        ? []
        : [{ '@type': 'ListItem', position: 3, name: page.breadcrumbName, item: canonical }]),
    ],
  };

  const itemList = isHub
    ? {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'In-Villa Services',
        itemListElement: inVillaChildren().map((child, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: child.breadcrumbName,
          url: `${ORIGIN}${child.path}`,
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumb} />
      {itemList ? <JsonLd data={itemList} /> : null}

      <section className="border-b border-line bg-paper">
        <div className="mx-auto w-full max-w-container px-5 pb-10 pt-28 lg:px-10 lg:pb-14 lg:pt-32">
          <p className="text-[13px] text-mute">{page.kicker}</p>
          <LineReveal
            text={page.h1}
            className="mt-4 max-w-[24ch] font-display text-[clamp(2.25rem,5.5vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
          />
          <p className="mt-5 max-w-[58ch] text-[17px] leading-[1.6] text-ink">{page.lede}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <QuoteCta service={page.quoteService}>{page.primaryCtaLabel}</QuoteCta>
            <CtaLink href={whatsappHref(null, page.waIntent)} variant="secondary">
              WhatsApp us your dates
            </CtaLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-mute">
            {IN_VILLA_TRUST.map((chip) => (
              <li key={chip} className="flex items-center gap-2">
                <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-mute" />
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Longform sections={page.sections} />

      <RateBlocks page={page} />

      {isHub ? <ChildDirectory /> : null}

      <LongFaq items={page.faqs} title={isHub ? 'In-villa services, answered.' : `${page.breadcrumbName}, answered.`} />

      <RelatedBlock page={page} />
    </>
  );
}
