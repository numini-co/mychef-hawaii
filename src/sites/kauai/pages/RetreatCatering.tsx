/**
 * /kauai/retreat-catering — the Kauaʻi signature core page (catering.md Kauaʻi column).
 * Canopy-band hero → the retreat table → protocol matrix (fern chips) → host B2B
 * module → sample 5-day rhythm (the island's only horizontal-scroll element) →
 * capacity/travel → FAQ → inquiry.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { PageSeo, useCrumbs } from '@/platform/templates/shared';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import { content } from '../content';
import { FramedHero, InquiryChip, ProvenanceLine } from './kit';

const record = content.find((r) => r.slug === 'retreat-catering')!;

const PROTOCOLS = [
  { name: 'Plant-based', note: 'A cuisine, not a subtraction — the farms carry a full week without repetition.' },
  { name: 'Ayurvedic-fluent', note: 'Kitchari days, warm breakfasts, spice builds aligned to your program notes.' },
  { name: 'Detox', note: 'Structured, broth-and-greens-anchored weeks that still eat like food.' },
  { name: 'Raw-leaning', note: 'Raw-forward formats with the cooked line alongside for mixed tables.' },
  { name: 'Paleo / clean omnivore', note: 'Kauaʻi grass-fed beef, day-boat fish, market vegetables.' },
  { name: 'Eleven standard flags', note: 'Vegetarian through diabetic-friendly; allergens on separate prep.' },
];

const RHYTHM = [
  { day: 'Day 1', title: 'Arrival', body: 'Fridge stocked, light dinner timed to landings, the house’s grazing board set.' },
  { day: 'Day 2', title: 'First full day', body: 'Early light breakfast before practice, real breakfast after, working lunch, the first communal dinner.' },
  { day: 'Day 3', title: 'The excursion day', body: 'Coolers and day packs out the door; a late, forgiving family-style dinner on return.' },
  { day: 'Day 4', title: 'The feast night', body: 'The program earns its celebration — a coursed evening or the long table, crewed as needed.' },
  { day: 'Day 5', title: 'The closing morning', body: 'A brunch that ends the week gently; the kitchen left cleaner than arrival.' },
];

export default function KauaiRetreatCatering() {
  const { link } = useSite();
  const crumbs = useCrumbs(record, content);
  return (
    <article>
      <PageSeo record={record} crumbs={crumbs} />

      <FramedHero
        image="/img/kauai/hero-retreats.jpg"
        alt="A retreat breakfast spread on a plantation veranda, steam rising in morning mist"
        eyebrow="Retreat catering · Kauaʻi"
        title="You run the retreat. We run the table."
        sub="Multi-day meal plans for 8–30 guests across 3–7 days — one contract, every meal, dietary depth included. Priced from the published card: the only dedicated retreat table on the island."
      >
        <div className="flex flex-wrap items-center gap-5">
          <Link to={link('quote')} className="cta-site">
            Plan a retreat table
          </Link>
          <Link to={link('retreat-catering/for-hosts')} className="cta-secondary-site">
            For retreat hosts →
          </Link>
        </div>
        <div className="mt-6">
          <InquiryChip>One contract, every meal — the written quote itemizes every day before the deposit.</InquiryChip>
        </div>
      </FramedHero>

      {/* The retreat table — structure */}
      <section className="mx-auto max-w-6xl px-6 pb-16" aria-labelledby="retreat-table">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 id="retreat-table" className="h2-site">The retreat table, structured.</h2>
            <p className="mt-5 text-ink-2">
              Two lines, both published: the chef’s day rate from $1,100, and full-board meal plans in the
              $250–$300+ per-person/day range depending on protocol depth and headcount. Meal frequency is planned
              with your program, not around it — early light breakfasts before practice, working lunches, the long
              communal dinner.
            </p>
            <ProvenanceLine>
              Sourced from the island’s farms — Kunana Dairy, the Saturday Hanalei market, day-boat fish when the
              boats go out.
            </ProvenanceLine>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <Link to={link('retreat-catering/meal-plans')} className="link-site">
                Meal plans and per-day pricing →
              </Link>
              <Link to={link('retreat-catering/retreat-chef')} className="link-site">
                One chef, the whole program →
              </Link>
            </div>
          </div>
          <SectionReveal className="md:col-span-5 md:col-start-8" delay={80}>
            <div className="card-site p-6">
              <p className="eyebrow-site mb-3">The envelope</p>
              <ul className="space-y-2 text-sm">
                {[
                  '8–30 guests · 3–7 days',
                  'Kīlauea’s retreat corridor, Princeville, Hanalei, the South Shore',
                  'Kitchen check before the contract — we bring what the kitchen lacks',
                  'Far-North venues: 72-hour notice, closures reschedule rather than forfeit',
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span aria-hidden="true" className="text-accent-site">—</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Dietary-protocol matrix — fern label chips */}
      <section className="band-site" aria-labelledby="protocols">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <h2 id="protocols" className="h2-site mb-4">Menus labeled by protocol.</h2>
          <p className="max-w-xl text-ink-2">
            The vocabulary your guests booked for is the vocabulary on the menu — every dish labeled, every allergen
            on separate prep, the omnivore table never an afterthought.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROTOCOLS.map((p, i) => (
              <SectionReveal as="li" key={p.name} delay={i * 60}>
                <div
                  className="h-full p-5"
                  style={{
                    border: '1px solid var(--site-accent)',
                    borderRadius: 'var(--site-card-radius)',
                  }}
                >
                  <p className="font-display text-lg italic" style={{ fontWeight: 300 }}>{p.name}</p>
                  <p className="mt-2 text-sm text-ink-2">{p.note}</p>
                </div>
              </SectionReveal>
            ))}
          </ul>
          <p className="mt-8">
            <Link to={link('retreat-catering/dietary-protocols')} className="link-site">
              The full protocol matrix →
            </Link>
          </p>
        </div>
      </section>

      {/* Host-facing B2B module */}
      <section className="section-pad" aria-labelledby="hosts">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="eyebrow-site mb-3">For hosts and operators</p>
              <h2 id="hosts" className="h2-site">Your ticket math, made arithmetic.</h2>
              <p className="mt-5 text-ink-2">
                Kauaʻi retreat tickets run $2,000–$4,499 for 4–8 days, and food is the line hosts estimate worst.
                Full-board $250–$300+ per person per day plus the chef’s day rate, itemized by day in the written
                quote — months before you price the ticket. Hosts re-book; the contract is built to be re-booked.
              </p>
              <p className="mt-4">
                <Link to={link('retreat-catering/for-hosts')} className="cta-secondary-site">
                  The host page →
                </Link>
              </p>
            </div>
            <SectionReveal className="md:col-span-5 md:col-start-8" delay={80}>
              <div className="card-site p-6">
                <p className="eyebrow-site mb-3">Retreat formats</p>
                <ul className="space-y-2 text-sm">
                  {[
                    { l: 'Yoga & wellness', s: 'retreat-catering/yoga-wellness' },
                    { l: 'Surf retreats', s: 'retreat-catering/surf-retreats' },
                    { l: 'Corporate retreats', s: 'retreat-catering/corporate-retreats' },
                    { l: 'Kīlauea’s retreat corridor', s: 'locations/kilauea/retreat-catering' },
                  ].map((x) => (
                    <li key={x.s}>
                      <Link to={link(x.s)} className="link-site">
                        {x.l} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Sample 5-day rhythm — the only horizontal-scroll element on Kauaʻi */}
      <section className="mx-auto max-w-6xl px-6 pb-16" aria-labelledby="rhythm">
        <h2 id="rhythm" className="h2-site mb-8">A five-day retreat, sketched.</h2>
        <ol className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {RHYTHM.map((d, i) => (
            <SectionReveal as="li" key={d.day} delay={i * 60} className="w-[76vw] shrink-0 snap-start sm:w-64">
              <div className="card-site h-full p-5">
                <p className="eyebrow-site mb-2">{d.day}</p>
                <h3 className="font-display text-xl" style={{ fontWeight: 300 }}>{d.title}</h3>
                <p className="mt-2 text-sm text-ink-2">{d.body}</p>
              </div>
            </SectionReveal>
          ))}
        </ol>
        <p className="mt-4 text-sm text-ink-2">
          Sample rhythm — your program schedule writes the real one in the first planning call.
        </p>
      </section>

      {/* FAQ + inquiry */}
      <section className="mx-auto max-w-3xl px-6 pb-20" aria-label="Frequently asked questions">
        <h2 className="h2-site mb-8">Questions, answered.</h2>
        <FAQAccordion items={record.faq ?? []} />
      </section>
      <section className="band-site" aria-label="Plan a retreat table">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <h2 className="h2-site">One contract, every meal.</h2>
          <p className="mt-4 max-w-xl text-ink-2">
            Send dates, headcount, and your program’s dietary census — one written quote back, itemized day by day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to={link('quote')} className="cta-site">
              Plan a retreat table
            </Link>
            <Link to={link('retreat-catering/meal-plans')} className="cta-secondary-site">
              Meal-plan pricing →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
