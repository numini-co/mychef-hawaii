import { CtaLink, EnquireCta, WhatsAppCta } from '@/components/Cta';
import { DESK_EMAIL, DESK_MAILTO } from '@/lib/contact';
import { WHATSAPP_DISPLAY, whatsappHref } from '@/lib/whatsapp';
import type { IslandId } from '@/data/islands';

/**
 * Hawaii-facing contact order: Get a quote → WhatsApp → desk email.
 * No 808. Email is the published quotes desk.
 */
export default function ContactCluster({
  island,
  compact = false,
}: {
  island?: IslandId | null;
  compact?: boolean;
}) {
  const quoteHref = island ? `/quote?island=${island}` : '/quote';

  if (compact) {
    return (
      <p className="text-sm leading-relaxed text-on-ink">
        <a className="underline underline-offset-4" href={quoteHref}>
          Get a quote
        </a>
        <span className="mx-2 text-white/30" aria-hidden>
          ·
        </span>
        <a
          className="underline underline-offset-4"
          href={whatsappHref(island)}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp {WHATSAPP_DISPLAY}
        </a>
        <span className="mx-2 text-white/30" aria-hidden>
          ·
        </span>
        <a className="underline underline-offset-4" href={DESK_MAILTO}>
          {DESK_EMAIL}
        </a>
      </p>
    );
  }

  return (
    <section className="border-t border-line bg-paper py-16">
      <div className="mx-auto flex w-full max-w-container flex-col gap-6 px-5 lg:px-10">
        <p className="text-[12px] uppercase tracking-[0.18em] text-mute">Reach the desk</p>
        <p className="max-w-[46ch] text-[17px] leading-relaxed text-mute">
          Quote form first. WhatsApp ({WHATSAPP_DISPLAY}) is the same conversation. Email {DESK_EMAIL} if
          you prefer a thread. No published 808 — we will not invent one.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <EnquireCta island={island} />
          <WhatsAppCta island={island} />
          <CtaLink href={DESK_MAILTO} variant="secondary">
            {DESK_EMAIL}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
