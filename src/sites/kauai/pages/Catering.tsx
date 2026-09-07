/**
 * /kauai/catering — "the garden gathering" (catering.md Kauaʻi column).
 * Estate + garden events lead; portrait 1:1 format cards in the canopy band;
 * retreat engine routes to its own signature page.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { PageSeo, useCrumbs } from '@/platform/templates/shared';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import FeeStack from '@/components/FeeStack';
import { content } from '../content';
import { CanopyBand, FramedHero, InquiryChip } from './kit';

const record = content.find((r) => r.slug === 'catering')!;

const FORMATS = [
  { name: 'Family-style', band: 'Table band · $125–$150/guest', best: 'Retreat tables and reunion dinners', slug: 'menus/family-style' },
  { name: 'Plated coursed', band: 'Signature · $150–$250/guest', best: 'Estate dinners and rehearsal evenings', slug: 'menus/signature-three-course' },
  { name: 'Premium tasting', band: '$250–$350/guest', best: 'Small weddings and milestone dinners', slug: 'menus/tasting-menu' },
  { name: 'Pūpū & grazing', band: 'Quoted per event', best: 'Welcome evenings and cocktail hours', slug: 'menus/pupu-and-grazing' },
  { name: 'Chef-attended stations', band: 'Premium band + staffing', best: 'Receptions up to 75', slug: 'occasions/villa-party' },
];

export default function KauaiCatering() {
  const { link } = useSite();
  const crumbs = useCrumbs(record, content);
  return (
    <article>
      <PageSeo record={record} crumbs={crumbs} />

      <FramedHero
        image="/img/kauai/hero-catering.jpg"
        alt="Garden party service under tree cover on a Kauaʻi estate, soft overcast light"
        eyebrow="Catering · Kauaʻi"
        title="Catering for the garden gathering."
        sub="Staffed events for 10–75 guests on estates, in gardens, under tree cover. Over 75 is a written exception — quoted, never implied. Both shores; the season line printed on every page."
      >
        <div className="flex flex-wrap items-center gap-5">
          <Link to={link('quote')} className="cta-site">
            Begin an inquiry
          </Link>
          <Link to={link('retreat-catering')} className="cta-secondary-site">
            The retreat table →
          </Link>
        </div>
        <div className="mt-6">
          <InquiryChip>Kauaʻi’s catering strength is the retreat table — 8–30 guests, 3–7 days, one contract.</InquiryChip>
        </div>
      </FramedHero>

      {/* Retreat engine cross-feature — the Kauaʻi catering identity */}
      <section className="mx-auto max-w-6xl px-6 pb-16" aria-label="Retreat catering">
        <SectionReveal>
          <div
            className="bg-surface-site p-6 md:p-10"
            style={{ borderRadius: 'var(--site-card-radius)', boxShadow: 'var(--site-card-shadow)' }}
          >
            <div className="grid items-start gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="eyebrow-site mb-3">The Kauaʻi signature</p>
                <h2 className="h2-site">You run the retreat. We run the table.</h2>
                <p className="mt-4 max-w-xl text-ink-2">
                  Kauaʻi’s retreat houses sleep 8–30 and run $2,000–$4,499 tickets — and their food has always been
                  ad hoc. One contract covers every meal: per-person/day plans, menus labeled by dietary protocol,
                  priced from the published card.
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="font-display text-2xl" style={{ fontWeight: 300 }}>
                  Full board, $250–$300+ <span className="text-lg text-ink-2">per person per day</span>
                </p>
                <p className="mt-3 text-sm text-ink-2">
                  Plus the chef’s day rate from $1,100 — itemized day by day in the written quote.
                </p>
                <p className="mt-5">
                  <Link to={link('retreat-catering')} className="cta-site">
                    Retreat catering →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Format cards — portrait 1:1 cards in the canopy band */}
      <CanopyBand>
        <h2 className="h2-site mb-10">Formats, priced per guest.</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FORMATS.map((f, i) => (
            <SectionReveal as="li" key={f.name} delay={i * 60}>
              <Link
                to={link(f.slug)}
                className="card-site block h-full p-6 no-underline transition-colors"
              >
                <p className="eyebrow-site mb-3">{f.band}</p>
                <h3 className="font-display text-2xl" style={{ fontWeight: 300 }}>
                  {f.name}
                </h3>
                <p className="mt-3 text-sm text-ink-2">Best for: {f.best}.</p>
              </Link>
            </SectionReveal>
          ))}
          <SectionReveal as="li" delay={FORMATS.length * 60}>
            <div className="card-site h-full p-6">
              <p className="eyebrow-site mb-3">Capacity law</p>
              <p className="font-display text-2xl" style={{ fontWeight: 300 }}>
                10–75, staffed.
              </p>
              <p className="mt-3 text-sm text-ink-2">
                Over 75 is a written exception — quoted explicitly, never discovered on the day.
              </p>
            </div>
          </SectionReveal>
        </ul>
      </CanopyBand>

      {/* Staffing & bar + logistics + the wedge */}
      <section className="section-pad" aria-label="Staffing, bar, and logistics">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2 className="h2-site">Staffing and bar, itemized.</h2>
              <ul className="mt-6 space-y-3">
                {[
                  'Servers $55/hr · sous chefs $75/hr · 4-hour floor',
                  'One server per 10–12 seated guests — the quote does this math in front of you',
                  'Bar cart $850/4hr + $60/guest — cart, ice, mixers, garnish, service',
                  'Alcohol is client-supplied or via licensed bartending referral; we do not sell alcohol',
                  'Load-in, power, and the rain plan settle in the quote phase with your venue',
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span aria-hidden="true" className="text-accent-site">—</span>
                    <span className="text-ink-2">{x}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                <Link to={link('services/staffing')} className="link-site">
                  Event staffing →
                </Link>
              </p>
            </div>
            <SectionReveal className="md:col-span-5 md:col-start-8" delay={80}>
              <div className="card-site p-6">
                <p className="eyebrow-site mb-3">The wedge</p>
                <p className="font-display text-4xl" style={{ fontWeight: 300 }}>
                  20% <span className="text-xl text-ink-2">service, itemized</span>
                </p>
                <p className="mt-3 text-sm text-ink-2">
                  Island venues and resorts charge 23–25%; one Kauaʻi caterer adds 25% gratuity to all food and
                  drink. On a $10,000 event week the difference is $500 — ours is lower, and never buried.
                </p>
              </div>
              <FeeStack className="mt-6" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Shore routing */}
      <section className="mx-auto max-w-6xl px-6 pb-16" aria-label="Where we cater">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: 'Poʻipū & the South Shore', body: 'Garden estates, plantation venues, the dry side’s year-round calendar.', slug: 'locations/poipu/catering' },
            { label: 'Kāpaʻa–Līhuʻe & the East Side', body: 'Resident celebrations and resort-corridor events — base zone, no surcharge.', slug: 'locations/kapaa-lihue/catering' },
            { label: 'Kīlauea & the retreat corridor', body: 'Hundred-acre retreat houses fed under one contract.', slug: 'locations/kilauea/retreat-catering' },
          ].map((c, i) => (
            <SectionReveal key={c.slug} delay={i * 60}>
              <Link to={link(c.slug)} className="card-site block h-full p-6 no-underline">
                <h3 className="font-display text-xl" style={{ fontWeight: 300 }}>{c.label}</h3>
                <p className="mt-2 text-sm text-ink-2">{c.body}</p>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* FAQ + quote */}
      <section className="mx-auto max-w-3xl px-6 pb-20" aria-label="Frequently asked questions">
        <h2 className="h2-site mb-8">Questions, answered.</h2>
        <FAQAccordion items={record.faq ?? []} />
      </section>
      <section className="band-site" aria-label="Get a catering quote">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <h2 className="h2-site">Get a written quote.</h2>
          <p className="mt-4 max-w-xl text-ink-2">
            Headcount, date, venue or estate — one itemized document back. The written quote is the confirmed total.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to={link('quote')} className="cta-site">
              Begin an inquiry
            </Link>
            <Link to={link('weddings')} className="cta-secondary-site">
              Wedding catering →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
