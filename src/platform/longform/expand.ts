import type { ContentRecord, ContentSection, FaqItem } from '@/platform/types';
import type { SiteId } from '@/platform/tokens';
import { islandOf, FEE, STAFF } from './facts';
import { placeFromSlug, travelNote } from './names';
import { briefOf } from './chapter4';
import { categoryVoice } from './extras';
import { expandJapanese } from './ja';

export interface Longform {
  sections: ContentSection[];
  faq: FaqItem[];
}

function keyword(record: ContentRecord, siteId: SiteId): string {
  const brief = briefOf(siteId, record.slug);
  return brief?.keyword || record.keywords[0] || record.title.replace(/\s+[—|].*$/, '');
}

function workedSix(low: number, high: number): string {
  const min = low * 6;
  const max = high * 6;
  const svcMin = Math.round(min * 0.2);
  const svcMax = Math.round(max * 0.2);
  return `A table of six on the Signature band is ${fmt(min)}–${fmt(max)} for groceries-included cooking, before ${FEE.service} (about ${fmt(svcMin)}–${fmt(svcMax)}) and ${FEE.get}. That arithmetic is an estimate only — the written quote is the confirmed total.`;
}

function fmt(n: number): string {
  return `$${n.toLocaleString('en-US')}`;
}

function processSteps(place: string): string[] {
  return [
    `Send the quote form for ${place} — island, service, dates, guests, kitchen, and how to reach you.`,
    'Receive a written quote with menu, staffing, travel, 20% service, and GET on their own lines.',
    'A 50% deposit locks the date only after you have seen those numbers.',
    'Your chef shops that morning, arrives before service, cooks in your kitchen, serves, and leaves the kitchen clean.',
  ];
}

function flatten(sections: ContentSection[], faq: FaqItem[], extra: string[]): string {
  const bits = [...extra];
  for (const s of sections) {
    if (s.heading) bits.push(s.heading);
    if (s.body) bits.push(...s.body);
    if (s.list) bits.push(...s.list);
  }
  for (const f of faq) bits.push(f.q, f.a);
  return bits.join(' ');
}

/** English tokens + Japanese characters/2 (approx. word equivalent). */
export function countWords(text: string): number {
  const ja = (text.match(/[\u3040-\u30ff\u4e00-\u9faf]/g) || []).length;
  const en = text.replace(/[\u3040-\u30ff\u4e00-\u9faf]/g, ' ').match(/[A-Za-z0-9$%ʻ''’–—-]+/g) || [];
  return en.length + Math.round(ja / 2);
}

export function authoredWords(record: ContentRecord): number {
  return countWords(
    flatten(record.sections, record.faq ?? [], [record.h1, record.intro ?? '', record.meta.description]),
  );
}

/**
 * Unique longform for one page. Interpolates island facts, the Chapter 4
 * keyword, the place/topic from the slug, and the research note for that URL.
 */
export function expandRecord(record: ContentRecord, siteId: SiteId): Longform {
  const f = islandOf(siteId);
  const place = record.slug === '' ? f.name : placeFromSlug(record.slug);
  const kw = keyword(record, siteId);
  const brief = briefOf(siteId, record.slug);
  const travel = travelNote(record.slug, f.english);
  const voice = categoryVoice(record, place, kw, f, brief);
  const low = siteId === 'hub' ? 125 : siteId === 'oahu' ? 125 : 150;
  const high = siteId === 'oahu' ? 190 : siteId === 'bigisland' ? 225 : siteId === 'hub' ? 250 : 250;

  if (record.slug.startsWith('ja')) {
    const extra = expandJapanese(record, place, kw, f, brief);
    if (authoredWords(record) >= 250) {
      return { sections: extra.sections.slice(0, 6), faq: extra.faq.slice(0, 5) };
    }
    return extra;
  }

  const sections: ContentSection[] = [
    {
      id: 'lf-owns',
      heading: `What this page covers: ${kw}`,
      body: [
        `This page exists so “${kw}” has one owner on ${f.name}. If you arrived looking for ${kw}, the answer is here: we cook in real kitchens on ${f.name}, we publish the numbers, and the written quote you approve is the confirmed total — never a chat estimate and never a “booked” screen.`,
        voice.note,
        voice.legal || f.extras[0] || `${place} keeps the operational facts — travel, notice, kitchen rules — on this URL.`,
      ].filter((p): p is string => Boolean(p)),
    },
    {
      id: 'lf-how',
      heading: `How ${kw} actually runs in ${place}`,
      body: [
        `For ${place} the day is fixed: menu against your dietary flags, groceries that morning, arrival before service, cook in the kitchen you actually have, plate, serve, leave it clean. Servers ${STAFF.server} and sous chefs ${STAFF.sous} appear when the event is staffed; over seventy-five guests is a written exception.`,
        travel
          ? travel
          : `${place} sits inside published ${f.name} coverage (${f.areas.join(', ')}). ${f.travel} is the travel rule; base zone does not invent a drive fee.`,
      ],
      list: processSteps(place),
    },
    {
      id: 'lf-price',
      heading: `Published prices for ${kw} on ${f.name}`,
      body: [
        `Signature / CORE on ${f.name} is ${f.coreBand} a guest, groceries included. Stay Chef from $${f.stayChef} a day (groceries at cost). Date Night ${f.dateNight}. Bar cart ${f.barCart}. Wedding receptions ${f.weddingFrom}.`,
        workedSix(low, high),
        `Fee stack on every ${place} quote: ${FEE.service}; ${FEE.get}; ${FEE.deposit}. Gratuity is voluntary. We do not display the obsolete 4.166% GET.`,
      ],
    },
    {
      id: 'lf-who',
      heading: `Who books ${kw} in ${place}`,
      body: [
        voice.who,
        f.extras[1] ?? `Coverage on ${f.name} is ${f.areas.join(', ')}. Dates outside those terms are a written no.`,
        `December–March and holiday weeks book first. A quiet Tuesday for two is a different roster question than a Saturday for forty.`,
      ],
    },
    {
      id: 'lf-include',
      heading: `What is included — and what is a separate line`,
      body: [
        `Signature groceries sit inside ${f.coreBand}. Stay Chef bills groceries at cost with receipts. Separate lines when they apply to ${place}: travel (${f.travel}), servers and sous, the bar cart, venue fees we did not create.`,
        `We do not invent reviews, chef names, addresses, or awards. ${kw} is sold on published math and a written quote.`,
      ],
      list: [
        `Signature in ${place}: cooking, service, cleanup, groceries inside the band`,
        `Stay Chef from $${f.stayChef}/day — groceries extra at cost`,
        `Declined: ${f.decline.join('; ')}`,
      ],
    },
    {
      id: 'lf-kitchen',
      heading: `Kitchens and the honesty test in ${place}`,
      body: [
        voice.kitchen,
        `A coffee maker is not a kitchen. No stove, oven, and counter — we decline and offer a dining room, a venue kitchen, or a drop-off where the island allows it. Kitchen photos and building rules (COI, freight elevator) go on the quote when they exist.`,
      ],
    },
    {
      id: 'lf-compare',
      heading: `${kw} versus a restaurant, a marketplace, or a banquet`,
      body: [
        voice.compare,
        `Marketplaces sell chef-bid ranges; we sell a confirmed total. Resort banquets often attach 23–25% service to F&B minimums. Ours is 20%, on its own line, next to GET. If the restaurant is the right call for ${place}, the quote can say that.`,
      ],
    },
    {
      id: 'lf-next',
      heading: `The next step for ${kw} in ${place}`,
      body: [
        `Six-step quote: island, service, date and guests, kitchen, contact, review. Handoff is WhatsApp or email with the brief structured — not a booked screen and not a chat estimate.`,
        `The number, if that is all you needed: ${f.coreBand} a guest on ${f.name}, Stay Chef from $${f.stayChef}, Date Night ${f.dateNight}, fee stack itemized. One keyword, one owner — ${kw} stays on this URL.`,
      ],
    },
  ];

  const faq: FaqItem[] = [
    {
      q: `How much does ${kw} cost in ${place}?`,
      a: `On ${f.name}, Signature is ${f.coreBand} a guest (groceries included), Stay Chef from $${f.stayChef} a day, Date Night ${f.dateNight}. ${FEE.service} and ${FEE.get} are their own lines. The written quote is the confirmed total.`,
    },
    {
      q: `Do you serve ${place}?`,
      a: travel
        ? `Yes, with the published constraint: ${travel}`
        : `Yes. ${place} is inside ${f.name} coverage (${f.areas.join(', ')}). Travel: ${f.travel}.`,
    },
    {
      q: `Is the quote for ${kw} the final price?`,
      a: `Yes. Menu, staffing, travel, ${FEE.service}, and GET are itemized. A 50% deposit locks the date only after you have seen it. Gratuity stays voluntary.`,
    },
    {
      q: `Can you cook without a full kitchen in ${place}?`,
      a: `No. We decline hotel rooms without kitchens. Send photos at inquiry and we will say yes or no before you spend time on a menu.`,
    },
  ];

  const authored = authoredWords(record);
  if (authored >= 900) {
    return { sections: sections.slice(0, 4), faq: faq.slice(0, 3) };
  }
  return { sections, faq };
}

export function mergeLongform(record: ContentRecord, siteId: SiteId): ContentRecord {
  const extra = expandRecord(record, siteId);
  const seenQ = new Set((record.faq ?? []).map((x) => x.q));
  return {
    ...record,
    sections: [...record.sections, ...extra.sections],
    faq: [...(record.faq ?? []), ...extra.faq.filter((x) => !seenQ.has(x.q))],
  };
}

export function renderedWordCount(record: ContentRecord, siteId: SiteId): number {
  const extra = expandRecord(record, siteId);
  return (
    authoredWords(record) +
    countWords(flatten(extra.sections, extra.faq, []))
  );
}
