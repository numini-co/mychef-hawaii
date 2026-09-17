import type { IslandId } from '@/data/islands';
import { islands, isInquiryIsland } from '@/data/islands';
import { DESK_PHONE_DIGITS, DESK_PHONE_DISPLAY, DESK_WHATSAPP_PREFILL } from '@/lib/contact';

/**
 * myCHEF Hawaii WhatsApp — same published Hawaii line as voice.
 * Never +971. Prefill is a short desk opener (island + inquiry), not a guest reply-channel.
 */
export const WHATSAPP_NUMBER = DESK_PHONE_DIGITS;
export const WHATSAPP_DISPLAY = DESK_PHONE_DISPLAY;

export function whatsappHref(
  island?: IslandId | null,
  intent?: string,
): string {
  const where = island ? islands[island].name : 'Hawaii';
  const stage = isInquiryIsland(island) ? 'inquiry' : 'quote';
  const opener = intent?.trim() || DESK_WHATSAPP_PREFILL;
  const message = `${opener} — ${where} ${stage}. Dates and guest count:`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_REPLY = 'Typical reply in Hawaii business hours';
