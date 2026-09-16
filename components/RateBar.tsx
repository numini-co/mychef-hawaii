'use client';

import { useEffect, useRef, type RefObject } from 'react';
import { usePathname } from 'next/navigation';
import { CtaLink } from '@/components/Cta';
import { useIsland } from '@/components/IslandProvider';
import { formatBand, formatFrom, getDayRate, getTiers } from '@/data/rateCard';
import { isInquiryIsland, primaryCtaLabel } from '@/data/islands';
import { whatsappHref } from '@/lib/whatsapp';
import { localPathFromPathname } from '@/lib/switchPath';

/**
 * Sticky published-rate + convert bar (hub + every island shell).
 * Mirrors the island rate-card floors; never invents an 808.
 */
export default function RateBar() {
  const { islandId, hostMode, href } = useIsland();
  const pathname = usePathname();
  const local = localPathFromPathname(pathname || '/', islandId, hostMode);
  const onQuote = local === '/quote' || local.startsWith('/quote/');
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const sync = () => {
      document.documentElement.style.setProperty('--rate-bar-h', `${el.offsetHeight}px`);
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => {
      ro.disconnect();
      document.documentElement.style.setProperty('--rate-bar-h', '0px');
    };
  }, [onQuote, islandId]);

  const inquiry = isInquiryIsland(islandId);
  const quoteLabel = islandId ? (inquiry ? primaryCtaLabel(islandId) : 'Get a quote') : 'Get a quote';
  const quoteHref = href('/quote');
  const pricingHref = href('/pricing');
  const waHref = whatsappHref(islandId);

  let teaser: string;
  if (!islandId) {
    teaser = 'Private chef from $195/guest · Stay Chef from $1,250/day';
    const desktop = 'Statewide floors (Oʻahu) — Private chef from $195/guest · Stay Chef from $1,250/day';
    return (
      <Bar
        barRef={barRef}
        teaser={teaser}
        desktopTeaser={desktop}
        onQuote={onQuote}
        quoteLabel={quoteLabel}
        quoteHref={quoteHref}
        waHref={waHref}
        pricingHref={pricingHref}
        showRateCard
      />
    );
  }

  const core = getTiers(islandId).find((t) => t.tier === 'CORE');
  const day = getDayRate(islandId);
  const band = core ? formatBand(core) : '';
  teaser = `Signature ${band} · Stay Chef ${formatFrom(day.from)}/day`;

  return (
    <Bar
      barRef={barRef}
      teaser={teaser}
      desktopTeaser={teaser}
      onQuote={onQuote}
      quoteLabel={quoteLabel}
      quoteHref={quoteHref}
      waHref={waHref}
      pricingHref={pricingHref}
      showRateCard
    />
  );
}

function Bar({
  barRef,
  teaser,
  desktopTeaser,
  onQuote,
  quoteLabel,
  quoteHref,
  waHref,
  pricingHref,
  showRateCard,
}: {
  barRef: RefObject<HTMLDivElement | null>;
  teaser: string;
  desktopTeaser: string;
  onQuote: boolean;
  quoteLabel: string;
  quoteHref: string;
  waHref: string;
  pricingHref: string;
  showRateCard: boolean;
}) {
  return (
    <div
      ref={barRef}
      className="rate-bar-site fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="mx-auto flex max-w-spread flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-2.5 lg:px-10">
        <p className="min-w-0 truncate text-[12px] leading-snug text-mute sm:text-[13px]">
          <span className="sm:hidden">{teaser}</span>
          <span className="hidden sm:inline">{desktopTeaser}</span>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          {onQuote ? (
            showRateCard ? (
              <CtaLink href={pricingHref} variant="primary" className="min-h-11 px-4 text-[13px]">
                Rate card
              </CtaLink>
            ) : null
          ) : (
            <CtaLink href={quoteHref} variant="primary" className="min-h-11 px-4 text-[13px]">
              {quoteLabel}
            </CtaLink>
          )}
          <CtaLink href={waHref} variant="secondary" className="min-h-11 px-4 text-[13px]">
            WhatsApp
          </CtaLink>
          {showRateCard && !onQuote ? (
            <CtaLink
              href={pricingHref}
              variant="secondary"
              className="hidden min-h-11 px-4 text-[13px] sm:inline-flex"
            >
              Rate card
            </CtaLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}
