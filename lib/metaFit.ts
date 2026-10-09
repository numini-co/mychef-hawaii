import { islandOffers } from '@/data/offers';
import type { IslandId } from '@/data/islands';
import { ISLAND_PLAIN } from '@/lib/ownerAnchors';

/**
 * Search-snippet fitting, applied once at the end of resolveDocumentSeo.
 *
 * Titles: Google truncates around 60 characters. When a title runs long we drop
 * the trailing "| myCHEF" brand (Google shows the site name separately), then,
 * if still long, keep the head before the first em dash plus the brand.
 *
 * Descriptions: Search Console shows most impressions on pages whose meta
 * description is a short fragment. Fragments under 110 characters get one
 * factual, island-specific line appended (published starting price from the
 * rate card + the island's real booking mode). Never above 160 characters.
 */
export const TITLE_MAX = 60;
export const DESC_MIN = 110;
export const DESC_MAX = 160;

export function fitTitle(title: string): string {
  if (title.length <= TITLE_MAX) return title;
  const unbranded = title.replace(/\s*\|\s*myCHEF(?: Hawaii)?$/, '');
  if (unbranded.length <= TITLE_MAX) return unbranded;
  const head = unbranded.split(/\s[—–]\s/)[0] ?? unbranded;
  if (head.split(/\s+/).length >= 3) {
    if (head.length + 9 <= TITLE_MAX) return `${head} | myCHEF`;
    if (head.length <= TITLE_MAX) return head;
  }
  return unbranded;
}

/** Staffed-event pages: the per-guest band applies to 10–75 guest events. */
const EVENT_PATH = /^\/(catering|corporate|corporate-catering|retreat-catering|gatherings)(\/|$)/;
/** Pages priced on another model (wedding minimums, hourly staff, day rates, bar packages): no per-guest line. */
const NO_PRICE_PATH =
  /^\/(weddings|wedding-catering|wedding-week|rehearsal-dinners|bar|mobile-bar|staffing|meal-prep|vacation-chef|personal-chef|in-villa-services|kamaaina|estimate|quote|thank-you|legal)(\/|$)/;

/** Cut an over-long description at the last full sentence that fits (never below DESC_MIN). */
function trimToSentence(text: string): string {
  let cut = -1;
  for (let i = 0; i < Math.min(text.length, DESC_MAX); i += 1) {
    const ch = text[i];
    if ((ch === '.' || ch === '!' || ch === '?' || ch === ';') && (i + 1 === text.length || text[i + 1] === ' ')) cut = i;
  }
  if (cut >= DESC_MIN - 1) return `${text.slice(0, cut)}.`.replace(/\.\.$/, '.');
  return text;
}

/** Make sure a fragment ends as a sentence before another sentence is added. */
function sentence(text: string): string {
  const t = text.trim();
  return /[.!?…]$/.test(t) ? t : `${t}.`;
}

export function fitDescription(description: string, islandId: IslandId | null, localPath: string): string {
  // "Short Keauhou notes: …" reads as an internal label in a snippet.
  const base = description.trim().replace(/^Short\s+(\S)/, (_m, c: string) => c.toUpperCase());
  if (!base) return base;
  if (base.length > DESC_MAX) return trimToSentence(base);
  if (base.length >= DESC_MIN) return base;
  const lead = sentence(base);
  const priced = /\$\d/.test(lead) || NO_PRICE_PATH.test(localPath);
  const mentionsPrices = /price/i.test(lead);
  const candidates: string[] = [];
  if (islandId) {
    const name = ISLAND_PLAIN[islandId];
    const from = islandOffers[islandId].fromPp;
    const inquiry = islandId === 'kauai' || islandId === 'bigisland';
    const close = inquiry ? 'By inquiry, with a written reply.' : 'Request a written quote.';
    const closeShort = inquiry ? 'By inquiry.' : 'Written quote.';
    const event = EVENT_PATH.test(localPath);
    if (!priced) {
      candidates.push(
        event
          ? `Staffed ${name} events from $${from} a guest, 10–75 guests. ${close}`
          : `Private chef ${name} from $${from} a guest, published. ${close}`,
        event ? `${name} events from $${from} a guest. ${closeShort}` : `Private chef ${name} from $${from} a guest. ${closeShort}`,
      );
    }
    if (!mentionsPrices) candidates.push(`Published ${name} prices. ${close}`);
    candidates.push(close, closeShort);
  } else {
    if (!priced) {
      candidates.push(
        'Private chefs on Oʻahu, Maui, Kauaʻi and the Big Island from $195 a guest. Written quote.',
        'Oʻahu, Maui, Kauaʻi, Big Island. From $195 a guest, written quote.',
      );
    }
    if (!mentionsPrices) candidates.push('Published prices on Oʻahu, Maui, Kauaʻi and the Big Island. Written quote.', 'Published prices on all four islands. Written quote.');
    candidates.push('Request a written quote.', 'Written quote.');
  }
  for (const extra of candidates) {
    const out = `${lead} ${extra}`;
    if (out.length <= DESC_MAX) return out;
  }
  return lead;
}
