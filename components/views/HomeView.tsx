import Link from 'next/link';
import { CtaLink } from '@/components/Cta';
import Eyebrow from '@/components/Eyebrow';
import Hero from '@/components/Hero';
import HostLink from '@/components/HostLink';
import IslandChooser from '@/components/IslandChooser';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, Longform } from '@/components/Longform';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import Reveal, { MaskReveal } from '@/components/Reveal';
import { hubChrome, heroFocal, processSteps } from '@/data/chromeCopy';
import { hubHomeFaqs, hubHomeSections } from '@/data/longformHub';
import { photos } from '@/data/photos';
import { DESK_EMAIL, DESK_PHONE_E164 } from '@/lib/contact';

const hubFaqs = [
  {
    q: 'Which islands do you cook?',
    a: 'Oʻahu, Maui, Kauaʻi and Hawaiʻi Island. Each island has published starting prices.',
  },
  {
    q: 'How much does a private chef cost in Hawaii?',
    a: 'Signature dinner from $195 a guest on Oʻahu, $225 on Maui and Kauaʻi, and $210 on Hawaiʻi Island. Stay Chef from $1,250 Oʻahu / $1,550 Maui / $1,650 Kauaʻi / $1,450 Hawaiʻi Island (inquiry). Service 20% and Hawaiʻi GET are added once on the written quote.',
  },
  {
    q: "What's included?",
    a: 'Signature and per-guest dinners include menu design, same-day shopping, cooking in your villa, table service, and a clean kitchen — groceries sit inside that published band. Stay Chef days bill groceries at cost with receipts. The two models are never blended. Drinks BYO or quoted. Bartender add-on lives on /bar.',
  },
  {
    q: 'Do you have Hawaii guest reviews?',
    a: 'Not yet — and we will not invent them. Proof here is published prices, sample menus, cleanup, and a written quote. See /trust.',
  },
  {
    q: 'Airbnb / vacation rental kitchens?',
    a: 'Yes, when there is a real cooktop. Hotel rooms without kitchens are declined.',
  },
];

const homeFaqItems = [...hubFaqs, ...hubHomeFaqs];

export default function HomeView() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'FoodService',
            name: 'Private chef Hawaii — myCHEF',
            description: hubChrome.lede,
            url: 'https://mychef-hawaii.com/',
            telephone: DESK_PHONE_E164,
            email: DESK_EMAIL,
            priceRange: '$195–$375',
            serviceType: 'Private chef and catering',
            areaServed: [
              { '@type': 'AdministrativeArea', name: 'Oʻahu' },
              { '@type': 'AdministrativeArea', name: 'Maui' },
              { '@type': 'AdministrativeArea', name: 'Kauaʻi' },
              { '@type': 'AdministrativeArea', name: 'Hawaiʻi Island' },
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'sales',
              telephone: DESK_PHONE_E164,
              email: DESK_EMAIL,
              areaServed: 'US-HI',
              availableLanguage: 'English',
            },
            parentOrganization: { '@type': 'Organization', name: 'myCHEF' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: homeFaqItems.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />

      <Hero src={photos.hubHero.file} alt={photos.hubHero.alt} objectPosition={heroFocal.hub}>
        <Eyebrow tone="paper">{hubChrome.kicker}</Eyebrow>
        <LineReveal
          text={hubChrome.h1}
          className="mt-6 font-display text-[clamp(2.5rem,6.4vw,4.75rem)] font-light leading-[1.02] tracking-[-0.02em] text-paper"
        />
        <p className="mt-6 max-w-[42ch] text-[17px] leading-[1.6] text-paper lg:text-[19px]">{hubChrome.lede}</p>
        <p className="mt-4 text-[15px] text-paper">{hubChrome.price}</p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <CtaLink href="#choose-island" variant="light">
            {hubChrome.oneIslandCta}
          </CtaLink>
          <CtaLink href="/quote?itinerary=multi" variant="ghost">
            {hubChrome.multiIslandCta}
          </CtaLink>
        </div>
        <p className="mt-4 max-w-[46ch] text-[14px] leading-relaxed text-paper/90">{hubChrome.ctaHelper}</p>
        <Link
          href="/pricing"
          className="mt-3 inline-block text-[14px] font-medium text-paper underline decoration-paper/60 underline-offset-[6px]"
        >
          {hubChrome.priceLinkLabel}
        </Link>
      </Hero>

      <section className="bg-paper py-20 lg:py-24">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <Eyebrow>Private chef & catering</Eyebrow>
          <h2 className="mt-3 max-w-[22ch] font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-light leading-[1.08] text-ink">
            {hubChrome.coresH2}
          </h2>
        </div>
        <div className="mx-auto mt-12 grid w-full max-w-spread gap-10 px-5 lg:grid-cols-2 lg:gap-14 lg:px-10">
          <Reveal>
            <Link href="/private-chef" className="group block">
              <MaskReveal>
                <div className="relative min-h-[44vh] overflow-hidden lg:min-h-[52vh]">
                  <Photo
                    src={photos.hubChef.file}
                    alt={photos.hubChef.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transform-none"
                  />
                </div>
              </MaskReveal>
              <p className="mt-6 font-display text-[1.375rem] font-light text-brass">01</p>
              <h3 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-ink">Private chef</h3>
              <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-mute">{hubChrome.chefLine}</p>
              <p className="mt-2 text-[15px] text-mute">{hubChrome.chefPrice}</p>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/catering" className="group block">
              <MaskReveal>
                <div className="relative min-h-[44vh] overflow-hidden lg:min-h-[52vh]">
                  <Photo
                    src={photos.cateringHero.file}
                    alt={photos.cateringHero.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transform-none"
                  />
                </div>
              </MaskReveal>
              <p className="mt-6 font-display text-[1.375rem] font-light text-brass">02</p>
              <h3 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-ink">Catering</h3>
              <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-mute">{hubChrome.cateringLine}</p>
              <p className="mt-2 text-[15px] text-mute">{hubChrome.cateringPrice}</p>
            </Link>
          </Reveal>
        </div>
      </section>

      <IslandChooser />

      <section className="bg-paper pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <div className="border-t border-line pt-12 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <div>
              <Eyebrow>Multi-island</Eyebrow>
              <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(1.625rem,3.2vw,2.5rem)] font-light leading-[1.1] text-ink">
                {hubChrome.multiH2}
              </h2>
              <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-mute">{hubChrome.multiLine}</p>
            </div>
            <div className="mt-8 lg:mt-0">
              <CtaLink href="/quote?itinerary=multi" variant="primary">
                {hubChrome.multiCta}
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-24">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-light leading-[1.08] text-ink">
            {hubChrome.howH2}
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.n}>
                <p className="font-display text-[1.75rem] font-light text-brass">{step.n}</p>
                <h3 className="mt-4 font-display text-[1.5rem] font-light text-ink">{step.title}</h3>
                <p className="mt-3 max-w-[32ch] text-[17px] leading-relaxed text-mute">{step.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-24">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <Eyebrow>Published prices</Eyebrow>
          <p className="mt-5 max-w-[28ch] font-display text-[clamp(1.75rem,3.6vw,2.85rem)] font-light leading-[1.08] text-ink">
            Signature dinner from $195 a guest on Oʻahu, $225 on Maui and Kauaʻi, and $210 on Hawaiʻi Island.
          </p>
          <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-mute">
            Stay Chef from $1,250 a day on Oʻahu, $1,550 on Maui, $1,650 on Kauaʻi, and $1,450 on Hawaiʻi Island
            (inquiry). Service 20% and Hawaiʻi GET up to 4.712% appear as separate lines on the written quote.
          </p>
          <nav
            aria-label="Island hosts, tariff, and corridor doors"
            className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm"
          >
            <HostLink island="oahu" path="/" className="text-ink underline decoration-brass underline-offset-[6px]">
              Oʻahu private chef
            </HostLink>
            <HostLink island="maui" path="/" className="text-ink underline decoration-brass underline-offset-[6px]">
              Maui villa weeks
            </HostLink>
            <HostLink island="kauai" path="/" className="text-ink underline decoration-brass underline-offset-[6px]">
              Kauaʻi inquiry
            </HostLink>
            <HostLink island="bigisland" path="/" className="text-ink underline decoration-brass underline-offset-[6px]">
              Hawaiʻi Island inquiry
            </HostLink>
            <Link href="/pricing" className="font-medium text-ink underline decoration-brass underline-offset-[6px]">
              The line-by-line card
            </Link>
            <Link href="/quote" className="text-ink underline decoration-brass underline-offset-[6px]">
              Request a written quote
            </Link>
            <HostLink island="maui" path="/wailea" className="text-ink underline decoration-brass underline-offset-[6px]">
              Wailea dinners
            </HostLink>
            <HostLink island="oahu" path="/kahala" className="text-ink underline decoration-brass underline-offset-[6px]">
              Kahala dining rooms
            </HostLink>
            <HostLink island="bigisland" path="/kona" className="text-ink underline decoration-brass underline-offset-[6px]">
              Kona west-side
            </HostLink>
          </nav>
        </div>
      </section>

      <Longform sections={hubHomeSections} />
      <LongFaq items={homeFaqItems} title="Cost, cleanup, kitchens." />
      <QuoteTeaser headline={hubChrome.closer} />
    </>
  );
}
