/**
 * Maui /services/date-night — Bespoke Romance Flagship:
 * "Sunset for two, cooked in your villa."
 * Wailea, Mākena, Kapalua, Kāʻanapali oceanfront lānai dinners.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { Seo, faqLd, serviceLd, breadcrumbLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteCTA from '@/components/QuoteCTA';
import { RateTable } from '@/components/RateTable';
import { MauiStyles } from './shared';

const H1 = 'Sunset for two, cooked in your villa.';

const ROMANCE_FORMATS = [
  {
    title: 'The Sunset Date Night',
    tag: 'Couples Dinner · 4 Courses',
    price: 'From $500 all-inclusive',
    desc: 'An intimate multi-course culinary experience timed perfectly with the golden hour. Ahi carpaccio, seared day-boat catch or Maui pasture beef, artisan chevre salad, and warm lilikoʻi tart.',
  },
  {
    title: 'The Oceanfront Proposal Dinner',
    tag: 'Secret Pacing · Champagne Toast',
    price: 'From $550 all-inclusive',
    desc: 'Choreographed down to the minute: subtle service, ambient candlelight, chilled champagne pouring, and a customized dessert plate reveal tailored to the big question.',
  },
  {
    title: 'Honeymoon Villa Evening',
    tag: 'Celebration Menu · Candlelit Lānai',
    price: 'From $500 all-inclusive',
    desc: 'A relaxed, luxurious evening after a day exploring Hana or Haleakalā. Zero restaurant noise, zero driving — just exceptional food served quietly on your private lānai.',
  },
  {
    title: 'Milestone Anniversary Celebration',
    tag: 'Tasting Cadence · Wine Pairings',
    price: 'From $600 all-inclusive',
    desc: 'An elevated 5-course chef’s tasting featuring seasonal Upcountry produce, fresh Hawaiian catch, and curated pacing matching your favorite reserve wines.',
  },
];

const RATE_ROWS = [
  { label: 'Date Night for Two', value: 'from $500', note: 'covers chef fee, 3–4 courses & all groceries' },
  { label: 'Proposal Coordination', value: 'from $550', note: 'includes customized dessert course & proposal timing' },
  { label: 'Extended 5-Course Tasting', value: 'from $600', note: 'elevated ingredients (kampachi, beef tenderloin, artisanal cheese)' },
  { label: 'Service Charge', value: '20.0%', note: 'itemized on its own line' },
  { label: 'Hawaiʻi GET', value: '4.7120%', note: 'state tax pass-through on its own line' },
];

const FAQ = [
  {
    q: 'How much does a private dinner for two cost on Maui?',
    a: 'A 3- to 4-course Date Night dinner for two starts at $500 all-inclusive with groceries included. The 20% service charge and Hawaiʻi GET (4.7120%) are itemized on their own lines.',
  },
  {
    q: 'Can we time the main course to the Maui sunset?',
    a: 'Yes. We calibrate arrival and plating times against the daily sunset schedule for your shore (Wailea, Kapalua, or Kāʻanapali) so the dessert and wine courses coincide with dusk.',
  },
  {
    q: 'How discreet is the chef during service?',
    a: 'Our chefs specialize in residential privacy. Plating and pouring are quiet and respectful; between courses, your table is entirely yours.',
  },
  {
    q: 'Can you help execute a surprise proposal?',
    a: 'Yes. We coordinate the timeline, table setup, champagne opening, and customized message on the dessert plate in advance via WhatsApp or phone.',
  },
  {
    q: 'Is kitchen cleanup included?',
    a: 'Every pan is hand-washed, surfaces are sanitized, and the kitchen is left pristine so your evening continues effortlessly.',
  },
];

export default function MauiDateNight() {
  const { link } = useSite();
  return (
    <>
      <Seo
        title="Romantic Private Chef Dinner for Two Maui — Date Night & Proposals | myCHEF"
        description="Private chef dinners for two across Maui: Wailea, Kapalua, Mākena, and Kāʻanapali. From $500 all-inclusive. Proposals, anniversaries, and honeymoon sunset dinners on your villa lānai."
        path={link('services/date-night')}
        ogImage="/img/maui/hero-date-night.jpg"
        jsonLd={[
          serviceLd('Maui Date Night Private Chef', 'Private chef multi-course sunset dinners for couples in Maui villas and resort residences.', link('services/date-night'), 'Maui'),
          faqLd(FAQ),
          breadcrumbLd([
            { name: 'Maui', path: link('') },
            { name: 'Services', path: link('private-chef') },
            { name: 'Date Night for Two', path: link('services/date-night') },
          ]),
        ]}
      />
      <MauiStyles />

      {/* Hero */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow-site text-accent-site">Romance & Sunset Dinners · Maui</p>
            <h1 className="h1-site mt-4">{H1}</h1>
            <p className="measure-site mt-6 text-ink-2">
              Two place settings on your private oceanfront lānai. No crowded dining rooms, no valet lines, and no rushing a reservation. Just the sunset, candlelit table service, and an unforgettable dinner cooked around you.
            </p>
            <p className="tabular-site mt-5 text-sm text-ink-2">
              From $500 for two · Groceries included · Itemized written quotes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to={link('quote?service=date-night')} className="cta-site">Get a written quote</Link>
              <a href="https://wa.me/18084687748?text=Aloha%20myCHEF%20Maui%20—%20I%27d%20like%20to%20plan%20a%20dinner%20for%20two." target="_blank" rel="noreferrer" className="cta-secondary-site">WhatsApp our team →</a>
            </div>
          </div>
          <SectionReveal className="md:col-span-6">
            <figure className="card-site overflow-hidden shadow-sm">
              <img
                src="/img/maui/hero-date-night.jpg"
                alt="Two place settings on a private oceanfront Wailea lānai at twilight with candles and sunset horizon"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                fetchPriority="high"
              />
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* S2 — Romance Formats */}
      <section className="section-pad rule-t bg-[#F5EFE6]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site text-accent-site uppercase tracking-wider text-xs">Curated Evenings for Two</p>
            <h2 className="h2-site mt-2">Every romantic milestone, tailored.</h2>
            <p className="measure-site mt-4 text-ink-2">
              From secret proposals to 25th anniversary celebrations:
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ROMANCE_FORMATS.map((fmt, i) => (
              <SectionReveal key={fmt.title} delay={i * 60}>
                <div className="card-site flex h-full flex-col justify-between p-7 bg-white border border-line-site">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-site">
                        {fmt.tag}
                      </span>
                      <span className="tabular-site text-sm font-semibold text-ink">
                        {fmt.price}
                      </span>
                    </div>
                    <h3 className="font-display mt-3 text-xl font-medium text-ink">
                      {fmt.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-ink-2">
                      {fmt.desc}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-line-site pt-4 flex items-center justify-between">
                    <span className="text-[11px] text-ink-2">Groceries included</span>
                    <Link to={link('quote?service=date-night')} className="link-site text-xs font-semibold">
                      Quote this dinner →
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* S3 — The Rate Card */}
      <section className="band-site section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Published romance pricing.</h2>
            <div className="mt-8">
              <RateTable rows={RATE_ROWS} footnote="The written quote is the confirmed total. Groceries included in all romance tiers. Gratuity voluntary." />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to={link('quote?service=date-night')} className="cta-site">
                Reserve your evening
              </Link>
              <Link to={link('pricing')} className="cta-secondary-site">See full Maui tariff →</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* S4 — FAQ */}
      <section className="section-pad rule-t bg-[#F5EFE6]">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <p className="eyebrow-site text-accent-site">Romance Dining Logistics</p>
            <h2 className="h2-site mt-2 mb-6">Frequently asked questions about couples dining</h2>
            <FAQAccordion items={FAQ} />
          </SectionReveal>
        </div>
      </section>

      <QuoteCTA
        heading="Plan your Maui sunset dinner."
        cta={{
          label: 'Get a written quote',
          href: link('quote?service=date-night'),
          secondaryLabel: 'WhatsApp us',
          secondaryHref: 'https://wa.me/18084687748',
        }}
      />
    </>
  );
}
