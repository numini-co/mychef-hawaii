/**
 * Hub homepage (design/home-hub.md) — "The Atlas Desk".
 * Typographic masthead (NO photo hero), interactive island map, island
 * chooser cards, statewide tariff teaser, two cores, honesty module,
 * guides teaser, mini quote block.
 */
import { Link } from 'react-router';
import { Briefcase, CalendarDays, ChefHat, ConciergeBell, Heart, Martini, Users, UtensilsCrossed } from 'lucide-react';
import { Seo, organizationLd, foodServiceLd, faqLd } from '@/platform/seo';
import { ISLAND_IDS, SITE_META } from '@/platform/tokens';
import { CONTACT, RATES } from '@/platform/config';
import IslandMap from '@/components/IslandMap';
import IslandMark from '@/components/IslandMark';
import TrustStrip from '@/components/TrustStrip';
import FeeStack from '@/components/FeeStack';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';

const H1 = 'Private chefs and catering, on all four islands.';

/** The statewide offer — the hub sells the whole range, islands sell the detail. */
const SERVICES = [
  {
    to: '/private-chef',
    icon: ChefHat,
    label: 'Private chef dinners',
    line: 'Signature, Premium and Date Night service in your own kitchen.',
    price: '$125–$250 a guest',
  },
  {
    to: '/stay-chef',
    icon: CalendarDays,
    label: 'Stay Chef for the week',
    line: 'The same chef through your stay — breakfasts, dinners, the whole rhythm.',
    price: 'from $850–$1,100 a day',
  },
  {
    to: '/catering',
    icon: UtensilsCrossed,
    label: 'Event catering',
    line: 'Staffed service for 10–75 guests. Over 75 by written exception.',
    price: 'from $125 a guest',
  },
  {
    to: '/weddings',
    icon: Heart,
    label: 'Weddings & wedding weeks',
    line: 'Welcome dinner to recovery brunch, quoted as one contract.',
    price: 'from $150 a guest',
  },
  {
    to: '/retreat-catering',
    icon: Users,
    label: 'Retreats & groups',
    line: 'Every meal for the whole party, on per-person day plans.',
    price: 'from $250 per person/day',
  },
  {
    to: '/corporate-catering',
    icon: Briefcase,
    label: 'Corporate & offsites',
    line: 'Board dinners, offsites and incentive groups with invoicing.',
    price: 'quoted per event',
  },
  {
    to: '/mobile-bar',
    icon: Martini,
    label: 'Bar service',
    line: 'Packaged bar cart, staffed. Alcohol client-supplied or licensed referral.',
    price: 'from $650/4hr',
  },
  {
    to: '/staffing',
    icon: ConciergeBell,
    label: 'Servers & staffing',
    line: 'Servers, sous chefs and bartenders on published hourly lines.',
    price: '$55–$75 an hour',
  },
];

const ISLAND_CARDS = [
  { id: 'oahu' as const, world: 'Metropolitan · Waikīkī to the North Shore', thumb: '/img/hub/island-oahu-thumb.jpg', alt: 'Executive corporate celebration dinner our team cooked and served in a private Honolulu penthouse overlooking the ocean' },
  { id: 'maui' as const, world: 'Cinematic · Wailea to Kapalua', thumb: '/img/hub/island-maui-thumb.jpg', alt: 'A multi-course anniversary dinner table our chefs prepared on an oceanfront Wailea villa lānai for a family of 12' },
  { id: 'kauai' as const, world: 'Botanical · both shores', thumb: '/img/hub/island-kauai-thumb.jpg', alt: 'A private estate wedding dinner our chef team catered on the plantation veranda in Hanalei, set for 16 guests before sunset' },
  { id: 'bigisland' as const, world: 'Volcanic · Kona–Kohala', thumb: '/img/hub/island-bigisland-thumb.jpg', alt: 'Hand-plated local catch course finished by our chef during an intimate 10-guest dinner on the Kona coast' },
];

const HOME_FAQ = [
  {
    q: 'How much does a private chef cost in Hawaii?',
    a: 'Signature dinners run $125–$250 per guest depending on island and tier, groceries included. Stay Chef service runs from $850–$1,100 a day. The 20% service charge and Hawaiʻi GET up to 4.7120% always appear on their own lines, and the written quote is the confirmed total.',
  },
  {
    q: 'Which island should we choose?',
    a: 'Oʻahu for metro depth, Maui for the resort-villa week, Kauaʻi for green quiet on both shores, the Big Island for space and night skies. The chooser walks through it — and prices differ per island, so the tariff comparison is worth two minutes.',
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
        title="Private Chef Hawaii — Chefs, Catering & Events on Four Islands | myCHEF"
        description="Private chefs, Stay Chef weeks, weddings, retreats, corporate events, bar and staffing — across Oʻahu, Maui, Kauaʻi and the Big Island. Published per-guest prices and a written quote that is the confirmed total."
        path="/"
        jsonLd={[organizationLd(), foodServiceLd(), faqLd(HOME_FAQ)]}
      />

      {/* §2 — Typographic masthead + atlas map (no photo hero) */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow-site">myCHEF Hawaii — Four islands, one standard</p>
            <h1 className="h1-site mt-5" aria-label={H1}>
              {H1.split(' ').map((w, i) => (
                <span key={i} aria-hidden="true" className="word-rise" style={{ '--wr-delay': `${i * 40}ms` } as React.CSSProperties}>
                  {w}{'\u00A0'}
                </span>
              ))}
            </h1>
            <p className="measure-site mt-6 text-ink-2">
              One desk for every table in Hawaiʻi. Private chef dinners and Stay Chef weeks, weddings,
              retreats, corporate events, bar service and staffing — planned here, cooked by the island team
              that lives where you are staying. Published prices, and a written quote that is the confirmed
              total.
            </p>
            <p className="tabular-site mt-5 text-sm text-ink-2">
              Signature dinners $125–$250 a guest depending on island · Stay Chef from $850–$1,100 a day.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5">
              <Link to="/quote" className="cta-site w-full sm:w-auto">Get a written quote</Link>
              <Link to="/islands" className="cta-secondary-site justify-center sm:justify-start">Compare the islands →</Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <IslandMap />
          </div>
        </div>
      </section>

      {/* §3 — Trust strip */}
      <TrustStrip />

      {/* §4 — Island chooser */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Four islands. Four kitchens.</h2>
            <p className="mt-4 max-w-xl text-ink-2">
              The same standard everywhere — published prices, the written quote, the itemized fee stack.
              Prices differ per island; pick yours and the numbers get specific.
            </p>
          </SectionReveal>
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-6 md:grid md:grid-cols-4 md:overflow-visible">
            {ISLAND_CARDS.map((c, i) => (
              <SectionReveal key={c.id} delay={i * 80} className="w-[min(85vw,20rem)] shrink-0 snap-start md:w-auto">
                <Link to={SITE_META[c.id].basePath} className="card-site group block overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={c.thumb}
                      alt={c.alt}
                      loading={i > 1 ? 'lazy' : undefined}
                      className="motion-site w-full object-cover group-hover:scale-[1.02]"
                      style={{ aspectRatio: '3/2' }}
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

      {/* §5 — Statewide tariff teaser */}
      <section className="rule-t">
        <div className="section-pad mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">The only statewide published rate card.</h2>
          </SectionReveal>
          <SectionReveal className="mt-10 overflow-x-auto">
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
      </section>

      {/* §6 — The whole offer: everything we handle, statewide */}
      <section className="rule-t">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Everything we handle.</h2>
            <p className="measure-site mt-4 text-ink-2">
              One brief covers the whole trip — the arrival dinner, the wedding week, the retreat’s every
              meal, the bar and the servers. Tell us the island and the dates once; the rest is quoted on
              published lines.
            </p>
          </SectionReveal>
          <div className="mt-10 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <SectionReveal key={s.to} delay={i * 50}>
                <Link
                  to={s.to}
                  className="rule-t motion-site group flex flex-col gap-1 py-5 no-underline"
                  style={{ color: 'inherit' }}
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="flex items-center gap-3">
                      <s.icon aria-hidden="true" className="h-5 w-5 shrink-0 text-accent-site" strokeWidth={1.5} />
                      <span className="font-display text-xl group-hover:text-accent-site motion-site">{s.label}</span>
                    </span>
                    <span className="tabular-site shrink-0 text-sm text-ink-2">{s.price}</span>
                  </span>
                  <span className="pl-8 text-sm text-ink-2">{s.line}</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
          <div className="rule-t" />
          <p className="mt-8 text-sm text-ink-2">
            Every line above runs on all four islands — the numbers differ by island, so{' '}
            <Link to="/islands" className="link-site">pick yours</Link> and they get specific.
          </p>
        </div>
      </section>

      {/* §7 — Why published numbers */}
      <section className="band-site">
        <div className="section-pad mx-auto max-w-6xl px-6">
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
      </section>

      {/* §8 — Guides teaser */}
      <section className="section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Read before you book.</h2>
          </SectionReveal>
          <div className="mt-8">
            {[
              { label: 'How a private chef works', to: '/guides/how-it-works', note: 'Four steps, no mystery' },
              { label: 'What a private chef costs in Hawaii', to: '/private-chef-cost', note: 'The whole stack' },
              { label: 'Which Hawaiian island', to: '/guides/which-island', note: 'Seasons, stock, and price bands' },
              { label: 'Tipping a private chef', to: '/guides/tipping', note: 'Voluntary, always' },
            ].map((g, i) => (
              <SectionReveal key={g.to} delay={i * 60} className="rule-t last:rule-b">
                <Link to={g.to} className="group flex items-baseline justify-between gap-6 py-4">
                  <span className="font-display text-xl group-hover:text-accent-site motion-site">{g.label}</span>
                  <span className="shrink-0 text-sm text-ink-2">{g.note} →</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (homepage FAQPage schema per home-hub.md) */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site mb-6">Three questions everyone asks first</h2>
          <FAQAccordion items={HOME_FAQ} />
        </div>
      </section>

      {/* §9 — Quote block */}
      <section className="band-site">
        <div className="section-pad mx-auto max-w-3xl px-6">
          <h2 className="h2-site">Start with the island.</h2>
          <p className="mt-4 text-ink-2">
            The button is not “Book now.” You get a written quote. Six steps, two minutes — island, service,
            dates, details, contact, review — ending at WhatsApp or email with your brief already structured.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to="/quote" className="cta-site">Start the quote</Link>
            <a
              className="cta-secondary-site"
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('myCHEF Hawaii — quote brief\nIsland: \nService: \nDates: \nGuests: ')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp the desk →
            </a>
          </div>
          <p className="mt-4 text-sm text-ink-2">
            <Link to="/quote" className="link-site">Full flow at /quote</Link>
          </p>
        </div>
      </section>
    </>
  );
}
