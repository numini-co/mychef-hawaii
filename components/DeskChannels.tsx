import { CtaLink } from '@/components/Cta';
import { DESK_EMAIL, DESK_MAILTO, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

/**
 * Visible Hawaii desk doors: tel + mailto + wa.me.
 * Matches schema E.164. No street office.
 */
export default function DeskChannels({
  variant = 'secondary',
  compact = false,
}: {
  variant?: 'secondary' | 'light' | 'ghost';
  compact?: boolean;
}) {
  if (compact) {
    return (
      <p className="text-[14px] leading-relaxed">
        <a className="underline underline-offset-4" href={DESK_TEL}>
          {DESK_PHONE_DISPLAY}
        </a>
        <span className="mx-2 opacity-40" aria-hidden>
          ·
        </span>
        <a className="underline underline-offset-4" href={DESK_MAILTO}>
          {DESK_EMAIL}
        </a>
        <span className="mx-2 opacity-40" aria-hidden>
          ·
        </span>
        <a
          className="underline underline-offset-4"
          href={DESK_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <CtaLink href={DESK_TEL} variant={variant} aria-label={`Call ${DESK_PHONE_DISPLAY}`}>
        {DESK_PHONE_DISPLAY}
      </CtaLink>
      <CtaLink href={DESK_MAILTO} variant={variant} aria-label={`Email ${DESK_EMAIL}`}>
        {DESK_EMAIL}
      </CtaLink>
      <CtaLink href={DESK_WHATSAPP} variant={variant} aria-label="Message us on WhatsApp">
        WhatsApp
      </CtaLink>
    </div>
  );
}
