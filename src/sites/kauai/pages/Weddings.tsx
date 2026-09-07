/**
 * /kauai/weddings — "two shores, one estate week" (wedding.md Kauaʻi column).
 * The only wedding hub organized by shore; stepped vertical wedding-week timeline.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { PageSeo, useCrumbs } from '@/platform/templates/shared';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import { content } from '../content';
import { BridgeCallout, FramedHero, InquiryChip, ProvenanceLine, ShoreSelector } from './kit';
import type { Shore } from './kit';

const record = content.find((r) => r.slug === 'weddings')!;

/** Shore-split wedding module — wedding links re-order with the shore. */
const WEDDING_SHORES: Shore[] = [
  {
    id: 'north',
    label: 'North Shore',
    areas: 'Princeville · Hanalei · Kīlauea',
    season: 'Summer is the North Shore’s prime — bluff lawns and calm-bay light, June through September.',
    note: 'Bluff estates above Hanalei Bay and the Kīlauea corridor’s hundred-acre properties. Far-North venues past the bridge carry the written clause: 72-hour notice, closures reschedule rather than forfeit.',
    image: '/img/kauai/shore-north.jpg',
    imageAlt: 'Morning mist over Hanalei taro fields below the bluffs',
    links: [
      { label: 'Hanalei estate weddings', slug: 'locations/hanalei/estate-wedding' },
      { label: 'Hanalei — the bay and the bridge', slug: 'locations/hanalei' },
      { label: 'Princeville', slug: 'locations/princeville' },
      { label: 'Kīlauea', slug: 'locations/kilauea' },
    ],
  },
  {
    id: 'south',
    label: 'South Shore',
    areas: 'Poʻipū · Kōloa',
    season: 'The dry side — South Shore weddings carry November through March.',
    note: 'Plantation gardens and estate lawns with the island’s most reliable weather. The venue corridor’s house rules settle in the quote phase, before the deposit.',
    image: '/img/kauai/shore-south.jpg',
    imageAlt: 'A Poʻipū estate garden in soft post-rain light',
    links: [
      { label: 'Poʻipū wedding catering', slug: 'locations/poipu/wedding-catering' },
      { label: 'Kōloa wedding catering', slug: 'locations/koloa/wedding-catering' },
      { label: 'Poʻipū', slug: 'locations/poipu' },
      { label: 'Kōloa', slug: 'locations/koloa' },
    ],
  },
];

const WEEK = [
  { day: 'Thursday', meal: 'Welcome dinner', body: 'Family-style, 20–75 guests — the arrival evening that turns two families into one table.', slug: 'weddings/welcome-dinner' },
  { day: 'Friday', meal: 'Rehearsal dinner', body: 'Plated or family-style, 12–40 — the week’s best-kept secret, in the garden.', slug: 'weddings/rehearsal-dinner' },
  { day: 'Saturday, golden hour', meal: 'Ceremony-adjacent pūpū', body: 'Tray pass while the photos run; nobody’s champagne goes empty.', slug: 'menus/pupu-and-grazing' },
  { day: 'Saturday evening', meal: 'The reception', body: 'Plated two-to-three courses or premium buffet, 30–75 — the island’s caterer average is ~$75 a plate; this is not that.', slug: 'weddings/reception-catering' },
  { day: 'Sunday, late', meal: 'Recovery brunch', body: 'The gentle one — coffee that keeps coming, last night’s best flavors revisited.', slug: 'weddings/recovery-brunch' },
];

export default function KauaiWeddings() {
  const { link } = useSite();
  const crumbs = useCrumbs(record, content);
  return (
    <article>
      <PageSeo record={record} crumbs={crumbs} />

      <FramedHero
        image="/img/kauai/hero-weddings.jpg"
        alt="A bluff-estate reception table in soft overcast light, deep green beyond"
        eyebrow="Weddings · Kauaʻi"
        title="Married in the garden."
        sub="Kauaʻi’s wedding identity is the estate: bluff lawns in the north, plantation gardens in the south. We are not the island’s $75-a-plate buffet average — we are the estate week, one contract, welcome dinner through recovery brunch."
      >
        <div className="flex flex-wrap items-center gap-5">
          <Link to={link('quote')} className="cta-site">
            Begin an inquiry
          </Link>
          <Link to={link('weddings/wedding-cost')} className="cta-secondary-site">
            What it costs, worked →
          </Link>
        </div>
        <div className="mt-6">
          <InquiryChip>We never hold a date we can’t crew — the written quote comes first, always.</InquiryChip>
        </div>
      </FramedHero>

      {/* Shore-split wedding module (signature) */}
      <ShoreSelector shores={WEDDING_SHORES} heading="Two shores, two wedding seasons." />

      {/* Wedding-week stepped vertical timeline */}
      <section className="section-pad" aria-labelledby="wedding-week">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 id="wedding-week" className="h2-site">
                The wedding week, one contract.
              </h2>
              <p className="mt-5 text-ink-2">
                Five meals across the week, each its own line, all one crew. From $175 a guest plus staffing —
                servers $55/hr, sous chefs $75/hr, 4-hour floor. One culinary conversation instead of five vendors.
              </p>
              <p className="mt-4">
                <Link to={link('weddings/wedding-week')} className="link-site">
                  The wedding week, in full →
                </Link>
              </p>
            </div>
            <ol className="md:col-span-6 md:col-start-7">
              {WEEK.map((w, i) => (
                <SectionReveal
                  as="li"
                  key={w.slug + w.meal}
                  delay={i * 60}
                  className={`rule-t py-5 ${i % 2 === 1 ? 'md:pl-12' : ''}`}
                >
                  <p className="eyebrow-site mb-1">{w.day}</p>
                  <h3 className="font-display text-xl" style={{ fontWeight: 300 }}>
                    <Link to={link(w.slug)} className="link-site">
                      {w.meal}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-ink-2">{w.body}</p>
                </SectionReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Estate-wedding feature + elopement card */}
      <section className="mx-auto max-w-6xl px-6 pb-16" aria-label="Estate weddings and elopements">
        <div className="grid gap-6 md:grid-cols-12">
          <SectionReveal className="md:col-span-7">
            <div className="card-site h-full overflow-hidden">
              <img
                src="/img/kauai/card-wedding.jpg"
                alt="A small estate ceremony-adjacent table among rain-fresh leaves"
                loading="lazy"
                className="w-full object-cover"
                style={{ aspectRatio: '3/2' }}
              />
              <div className="p-6">
                <p className="eyebrow-site mb-2">The estate wedding</p>
                <h3 className="font-display text-2xl" style={{ fontWeight: 300 }}>
                  From $175/guest + staffing — against the island’s ~$75/plate average.
                </h3>
                <p className="mt-3 text-ink-2">
                  The average buys a buffet line. The estate format buys a coursed menu, the island’s best sourcing,
                  servers who stay the evening, and a written quote where every line is visible before the deposit.
                </p>
                <p className="mt-4">
                  <Link to={link('weddings/estate-wedding')} className="link-site">
                    Estate weddings →
                  </Link>
                </p>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal className="md:col-span-5" delay={80}>
            <div className="card-site h-full p-6">
              <p className="eyebrow-site mb-2">The elopement</p>
              <p className="font-display text-3xl" style={{ fontWeight: 300 }}>
                $650–$950 <span className="text-lg text-ink-2">fixed</span>
              </p>
              <p className="mt-3 text-ink-2">
                Two people, one table, no production — a coursed dinner where you’re staying, groceries inside.
                Nā Pali-adjacent views optional; the meal needs no helicopter.
              </p>
              <ProvenanceLine>Witnesses welcome — up to eight holds the fixed format.</ProvenanceLine>
              <p className="mt-4">
                <Link to={link('weddings/elopement')} className="link-site">
                  Elopement dinners →
                </Link>
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Bridge-clause callout */}
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid md:grid-cols-12">
          <BridgeCallout className="md:col-span-8 md:col-start-3" />
        </div>
      </div>

      {/* FAQ + inquiry */}
      <section className="mx-auto max-w-3xl px-6 pb-20" aria-label="Frequently asked questions">
        <h2 className="h2-site mb-8">Questions, answered.</h2>
        <FAQAccordion items={record.faq ?? []} />
      </section>
      <section className="band-site" aria-label="Begin a wedding inquiry">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <h2 className="h2-site">Tell us the week.</h2>
          <p className="mt-4 max-w-xl text-ink-2">
            Dates, shore, headcount, venue — one written quote back, itemized event by event. The 50% deposit locks
            the dates only after you’ve read every line.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to={link('quote')} className="cta-site">
              Begin an inquiry
            </Link>
            <Link to={link('partners/wedding-planners')} className="cta-secondary-site">
              For wedding planners →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
