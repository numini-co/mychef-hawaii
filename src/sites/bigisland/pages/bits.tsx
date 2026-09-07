/**
 * Shared building blocks for the Big Island bespoke pages (design.md §3.5 —
 * Volcanic Minimalism). Token-driven only: zero color/radius/motion literals.
 * The two-state accent-text token (#C8603F on basalt, #A24A2E on the light
 * band) and the inverted band CTA are applied by the scoped rule injected in
 * ../index.ts — every component here just consumes the site vars.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { RATES } from '@/platform/config';
import FeeStack from '@/components/FeeStack';

const R = RATES.bigisland;

/** Mono uppercase label (IBM Plex Mono via --font-accent). */
export function Mono({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <span className={`font-accent-site uppercase tracking-[0.14em] ${className}`}>{children}</span>;
}

/** A ledger row: hairline rule, mono label left, mono value right. Hover: hairline → lehua. */
export function LedgerRow({
  label,
  value,
  to,
  note,
}: {
  label: string;
  value?: string;
  to?: string;
  note?: string;
}) {
  const inner = (
    <>
      <span className="pr-6">
        {label}
        {note ? <span className="mt-1 block text-[11px] normal-case tracking-normal text-ink-2">{note}</span> : null}
      </span>
      {value ? <span className="ml-auto whitespace-nowrap pl-6 text-right">{value}</span> : null}
    </>
  );
  const cls =
    'rule-t flex items-baseline py-4 font-accent-site text-[12px] uppercase tracking-[0.14em] transition-colors duration-100 hover:border-[var(--site-accent)]';
  return to ? (
    <Link to={to} className={`${cls} block`} style={{ textDecoration: 'none', color: 'inherit' }}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

/** Edge-to-edge 16:10 media panel (0 radius, no chrome). Mobile crops 4:5. */
export function Panel({
  src,
  alt,
  className = '',
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <figure className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        className="aspect-[4/5] w-full object-cover object-bottom md:aspect-[16/10]"
      />
    </figure>
  );
}

/**
 * Page-opening hero. The image is the ground, not the message: it is capped
 * below viewport height and the headline, the price line and the CTAs sit on
 * it over a basalt scrim, so the fold always states what this page sells.
 */
export function HeroPanel({
  src,
  alt,
  eyebrow,
  title,
  children,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  /** Supporting line and calls to action. */
  children: React.ReactNode;
}) {
  return (
    <section className="-mt-[var(--nav-h)] relative isolate" aria-label={eyebrow}>
      <img
        src={src}
        alt={alt}
        loading="eager"
        fetchPriority="high"
        className="h-[100svh] max-h-none min-h-[520px] w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, var(--site-bg) 4%, color-mix(in srgb, var(--site-bg) 94%, transparent) 34%, color-mix(in srgb, var(--site-bg) 62%, transparent) 52%, color-mix(in srgb, var(--site-bg) 18%, transparent) 74%, transparent 92%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-6xl px-6 pb-12 md:pb-16">
          {/* Cream, not lehua: the accent only clears AA on flat basalt, and a
              hero photo is never flat. */}
          <Mono className="text-[12px] text-ink">{eyebrow}</Mono>
          <h1 className="h1-site mt-4 max-w-4xl">{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
}

/**
 * The light-band quote block (design §3.5: CTA inverts on the band).
 * Scoped var overrides in ../index.ts flip --site-cta-* inside .band-site.
 */
export function BandQuote({
  heading = 'Get a written quote',
  note = 'We quote east-side service in writing because the island is big and permits are per-island. That is the whole reason.',
}: {
  heading?: string;
  note?: string;
}) {
  const { link } = useSite();
  return (
    <section className="band-site">
      <div className="section-pad mx-auto max-w-6xl px-6">
        <Mono className="text-[11px] text-ink-2">QUOTE — FIVE FIELDS, TWO MINUTES</Mono>
        <h2 className="h2-site mt-4 max-w-2xl">{heading}</h2>
        <p className="measure-site mt-5 text-ink-2">{note}</p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link to={link('quote')} className="cta-site">
            Get a written quote
          </Link>
          <Link to={link('pricing')} className="cta-secondary-site">
            The rate card →
          </Link>
        </div>
        <FeeStack mono className="mt-12" />
      </div>
    </section>
  );
}

/** The published rate ledger — one source, reused by home + pricing. */
export const RATE_ROWS = [
  { label: 'ENTRY', value: 'FROM $110/GUEST' },
  { label: 'CORE — THE VILLA DINNER', value: `${R.coreBand}/GUEST` },
  { label: 'PREMIUM', value: '$190–$275/GUEST' },
  { label: "CHEF'S TABLE", value: '$275–$400+/GUEST' },
  { label: 'DATE NIGHT', value: R.dateNight.toUpperCase() },
  { label: 'STAY CHEF', value: `FROM $${R.stayChefDay}/DAY` },
  { label: 'WEDDING WEEK', value: 'FROM $150/GUEST + STAFFING' },
  { label: 'PACKAGED BAR CART', value: `FROM ${R.barCart.replace('/4hr', '')}/4HR` },
  { label: 'SERVER', value: '$55/HR' },
  { label: 'SOUS CHEF', value: '$75/HR' },
  { label: 'STAFFING FLOOR', value: '4-HR MINIMUM' },
  { label: 'TRAVEL OUTSIDE KONA–KOHALA', value: 'FROM $75' },
  { label: 'EAST SIDE — HILO · VOLCANO · WAIMEA', value: 'QUOTED' },
] as const;

/** The corridor field-data index (design/home-bigisland.md §S4). */
export const CORRIDOR = [
  { tag: '19.64° N', name: 'KAILUA-KONA', meta: 'BASE ZONE', to: 'locations/kona' },
  { tag: '19.55° N', name: 'KEAUHOU', meta: '15 MIN', to: 'locations/keauhou' },
  { tag: '19.92° N', name: 'WAIKOLOA', meta: '35 MIN', to: 'locations/waikoloa' },
  { tag: '19.98° N', name: 'MAUNA LANI', meta: '40 MIN', to: 'locations/mauna-lani' },
  { tag: '20.00° N', name: 'MAUNA KEA / HAPUNA', meta: '45 MIN', to: 'locations/mauna-kea' },
  { tag: '19.79° N', name: 'HUALĀLAI / KUKIO / KOHANAIKI', meta: 'GATED — REFERRAL + CHEF TRAVEL', to: 'locations/hualalai' },
] as const;

export const EAST = [
  { tag: '19.68° N', name: 'WAIMEA / KAMUELA', meta: '60–75 MIN · QUOTED', to: 'locations/waimea-kamuela' },
  { tag: '19.62° N', name: 'VOLCANO', meta: '2 HR 20 MIN+ · QUOTED', to: 'locations/volcano' },
  { tag: '19.72° N', name: 'HILO', meta: '2 HR 30 MIN – 3 HR · QUOTED', to: 'locations/hilo' },
] as const;

export { R };
