/**
 * /bigisland/catering (archetype catering.md — "events in ledger form").
 * Edge-to-edge night-service hero → mono format index → staffing ledger →
 * mono comparison block (resort minimums vs published lines) → east-side
 * posture → retreat module → FAQ → light-band quote. Zero cards.
 */
import { Link } from 'react-router';
import { Seo, faqLd, serviceLd } from '@/platform/seo';
import { useSite } from '@/platform/IslandProvider';
import FAQAccordion from '@/components/FAQAccordion';
import { BandQuote, HeroPanel, LedgerRow, Mono } from './bits';

const FAQ = [
  {
    q: 'What does catering cost on the Big Island?',
    a: 'Staffed events run from $150 a guest for food, with servers at $55/hr and sous chefs at $75/hr on their own lines, a 20% service charge, and GET up to 4.7120% — all itemized. Resort F&B minimums run $7,500–$15,000 per event at 23–25% service for comparison.',
  },
  {
    q: 'Can you cater more than 75 guests?',
    a: 'Over 75 is a written exception — quoted, never implied. Headcount above 75 changes kitchen load, rentals, and crew depth enough that we will only confirm it in writing.',
  },
  {
    q: 'Do you cater on the east side?',
    a: 'Yes — Hilo, Volcano, and Waimea events are quoted in writing with the Saddle drive stated as a crew-travel line. The food prices are identical to the west side.',
  },
  {
    q: 'Can you cater a retreat?',
    a: 'Yes — multi-day retreat programs run on per-person per-day meal plans or the Stay Chef day rate from $950, with protocol-labeled menus. See the retreat-catering section below.',
  },
];

export default function BigIslandCatering() {
  const { link } = useSite();
  return (
    <>
      <Seo
        title="Catering on the Big Island — Villa Weddings, Rehearsals, Estate Events"
        description="Staffed catering for 10–75 guests on Hawaiʻi Island — villa weddings, rehearsal dinners, estate events. From $150 a guest with 20% service on its own line, against resort F&B minimums of $7,500–$15,000 at 23–25%."
        path="/bigisland/catering"
        ogImage="/img/bigisland/hero-catering.jpg"
        jsonLd={[serviceLd('Catering on the Big Island', 'Staffed catering for 10–75 guests — villa weddings, rehearsal dinners, estate events. From $150 a guest with 20% service on its own line.', '/bigisland/catering', 'Big Island'), faqLd(FAQ)]}
      />

      {/* Hero */}
      <HeroPanel
        src="/img/bigisland/hero-catering.jpg"
        alt="A staffed evening event on a black lava-rock terrace at night"
        eyebrow="Catering · 10–75 guests"
        title="Catering, in ledger form."
      >
        <p className="measure-site mt-6 text-ink-2">
          Ten to seventy-five guests, staffed, from $150 a guest. Villa weddings, rehearsal dinners and
          estate events that sit comfortably under the resort circuit’s food-and-beverage minimums.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link to={link('quote')} className="cta-site">
            Get a written quote
          </Link>
          <Link to={link('pricing')} className="cta-secondary-site">
            The rate card →
          </Link>
        </div>
      </HeroPanel>

      {/* Mono format index */}
      <section className="pb-[var(--site-section-pad)] md:pb-[var(--site-section-pad-desktop)]" aria-label="Formats">
        <div className="mx-auto max-w-6xl px-6">
          <Mono className="text-[11px] text-ink-2">FORMATS</Mono>
          <div className="mt-6">
            <LedgerRow label="FAMILY-STYLE — PLATTERS DOWN THE TABLE" value="FROM $150/GUEST" to={link('menus/family-style')} />
            <LedgerRow label="PLATED — COURSED SERVICE" value="$150–$225/GUEST" to={link('menus/signature-three-course')} />
            <LedgerRow label="STATIONS / PUPU SERVICE" value="QUOTED BY FORMAT" to={link('menus/pupu-and-grazing')} />
            <LedgerRow label="PACKAGED BAR CART — STAFFED" value="FROM $725/4HR" to={link('services/mobile-bar')} />
            <div className="rule-t" />
          </div>
        </div>
      </section>

      {/* Staffing ledger */}
      <section className="section-pad rule-t" aria-label="Staffing">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="h2-site">Staffing, on published lines.</h2>
          <div className="mt-8 grid gap-x-16 gap-y-0 md:grid-cols-2">
            <LedgerRow label="SERVER" value="$55/HR" to={link('services/staffing/servers')} />
            <LedgerRow label="SOUS CHEF" value="$75/HR" to={link('services/staffing')} />
            <LedgerRow label="BARTENDER" value="QUOTED" to={link('services/staffing/bartenders')} />
            <LedgerRow label="STAFFING FLOOR" value="4-HR MINIMUM" to={link('services/staffing')} />
          </div>
          <div className="rule-t" />
        </div>
      </section>

      {/* The comparison block — mono ledger */}
      <section className="section-pad rule-t" aria-label="The comparison">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site">The arithmetic, stated plainly.</h2>
          <div className="mt-8">
            <LedgerRow label="RESORT F&B MINIMUM" value="$7,500–$15,000/EVENT" />
            <LedgerRow label="RESORT SERVICE CHARGE" value="23–25%" />
            <LedgerRow label="MYCHEF FOOD" value="FROM $150/GUEST" />
            <LedgerRow label="MYCHEF SERVICE CHARGE" value="20% · ITS OWN LINE" />
            <div className="rule-t" />
          </div>
          <p className="measure-site mt-8 text-ink-2">
            For a 40-guest rehearsal dinner, that is not a nuance — it is the difference between a minimum
            you must hit and a bill you can read.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <Link to={link('compare/resort-wedding-vs-estate')} className="link-site">
              Resort vs estate, the math →
            </Link>
            <Link to={link('weddings')} className="link-site">
              Wedding catering →
            </Link>
          </div>
        </div>
      </section>

      {/* East-side posture */}
      <section className="section-pad rule-t" aria-label="East-side service">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site">East side: quoted, written, honored.</h2>
          <p className="measure-site mt-6 text-ink-2">
            Hilo and Volcano events are real work we genuinely do — but they are 2.5–3 hours from the Kona
            kitchen base, so east-side catering is quoted as its own document covering crew travel and
            timing. What we do not do is pretend the Saddle does not exist.
          </p>
          <Link to={link('pricing/east-side-quote')} className="link-site mt-6 inline-block">
            The east-side quote posture →
          </Link>
        </div>
      </section>

      {/* Retreat module */}
      <section className="section-pad rule-t" aria-label="Retreat catering">
        <div className="mx-auto max-w-3xl px-6">
          <Mono className="text-[11px] text-ink-2">RETREATS — VOLCANO / PUNA / HILO CORRIDOR</Mono>
          <h2 className="h2-site mt-4">East-side retreats, one premium incumbent, real whitespace.</h2>
          <p className="measure-site mt-6 text-ink-2">
            Protocol-labeled menus — plant-forward, raw, cleansing, gluten-free — for programs sleeping 8–30+.
            Quoted, written, honored: per-person per-day plans or chef-in-residence weeks from $950 a day.
          </p>
          <Link to={link('retreat-catering')} className="link-site mt-6 inline-block">
            Retreat catering →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad rule-t" aria-label="Catering questions">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site mb-8">Catering questions.</h2>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <BandQuote />
    </>
  );
}
