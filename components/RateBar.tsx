'use client';

import { useEffect, useRef, type RefObject } from 'react';
import { usePathname } from 'next/navigation';
import { CtaLink } from '@/components/Cta';
import { useIsland } from '@/components/IslandProvider';
import { formatBand, formatFrom, getDayRate, getTiers } from '@/data/rateCard';
import { isInquiryIsland, primaryCtaLabel } from '@/data/islands';
import { DESK_WHATSAPP_PREFILL } from '@/lib/contact';
import { whatsappHref } from '@/lib/whatsapp';
import { localPathFromPathname } from '@/lib/switchPath';

/**
 * Sticky mobile published-rate + convert bar (hub + every island shell).
 * Hidden from md up. Quote / inquiry CTA, rate card, WhatsApp to the Hawaii desk.
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
      const hidden = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
      document.documentElement.style.setProperty('--rate-bar-h', hidden ? '0px' : `${el.offsetHeight}px`);
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    const mq = window.matchMedia('(min-width: 768px)');
    mq.addEventListener('change', sync);
    return () => {
      ro.disconnect();
      mq.removeEventListener('change', sync);
      document.documentElement.style.setProperty('--rate-bar-h', '0px');
    };
  }, [onQuote, islandId]);

  const inquiry = isInquiryIsland(islandId);
  const quoteLabel = islandId ? (inquiry ? primaryCtaLabel(islandId) : 'Get a quote') : 'Get a quote';
  const quoteHref = islandId ? href(`/quote?island=${islandId}`) : href('/quote');
  const pricingHref = href('/pricing');
  const waHref = whatsappHref(islandId, DESK_WHATSAPP_PREFILL);

  let teaser: string;
  if (!islandId) {
    teaser = 'From $125/guest · Stay Chef from $850/day';
    return (
      <Bar
        barRef={barRef}
        teaser={teaser}
        onQuote={onQuote}
        quoteLabel={quoteLabel}
        quoteHref={quoteHref}
        waHref={waHref}
        pricingHref={pricingHref}
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
      onQuote={onQuote}
      quoteLabel={quoteLabel}
      quoteHref={quoteHref}
      waHref={waHref}
      pricingHref={pricingHref}
    />
  );
}

function Bar({
  barRef,
  teaser,
  onQuote,
  quoteLabel,
  quoteHref,
  waHref,
  pricingHref,
}: {
  barRef: RefObject<HTMLDivElement | null>;
  teaser: string;
  onQuote: boolean;
  quoteLabel: string;
  quoteHref: string;
  waHref: string;
  pricingHref: string;
}) {
  return (
    <div
      ref={barRef}
      data-rate-bar="sticky-mobile"
      className="rate-bar-site fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="mx-auto flex max-w-spread items-center justify-between gap-3 px-4 py-2">
        <p className="min-w-0 truncate text-[12px] leading-snug text-mute">{teaser}</p>
        <div className="flex shrink-0 items-center gap-2">
          {onQuote ? (
            <CtaLink href={pricingHref} variant="primary" className="min-h-11 px-3 text-[13px]">
              Rate card
            </CtaLink>
          ) : (
            <CtaLink href={quoteHref} variant="primary" className="min-h-11 px-3 text-[13px]">
              {quoteLabel}
            </CtaLink>
          )}
          {!onQuote ? (
            <CtaLink href={pricingHref} variant="secondary" className="min-h-11 px-3 text-[13px]">
              Rate card
            </CtaLink>
          ) : null}
          <CtaLink
            href={waHref}
            variant="secondary"
            className="min-h-11 min-w-11 px-3 text-[13px]"
            aria-label="Message us on WhatsApp"
          >
            WA
          </CtaLink>
        </div>
      </div>
    </div>
  );
}
