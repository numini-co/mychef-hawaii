/**
 * Hub homepage — the statewide desk.
 * This is the main site: pick an island, or book the whole itinerary.
 */
import { Link } from 'react-router';
import { Seo, organizationLd, foodServiceLd, faqLd } from '@/platform/seo';
import { ISLAND_IDS, SITE_META } from '@/platform/tokens';
import { CONTACT, RATES, TRUST_CLAIMS } from '@/platform/config';
import IslandMark from '@/components/IslandMark';
import FeeStack from '@/components/FeeStack';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import VideoHero from '@/components/VideoHero';

const H1 = 'One desk. Four islands. Every table.';

const OFFER: Array<{
  to: string;
  img: string;
  video?: string;
  alt: string;
  label: string;
  line: string;
  price: string;
}> = [
  {
    to: '/private-chef',
    img: '/img/hub/service-private-chef.webp',
    video: '/videos/hub/service-private-chef.mp4',
    alt: 'Our chef finishing a seared Hawaiian catch course in a private villa kitchen for a family dinner',
    label: 'Private chef',
    line: 'One evening in the house. Groceries inside the band. The kitchen left as we found it.',
    price: '$125–$250 a guest',
  },
  {
    to: '/stay-chef',
    img: '/img/hub/service-stay-chef.webp',
    alt: 'Our Stay Chef preparing a fresh tropical breakfast in the villa kitchen during a family week',
    label: 'Stay Chef',
    line: 'The same chef through the stay — breakfast through dinner, kids’ plates included.',
    price: 'from $850 a day',
  },
  {
    to: '/catering',
    img: '/img/hub/service-catering.webp',
    alt: 'Staffed 40-guest banquet our culinary team executed on a private Hawaiian estate lawn at dusk',
    label: 'Catering',
    line: 'A staffed table for the welcome night, the offsite, the milestone — 10 to 75 guests.',
    price: 'from $125 a guest',
  },
  {
    to: '/weddings',
    img: '/img/hub/service-events.webp',
    alt: 'Intimate garden wedding reception dinner our team catered on a Hawaiian estate at night',
    label: 'Weddings & events',
    line: 'The week, not just the hour. Welcome dinner to recovery brunch as one written quote.',
    price: 'from $150 a guest',
  },
  {
    to: '/retreat-catering',
    img: '/img/hub/service-retreats.webp',
    alt: 'Morning retreat table where our chef served a communal breakfast for a wellness group on a Kauaʻi estate',
    label: 'Retreats & groups',
    line: 'Every meal for the whole party, on per-person day plans.',
    price: 'from $250 per person/day',
  },
  {
    to: '/corporate-catering',
    img: '/img/hub/service-corporate.webp',
    alt: 'Executive board dinner our culinary team cooked and served in a private Honolulu residence',
    label: 'Corporate & offsites',
    line: 'Board dinners, offsites and incentive groups with invoicing.',
    price: 'quoted per event',
  },
  {
    to: '/mobile-bar',
    img: '/img/hub/service-bar.webp',
    alt: 'Staffed bar cart our team ran on a villa lānai at dusk for a private Hawaii gathering',
    label: 'Bar service',
    line: 'Packaged bar cart, staffed. Alcohol client-supplied or licensed referral.',
    price: 'from $650/4hr',
  },
  {
    to: '/staffing',
    img: '/img/hub/service-staffing.webp',
    alt: 'Servers placing plated courses at a candlelit villa dinner our team staffed on a Hawaiian estate',
    label: 'Servers & staffing',
    line: 'Servers, sous chefs and bartenders on published hourly lines.',
    price: '$55–$75 an hour',
  },
];

const ISLAND_CARDS = [
  { id: 'oahu' as const, world: 'Metropolitan · Waikīkī to the North Shore', thumb: '/img/hub/island-oahu-card.webp', alt: 'Private penthouse dinner our team cooked in Honolulu — city lights and the ocean at blue hour' },
  { id: 'maui' as const, world: 'Cinematic · Wailea to Kapalua', thumb: '/img/hub/island-maui-card.webp', alt: 'A multi-course anniversary dinner our chefs prepared on an oceanfront Wailea villa lānai for a family of 12' },
  { id: 'kauai' as const, world: 'Botanical · both shores', thumb: '/img/hub/island-kauai-card.webp', alt: 'A private estate wedding dinner our chef team catered on a plantation veranda in Hanalei' },
  { id: 'bigisland' as const, world: 'Volcanic · Kona–Kohala', thumb: '/img/hub/island-bigisland-card.webp', alt: 'Hand-plated local catch finished by our chef at an intimate 10-guest dinner on the Kona coast' },
];

const GUIDES = [
  { label: 'How a private chef works', to: '/guides/how-it-works', note: 'Four steps, no mystery' },
  { label: 'What a private chef costs in Hawaii', to: '/private-chef-cost', note: 'The whole stack' },
  { label: 'Which Hawaiian island', to: '/guides/which-island', note: 'Seasons, stock, and price bands' },
  { label: 'Tipping a private chef', to: '/guides/tipping', note: 'Voluntary, always' },
];

const HOME_FAQ = [
  {
    q: 'Is this the main site, or do I need to pick an island first?',
    a: 'This is the main site — the statewide desk. If you already know the island, open that kitchen and the numbers get specific. If the trip hops islands, or you want catering, a private chef, and events handled as one brief, stay here and we run the itinerary.',
  },
  {
    q: 'Can you cook on more than one island in the same trip?',
    a: 'Yes. That is what this desk is for. Tell us the islands, the dates, and the tables — a villa week on Maui, a wedding dinner on Kauaʻi, a corporate night on Oʻahu — and we staff each kitchen with the island team that lives there. One brief. One written quote.',
  },
  {
    q: 'How much does a private chef cost in Hawaii?',
    a: 'Signature dinners run $125–$250 per guest depending on island and tier, groceries included. Stay Chef service runs from $850–$1,100 a day. The 20% service charge and Hawaiʻi GET up to 4.7120% always appear on their own lines, and the written quote is the confirmed total.',
  },
  {
    q: 'Is the quote really the final price?',
    a: 'Yes. The written quote itemizes menu, staffing, travel, 20% service, and GET — and that document is the confirmed total. A 50% deposit locks the date only after you have seen it.',
  },
];

export default function HubHome() {
  return (
    <>
      <Seo
        title="Private Chef Hawaii — The Statewide Desk | myCHEF"
        description="The main myCHEF Hawaii site. Private chefs, catering, weddings and events across Oʻahu, Maui, Kauaʻi and the Big Island — or as one multi-island itinerary. Published prices. A written quote that is the confirmed total."
        path="/"
        ogImage="/img/hub/hero-statewide-desk.jpg"
        jsonLd={[organizationLd(), foodServiceLd(), faqLd(HOME_FAQ)]}
      />

      <VideoHero
        poster="/img/hub/hero-statewide-desk.webp"
        video="/videos/hub/hero-statewide-desk.mp4"
        alt="Sunset villa dinner our chefs plated for a twelve-guest family gathering on an oceanfront Hawaiian lanai — the statewide desk’s work, on any island"
        eyebrow="The statewide desk · Oʻahu · Maui · Kauaʻi · Hawaiʻi Island"
        title={H1}
      >
        <p className="measure-site mt-6 text-base sm:text-lg" style={{ color: 'rgba(247,245,240,0.92)' }}>
          This is the main myCHEF Hawaii site. If you already know the island, open that kitchen.
          If the trip hops — a villa week on Maui, a wedding dinner on Kauaʻi, a corporate night on
          Oʻahu — stay here. We run the itinerary as one brief.
        </p>
        <p className="tabular-site mt-4 text-sm" style={{ color: 'rgba(237,232,219,0.82)' }}>
          Signature dinners $125–$250 a guest · Stay Chef from $850–$1,100 a day
        </p>
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5">
          <Link to="/quote?itinerary=multi" className="cta-site w-full sm:w-auto">
            Plan a multi-island trip
          </Link>
          <a href="#choose-island" className="cta-ghost-site" style={{ color: '#EDE8DB' }}>
            I know my island →
          </a>
        </div>
      </VideoHero>

      <section className="rule-y">
        <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <img
              src="/img/hub/trust-claims-desk.webp"
              alt="Written quote packet and chef kit on a Hawaiian villa kitchen island — published numbers before any date is locked"
              className="h-full min-h-[16rem] w-full object-cover"
            />
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-7">
            {TRUST_CLAIMS.map((claim, i) => (
              <SectionReveal
                key={claim}
                delay={i * 60}
                className="flex items-center border-t border-line-site px-5 py-5 text-sm font-medium sm:border-t-0 lg:border-l"
              >
                {claim}
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="choose-island" className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Two ways in</p>
            <h2 className="h2-site mt-3">Start with how the trip actually works.</h2>
          </SectionReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <SectionReveal className="card-site overflow-hidden">
              <img
                src="/img/hub/island-maui-card.webp"
                alt="A villa dinner our chefs cooked on Maui — one island, one kitchen, one week"
                className="w-full object-cover"
                style={{ aspectRatio: '16/9' }}
              />
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl">I know my island</h3>
                <p className="mt-3 text-ink-2">
                  Open the island site. The roster, the rate card, and the kitchens that live there
                  are waiting — Oʻahu, Maui, Kauaʻi, or the Big Island.
                </p>
                <p className="mt-5 text-sm text-ink-2">Scroll the four kitchens below, or jump:</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {ISLAND_IDS.map((id) => (
                    <Link key={id} to={SITE_META[id].basePath} className="cta-secondary-site">
                      {SITE_META[id].shortName}
                    </Link>
                  ))}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={80} className="card-site overflow-hidden">
              <img
                src="/img/hub/multi-island-itinerary.webp"
                alt="A chef’s kit and first course on a villa table — the start of a multi-island itinerary we staff as one brief"
                className="w-full object-cover"
                style={{ aspectRatio: '16/9' }}
              />
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl">We’re hopping islands</h3>
                <p className="mt-3 text-ink-2">
                  One brief covers every table. We place the island team that lives where you are
                  that night — private chef, catering, wedding week, corporate, bar and staff.
                  You do not run four vendors.
                </p>
                <div className="mt-6">
                  <Link to="/quote?itinerary=multi" className="cta-site">
                    Quote the whole itinerary
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Four kitchens. One standard.</h2>
            <p className="mt-4 max-w-xl text-ink-2">
              Published prices, the written quote, the itemized fee stack — everywhere. Prices
              differ per island; pick yours and the numbers get specific.
            </p>
          </SectionReveal>
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 md:grid md:grid-cols-4 md:overflow-visible">
            {ISLAND_CARDS.map((c, i) => (
              <SectionReveal key={c.id} delay={i * 80} className="w-[min(85vw,20rem)] shrink-0 snap-start md:w-auto">
                <Link to={SITE_META[c.id].basePath} className="card-site group block overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={c.thumb}
                      alt={c.alt}
                      loading={i > 1 ? 'lazy' : undefined}
                      className="motion-site w-full object-cover group-hover:scale-[1.02]"
                      style={{ aspectRatio: '16/10' }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="flex items-center gap-2 font-display text-2xl">
                      <IslandMark siteId={c.id} className="h-7 w-7 shrink-0" />
                      {SITE_META[c.id].name}
                    </h3>
                    <p className="mt-1 text-sm text-ink-2">{c.world}</p>
                    <p className="tabular-site mt-3 text-sm">
                      {RATES[c.id].coreBand}/guest · Stay Chef from ${RATES[c.id].stayChefDay}/day
                    </p>
                    <p className="mt-3 text-sm text-accent-site">Open the island site →</p>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-handle" className="rule-t">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">What this desk runs</p>
            <h2 className="h2-site mt-3">Private chefs, catering, events — on any island.</h2>
            <p className="measure-site mt-4 text-ink-2">
              The arrival dinner. The wedding week. The retreat’s every meal. The board night.
              The bar and the servers. Tell us the island — or the islands — once.
            </p>
          </SectionReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {OFFER.map((o, i) => (
              <SectionReveal key={o.to} delay={i * 50}>
                <Link to={o.to} className="card-site group block overflow-hidden no-underline" style={{ color: 'inherit' }}>
                  {o.video ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={o.img}
                      aria-label={o.alt}
                      className="motion-site w-full object-cover group-hover:scale-[1.02]"
                      style={{ aspectRatio: '16/9' }}
                    >
                      <source src={o.video.replace(/\.mp4$/, '.webm')} type="video/webm" />
                      <source src={o.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={o.img}
                      alt={o.alt}
                      loading="lazy"
                      className="motion-site w-full object-cover group-hover:scale-[1.02]"
                      style={{ aspectRatio: '16/9' }}
                    />
                  )}
                  <div className="p-6">
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-2xl">{o.label}</span>
                      <span className="tabular-site shrink-0 text-sm text-ink-2">{o.price}</span>
                    </span>
                    <p className="mt-2 text-sm text-ink-2">{o.line}</p>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rule-t">
        <div className="section-pad mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-6">
            <img
              src="/img/hub/pedigree-discretion.webp"
              alt="A discreet two-seat villa dinner our chef plated at night — the same kitchen standard we hold for high-demand rooms"
              className="w-full object-cover"
              style={{ aspectRatio: '16/10' }}
            />
          </SectionReveal>
          <SectionReveal delay={80} className="lg:col-span-6">
            <p className="eyebrow-site">The rooms we already know</p>
            <h2 className="h2-site mt-3">High-demand tables. The same kitchen.</h2>
            <p className="mt-5 text-ink-2">
              We have cooked for rooms the world already knew — including Robin Williams and
              Britney Spears — and for guest lists that never make a press release. We do not
              publish names as a rule. These two sit here for one reason: the same kitchen that
              handled that demand is the one that will cook your villa week.
            </p>
            <p className="mt-4 text-ink-2">
              Last-minute arrivals. Confidential productions. Multi-villa wedding weeks. Four
              islands, one standard, no performance about it.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="rule-t">
        <div className="section-pad mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <img
              src="/img/hub/rate-card-quote.webp"
              alt="Written quote packet our desk prepares before any date is locked — itemized, confirmed total"
              className="w-full object-cover"
              style={{ aspectRatio: '4/5' }}
            />
          </SectionReveal>
          <div className="lg:col-span-7">
            <SectionReveal>
              <h2 className="h2-site">The only statewide published rate card.</h2>
            </SectionReveal>
            <SectionReveal className="mt-8 table-scroll-site">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="rule-b text-ink-2">
                    <th scope="col" className="py-3 pr-4 font-medium">Island</th>
                    <th scope="col" className="py-3 pr-4 font-medium">Signature band</th>
                    <th scope="col" className="py-3 pr-4 font-medium">Stay Chef / day</th>
                    <th scope="col" className="py-3 font-medium">Date Night</th>
                  </tr>
                </thead>
                <tbody>
                  {ISLAND_IDS.map((id) => (
                    <tr key={id} className="rule-b">
                      <th scope="row" className="py-3 pr-4 font-display text-lg font-medium">
                        <Link to={`${SITE_META[id].basePath}/pricing`} className="link-site inline-flex items-center gap-2">
                          <IslandMark siteId={id} className="h-5 w-5" />
                          {SITE_META[id].shortName}
                        </Link>
                      </th>
                      <td className="tabular-site py-3 pr-4">{RATES[id].coreBand}/guest</td>
                      <td className="tabular-site py-3 pr-4">from ${RATES[id].stayChefDay}</td>
                      <td className="tabular-site py-3">{RATES[id].dateNight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </SectionReveal>
            <FeeStack className="mt-8" />
            <div className="mt-8">
              <Link to="/pricing" className="cta-secondary-site">See the full tariff →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="band-site">
        <div className="section-pad mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <img
              src="/img/hub/honesty-folio.webp"
              alt="Event folio and grocery receipts we keep for Stay Chef clients — the numbers on their own lines"
              className="w-full object-cover"
              style={{ aspectRatio: '16/10' }}
            />
          </SectionReveal>
          <div className="lg:col-span-7">
            <SectionReveal>
              <h2 className="h2-site max-w-2xl">We publish what others make you call for.</h2>
            </SectionReveal>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              <SectionReveal>
                <h3 className="font-display text-xl">The written quote is the confirmed total</h3>
                <p className="mt-3 text-sm text-ink-2">
                  Never a chat estimate, never a teaser “from” that moves. The document you approve is the
                  number you pay.
                </p>
              </SectionReveal>
              <SectionReveal delay={80}>
                <h3 className="font-display text-xl">The fee stack, itemized</h3>
                <p className="mt-3 text-sm text-ink-2">
                  20% service charge and Hawaiʻi GET up to 4.7120% on their own lines. 50% deposit locks the
                  date. Gratuity always voluntary.
                </p>
              </SectionReveal>
              <SectionReveal delay={160}>
                <h3 className="font-display text-xl">No fake reviews — ever</h3>
                <p className="mt-3 text-sm text-ink-2">
                  Reviews publish only after verified events. No imported testimonials, no AggregateRating
                  schema. <Link to="/trust" className="link-site">The honesty register</Link>.
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <img
              src="/img/hub/guides-planning.webp"
              alt="Our chef planning a villa week from that morning’s market produce — the same notes behind the public guides"
              className="w-full object-cover"
              style={{ aspectRatio: '16/10' }}
            />
          </SectionReveal>
          <div className="lg:col-span-7">
            <SectionReveal>
              <h2 className="h2-site">Read before you book.</h2>
            </SectionReveal>
            <div className="mt-8">
              {GUIDES.map((g, i) => (
                <SectionReveal key={g.to} delay={i * 60} className="rule-t last:rule-b">
                  <Link to={g.to} className="group flex items-baseline justify-between gap-6 py-4">
                    <span className="font-display text-xl group-hover:text-accent-site motion-site">{g.label}</span>
                    <span className="shrink-0 text-sm text-ink-2">{g.note} →</span>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad rule-t">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <img
              src="/img/hub/faq-guest-brief.webp"
              alt="Our chef walking a villa table through the written brief before service — the same questions the desk answers first"
              className="w-full object-cover"
              style={{ aspectRatio: '16/10' }}
            />
          </SectionReveal>
          <div className="lg:col-span-7">
            <h2 className="h2-site mb-6">The questions people ask first</h2>
            <FAQAccordion items={HOME_FAQ} />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img
          src="/img/hub/cta-take-the-table.webp"
          alt="Our chef placing the first course on a villa table at dusk — the moment a written quote becomes dinner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(35,32,26,0.92) 0%, rgba(35,32,26,0.78) 45%, rgba(35,32,26,0.45) 100%)',
          }}
        />
        <div className="relative z-10 section-pad mx-auto max-w-3xl px-6">
          <h2 className="h2-site" style={{ color: '#F7F5F0' }}>Tell us the islands. We’ll take the tables.</h2>
          <p className="mt-4" style={{ color: 'rgba(247,245,240,0.88)' }}>
            The button is not “Book now.” You get a written quote. Six steps — island or itinerary,
            service, dates, details, contact, review — ending at WhatsApp or email with your brief
            already structured.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <Link to="/quote?itinerary=multi" className="cta-site">Quote a multi-island trip</Link>
            <Link to="/quote" className="cta-ghost-site" style={{ color: '#EDE8DB' }}>I know my island</Link>
            <a
              className="cta-ghost-site"
              style={{ color: '#EDE8DB' }}
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('myCHEF Hawaii — quote brief\nIsland / itinerary: \nService: \nDates: \nGuests: ')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp the desk →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
