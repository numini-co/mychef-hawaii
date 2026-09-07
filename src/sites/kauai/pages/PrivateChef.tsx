/**
 * /kauai/private-chef — "the estate week, staffed" (private-chef.md Kauaʻi column).
 * Framed hero → compact shore strip → canopy band (estate week) → product
 * cards → kitchen gate + bridge callout → included/separate → FAQ → inquiry.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { PageSeo, useCrumbs } from '@/platform/templates/shared';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import { content } from '../content';
import { BridgeCallout, CanopyBand, ExperienceCards, FramedHero, InquiryChip } from './kit';

const record = content.find((r) => r.slug === 'private-chef')!;

export default function KauaiPrivateChef() {
  const { link } = useSite();
  const crumbs = useCrumbs(record, content);
  return (
    <article>
      <PageSeo record={record} crumbs={crumbs} />

      <FramedHero
        image="/img/kauai/hero-private-chef.jpg"
        alt="A chef plating a coursed dinner on a Kauaʻi estate veranda in soft light"
        eyebrow="Private chef · Kauaʻi"
        title="A private chef for the house, the week, the estate."
        sub="Your chef shops the Saturday market, cooks in your kitchen, serves each course, and leaves the kitchen clean. Inquiry-first — a written quote before any date is held."
      >
        <div className="flex flex-wrap items-center gap-5">
          <Link to={link('quote')} className="cta-site">
            Begin an inquiry
          </Link>
          <Link to={link('pricing')} className="cta-secondary-site">
            The rate card →
          </Link>
        </div>
        <div className="mt-6">
          <InquiryChip>Signature dinners $150–$250/guest · Stay Chef from $1,100/day</InquiryChip>
        </div>
      </FramedHero>

      {/* Canopy band — the estate week leads on Kauaʻi */}
      <CanopyBand>
        <div className="grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow-site mb-3">The Kauaʻi product</p>
            <h2 className="h2-site">The estate week, staffed.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Estates on both shores sleep 8–16, and chef service is usually bought one concierge phone call at a
              time. Our Stay Chef and estate-week products put one chef in your kitchen across the stay —
              breakfasts, beach-day provisioning, dinners — under one written quote.
            </p>
            <div className="mt-6 flex flex-wrap gap-5">
              <Link to={link('stay-chef')} className="cta-site">
                Stay Chef, from $1,100/day
              </Link>
              <Link to={link('services/estate-week-chef')} className="cta-secondary-site">
                The estate-week product →
              </Link>
            </div>
          </div>
          <SectionReveal className="md:col-span-5" delay={120}>
            <div className="card-site p-6">
              <p className="eyebrow-site mb-2">A three-day rhythm</p>
              <ul className="space-y-2 text-sm text-ink-2">
                <li>Day 1 — arrival dinner timed to your landing; fridge already stocked</li>
                <li>Day 2 — breakfast, beach-day cooler, family-style dinner</li>
                <li>Day 3 — slow brunch, then a Signature coursed evening</li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </CanopyBand>

      {/* The products */}
      <section className="section-pad" aria-label="Private chef products">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="h2-site mb-8">Pick your shape.</h2>
          <ExperienceCards
            cards={[
              {
                title: 'The signature dinner',
                body: 'A coursed evening — menu agreed in writing, groceries inside the band, $150–$250 a guest.',
                image: '/img/kauai/card-estate-dinner.jpg',
                imageAlt: 'A coursed plate on a worn-wood estate table',
                slug: 'menus/signature-three-course',
              },
              {
                title: 'Date Night',
                body: 'Two people, one table, $650–$950 fixed — the proposal and anniversary register.',
                image: '/img/kauai/card-wedding.jpg',
                imageAlt: 'A small table set for two among rain-fresh leaves',
                slug: 'services/date-night',
              },
              {
                title: 'The vacation table',
                body: 'Arrival dinners, stocking, and midweek evenings for the rental week.',
                image: '/img/kauai/card-stay-chef.jpg',
                imageAlt: 'An estate kitchen with open windows to deep green',
                slug: 'services/vacation-chef',
              },
              {
                title: 'Chef’s Table',
                body: 'The counter format — courses off the pass, from $350 a guest, quoted per event.',
                image: '/img/kauai/menu-hanalei-table.jpg',
                imageAlt: 'A five-course farm menu on a garden table',
                slug: 'services/chefs-table',
              },
            ]}
          />
        </div>
      </section>

      {/* Kitchen gate + bridge callout */}
      <section className="mx-auto max-w-6xl px-6 pb-16" aria-label="The honest gates">
        <div className="grid gap-6 md:grid-cols-12">
          <SectionReveal className="md:col-span-7">
            <div
              className="h-full p-6"
              style={{
                borderLeft: '2px solid var(--site-accent)',
                background: 'var(--site-surface)',
                borderRadius: '0 var(--site-card-radius) var(--site-card-radius) 0',
              }}
            >
              <p className="eyebrow-site mb-2">The kitchen gate</p>
              <p className="text-ink-2">
                We will not pretend a coffee maker and a minibar are a pass — hotel rooms without kitchens are
                declined, politely and early. Villas, estates, plantation houses, and suites with real kitchens are
                the stage. Four burners, a counter, running water: that’s the gate.
              </p>
              <p className="mt-4">
                <Link to={link('guides/villa-kitchen')} className="link-site text-sm">
                  What a kitchen needs →
                </Link>
              </p>
            </div>
          </SectionReveal>
          <BridgeCallout className="md:col-span-5" />
        </div>
      </section>

      {/* Included / separate */}
      <section className="bg-surface-site section-pad" aria-label="Included and separate">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="h2-site mb-8">One dinner, itemized.</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <SectionReveal>
              <div className="card-site h-full p-6">
                <p className="eyebrow-site mb-3">Included</p>
                <ul className="space-y-2 text-ink-2">
                  <li>Menu design, written for your table</li>
                  <li>Same-day shopping — groceries inside the band</li>
                  <li>The cooking and course-by-course service</li>
                  <li>The kitchen left cleaner than we found it</li>
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={80}>
              <div className="card-site h-full p-6">
                <p className="eyebrow-site mb-3">Separate, on their own lines</p>
                <ul className="space-y-2 text-ink-2">
                  <li>Servers $55/hr · sous chefs $75/hr (4-hour floor)</li>
                  <li>Bar cart $850/4hr + $60/guest (alcohol client-supplied)</li>
                  <li>Shore travel — Princeville · Poʻipū $50–$75</li>
                  <li>20% service · Hawaiʻi GET up to 4.7120%</li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ + inquiry */}
      <section className="mx-auto max-w-3xl px-6 py-16" aria-label="Frequently asked questions">
        <h2 className="h2-site mb-8">Questions, answered.</h2>
        <FAQAccordion items={record.faq ?? []} />
      </section>
      <section className="band-site" aria-label="Begin an inquiry">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <h2 className="h2-site">Tell us the table.</h2>
          <p className="mt-4 max-w-xl text-ink-2">
            Dates, shore, headcount — one written quote back, itemized. We never hold a date we can’t crew.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to={link('quote')} className="cta-site">
              Begin an inquiry
            </Link>
            <Link to={link('compare/private-chef-vs-restaurant')} className="cta-secondary-site">
              Chef vs. restaurant, honestly →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
