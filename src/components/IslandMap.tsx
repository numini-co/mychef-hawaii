import { useState } from 'react';
import { Link } from 'react-router';
import { ISLAND_IDS, SITE_META } from '@/platform/tokens';
import type { SiteId } from '@/platform/tokens';
import { RATES } from '@/platform/config';

/**
 * Stylized four-island outline map (design.md §10.0 map-hawaii.svg) rendered
 * inline so pins are interactive: hover/focus raises the pin and shows the
 * micro-card (name, CORE band, Stay Chef from-price). Click routes down.
 */
const ISLAND_SHAPES: Record<SiteId, { d: string; pin: [number, number]; label: [number, number] } | null> = {
  hub: null,
  kauai: {
    d: 'M120 65C150 65 175 90 175 120C175 152 150 177 118 175C88 173 66 150 67 119C68 89 92 65 120 65Z',
    pin: [121, 118],
    label: [121, 60],
  },
  oahu: {
    d: 'M255 140C285 148 305 165 300 190C295 212 270 225 245 218C222 212 208 192 215 170C222 150 235 135 255 140Z',
    pin: [256, 182],
    label: [256, 136],
  },
  maui: {
    d: 'M375 190C395 180 415 188 418 205C420 218 430 220 440 228C455 240 450 262 432 266C415 270 400 258 398 243C380 245 362 232 363 212C364 200 366 194 375 190Z',
    pin: [405, 226],
    label: [405, 182],
  },
  bigisland: {
    d: 'M490 225C530 220 575 240 590 275C600 305 585 345 550 362C515 378 465 372 440 345C418 320 420 280 445 252C458 237 470 228 490 225Z',
    pin: [505, 298],
    label: [505, 222],
  },
};

export default function IslandMap({ className = '' }: { className?: string }) {
  const [active, setActive] = useState<SiteId | null>(null);
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 640 420" role="img" aria-label="Map of the four islands we serve" className="w-full">
        {ISLAND_IDS.map((id) => {
          const shape = ISLAND_SHAPES[id];
          if (!shape) return null;
          const isActive = active === id;
          return (
            <g key={id}>
              <path
                d={shape.d}
                fill="none"
                stroke="var(--site-accent)"
                strokeWidth={isActive ? 2 : 1.25}
                className="motion-site"
                style={{ transitionProperty: 'stroke-width, opacity' }}
                opacity={isActive ? 1 : 0.65}
              />
              <text
                x={shape.label[0]}
                y={shape.label[1]}
                textAnchor="middle"
                fontSize="13"
                fontFamily="var(--font-accent)"
                fontWeight="500"
                letterSpacing="0.12em"
                fill="var(--site-ink2)"
                style={{ textTransform: 'uppercase' }}
              >
                {SITE_META[id].shortName}
              </text>
              <circle
                cx={shape.pin[0]}
                cy={isActive ? shape.pin[1] - 8 : shape.pin[1]}
                r={isActive ? 7 : 5}
                fill="var(--site-accent)"
                className="motion-site"
                style={{ transitionProperty: 'cy, r' }}
              />
            </g>
          );
        })}
      </svg>
      {/* Interactive pin layer (HTML for a11y + micro-cards) */}
      {ISLAND_IDS.map((id) => {
        const shape = ISLAND_SHAPES[id];
        if (!shape) return null;
        const left = `${(shape.pin[0] / 640) * 100}%`;
        const top = `${(shape.pin[1] / 420) * 100}%`;
        const isActive = active === id;
        return (
          <div key={id} className="absolute" style={{ left, top }}>
            <Link
              to={SITE_META[id].basePath}
              className="absolute -m-6 block h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full"
              aria-label={`${SITE_META[id].name} — open the island site`}
              onMouseEnter={() => setActive(id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(id)}
              onBlur={() => setActive(null)}
            />
            {isActive ? (
              <div
                className="card-site pointer-events-none absolute left-1/2 top-3 z-10 w-48 -translate-x-1/2 p-4"
                role="status"
              >
                <p className="font-display text-lg">{SITE_META[id].name}</p>
                <p className="tabular-site mt-1 text-sm text-ink-2">
                  Signature {RATES[id].coreBand}/guest
                </p>
                <p className="tabular-site text-sm text-ink-2">
                  Stay Chef from ${RATES[id].stayChefDay}/day
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
