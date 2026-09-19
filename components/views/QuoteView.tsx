import { Suspense } from 'react';
import QuoteForm from '@/components/QuoteForm';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import HubPhotoGrid from '@/components/HubPhotoGrid';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, Longform, SiblingCluster } from '@/components/Longform';
import { quoteTrustSections } from '@/data/longformHub';
import { hubMultiQuoteFaqs, hubQuoteVariants, type HubQuoteCopy } from '@/data/hubQuote';
import { islandQuote } from '@/data/islandQuote';
import { getHubDirectory } from '@/data/hubDirectories';
import { photos } from '@/data/photos';
import { islands, isInquiryIsland, type IslandId } from '@/data/islands';
import { islandHref } from '@/lib/paths';

const FIVE_FIELDS_FAQ = {
  q: 'The five fields.',
  a: 'Starting prices are published. Your written quote is the confirmed total.',
};

const ISLAND_QUOTE_DESKS: { id: IslandId; href: string }[] = [
  { id: 'oahu', href: 'https://oahu.mychef-hawaii.com/quote' },
  { id: 'maui', href: 'https://maui.mychef-hawaii.com/quote' },
  { id: 'kauai', href: 'https://kauai.mychef-hawaii.com/quote' },
  { id: 'bigisland', href: 'https://bigisland.mychef-hawaii.com/quote' },
];

export default function QuoteView({
  islandId,
  hostMode,
  variant = hubQuoteVariants.default,
}: {
  islandId: IslandId | null;
  hostMode: boolean;
  variant?: HubQuoteCopy;
}) {
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const copy = islandId ? islandQuote[islandId] : null;
  const photo = copy ? photos[copy.photo] : photos.quoteHub;
  const contact = getHubDirectory('/contact');
  const faq = getHubDirectory('/faq');
  const multi = variant.key === 'multi';
  const prefIsland = variant.key !== 'default' && variant.key !== 'multi' ? variant.key : null;
  const hubFaqs = multi
    ? hubMultiQuoteFaqs
    : [
        { q: quoteTrustSections[0].h2, a: quoteTrustSections[0].paras.join(' ') },
        { q: quoteTrustSections[1].h2, a: quoteTrustSections[1].paras.join(' ') },
        FIVE_FIELDS_FAQ,
      ];
  const h1 = copy?.h1 ?? variant.h1;
  const lede = copy?.lede ?? variant.lede;
  const kicker = copy?.kicker ?? variant.kicker;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: (copy ? copy.faqs : hubFaqs).map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">{kicker}</p>
        <LineReveal
          text={h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{lede}</p>
      </Hero>

      <section id="quote" className="bg-paper scroll-mt-20 pb-24 md:pb-0">
        <Suspense fallback={<div className="min-h-[60vh] bg-paper" />}>
          <QuoteForm
            hidePageHeading
            asidePhoto={photo}
            prefIsland={prefIsland ?? islandId}
            multiIsland={multi}
          />
        </Suspense>
      </section>

      {copy && islandId ? (
        <>
          <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
          <DocumentPhotoGrid
            islandId={islandId}
            eyebrow={`${islands[islandId].shortName} · Beside this form`}
            heading="Open a related document."
            intro="The five fields stay on this page. The desk, the rate card, the process, and getting started are their own URLs."
            columns={2}
            items={[
              { path: '/contact', label: 'The desk', detail: '/contact' },
              { path: '/pricing', label: 'What a night costs', detail: '/pricing' },
              { path: '/faq', label: 'FAQ', detail: '/faq' },
              { path: '/trust', label: 'What we will not claim', detail: '/trust' },
            ]}
          />
          <LongFaq items={copy.faqs} title="Before you send it." />
        </>
      ) : (
        <>
          <IslandDeskLinks selected={prefIsland} multi={multi} />
          <Longform sections={quoteTrustSections} />
          <HubPhotoGrid
            eyebrow="Beside this form"
            heading="Open a related document."
            intro="The five fields stay on this page. The desk, the rate card, the process, and the FAQ are their own URLs. Island forms stay on the island host."
            columns={2}
            items={[
              {
                href: '/contact',
                title: contact?.cardLabel ?? 'The desk',
                body: contact?.lede ?? 'Quotes and inquiry replies run in Hawaii Standard Time on the island host.',
                still: photos.menu,
              },
              {
                href: '/pricing',
                title: 'What a night costs',
                body: 'The published rate card. Distinct from the fee-stack explainer.',
                still: photos.plated,
              },
              {
                href: '/faq',
                title: faq?.cardLabel ?? 'Questions',
                body: faq?.lede ?? 'Booking questions live on the island host.',
                still: faq ? photos[faq.photo] : photos.hubFaq,
              },
              {
                href: '/trust',
                title: 'What we will not claim',
                body: 'Reviews we will not invent. Proof is published prices and a written quote.',
                still: photos.hubTrust,
              },
            ]}
          />
          {multi ? (
            <LongFaq
              items={hubMultiQuoteFaqs}
              kicker="Multi-island itinerary"
              title="One coordinator. Sequence the shores."
              contrast="aa"
            />
          ) : null}
        </>
      )}
      <SiblingCluster island={islandId} current="quote" href={href} />
    </>
  );
}

function IslandDeskLinks({ selected, multi }: { selected: IslandId | null; multi: boolean }) {
  return (
    <section className="border-t border-line bg-sand py-16 lg:py-20">
      <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
        <p className="text-[13px] text-mute">Prefer the island desk</p>
        <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-[1.15] text-ink">
          Open the island desk
        </h2>
        <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-mute">
          {multi
            ? 'One coordinator across islands lives on this hub form. Each island host still keeps its own quote or inquiry page when the house is already chosen.'
            : 'The Hawaii desk takes the same five fields. When you already know the island, the host form is the tighter document.'}
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ISLAND_QUOTE_DESKS.map(({ id, href: deskHref }) => {
            const inquiry = isInquiryIsland(id);
            const active = selected === id;
            return (
              <li key={id}>
                <a
                  href={deskHref}
                  className={`block border px-4 py-4 text-[15px] leading-snug rounded-[2px] ${
                    active ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink hover:border-ink'
                  }`}
                >
                  <span className="block font-medium">{islands[id].name}</span>
                  <span className={active ? 'text-paper/80' : 'text-mute'}>
                    {inquiry ? 'Inquiry form' : 'Quote form'}
                  </span>
                  <span className={`mt-2 block text-[12px] break-all ${active ? 'text-paper/70' : 'text-mute'}`}>
                    {deskHref}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
