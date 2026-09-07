/**
 * Big Island homepage (design/home-bigisland.md — 11-section wireframe).
 * Sequence tell: corridor → ledger → geography. Basalt default; the light
 * band interrupts twice (rate ledger, quote). One lehua element per viewport;
 * the single text-lehua is the "Kona–Kohala" link in the hero sub.
 */
import { Link } from 'react-router';
import { Seo, foodServiceLd, faqLd } from '@/platform/seo';
import { useSite } from '@/platform/IslandProvider';
import TrustStrip from '@/components/TrustStrip';
import SectionReveal from '@/components/SectionReveal';
import { BandQuote, CORRIDOR, EAST, LedgerRow, Mono, HeroPanel, Panel, RATE_ROWS } from './bits';

const HOME_FAQ = [
  {
    q: 'How much is a private chef on the Big Island?',
    a: 'CORE villa dinners run $150–$225 a guest with groceries inside the band; the ENTRY tier starts from $110. Date Night starts from $550 and Stay Chef from $950 a day. The written quote is the confirmed total.',
  },
  {
    q: 'Do you serve Hilo and the east side?',
    a: 'Yes — quoted in writing, never implied. Kona to Hilo is 2.5–3 hours over the Saddle, so east-side service carries the crew logistics as a readable line. The food prices are identical island-wide.',
  },
  {
    q: 'Are groceries included?',
    a: 'On per-guest dinners, yes — inside the band. Stay Chef weeks bill groceries at cost with receipts. Either way, receipts on request.',
  },
  {
    q: 'Can you cook at Hualālai, Kukio, or Kohanaiki?',
    a: 'Yes — those communities are gated, and access comes through your host or concierge. We come with the referral and handle vendor registration directly.',
  },
];

const PANELS = [
  { label: 'VILLA DINNER', line: 'Coursed, in your kitchen, kitchen left clean.', price: 'FROM $150/GUEST', img: '/img/bigisland/panel-villa-dinner.jpg', alt: 'A plated course on dark stone at night under a single practical light', to: 'private-chef' },
  { label: 'STAY CHEF', line: 'One chef, your kitchen, the whole week.', price: 'FROM $950/DAY', img: '/img/bigisland/panel-stay-chef.jpg', alt: 'A villa kitchen at dawn with black counters in hard side light', to: 'stay-chef' },
  { label: 'DATE NIGHT', line: 'Two seats, the sunset, nobody else.', price: 'FROM $550', img: '/img/bigisland/panel-date-night.jpg', alt: 'Two plates on a dark basalt table with a single candle', to: 'services/date-night' },
  { label: 'WEDDING WEEK', line: 'Five meals, one crew, one written quote.', price: 'FROM $150/GUEST + STAFFING', img: '/img/bigisland/panel-wedding.jpg', alt: 'A long reception table at night lit by candles on a lava-rock estate', to: 'weddings' },
] as const;

export default function BigIslandHome() {
  const { link } = useSite();
  return (
    <>
      <Seo
        title="Private Chef Big Island — Kona–Kohala | myCHEF"
        description="Private chef service on Hawaiʻi Island, Kona–Kohala first. Villa dinners $150–$225 a guest, ENTRY from $110, Stay Chef from $950 a day. The written quote is the confirmed total."
        path="/bigisland"
        ogImage="/img/bigisland/hero-home.jpg"
        jsonLd={[foodServiceLd(), faqLd(HOME_FAQ)]}
      />

      {/* S2 — Hero: the image carries the headline, the price and the way in */}
      <HeroPanel
        src="/img/bigisland/hero-home.jpg"
        alt="A single plated course on a slab of black lava with the ocean line behind, in golden-hour Kona light"
        eyebrow="Private chef · Hawaiʻi Island"
        title="Private chef, Big Island."
      >
        <p className="measure-site mt-6 text-ink-2">
          <Link to={link('locations')} className="link-site">
            Kona–Kohala
          </Link>{' '}
          first. Villa dinners $150–$225 a guest, ENTRY from $110. Stay Chef from $950 a day. The written
          quote is the confirmed total.
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

      {/* S3 — Trust strip, mono hairline rows on basalt */}
      <div className="font-accent-site text-[12px] uppercase tracking-[0.12em] text-ink-2">
        <TrustStrip />
      </div>

      {/* S4 — Corridor band: mono field-data index */}
      <section className="section-pad" aria-label="Service corridor">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="h2-site">The corridor.</h2>
          <div className="mt-10 grid gap-x-16 md:grid-cols-2">
            <div>
              <Mono className="text-[11px] text-ink-2">WEST — KONA–KOHALA · BASE ZONE</Mono>
              <div className="mt-4">
                {CORRIDOR.map((c) => (
                  <LedgerRow key={c.name} label={`${c.tag} — ${c.name}`} value={c.meta} to={link(c.to)} />
                ))}
                <div className="rule-t" />
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <Mono className="text-[11px] text-ink-2">EAST — ITS OWN WRITTEN QUOTE</Mono>
              <div className="mt-4">
                {EAST.map((c) => (
                  <LedgerRow key={c.name} label={`${c.tag} — ${c.name}`} value={c.meta} to={link(c.to)} />
                ))}
                <div className="rule-t" />
              </div>
              <p className="mt-6 max-w-md text-sm text-ink-2">
                Hualālai, Kukio, Kohanaiki: access comes through your host or concierge. We come with the
                referral.
              </p>
            </div>
          </div>
          <Panel
            src="/img/bigisland/corridor-kona.jpg"
            alt="Low horizontal resort architecture against a cooled lava field at dusk on the Kona coast"
            className="mt-16"
          />
        </div>
      </section>

      {/* S5 — The rate card: the page's first light interruption */}
      <section className="band-site" aria-label="Rate card">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <h2 className="h2-site">The rate card.</h2>
          <div className="mt-10 grid gap-x-16 gap-y-4 md:grid-cols-2">
            {RATE_ROWS.map((r) => (
              <LedgerRow key={r.label} label={r.label} value={r.value} />
            ))}
          </div>
          <div className="rule-t mt-4" />
          <p className="mt-6 max-w-xl text-sm text-ink-2">
            Groceries inside the per-guest band. Receipts on request. 20% service and Hawaiʻi GET up to
            4.7120% always on their own lines.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link to={link('pricing')} className="cta-site">
              The full rate card
            </Link>
            <Link to={link('pricing/travel-zones')} className="cta-secondary-site">
              Travel zones →
            </Link>
          </div>
        </div>
      </section>

      {/* S6 — Geography honesty panel, back to basalt */}
      <section className="section-pad" aria-label="Geography">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="h2-site">4,028 square miles.</h2>
          <p className="measure-site mt-8 text-ink-2">
            Kona to Hilo is 2.5–3 hours over the Saddle. East-side service — Hilo, Volcano, Waimea — is its
            own written quote, never implied. We would rather tell you that here than surprise you in one.
          </p>
          <div className="mt-10 space-y-0">
            <LedgerRow label="WHALE SEASON" value="DEC → APR" />
            <LedgerRow label="IRONMAN WORLD CHAMPIONSHIP" value="OCT" />
            <LedgerRow label="MERRIE MONARCH" value="SPRING · HILO" />
            <div className="rule-t" />
          </div>
          <Link to={link('guides/kona-hilo-logistics')} className="link-site mt-8 inline-block">
            The Kona–Hilo logistics guide →
          </Link>
        </div>
      </section>

      {/* S7 — Wedding & event band */}
      <section className="section-pad rule-t" aria-label="Weddings">
        <div className="mx-auto max-w-6xl px-6">
          <Mono className="text-[11px] text-ink-2">WEDDINGS</Mono>
          <h3 className="h2-site mt-4">The wedding week, under the resort minimums.</h3>
          <p className="measure-site mt-6 text-ink-2">
            From $150 a guest + staffing. Resort F&amp;B minimums run $7,500–$15,000 per event with 23–25%
            service charges. Our service charge is 20%, on its own line.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link to={link('weddings/wedding-week')} className="link-site">
              The wedding week →
            </Link>
            <Link to={link('compare/resort-wedding-vs-estate')} className="link-site">
              Resort vs estate, the math →
            </Link>
          </div>
        </div>
      </section>

      {/* S8 — Experience index: 16:10 edge-to-edge stacked panels, not cards */}
      <section aria-label="Experiences">
        {PANELS.map((p) => (
          <SectionReveal key={p.label}>
            <Link to={link(p.to)} className="group block" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Panel src={p.img} alt={p.alt} />
              <div className="rule-t flex flex-wrap items-baseline gap-x-8 gap-y-2 px-6 py-5 transition-colors duration-100 group-hover:border-[var(--site-accent)]">
                <Mono className="text-[12px]">{p.label}</Mono>
                <span className="text-sm text-ink-2">{p.line}</span>
                <Mono className="ml-auto text-[12px] text-ink-2">{p.price}</Mono>
              </div>
            </Link>
          </SectionReveal>
        ))}
      </section>

      {/* S9 — How it works */}
      <section className="section-pad" aria-label="How it works">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site">How it works.</h2>
          <ol className="mt-12 space-y-10">
            {[
              'Five fields, two minutes.',
              'Written quote — the confirmed total.',
              '50% deposit locks the date.',
              'We cook. We clean. We go.',
            ].map((step, i) => (
              <li key={step} className="flex items-baseline gap-8">
                <Mono className="text-[13px] text-ink-2">{String(i + 1).padStart(2, '0')}</Mono>
                <span className="font-display text-2xl md:text-3xl" style={{ letterSpacing: 'var(--site-display-tracking)' }}>
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* S10 — Quote block: second light band */}
      <BandQuote />
    </>
  );
}
