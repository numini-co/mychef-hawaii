import type { ContentRecord } from '@/platform/types';
import type { IslandFacts } from './facts';
import type { Ch4Brief } from './chapter4';

/** Category-and-slug paragraphs so two URLs never share the same body. */
export function categoryVoice(
  record: ContentRecord,
  place: string,
  kw: string,
  f: IslandFacts,
  brief?: Ch4Brief,
): Record<string, string> {
  const cat = (brief?.category || record.category).toLowerCase();
  const slug = record.slug;
  const note = brief?.notes
    ? `Chapter 4 assigned this URL to “${kw}” for a reason: ${brief.notes.replace(/\.$/, '')}. That research note is the job of this page — not a sibling’s.`
    : `This URL is the single owner of “${kw}” on ${f.name}. Neighboring pages keep their own keywords.`;

  const legal = /REQUIRES LEGAL VERIFICATION/i.test(brief?.notes || slug)
    ? `Alcohol service, cancellation tiers, and Hawaiʻi Revised Statutes §481B-14 wording on this topic remain marked REQUIRES LEGAL VERIFICATION. We describe the published fee stack; we do not invent a legal opinion.`
    : '';

  const byCat = catVoice(cat, place, kw, f, slug);
  return { note, legal, ...byCat };
}

function catVoice(cat: string, place: string, kw: string, f: IslandFacts, slug: string): Record<string, string> {
  if (cat.includes('location') || slug.startsWith('locations/')) {
    return {
      who: `People who search “${kw}” are already holding a kitchen in ${place} — a legal short-term rental, a 30-day villa, or a resident house. They are not browsing the island in the abstract.`,
      kitchen: `In ${place} the kitchen test is local: tower COIs and freight elevators in resort belts, purpose-built chef kitchens in estate corridors, and honest declines where the room is a hotel key with a coffee maker.`,
      compare: `A restaurant near ${place} still wins for two people on a walk-in Tuesday. ${kw} wins when the table you already rented is the table you want to eat at, and the drive-and-park tax of a reservation is the thing you are paying to skip.`,
    };
  }
  if (cat.includes('wedding') || slug.includes('wedding') || slug.includes('elopement') || slug.includes('rehearsal') || slug.includes('welcome-dinner') || slug.includes('recovery')) {
    return {
      who: `Wedding weeks in ${place} are a sequence, not a single Saturday: welcome dinner, rehearsal, reception, recovery brunch. “${kw}” is the named step this page owns so planners are not sent to a generic catering URL.`,
      kitchen: `Estate and villa receptions in ${place} need a working kitchen or a permitted outdoor setup written into the quote. Exclusive-caterer venues are declined in writing — that is cheaper than a deposit that cannot be used.`,
      compare: `Resort banquet packets in Hawaiʻi often attach 23–25% service to F&B minimums. Our reception line starts ${f.weddingFrom}, with 20% service on its own line. ${kw} is the comparison, not a mood board.`,
    };
  }
  if (cat.includes('pricing') || cat.includes('decision') || slug.includes('pricing') || slug.includes('cost') || slug.includes('compare') || slug.includes('fee-stack') || slug.includes('estimate')) {
    return {
      who: `Readers of “${kw}” want arithmetic they can screenshot. ${place} is where that arithmetic is written: ${f.coreBand} Signature, Stay Chef from $${f.stayChef}/day, Date Night ${f.dateNight}.`,
      kitchen: `Price pages still name the kitchen rule because a coffee-maker suite changes the quote to a decline. ${place} does not get a hidden “we’ll figure it out” band.`,
      compare: `Marketplaces publish chef-bid ranges. This page publishes a confirmed-total method. ${kw} is answered with itemized lines, not a slider.`,
    };
  }
  if (cat.includes('menu') || slug.startsWith('menus/')) {
    return {
      who: `“${kw}” is a menu catalogue page for ${place}, not a second rate card. The prices stay ${f.coreBand} / Stay Chef from $${f.stayChef}; this URL owns the plate language.`,
      kitchen: `Menus assume a real stove, oven, and counter in ${place}. If the kitchen cannot hold the technique — raw bar, live fire, 12-course cadence — the quote names a simpler menu or a decline.`,
      compare: `A restaurant tasting menu near ${place} is a reservation. ${kw} is the same ambition cooked where you are staying, with dietary flags written before grocery day.`,
    };
  }
  if (cat.includes('occasion') || slug.startsWith('occasions/')) {
    return {
      who: `Occasion searchers for “${kw}” already have a date and a headcount in ${place}. Birthday, anniversary, proposal, reunion — the kitchen and the fee stack do not change; the pacing and cake-or-no-cake do.`,
      kitchen: `The ${place} kitchen still has to be a kitchen. We will not build an occasion dinner on a wet bar and a hope.`,
      compare: `A restaurant private room near ${place} can hold a toast. ${kw} holds the house you already paid for, on your clock, with kids’ plates and dietary flags in the same ticket.`,
    };
  }
  if (cat.includes('guide') || slug.startsWith('guides/')) {
    return {
      who: `This guide exists because “${kw}” is a question people ask before they pick an island product. ${place} is the local answer; the hub owns only the statewide version of the same question.`,
      kitchen: `Guides still tell the kitchen truth: no stove, no booking. ${place} does not get a softer paragraph.`,
      compare: `A guide is not a second sales page. ${kw} is answered in prose, then the doors go to the rate card and the quote — not to a cloned service silo.`,
    };
  }
  if (cat.includes('trust') || cat.includes('partner') || ['trust', 'legal', 'faq', 'about', 'contact', 'coverage', 'partners'].some((p) => slug === p || slug.startsWith('partners/') || slug.startsWith('how-we') || slug.startsWith('what-we') || slug.startsWith('reviews'))) {
    return {
      who: `Trust and partner pages for “${kw}” exist so ${place} does not invent testimonials, chef names, or awards. The register is what we will not do, and what a villa desk can print.`,
      kitchen: `The same decline list applies in ${place}: ${f.decline.join('; ')}. A partner referral does not waive the kitchen test.`,
      compare: `We do not buy reviews and we do not display AggregateRating schema. ${kw} is a process page — vetting, coverage, terms — not a ratings widget.`,
    };
  }
  if (cat.includes('service') || slug.startsWith('services/') || slug.includes('stay-chef') || slug.includes('retreat') || slug.includes('corporate') || slug.includes('villa-chef') || slug.includes('mobile-bar') || slug.includes('staffing')) {
    return {
      who: `“${kw}” is a sellable SKU on ${f.name}, not a synonym of the island home. ${place} is how that SKU actually runs: notice, staffing, and what sits outside the band.`,
      kitchen: `Every service SKU still dies without a kitchen. ${place} is not an exception — yacht, in-suite, and retreat dates are quoted only when the cooking surface is real.`,
      compare: `The two-core grammar stays visible: a chef for the house, catering for the event. ${kw} sits in one of those silos so it cannot cannibalize the other.`,
    };
  }
  return {
    who: `The people who type “${kw}” already know ${place} is the table they are holding. They want the published card and a written total, not a mood.`,
    kitchen: `If ${place} cannot offer a stove, oven, and usable counter, the quote is a decline plus an alternative — private dining, a venue kitchen, or a drop-off where the island allows it.`,
    compare: `Restaurant, marketplace, or resort banquet: pick the one that fits ${place}. ${kw} is the in-kitchen option with itemized 20% service and GET.`,
  };
}
