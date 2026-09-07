/**
 * /kauai — homepage per home-kauai.md: framed veranda hero → two-shore
 * selector → canopy band (stay chef / retreat) → experience cards →
 * pricing-on-mist → bridge callout → how-it-works → weddings teaser →
 * trust strip → FAQ → inquiry band.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { useCrumbs } from '@/platform/templates/shared';
import { Seo, breadcrumbLd, faqLd, foodServiceLd, serviceLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import FeeStack from '@/components/FeeStack';
import TrustStrip from '@/components/TrustStrip';
import { RateTable } from '@/components/RateTable';
import { content } from '../content';
import { BridgeCallout, CanopyBand, ExperienceCards, FramedHero, InquiryChip, ProvenanceLine, ShoreSelector } from './kit';

const record = content.find((r) => r.slug === '')!;

const HOME_FAQ = [
  {
    q: 'How much does a private chef cost on Kauaʻi?',
    a: 'Signature dinners run $150–$250 per guest with groceries included; the Table tier is $125–$150. Stay Chef multi-day service starts at $1,100 a day plus groceries at cost. The 20% service charge and Hawaiʻi GET up to 4.7120% always appear on their own lines.',
    links: [{ label: 'The full rate card', href: '/kauai/pricing' }],
  },
  {
    q: 'Which shore should we book — and when?',
    a: 'Summer (June–September) is the North Shore’s prime; the South Shore carries November through March. We serve both year-round and say which your dates argue for in the inquiry reply.',
    links: [{ label: 'The two-shore season guide', href: '/kauai/guides/shore-seasonality' }],
  },
  {
    q: 'Do you cater retreats?',
    a: 'It’s the Kauaʻi signature: 8–30 guests across 3–7 days, one contract, menus labeled by dietary protocol — priced from published rates nobody else on the island publishes.',
    links: [{ label: 'Retreat catering', href: '/kauai/retreat-catering' }],
  },
  {
    q: 'What happens if the Hanalei bridge closes?',
    a: 'Far-North service runs on a written clause: 72-hour notice, and documented closures reschedule rather than forfeit. Your deposit doesn’t evaporate over weather.',
    links: [{ label: 'The bridge clause', href: '/kauai/guides/hanalei-bridge-clause' }],
  },
];

const STEPS = [
  { n: '01', t: 'Inquire', b: 'Dates, shore, headcount — two minutes. No account, no card.' },
  { n: '02', t: 'Written quote', b: 'Itemized: menu, staffing, travel, 20% service, GET. The quote is the confirmed total.' },
  { n: '03', t: '50% deposit', b: 'Locks the date — only ever after you’ve read the quote. We never hold a date we can’t crew.' },
  { n: '04', t: 'The table', b: 'We shop that day, cook in your kitchen, serve each course, and leave the kitchen cleaner than we found it.' },
];

export default function KauaiHome() {
  const { link } = useSite();
  const crumbs = useCrumbs(record, content);
  return (
    <article>
      <Seo
        title={record.title}
        description={record.meta.description}
        path={link('')}
        ogImage={record.meta.ogImage}
        jsonLd={[
          breadcrumbLd(crumbs),
          faqLd(HOME_FAQ),
          foodServiceLd(),
          serviceLd(
            'Private Chef Kauaʻi',
            'Private chef, catering, Stay Chef, and retreat catering across Kauaʻi — published rates, written quotes, both shores.',
            link(''),
            'Kauaʻi',
          ),
        ]}
      />

      <FramedHero
        image="/img/kauai/hero-home.jpg"
        alt="A framed veranda table set for dinner inside a misty Kauaʻi garden estate"
        eyebrow="Private chef · Kauaʻi"
        title="Kauaʻi, cooked in."
        sub="A private chef for your estate, your retreat, your whole stay — both shores. Signature dinners $150–$250 a guest; Stay Chef from $1,100 a day. The written quote is the confirmed total."
      >
        <div className="flex flex-wrap items-center gap-5">
          <Link to={link('quote')} className="cta-site">
            Begin an inquiry
          </Link>
          <Link to={link('pricing')} className="cta-secondary-site">
            See the rate card
          </Link>
        </div>
        <div className="mt-6">
          <InquiryChip>Inquiry-first on purpose — we never hold a date we can’t crew.</InquiryChip>
        </div>
      </FramedHero>

      {/* Two-shore selector (home signature) */}
      <ShoreSelector />

      {/* Canopy band — the long-stay products */}
      <CanopyBand>
        <div className="grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow-site mb-3">The Kauaʻi stay</p>
            <h2 className="h2-site">The island’s visits run long. So does our chef.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Kauaʻi visits average over a week, and the bluff estates sleep 8–16. Stay Chef puts the same chef in
              your kitchen for the length of the trip — from $1,100 a day, groceries at cost with receipts. The only
              published multi-day chef rate on the island.
            </p>
            <div className="mt-6 flex flex-wrap gap-5">
              <Link to={link('stay-chef')} className="cta-site">
                Stay Chef, from $1,100/day
              </Link>
              <Link to={link('pricing/stay-chef-cost')} className="cta-secondary-site">
                The week, worked by the day →
              </Link>
            </div>
          </div>
          <SectionReveal className="md:col-span-5" delay={120}>
            <div className="card-site p-6">
              <p className="eyebrow-site mb-2">The retreat table</p>
              <p className="font-display text-2xl" style={{ fontWeight: 300 }}>
                8–30 guests · 3–7 days · one contract
              </p>
              <p className="mt-3 text-sm text-ink-2">
                Menus labeled by dietary protocol — plant-based, Ayurvedic-fluent, detox — from the island’s only
                published retreat rates.
              </p>
              <p className="mt-4">
                <Link to={link('retreat-catering')} className="link-site">
                  Retreat catering →
                </Link>
              </p>
            </div>
          </SectionReveal>
        </div>
      </CanopyBand>

      {/* Experience cards */}
      <section className="section-pad" aria-label="The products">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="h2-site mb-8">Four ways to the table.</h2>
          <ExperienceCards
            cards={[
              {
                title: 'The estate dinner',
                body: 'A coursed evening in your own dining room — $150–$250 a guest, groceries inside the band.',
                image: '/img/kauai/card-estate-dinner.jpg',
                imageAlt: 'A coursed plate on a worn-wood estate table, garden beyond',
                slug: 'private-chef',
              },
              {
                title: 'Stay Chef',
                body: 'The same chef across your whole stay — from $1,100 a day, groceries at cost with receipts.',
                image: '/img/kauai/card-stay-chef.jpg',
                imageAlt: 'An estate kitchen with open windows to deep green',
                slug: 'stay-chef',
              },
              {
                title: 'The retreat table',
                body: 'One contract, every meal of the program — protocol-labeled menus for 8–30.',
                image: '/img/kauai/card-retreat.jpg',
                imageAlt: 'A communal retreat table set among plants in soft light',
                slug: 'retreat-catering',
              },
              {
                title: 'The estate wedding',
                body: 'Welcome dinner through recovery brunch, from $175 a guest plus staffing.',
                image: '/img/kauai/card-wedding.jpg',
                imageAlt: 'A small wedding table in a garden, rain-fresh leaves',
                slug: 'weddings',
              },
            ]}
          />
        </div>
      </section>

      {/* Pricing on mist */}
      <section className="bg-surface-site section-pad" aria-label="The rate card, briefly">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow-site mb-3">Published, like nothing else on the island</p>
              <h2 className="h2-site mb-6">The rate card, briefly.</h2>
              <RateTable
                rows={[
                  { label: 'Table — family-style', value: '$125–$150 / guest' },
                  { label: 'Signature — coursed', value: '$150–$250 / guest' },
                  { label: 'Premium — tasting', value: '$250–$350 / guest' },
                  { label: 'Date Night — for two', value: '$650–$950 fixed' },
                  { label: 'Stay Chef', value: 'from $1,100 / day' },
                  { label: 'Retreat full board', value: '$250–$300+ / person / day' },
                ]}
              />
              <p className="mt-5">
                <Link to={link('pricing')} className="link-site">
                  The full card, with staffing and travel →
                </Link>
              </p>
            </div>
            <div className="md:col-span-5">
              <FeeStack />
              <ProvenanceLine>
                Groceries inside the band on dinners; at cost with receipts on stays. The written quote is the
                confirmed total.
              </ProvenanceLine>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge callout */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid md:grid-cols-12">
          <BridgeCallout className="md:col-span-8 md:col-start-3" />
        </div>
      </div>

      {/* How it works — asymmetric stepped list */}
      <section className="mx-auto max-w-6xl px-6 pb-16" aria-labelledby="how">
        <h2 id="how" className="h2-site mb-10">From inquiry to first course.</h2>
        <ol className="grid gap-6 md:grid-cols-12">
          {STEPS.map((s, i) => (
            <SectionReveal
              as="li"
              key={s.n}
              delay={i * 70}
              className={`md:col-span-5 ${i % 2 === 1 ? 'md:col-start-7' : 'md:col-start-2'}`}
            >
              <div className="rule-t pt-5">
                <p className="eyebrow-site mb-2">{s.n}</p>
                <h3 className="font-display text-2xl" style={{ fontWeight: 300 }}>
                  {s.t}
                </h3>
                <p className="mt-2 text-ink-2">{s.b}</p>
              </div>
            </SectionReveal>
          ))}
        </ol>
        <p className="mt-8">
          <Link to={link('guides/how-it-works')} className="link-site">
            The full sequence →
          </Link>
        </p>
      </section>

      {/* Weddings teaser */}
      <section className="mx-auto max-w-6xl px-6 pb-16" aria-label="Weddings">
        <SectionReveal>
          <div className="card-site overflow-hidden md:grid md:grid-cols-12">
            <img
              src="/img/kauai/hero-weddings.jpg"
              alt="A bluff-estate reception table in soft overcast light"
              loading="lazy"
              className="h-full w-full object-cover md:col-span-7"
              style={{ aspectRatio: '3/2' }}
            />
            <div className="p-6 md:col-span-5 md:p-8">
              <p className="eyebrow-site mb-2">Weddings</p>
              <h2 className="font-display text-3xl" style={{ fontWeight: 300 }}>
                Married in the garden.
              </h2>
              <p className="mt-3 text-ink-2">
                Estate weeks from $175 a guest plus staffing — against the island’s $75-a-plate average. Elopements
                $650–$950, fixed.
              </p>
              <p className="mt-5">
                <Link to={link('weddings')} className="cta-secondary-site">
                  The wedding pages →
                </Link>
              </p>
            </div>
          </div>
        </SectionReveal>
      </section>

      <TrustStrip />

      {/* FAQ + final CTA */}
      <section className="mx-auto max-w-3xl px-6 py-16" aria-label="Frequently asked questions">
        <h2 className="h2-site mb-8">Questions, answered.</h2>
        <FAQAccordion items={HOME_FAQ} />
      </section>
      <section className="band-site" aria-label="Begin an inquiry">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <h2 className="h2-site">Tell us the table.</h2>
          <p className="mt-4 max-w-xl text-ink-2">
            Dates, shore, headcount. One written quote back — itemized, fixed, and honest about the island we cook
            on.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to={link('quote')} className="cta-site">
              Begin an inquiry
            </Link>
            <Link to={link('guides/how-it-works')} className="cta-secondary-site">
              How it works →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
