'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { islandHref } from '@/lib/paths';
import { quotePath } from '@/lib/paths';
import { islandOrder, islands, primaryCtaLabel, type IslandId } from '@/data/islands';
import {
  computeEstimate,
  ESTIMATE_SERVICES,
  formatEstimateRange,
  formatMoney,
  getServiceDef,
  GET_LABEL,
  MAX_GUESTS,
  MIN_GUESTS,
  tierOptions,
  type DinnerTier,
  type EstimateService,
} from '@/lib/estimate';

function Stepper({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  const set = (v: number) => onChange(Math.max(min, Math.min(max, v)));
  return (
    <div>
      <span className="block text-[12px] font-medium text-ink">{label}</span>
      <div className="mt-3 inline-flex items-stretch border border-line rounded-[2px]">
        <button
          type="button"
          aria-label={`Decrease ${label.toLowerCase()}`}
          onClick={() => set(value - 1)}
          className="flex h-11 w-11 items-center justify-center text-[18px] text-ink hover:bg-sand/40"
        >
          –
        </button>
        <input
          type="number"
          inputMode="numeric"
          aria-label={label}
          min={min}
          max={max}
          value={value}
          onChange={(e) => set(parseInt(e.target.value, 10) || min)}
          className="h-11 w-16 border-x border-line bg-paper text-center text-[1rem] text-ink focus:outline-none focus:ring-1 focus:ring-ink [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          type="button"
          aria-label={`Increase ${label.toLowerCase()}`}
          onClick={() => set(value + 1)}
          className="flex h-11 w-11 items-center justify-center text-[18px] text-ink hover:bg-sand/40"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function CostEstimator({
  islandId,
  hostMode,
}: {
  islandId: IslandId | null;
  hostMode: boolean;
}) {
  const [island, setIsland] = useState<IslandId>(islandId ?? 'oahu');
  const activeIsland = hostMode && islandId ? islandId : island;
  const [service, setService] = useState<EstimateService>('signature-dinner');
  const [guests, setGuests] = useState(6);
  const [tier, setTier] = useState<DinnerTier>('CORE');
  const [days, setDays] = useState(4);
  const [weeks, setWeeks] = useState(1);

  const def = getServiceDef(service);
  const tiers = useMemo(() => tierOptions(activeIsland), [activeIsland]);

  const result = useMemo(
    () => computeEstimate({ island: activeIsland, service, guests, tier, days, weeks }),
    [activeIsland, service, guests, tier, days, weeks],
  );

  const href = (path: string) => islandHref(hostMode ? activeIsland : null, hostMode, path);
  const quoteHref = hostMode
    ? href('/quote')
    : quotePath(activeIsland, service === 'weekly-household' ? 'weekly-household' : service);

  const fee = (low: number, high: number) => formatEstimateRange(low, high, result.fromOnly);

  return (
    <div className="mx-auto grid w-full max-w-container gap-10 px-5 py-14 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-10 lg:py-20">
      {/* Inputs */}
      <form className="space-y-8" aria-label="Estimate inputs">
        {!hostMode && (
          <div>
            <span className="block text-[12px] font-medium text-ink">Island</span>
            <div role="group" className="mt-3 flex flex-wrap gap-2">
              {islandOrder.map((id) => {
                const selected = activeIsland === id;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setIsland(id)}
                    className={cn(
                      'inline-flex h-10 items-center border px-4 text-sm font-medium rounded-[2px]',
                      selected ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink hover:border-ink',
                    )}
                  >
                    {islands[id].shortName}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div>
          <label htmlFor="est-service" className="block text-[12px] font-medium text-ink">
            Service
          </label>
          <p className="mt-1.5 text-[12px] leading-4 text-mute">{def.blurb}</p>
          <select
            id="est-service"
            value={service}
            onChange={(e) => setService(e.target.value as EstimateService)}
            className="mt-3 w-full appearance-none border border-line bg-paper px-4 py-3 text-[1rem] text-ink rounded-[2px] focus:outline-none focus:ring-1 focus:ring-ink"
          >
            {ESTIMATE_SERVICES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {def.needs === 'guests-tier' && (
          <>
            <div>
              <label htmlFor="est-tier" className="block text-[12px] font-medium text-ink">
                Menu tier
              </label>
              <p className="mt-1.5 text-[12px] leading-4 text-mute">
                Entry to chef’s-table halo. Published bands for {islands[activeIsland].name}.
              </p>
              <select
                id="est-tier"
                value={tier}
                onChange={(e) => setTier(e.target.value as DinnerTier)}
                className="mt-3 w-full appearance-none border border-line bg-paper px-4 py-3 text-[1rem] text-ink rounded-[2px] focus:outline-none focus:ring-1 focus:ring-ink"
              >
                {tiers.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <Stepper label="Guests" value={guests} min={MIN_GUESTS} max={MAX_GUESTS} onChange={setGuests} />
          </>
        )}

        {(def.needs === 'guests' || def.needs === 'guests-bar') && (
          <Stepper label="Guests" value={guests} min={MIN_GUESTS} max={MAX_GUESTS} onChange={setGuests} />
        )}

        {def.needs === 'days' && (
          <Stepper label="Days with a chef" value={days} min={1} max={21} onChange={setDays} />
        )}

        {def.needs === 'weeks' && (
          <Stepper label="Weeks" value={weeks} min={1} max={12} onChange={setWeeks} />
        )}

        {def.needs === 'fixed-two' && (
          <p className="text-[13px] leading-5 text-mute">
            A table for two is a fixed per-event price — guest count is set at two.
          </p>
        )}
      </form>

      {/* Result */}
      <div className="border border-line bg-paper p-6 lg:p-8">
        <p className="text-[12px] uppercase tracking-[0.14em] text-mute">Estimated range</p>
        <p className="mt-2 font-display text-[clamp(2rem,5vw,3rem)] font-light leading-[1.05] text-ink">
          {fee(result.totalLow, result.totalHigh)}
        </p>
        <p className="mt-2 text-[13px] text-mute">{result.baseLabel} · {islands[activeIsland].name}</p>

        <dl className="mt-7 divide-y divide-line border-y border-line text-[15px]">
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-mute">Menu / base</dt>
            <dd className="text-ink">{fee(result.subtotalLow, result.subtotalHigh)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-mute">Service charge (20%)</dt>
            <dd className="text-ink">{fee(result.serviceLow, result.serviceHigh)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-mute">Hawaiʻi GET (up to {GET_LABEL})</dt>
            <dd className="text-ink">{fee(result.getLow, result.getHigh)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="font-medium text-ink">Estimated total</dt>
            <dd className="font-medium text-ink">{fee(result.totalLow, result.totalHigh)}</dd>
          </div>
        </dl>

        <p className="mt-4 text-[13px] leading-5 text-mute">{result.baseModel}</p>

        {result.atCost.length > 0 && (
          <div className="mt-4 border-l-2 border-brass/70 pl-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-mute">Billed at cost — not in the total</p>
            <ul className="mt-1.5 space-y-1 text-[13px] leading-5 text-mute">
              {result.atCost.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        )}

        {result.notes.map((n) => (
          <p key={n} className="mt-4 text-[13px] leading-5 text-mute">
            {n}
          </p>
        ))}

        <div className="mt-7 border-t border-line pt-6">
          <p className="text-[13px] leading-5 text-ink">
            This is an estimate from published starting prices — not a booking price. Your written quote is the
            confirmed total, itemised line by line. Gratuity is always voluntary and never in the bill.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Link
              href={quoteHref}
              className="inline-flex h-12 items-center justify-center bg-ink px-6 text-[14px] font-medium text-paper rounded-[2px] transition-transform duration-200 hover:scale-[1.02]"
            >
              {primaryCtaLabel(activeIsland)}
            </Link>
            <Link href={href('/pricing')} className="text-sm text-ink underline underline-offset-4">
              See the full rate card
            </Link>
          </div>
          <p className="mt-3 text-[12px] text-mute">
            Estimate figures come straight from {formatMoney(result.subtotalLow)}+ base on the published card. No account, no payment.
          </p>
        </div>
      </div>
    </div>
  );
}
