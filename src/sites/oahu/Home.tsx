/**
 * Oʻahu homepage (design/home-oahu.md) — "Modern Pacific Metropolitan Luxury".
 * Split-editorial hero (NOT full-bleed), trust strip, two-door router,
 * text-led corridor directory, single dark rate-card band, four-step process,
 * kamaʻāina panel, group capability, mini quote block.
 * QA gates: pricing (S6) before how-it-works (S7); no shadows; no beach imagery.
 */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Seo, foodServiceLd, faqLd, breadcrumbLd } from '@/platform/seo';
import { RATES } from '@/platform/config';
import TrustStrip from '@/components/TrustStrip';
import FeeStack from '@/components/FeeStack';
import SectionReveal from '@/components/SectionReveal';
import { RateTable } from '@/components/RateTable';

const H1 = 'A chef in your kitchen, from Waikīkī to the North Shore.';

const HOME_FAQ = [
  {
    q: 'How much does a private chef cost on Oʻahu?',
    a: 'Signature dinners run $125–$190 a guest, groceries included. Stay Chef runs from $850 a day, and Date Night for two from $450. The 20% service charge and GET up to 4.7120% appear on their own lines — the written quote is the confirmed total.',
  },
  {
    q: 'Which parts of Oʻahu do you serve?',
    a: 'Waikīkī, Honolulu, Kahala–Gold Coast, Ko Olina, Kapolei, Kailua–Lanikai, Hawaiʻi Kai, the North Shore, and Turtle Bay. The North Shore and Turtle Bay carry a published travel fee from $75; everywhere else is base zone.',
  },
  {
    q: 'Can you cook in a Waikīkī condo or hotel suite?',
    a: 'Yes, where there is a real kitchen and the building allows it — we issue the COI and book the freight elevator. Hotel rooms without kitchens are declined honestly at inquiry.',
  },
];

const CORRIDORS = [
  { name: 'Waikīkī', note: 'In-suite specialists — we handle building COIs and freight-elevator bookings.', travel: 'Base zone', slug: 'locations/waikiki' },
  { name: 'Honolulu', note: 'Metro hub — resident tables and the corporate market, Downtown to Kakaʻako.', travel: 'Base zone', slug: 'locations/honolulu' },
  { name: 'Kahala–Gold Coast', note: 'Estate service and the weekly cook day for resident households.', travel: 'Base zone', slug: 'locations/kahala-gold-coast' },
  { name: 'Ko Olina', note: 'Resort residences with purpose-built chef kitchens; Stay Chef country.', travel: 'Base zone', slug: 'locations/ko-olina' },
  { name: 'Kapolei', note: 'The second city — resident and corporate, no leeward surcharge.', travel: 'Base zone', slug: 'locations/kapolei' },
  { name: 'Kailua–Lanikai', note: 'Windward beachfront estates and 30-day stays.', travel: 'Base zone', slug: 'locations/kailua-lanikai' },
  { name: 'North Shore', note: 'Estate weeks and surf-season tables — 60–90 minutes from town.', travel: 'Travel from $75', slug: 'locations/north-shore' },
  { name: 'Turtle Bay', note: 'Resort villas and cottages at the top of the island.', travel: 'Travel from $75', slug: 'locations/turtle-bay' },
  { name: 'Hawaiʻi Kai', note: 'Marina-side resident market; weekly cook days.', travel: 'Base zone', slug: 'locations/hawaii-kai' },
];

const RATE_ROWS = [
  { label: 'Table', value: '$95–$125', note: 'per guest, groceries included' },
  { label: 'Signature', value: '$125–$190', note: 'per guest, groceries included' },
  { label: 'Premium', value: '$190–$275', note: 'per guest' },
  { label: 'Chef’s table', value: '$275–$400+', note: 'per guest, quoted manually' },
  { label: 'Stay Chef', value: 'from $850/day', note: 'plus groceries at cost' },
  { label: 'Kamaʻāina weekly', value: 'from $300/wk', note: 'plus groceries at cost' },
  { label: 'Server / Sous chef', value: '$55 / $75 /hr', note: 'four-hour floor' },
  { label: 'Travel — North Shore & Turtle Bay', value: 'from $75', note: 'published, itemized' },
];

const STEPS = [
  { n: '01', title: 'Send the quote form', body: 'Five fields, two minutes.' },
  { n: '02', title: 'Get a written quote', body: 'The confirmed total, itemized.' },
  { n: '03', title: '50% deposit locks the date', body: 'Only after you have seen the numbers.' },
  { n: '04', title: 'We cook, we serve, we clean', body: 'Your kitchen, left cleaner than we found it.' },
];

export default function OahuHome() {
  const navigate = useNavigate();
  const [guests, setGuests] = useState('6');
  const [service, setService] = useState('signature');
  const [dates, setDates] = useState('');
  const [area, setArea] = useState('Waikīkī');

  return (
    <>
      <Seo
        title="Private Chef Oʻahu — from $125/guest | myCHEF"
        description="Private chef and staffed catering across Oʻahu. Signature dinners $125–$190 a guest, groceries included. Stay Chef from $850 a day. The written quote is the confirmed total."
        path="/oahu"
        ogImage="/img/oahu/hero-home.jpg"
        jsonLd={[foodServiceLd(), faqLd(HOME_FAQ), breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Oʻahu', path: '/oahu' }])]}
      />

      {/* S2 — Split editorial hero (Oʻahu-only composition; not full-bleed) */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow-site">Private chef Oʻahu — Honolulu · Kahala · Ko Olina · North Shore</p>
            <h1 className="h1-site mt-5" aria-label={H1}>
              {H1.split(' ').map((w, i) => (
                <span key={i} aria-hidden="true" className="word-rise" style={{ '--wr-delay': `${i * 30}ms` } as React.CSSProperties}>
                  {w}{' '}
                </span>
              ))}
            </h1>
            <p className="tabular-site mt-6 text-[17px] text-ink-2">
              Signature dinner {RATES.oahu.coreBand} a guest, groceries included. Stay Chef from $850 a day.
              The written quote is the confirmed total.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to="/oahu/quote" className="cta-site">Get a written quote</Link>
              <Link to="/oahu/pricing" className="cta-secondary-site">See the rate card →</Link>
            </div>
          </div>
          <SectionReveal className="md:col-span-6">
            <figure className="card-site overflow-hidden">
              <img
                src="/img/oahu/hero-home.jpg"
                alt="A chef’s hands plating a course at a stone island in a penthouse kitchen, the Honolulu city grid at blue hour through floor-to-ceiling glass"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                fetchPriority="high"
              />
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* S3 — Trust strip */}
      <TrustStrip />

      {/* S4 — Two-door router */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
          {[
            {
              title: 'A chef for the house',
              body: 'Signature dinners, Date Nights, and Stay Chef weeks in your suite or villa.',
              to: '/oahu/private-chef',
              img: '/img/oahu/hero-private-chef.jpg',
              alt: 'A chef finishing a course in a Honolulu kitchen',
            },
            {
              title: 'Catering for the event',
              body: 'Staffed catering for 10–75 guests: weddings, corporate, villa parties.',
              to: '/oahu/catering',
              img: '/img/oahu/hero-catering.jpg',
              alt: 'A staffed event plated in an Oʻahu residence',
            },
          ].map((door, i) => (
            <SectionReveal key={door.to} delay={i * 40}>
              <Link
                to={door.to}
                className="card-site motion-site group block overflow-hidden hover:-translate-y-0.5 hover:border-[#3D5A68]"
              >
                <div className="overflow-hidden">
                  <img
                    src={door.img}
                    alt={door.alt}
                    loading="lazy"
                    className="motion-site w-full object-cover group-hover:scale-[1.02]"
                    style={{ aspectRatio: '3/2' }}
                  />
                </div>
                <div className="p-8">
                  <h2 className="h2-site">{door.title}</h2>
                  <p className="mt-3 text-ink-2">{door.body}</p>
                  <span className="link-site mt-5 inline-block">Enter →</span>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* S5 — Corridor directory (text-led; no photo grid) */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Where we cook.</h2>
          </SectionReveal>
          <div className="mt-8">
            {CORRIDORS.map((c, i) => (
              <SectionReveal key={c.slug} delay={Math.min(i, 5) * 40}>
                <Link
                  to={`/oahu/${c.slug}`}
                  className="motion-site group grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-line-site py-4 hover:border-[#3D5A68] md:grid-cols-[240px_1fr_auto_auto]"
                >
                  <span className="font-display text-lg font-medium">{c.name}</span>
                  <span className="hidden text-sm text-ink-2 md:block">{c.note}</span>
                  <span className="tabular-site text-sm text-ink-2">{c.travel}</span>
                  <span aria-hidden="true" className="text-accent-site">→</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-2">
            Waikīkī: we handle building COIs and freight-elevator bookings. Travel fees are published — never discovered on the invoice.
          </p>
        </div>
      </section>

      {/* S6 — Pricing band (the page's single dark band) */}
      <section className="band-site section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">The Oʻahu rate card.</h2>
            <div className="mt-8">
              <RateTable rows={RATE_ROWS} footnote="Every figure published, every figure honored. Groceries at cost, receipts on request." />
              <FeeStack className="mt-8 opacity-90" />
            </div>
            <div className="mt-10">
              <Link to="/oahu/quote" className="cta-site" style={{ backgroundColor: 'var(--site-cta-ink)', color: 'var(--site-cta-bg)' }}>
                Get a written quote
              </Link>
              <Link to="/oahu/pricing" className="cta-secondary-site ml-5">The full tariff →</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* S7 — How it works (AFTER pricing — the sequence tell) */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">How it works.</h2>
          </SectionReveal>
          <ol className="mt-10 grid gap-10 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <SectionReveal as="li" key={s.n} delay={i * 60}>
                <span className="font-accent-site block text-[40px] font-light leading-none text-ink-2">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-2">{s.body}</p>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* S8 — Kamaʻāina band (Oʻahu-exclusive) */}
      <section className="section-pad pt-0">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <div className="card-site overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-10">
                  <p className="eyebrow-site">For residents</p>
                  <h2 className="h2-site mt-3 max-w-2xl">The weekly cook day, from $300 a week plus groceries.</h2>
                  <p className="measure-site mt-4 text-ink-2">
                    One chef, one standing day, a week of dinners cooked in your kitchen. Kahala to Hawaiʻi Kai.
                    Groceries at cost, receipts attached.
                  </p>
                  <Link to="/oahu/services/personal-chef-weekly" className="link-site mt-5 inline-block">
                    The kamaʻāina weekly line →
                  </Link>
                </div>
                <div className="relative min-h-[280px]">
                  <img
                    src="/img/oahu/stay-chef.jpg"
                    alt="A chef working a villa kitchen across a multi-day stay"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* S9 — Group capability */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <SectionReveal>
              <h2 className="h2-site">10–75 guests, staffed.</h2>
              <p className="mt-4 text-ink-2">
                Over 75 is a written exception — quoted, never implied. Servers at $55 an hour,
                sous chefs at $75, four-hour floor, named on the quote.
              </p>
              <Link to="/oahu/catering" className="link-site mt-4 inline-block">Catering capability →</Link>
            </SectionReveal>
            <SectionReveal delay={60}>
              <h2 className="h2-site">Convention window, covered.</h2>
              <p className="mt-4 text-ink-2">
                Convention-displacement dinners and off-site corporate catering through the HCC
                renovation window — COI and load-in handled.
              </p>
              <Link to="/oahu/corporate" className="link-site mt-4 inline-block">Corporate catering →</Link>
            </SectionReveal>
          </div>
          <SectionReveal className="mt-10">
            <figure className="card-site overflow-hidden">
              <img
                src="/img/oahu/corporate.jpg"
                alt="A boardroom-style dinner plated in a Honolulu residence"
                loading="lazy"
                className="w-full object-cover"
                style={{ aspectRatio: '16/9' }}
              />
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* S10 — Quote block */}
      <section className="section-pad rule-t">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionReveal>
              <h2 className="h2-site">Get a written quote.</h2>
              <p className="mt-4 text-ink-2">
                The button is not “Book now.” You tell us the table; we send a written quote — and that quote is the confirmed total.
              </p>
              <form
                className="card-site mt-8 grid gap-4 p-6 md:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const params = new URLSearchParams({ service, guests, area, dates });
                  navigate(`/oahu/quote?${params.toString()}`);
                }}
              >
                <label className="block">
                  <span className="eyebrow-site mb-2 block">Service</span>
                  <select className="input-site" value={service} onChange={(e) => setService(e.target.value)}>
                    <option value="signature">Signature dinner</option>
                    <option value="date-night">Date Night for two</option>
                    <option value="stay-chef">Stay Chef — multi-day</option>
                    <option value="catering">Catering — staffed event</option>
                    <option value="wedding">Wedding week</option>
                  </select>
                </label>
                <label className="block">
                  <span className="eyebrow-site mb-2 block">Guests</span>
                  <select className="input-site" value={guests} onChange={(e) => setGuests(e.target.value)}>
                    {['2', '4', '6', '8', '10', '12', '20', '30', '50', '75'].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="eyebrow-site mb-2 block">Dates</span>
                  <input
                    className="input-site"
                    type="text"
                    placeholder="e.g. March 14–18"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                  />
                </label>
                <label className="block">
                  <span className="eyebrow-site mb-2 block">Area</span>
                  <select className="input-site" value={area} onChange={(e) => setArea(e.target.value)}>
                    {['Waikīkī', 'Honolulu', 'Kahala', 'Ko Olina', 'Kapolei', 'Kailua / Windward', 'North Shore', 'Turtle Bay', 'Hawaiʻi Kai'].map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </label>
                <div className="flex flex-wrap items-center gap-5 md:col-span-2">
                  <button type="submit" className="cta-site motion-site active:scale-[0.98]">
                    Get a written quote
                  </button>
                  <a
                    href="https://wa.me/971551744849?text=Aloha%20myCHEF%20O%CA%BBahu%20—%20I%27d%20like%20a%20written%20quote."
                    target="_blank"
                    rel="noreferrer"
                    className="cta-secondary-site"
                  >
                    WhatsApp instead →
                  </a>
                </div>
              </form>
            </SectionReveal>
          </div>
          <SectionReveal className="hidden md:col-span-5 md:block" delay={80}>
            <figure className="card-site overflow-hidden">
              <img
                src="/img/oahu/quote-kitchen.jpg"
                alt="A quiet, immaculate modern kitchen with a chef’s mise en place arranged on a stone counter, evening city light through the window"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '4/5' }}
                loading="lazy"
              />
            </figure>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
