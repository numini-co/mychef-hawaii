import { QuoteCta, WhatsAppCta } from '@/components/Cta';
import type { IslandId } from '@/data/islands';
import { DESK_EMAIL, DESK_MAILTO, DESK_PHONE_DISPLAY, DESK_TEL } from '@/lib/contact';

export default function QuoteTeaser({
  headline = 'Tell us where you’re dining.',
  island,
}: {
  headline?: string;
  island?: IslandId | null;
}) {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
        <h2 className="max-w-[18ch] font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.08] text-paper">
          {headline}
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <QuoteCta island={island} variant="light" />
          <WhatsAppCta island={island} variant="ghost" />
          <a
            href={DESK_TEL}
            className="inline-flex min-h-12 items-center text-[14px] font-medium text-paper underline decoration-paper/50 underline-offset-[6px]"
          >
            {DESK_PHONE_DISPLAY}
          </a>
          <a
            href={DESK_MAILTO}
            className="inline-flex min-h-12 items-center text-[14px] font-medium text-paper underline decoration-paper/50 underline-offset-[6px]"
          >
            {DESK_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
