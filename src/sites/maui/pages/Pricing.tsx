/**
 * Maui /pricing (design/pricing.md — Maui row: "Fraunces feature rows →
 * detail table below fold of section; wedding-week worked-math example").
 * Includes the compact estimator — computes ONLY from the published rate
 * card, quote-only zones return the honest stance. ESTIMATE ONLY labeling.
 */
import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { Seo, breadcrumbLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FeeStack from '@/components/FeeStack';
import QuoteCTA from '@/components/QuoteCTA';
import { RateTable } from '@/components/RateTable';
import { content } from '../content';
import { MauiLink, MauiStyles } from './shared';

const record = content.find((r) => r.slug === 'pricing')!;

const FEATURE_ROWS = [
  { label: 'Villa dinner', value: '$150–$250 a guest' },
  { label: 'Stay Chef', value: 'from $1,050 a day' },
  { label: 'Wedding week', value: 'from $150 a guest + staffing' },
  { label: 'Date night', value: 'from $500' },
];

type Service = 'dinner' | 'premium' | 'staychef' | 'datenight';
const SERVICES: Record<Service, { label: string; low: number; high: number; per: 'guest' | 'day' | 'event' }> = {
  dinner: { label: 'Signature dinner — $150–$250/guest', low: 150, high: 250, per: 'guest' },
  premium: { label: 'Premium menu — $190–$275/guest', low: 190, high: 275, per: 'guest' },
  staychef: { label: 'Stay Chef — from $1,050/day', low: 1050, high: 1050, per: 'day' },
  datenight: { label: 'Date night — from $500', low: 500, high: 500, per: 'event' },
};

function Estimator() {
  const { link } = useSite();
  const [service, setService] = useState<Service>('dinner');
  const [guests, setGuests] = useState(8);
  const [days, setDays] = useState(3);
  const [servers, setServers] = useState(0);
  const [zone, setZone] = useState<'base' | 'upcountry' | 'north'>('base');

  const est = useMemo(() => {
    const s = SERVICES[service];
    const units = s.per === 'guest' ? guests : s.per === 'day' ? days : 1;
    const baseLow = s.low * units;
    const baseHigh = s.high * units;
    const staff = servers * 55 * 4;
    const travel = zone === 'upcountry' ? 75 : 0;
    const quoteOnly = zone === 'north';
    const lo = baseLow + staff + travel;
    const hi = baseHigh + staff + travel;
    return { lo, hi, quoteOnly };
  }, [service, guests, days, servers, zone]);

  const money = (n: number) => `$${n.toLocaleString('en-US')}`;

  return (
    <div className="card-site p-6 md:p-10" style={{ background: 'var(--site-surface)' }}>
      <p className="eyebrow-site mb-6">RUN YOUR OWN NUMBERS</p>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Service</span>
          <select
            value={service}
            onChange={(e) => setService(e.target.value as Service)}
            className="w-full border bg-transparent px-3 py-2 text-base"
            style={{ borderColor: 'var(--site-line)', borderRadius: 'var(--site-cta-radius)' }}
          >
            {(Object.keys(SERVICES) as Service[]).map((k) => (
              <option key={k} value={k}>{SERVICES[k].label}</option>
            ))}
          </select>
        </label>
        {SERVICES[service].per === 'guest' ? (
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Guests — {guests}</span>
            <input
              type="range" min={2} max={75} value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full accent-[#A65B38]"
              aria-label="Guest count"
            />
          </label>
        ) : SERVICES[service].per === 'day' ? (
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Days — {days}</span>
            <input
              type="range" min={1} max={7} value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full accent-[#A65B38]"
              aria-label="Number of days"
            />
          </label>
        ) : (
          <div />
        )}
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Servers ($55/hr, 4-hr floor) — {servers}</span>
          <input
            type="range" min={0} max={8} value={servers}
            onChange={(e) => setServers(Number(e.target.value))}
            className="w-full accent-[#A65B38]"
            aria-label="Number of servers"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Zone</span>
          <select
            value={zone}
            onChange={(e) => setZone(e.target.value as typeof zone)}
            className="w-full border bg-transparent px-3 py-2 text-base"
            style={{ borderColor: 'var(--site-line)', borderRadius: 'var(--site-cta-radius)' }}
          >
            <option value="base">Wailea–Mākena / Kāʻanapali–Kapalua (base)</option>
            <option value="upcountry">Upcountry (travel from $75)</option>
            <option value="north">Pāʻia / Haʻikū (quoted at inquiry)</option>
          </select>
        </label>
      </div>
      <div className="rule-t mt-8 pt-6" aria-live="polite">
        {est.quoteOnly ? (
          <p className="font-display text-xl" style={{ fontWeight: 400 }}>
            Quoted at inquiry — the North Shore drive and provisioning pattern deserves an honest line, not a
            padded average.
          </p>
        ) : (
          <>
            <p className="font-display tabular-site" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 300 }}>
              {money(est.lo)}{est.hi !== est.lo ? `–${money(est.hi)}` : ''}
            </p>
            <p className="mt-2 text-sm text-ink-2">
              + 20% service and + Hawaiʻi GET up to 4.7120%, each on its own line. Groceries inside the
              dinner band; at cost with receipts on Stay Chef weeks.
            </p>
          </>
        )}
        <p className="mt-4 text-sm font-medium">ESTIMATE ONLY — the written quote is the confirmed total.</p>
        <div className="mt-6">
          <Link to={link('quote')} className="cta-site">Get the written quote</Link>
        </div>
      </div>
    </div>
  );
}

export default function MauiPricing() {
  const { link } = useSite();
  return (
    <article>
      <Seo
        title={record.title}
        description={record.meta.description}
        path={link('pricing')}
        jsonLd={[breadcrumbLd([{ name: 'Maui', path: link('') }, { name: record.h1, path: link('pricing') }])]}
      />
      <MauiStyles />

      <header className="section-pad mx-auto max-w-4xl px-6">
        <p className="eyebrow-site">PUBLISHED PRICES · MAUI</p>
        <h1 className="h1-site measure-site mt-4">What a Maui week costs, in writing.</h1>
        <p className="measure-site mt-6 text-lg text-ink-2">
          Every number on this page is published and honored. The written quote is the confirmed total —
          never a chat estimate.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link to={link('quote')} className="cta-site">Get a written quote</Link>
          <Link to={link('private-chef')} className="cta-secondary-site">What the week includes →</Link>
        </div>

        {/* Fraunces feature rows */}
        <div className="mt-14 space-y-7">
          {FEATURE_ROWS.map((r, i) => (
            <SectionReveal key={r.label} delay={i * 150}>
              <p className="font-display tabular-site" style={{ fontSize: 'clamp(26px, 4.5vw, 44px)', fontWeight: 300 }}>
                {r.label} <span style={{ color: 'var(--site-accent-text)' }}>{r.value}</span>
              </p>
            </SectionReveal>
          ))}
        </div>

        {/* Detail table below the fold of the section */}
        <SectionReveal className="mt-16">
          <RateTable
            title="The Maui rate card"
            rows={[
              { label: 'Signature dinner', value: '$150–$250 /guest', note: 'Groceries inside the band' },
              { label: 'Premium menu', value: '$190–$275 /guest' },
              { label: 'Chef’s table', value: '$275–$400+ /guest', note: 'Quoted format' },
              { label: 'Stay Chef', value: 'from $1,050 /day', note: 'Groceries at cost with receipts' },
              { label: 'Date night', value: 'from $500', note: 'Dinner for two' },
              { label: 'Wedding week', value: 'from $150 /guest', note: 'Plus staffing' },
              { label: 'Packaged bar cart', value: 'from $800 /4hr', note: 'Alcohol client-supplied or licensed referral' },
              { label: 'Server / sous chef', value: '$55 / $75 per hour', note: 'Four-hour floor' },
              { label: 'Travel', value: 'from $75', note: 'Upcountry; Pāʻia/Haʻikū quoted at inquiry' },
            ]}
          />
          <FeeStack className="mt-8" />
        </SectionReveal>
      </header>

      {/* Worked-math panel */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <SectionReveal>
          <div className="card-site p-8 md:p-10" style={{ background: 'var(--site-surface)' }}>
            <p className="eyebrow-site mb-4">WORKED MATH · 60-GUEST WEDDING WEEK</p>
            <p className="font-display text-xl md:text-2xl" style={{ fontWeight: 400 }}>
              Welcome $9,000 + rehearsal $4,500 + reception $12,000 + brunch $6,000 = $31,500
            </p>
            <p className="mt-4 text-ink-2">
              In food lines, before staffing, service, and GET — illustrative math on published rates. The
              resort alternative runs $7,500–$15,000 F&amp;B minimums per event at 23–25% service. Our service
              charge is 20%, on its own line; on this week, the five-point gap alone is $1,575.
            </p>
            <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <MauiLink to={link('weddings/wedding-week-budget')}>The full budget →</MauiLink>
              <MauiLink to={link('weddings/service-charge-comparison')}>The service-charge wedge →</MauiLink>
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* Estimator */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="h2-site mb-8">The estimator.</h2>
        <Estimator />
      </section>

      {/* Cost drivers + comparison */}
      <section className="mx-auto grid max-w-4xl gap-12 px-6 pb-24 md:grid-cols-2">
        <SectionReveal>
          <h2 className="h2-site">What moves the number</h2>
          <ul className="mt-5 space-y-2">
            {[
              'Guest count — the per-guest line scales linearly',
              'Menu tier — premium proteins move you up the band',
              'Hawaiʻi groceries — 31–53% above mainland, visible in receipts',
              'Date — holiday surcharges are published ahead, never invented',
              'Crew — staffing hourlys are separate, itemized lines',
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <span aria-hidden="true" style={{ color: 'var(--site-accent-text)' }}>—</span>
                <span className="text-ink-2">{x}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
        <SectionReveal delay={120}>
          <h2 className="h2-site">The comparison</h2>
          <p className="mt-5 text-ink-2">
            Maui’s published market norms run $80–$120 a head for buffets and $120–$200 for plated dinners,
            with 18–22% service charges; resort programs add $7,500–$15,000 F&amp;B minimums at 23–25%. Our
            lines start at $150 a guest with 20% service — itemized, never bundled.
          </p>
          <p className="mt-5">
            <MauiLink to={link('private-chef-cost')}>The full cost anatomy →</MauiLink>
          </p>
        </SectionReveal>
      </section>

      <QuoteCTA cta={record.cta} heading="Get it in writing" />
    </article>
  );
}
