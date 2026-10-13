import { QuoteCta } from '@/components/Cta';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import Eyebrow from '@/components/Eyebrow';
import Hero from '@/components/Hero';
import HubPhotoGrid from '@/components/HubPhotoGrid';
import LineReveal from '@/components/LineReveal';
import JsonLd from '@/components/JsonLd';
import { DocumentCopy, LongFaq, SiblingCluster } from '@/components/Longform';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import HostLink from '@/components/HostLink';
import { islandChooserCopy } from '@/data/chromeCopy';
import { getHubDirectory } from '@/data/hubDirectories';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { islandOffers } from '@/data/offers';
import type { PhotoKey } from '@/data/photos';
import { photos } from '@/data/photos';
import { hubPrivateChef } from '@/data/hubPrivateChef';
import { formatDayRate, getDayRate } from '@/data/rateCard';
import { islandHref } from '@/lib/paths';

const VAC: Record<
  IslandId,
  {
    h1: string;
    lede: string;
    photo: PhotoKey;
    body: string[];
    faqKicker: string;
    faqs: { q: string; a: string }[];
    related: { path: string; label: string }[];
  }
> = {
  maui: {
    h1: 'A chef for your whole Maui stay.',
    lede: 'Stay Chef day rates from $1,550. Groceries at cost. Arrival-night dinner, a stocked fridge, full-board days when the house actually cooks.',
    photo: 'vacationMaui',
    faqKicker: 'Villa Week',
    body: [
      'Stay Chef on Maui is the visitor week: arrival-night dinner, a stocked fridge, full-board days when the house actually cooks. Groceries billed at cost with receipts. From $1,550 a day.',
      'The house must have a working kitchen. Hotel rooms without a cooktop are declined.',
      'A Maui villa week is priced as a day, not as a pile of restaurant checks. From $1,550 you get a chef and an assistant for one meal — sunrise breakfast, a late lunch, or dinner after the beach — with the menu, the shop, the cooking, the service, and the cleanup. Ask for a second meal and it is written that same day. Groceries are extra, at cost, with receipts and no markup. If the stay is really one table in Wailea, book a signature dinner at $225 to $375 a guest. That band already includes the food. It is not this day rate with a grocery bill added.',
      'Three, five, and seven days are the usual lengths. Nothing shorter is banned, but a single night is rarely the right tool. The house needs a real range, a fridge that can hold fish for a few days, and a table. Wailea, Kapalua, Kāʻanapali, Nāpili, and Makena are the straightforward yes. Upcountry is a published surcharge for the climb. Hotel rooms without a cooktop are declined. A Wailea week and a Kapalua week are not the same drive; say which shore is yours. The card is [private chef Maui cost](/pricing). Every town on the island starts at [private chef Maui](/).',
    ],
    faqs: [
      {
        q: 'What does a Maui villa-week day rate actually buy?',
        a: 'From $1,550 you are hiring a chef and an assistant for a single meal that day, plus the menu, the shopping trip, the cooking, service, and cleanup. Breakfast, a late lunch, or dinner — pick one inside the fee. Anything further is written the same day. Service at 20% and GET up to 4.712% sit beside the fee, and 50% is due only after you accept the written total. Tips are optional. Read [private chef Maui cost](/pricing) before you send dates.',
      },
      {
        q: 'Who pays for groceries on a Wailea or Kapalua stay?',
        a: 'You do, at cost. Receipts come with the shop. We do not mark up fish or produce, and we do not take a supplier cut. The day rate is the crew. If the trip is really one table, a signature dinner at $225–$375 a guest already includes groceries in that band. That invoice is not a villa week with a food bill stapled on.',
      },
      {
        q: 'Can we have breakfast and dinner in the same Maui villa day?',
        a: 'Yes, as two lines. The published day covers one meal. Breakfast before a boat and dinner after the beach are both possible when the second service is priced before we shop. We will not silently stretch one fee into full board. Say the rhythm in the first message — Wailea pool days and Kapalua boat days are rarely the same schedule.',
      },
      {
        q: 'Which Maui houses are fit for a chef all week?',
        a: 'A resort residence or estate with a real range, a fridge that can hold several days of fish, and a table. Wailea, Kapalua, Kāʻanapali, Nāpili, and Makena are the straightforward yes. Upcountry adds a published surcharge for the climb. A hotel room without a cooktop is declined. A galley may mean a shorter menu, said in writing first.',
      },
      {
        q: 'How long should a Maui chef stay be?',
        a: 'Think three, five, or seven days. There is no hard floor, and the day rate starts to earn its keep from about three days. One celebration night belongs on the dinner page. September, October, May, and December through March press villa weeks, so ask while the house is still a maybe. One crew, one week.',
      },
      {
        q: 'How do we request a chef for the whole Maui stay?',
        a: 'Select Maui on the quote form and name the shore in the first line — a Wailea resort residence is not a Kapalua estate, and Saturday traffic along the west side changes the call time. September, October, May, and the winter months should be sent while the house is still a maybe. We answer in Hawaii business hours. Mail quotes@mychef-hawaii.com, call (808) 468-7748, or WhatsApp https://wa.me/18084687748. No account and no payment to enquire. Read the island from [private chef Maui](/).',
      },
      {
        q: 'Can one Maui crew cover Wailea and Kapalua in the same week?',
        a: 'Only when the two shores are planned as different days. South Maui and the northwest are not one neighbourhood, and Saturday traffic on the west side is part of the plan. Travel is written, not absorbed into the fish. If you need both, say so before we design the week.',
      },
    ],
    related: [
      { path: '/private-chef', label: 'What’s included' },
      { path: '/personal-chef', label: 'Resident household line' },
      { path: '/journal/vacation-chef-week', label: 'Stay Chef week notes' },
    ],
  },
  oahu: {
    h1: 'A chef for the Oʻahu villa week.',
    lede: 'Stay Chef from $1,250 a day. Groceries at cost. Arrival-night dinner, a stocked fridge, full-board days when the house actually cooks.',
    photo: 'vacationOahu',
    faqKicker: 'Resident’s Island',
    body: [
      'Stay Chef on Oʻahu is the visitor week: arrival-night dinner, a stocked fridge, full-board days when the house actually cooks. Groceries billed at cost with receipts. From $1,250 a day.',
      'The kamaʻāina weekly line is a separate service. Same crew, different rhythm.',
      'Kahala, Ko Olina, windward houses. A real cooktop is required. Hotel rooms without kitchens are declined.',
      'On Resident’s Island the daily fee is a chef and an assistant for one meal, from $1,250. Use that meal as breakfast, lunch, or dinner. A second meal the same day is quoted before anyone shops, not assumed because the house is large. Menu planning, the shop run, cooking, service, and cleanup sit inside the fee. The groceries do not. You receive merchant receipts and pay the shop at cost, with no markup. A one-night Gold Coast celebration is a different booking: signature dinners from $195 to $290 a guest already include the food in that band.',
      'Stays that suit this page usually run three, five, or seven days. There is no hard minimum, and a single Tuesday belongs on the in-villa dinner, not on a day rate. Kahala estates and Ko Olina villas with a working range, a fridge, and a table are a yes. A Waikīkī hotel room with a coffee maker is a no, said before any deposit. Kailua and Lanikai fit when the booking is a genuine month. A North Shore week carries the published surcharge and its own chef day. Rates are on [private chef Oahu cost](/pricing). The island overview is [private chef Oahu](/).',
    ],
    faqs: [
      {
        q: 'How does the Oʻahu Stay Chef day fee work for a villa week?',
        a: 'Resident’s Island publishes one number for the crew: from $1,250 a day for a chef and an assistant, and for one meal. That fee includes planning the menu, doing the shop, cooking, serving, and cleaning the kitchen. It does not include the ingredients. A second meal on the same date is priced that day, before anyone buys food. After the fee, 20% service and Hawaiʻi GET up to 4.712% print on their own lines. Half the written total holds the dates once you accept it. A tip is voluntary. The card is on [private chef Oahu cost](/pricing).',
      },
      {
        q: 'Are groceries included in the $1,250 Oʻahu day fee?',
        a: 'No. On a Stay Chef week you pay the shop at cost, and you see the merchant receipts. There is no markup. The $1,250 is labor. A signature dinner is the other model: $195–$290 a guest already includes the food in that band. Do not ask a Kahala celebration night to be rewritten as a day fee plus a grocery bill. Say which booking you want on the quote form.',
      },
      {
        q: 'How many meals a day does a Kahala or Ko Olina Stay Chef cook?',
        a: 'One meal is inside the day — breakfast before a flight, lunch, or dinner, your choice. A second or third sitting is a written add-on for that date, not an assumption because the house is large. Full days of cooking are available when you ask for those extra sittings up front. We will not turn one fee into three meals in silence.',
      },
      {
        q: 'What kitchen does an Oʻahu vacation rental need for a multi-day chef?',
        a: 'A working cooktop, cold storage, and seats for the list. Kahala estates and Ko Olina villas that actually cook are the usual yes. A Waikīkī hotel room with a coffee maker is a no, said before any deposit. Kailua and Lanikai fit this page when the stay is a genuine month. Tell us the property type so the menu matches the stove, not the listing adjective.',
      },
      {
        q: 'Is there a minimum stay for an Oʻahu vacation chef?',
        a: 'No fixed minimum. The day rate is meant for about three days and up, and the usual shapes are three, five, or seven days. A single Tuesday is almost always an in-villa dinner, with groceries inside the per-guest band, not this fee. December through March should be requested early. One crew holds one villa week.',
      },
      {
        q: 'How do I book a chef for an Oʻahu villa week?',
        a: 'Start on the quote form with the Gold Coast, Ko Olina, or windward address, the dates, and how many people are in the house. December through March should go in while the villa is still penciled. A coordinator replies in Hawaii business hours with a menu direction. Nothing is paid to ask. WhatsApp https://wa.me/18084687748 is the same thread, and the desk is (808) 468-7748 or quotes@mychef-hawaii.com. Kailua only when the month is real. The island overview is [private chef Oahu](/).',
      },
      {
        q: 'Is a Resident’s Island week the same as the kamaʻāina weekly cook?',
        a: 'No. Visitors in a Kahala, Ko Olina, or windward house use Stay Chef from $1,250 a day, groceries at cost with receipts. Residents who want a standing weekly cook use the personal chef page, from $450 a week plus groceries at cost. Same crew, different rhythm. Name which one you mean.',
      },
    ],
    related: [
      { path: '/private-chef', label: 'What’s included' },
      { path: '/kamaaina', label: 'Kamaʻāina weekly' },
      { path: '/personal-chef', label: 'Resident household line' },
      { path: '/journal/vacation-chef-week', label: 'Stay Chef week notes' },
    ],
  },
  kauai: {
    h1: 'A chef for your Kauaʻi week.',
    lede: 'Stay Chef from $1,650 a day. Princeville, Poʻipū, Hanalei. Inquiry stage. Groceries billed at cost with receipts.',
    photo: 'vacationKauai',
    faqKicker: 'Garden Isle retreat',
    body: [
      'Stay Chef on Kauaʻi is by inquiry only. From $1,650 a day when we can staff Princeville, Poʻipū or Hanalei. Groceries billed at cost with receipts.',
      'We do not hold a fake instant-booking button. Inquiry first, then a written quote if the week can be staffed.',
      'A Garden Isle retreat is an inquiry, not a button. When a crew can take the shore, Stay Chef starts at $1,650 a day for a chef and an assistant and one meal, covering the menu, the shopping trip, cooking, service, and leaving the kitchen clean. Another meal that day is quoted, not slipped in. Groceries are billed at cost. You see the receipts. There is no markup and no supplier commission. A signature dinner at $225 to $375 a guest is the opposite invoice: the food is already inside that band. Do not ask a Princeville week to be priced like a one-night menu plus a mystery grocery line.',
      'Plan on about three days or longer. Five- and seven-day retreats are common. A single supper is usually the villa dinner, with groceries inside the per-guest band. Princeville, Hanalei, and Poʻipū houses need a working range, cold storage, and seats. Hāʻena, past the Hanalei bridge, needs seventy-two hours and a weather-and-road clause. Closures move the day; they do not forfeit it. North and south are separate drives. The published card is [private chef Kauai cost](/pricing). Both shores are introduced on [private chef Kauai](/).',
    ],
    faqs: [
      {
        q: 'What does the Kauaʻi day fee mean while the week is still an inquiry?',
        a: 'It is a starting price, not a held date. When a crew can staff the shore, Stay Chef begins at $1,650 a day: chef, assistant, one meal, menu, shopping labor, cooking, service, and a clean kitchen. Further meals that day are quoted. 20% service and GET up to 4.712% print beside the fee. A 50% deposit applies only after a written yes. This is not a live booking button. See [private chef Kauai cost](/pricing).',
      },
      {
        q: 'How are Princeville grocery receipts handled?',
        a: 'The shop is at cost. You get the receipts. Fish and produce are not marked up, and there is no supplier commission hiding in the bag. The $1,650 pays the crew. A signature dinner at $225–$375 a guest keeps groceries inside that band — a different bill from a Garden Isle retreat week. Do not mix them on one inquiry.',
      },
      {
        q: 'How many meals a day can a Poʻipū or Hanalei house book?',
        a: 'One sitting ships with the day. Use it as breakfast, lunch, or supper. A second sitting is an add-on written that day, not a surprise at the range. A retreat that wants breakfast and dinner every day should say so on the inquiry so both lines exist before anyone drives the shore.',
      },
      {
        q: 'What is the kitchen test on both Kauaʻi shores?',
        a: 'Cooktop, fridge, table. Princeville, Hanalei, and Poʻipū estates that pass are the inquiry. A condo galley may need a tighter menu. Hāʻena, past the Hanalei bridge, needs seventy-two hours and a weather-and-road clause. Hotel rooms without a range are declined before anyone drives. We cook to the stove we confirm, not to the listing photos.',
      },
      {
        q: 'Are two nights enough for a Garden Isle chef retreat?',
        a: 'The day rate is shaped for about three days and longer, including five- and seven-day retreats. Two nights can still be asked. A single supper usually belongs on the villa dinner page, food inside the per-guest band. North Shore winters should be on the list early. One crew holds one week, and we will not invent a second crew to look free.',
      },
      {
        q: 'How do I ask for a chef for a Kauaʻi week?',
        a: 'Join the inquiry list. The form needs the shore — Princeville, Hanalei, or Poʻipū — plus dates and headcount. North Shore winters and anything past the Hanalei bridge should be named early, because a closure reschedules the day. We write back in Hawaii business hours with whether a crew exists. There is no instant-booking button and nothing is charged to ask. Call (808) 468-7748, email quotes@mychef-hawaii.com, or WhatsApp https://wa.me/18084687748. Both shores start at [private chef Kauai](/).',
      },
      {
        q: 'Can Hanalei and Poʻipū share one Stay Chef week?',
        a: 'Only if both days are written. A north-shore morning and a south-shore supper are not one drive, and Līhuʻe sits between them. Far-North closures move the day rather than forfeit the food. Put both addresses on the inquiry or we will assume one shore.',
      },
    ],
    related: [
      { path: '/private-chef', label: 'What’s included' },
      { path: '/personal-chef', label: 'Resident household line' },
      { path: '/journal/vacation-chef-week', label: 'Stay Chef week notes' },
    ],
  },
  bigisland: {
    h1: 'A chef for the Kohala week.',
    lede: 'Stay Chef from $1,450 a day. West-side first — Kona and the Kohala Coast. Inquiry stage.',
    photo: 'vacationBigisland',
    faqKicker: 'Big Island Expedition',
    body: [
      'Stay Chef on Hawaiʻi Island is west-side first — Kona and the Kohala Coast. From $1,450 a day. Inquiry stage.',
      'Hilo, Volcano and Kaʻū are quote-only dedicated days, not a same-day west-side round trip.',
      'Big Island Expedition weeks start on the west side. The daily fee is from $1,450 for a chef and an assistant and one meal: menu, a Kona-side shop, cooking, service, and cleanup. A second meal is quoted that day. Groceries are not inside the fee. They are billed at cost with receipts and zero markup. A signature night is different: $210 to $325 a guest, or from $165 when the kitchen is simpler, and those bands already include the groceries. A Kohala terrace dinner should not be rewritten as a day rate plus a food receipt.',
      'Ask when the stay is about three days or more. Three, five, and seven days are the shapes we actually plan. One west-side dinner belongs on the villa dinner page. Kona, Keauhou, Waikoloa, and Kohala Coast rentals need a real range, a fridge, and a table. Hotel rooms with a minibar are declined. Hilo and Volcano are their own quoted day, two-and-a-half to three hours across the saddle, never an afternoon add-on. Ironman weeks need an early note because roads and grocery windows compress. The card is [private chef Big Island cost](/pricing). The island home is [private chef Big Island](/).',
    ],
    faqs: [
      {
        q: 'How is the west-side daily chef fee calculated?',
        a: 'Big Island Expedition weeks use a day rate, from $1,450, for a chef and an assistant and one meal on the Kona and Kohala side. Inside that fee: the menu, the west-side shop labor, cooking, service, and cleanup. A second meal is quoted that day. 20% service and GET up to 4.712% are separate lines. Half the written total holds dates only after we can staff. Inquiry, not instant book. The card is [private chef Big Island cost](/pricing).',
      },
      {
        q: 'Does the $1,450 Kohala day fee include food?',
        a: 'No. Groceries bill at cost with receipts and zero markup. The day fee is the crew. A one-night dinner is the other product: $210–$325 a guest, or from $165 when the table is simpler, with the groceries already inside those bands. An expedition week and a one-night terrace dinner never share an invoice. Pick one when you write.',
      },
      {
        q: 'How many meals a day in a Kona or Waikoloa rental?',
        a: 'One meal comes with the day rate. Use it as breakfast before a boat or dinner on the lava terrace. A second meal is a same-day quote, agreed before the shop. We will not promise three meals because the listing photos show a large range. If the house wants breakfast and dinner all week, list both at the start.',
      },
      {
        q: 'What does a Kohala Coast or Kona rental kitchen need?',
        a: 'A real range, a fridge, and a table. Resort residences that cook are a yes. Hotel rooms with a minibar are a no. Wind on an uncovered Kohala grill gets an indoor backup in the reply. We confirm the kitchen from your listing before a deposit, including vendor rules at the resort gate.',
      },
      {
        q: 'What is the shortest Big Island chef stay worth requesting?',
        a: 'About three days. The shapes we plan are three, five, and seven. There is no hard floor, but one west-side dinner is the signature menu, food included, not this day rate. Ironman and other event weeks need an early flag — roads close and grocery windows shrink. One crew holds one heavy week.',
      },
      {
        q: 'How do I request a chef for a Kohala or Kona week?',
        a: 'The inquiry has to say west side or east side. Put the Kona, Waikoloa, or Kohala Coast address, the dates, and the headcount on the quote form, and flag Ironman if the week touches the race. We reply in Hawaii business hours only when a crew can hold it. A published rate is not a calendar. WhatsApp https://wa.me/18084687748, the desk at (808) 468-7748, and quotes@mychef-hawaii.com all reach the same Hawaii team. Nothing is charged to ask. The island home is [private chef Big Island](/).',
      },
      {
        q: 'Can a west-side Stay Chef week also include Volcano or Hilo?',
        a: 'Not on the same day. East side is two-and-a-half to three hours and a dedicated crew day, quoted on its own. A Kohala breakfast and a Volcano lunch are not one expedition. Name the east-side date separately or we will not pretend to cross the saddle. Kaʻū is an extended surcharge with notice, not a free add-on.',
      },
    ],
    related: [
      { path: '/private-chef', label: 'What’s included' },
      { path: '/personal-chef', label: 'Resident household line' },
      { path: '/journal/vacation-chef-week', label: 'Stay Chef week notes' },
    ],
  },
};

export function HubOfferView({ kind }: { kind: 'private-chef' | 'vacation-chef' }) {
  const household = getHubDirectory('/personal-chef');
  const copy =
    kind === 'private-chef'
      ? {
          h1: hubPrivateChef.h1,
          lede: hubPrivateChef.lede,
          img: photos.hubChef,
          service: 'private-chef',
          path: '/private-chef' as const,
        }
      : {
          h1: 'Vacation chef — a chef for the villa week',
          lede: 'Stay Chef day rates from $1,250 Oʻahu / $1,550 Maui / $1,650 Kauaʻi / $1,450 Hawaiʻi Island. Groceries at cost.',
          img: photos.hubVacation,
          service: 'vacation-chef',
          path: '/vacation-chef' as const,
        };

  return (
    <>
      {kind === 'private-chef' ? (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: hubPrivateChef.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }}
        />
      ) : null}
      <Hero src={copy.img.file} alt={copy.img.alt}>
        <Eyebrow tone="paper">myCHEF Hawaii</Eyebrow>
        <LineReveal
          text={copy.h1}
          className="mt-6 font-display text-[clamp(2.5rem,6.4vw,4.75rem)] font-light leading-[1.02] tracking-[-0.02em] text-paper"
        />
        <p className="mt-6 max-w-[42ch] text-[17px] leading-[1.6] text-paper lg:text-[19px]">{copy.lede}</p>
        <div className="mt-9">
          <QuoteCta service={copy.service} variant="light" />
        </div>
      </Hero>
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <Eyebrow>Where we cook</Eyebrow>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
            Choose your island.
          </h2>
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {islandOrder.map((id) => {
              const isl = islands[id];
              const chooser = islandChooserCopy[id];
              const o = islandOffers[id];
              return (
                <li key={id}>
                  <HostLink island={id} path={copy.path} className="group block">
                    <span className="relative block aspect-[3/4] overflow-hidden bg-sand">
                      <Photo
                        src={isl.selectorImage}
                        alt={isl.name}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
                      />
                    </span>
                    <span className="mt-5 block font-display text-[1.5rem] font-light text-ink">{isl.name}</span>
                    <span className="mt-2 block text-[15px] leading-relaxed text-mute">{chooser.line}</span>
                    <span className="mt-2 block text-[13px] text-mute">from ${o.fromPp} a guest</span>
                  </HostLink>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {kind === 'private-chef' ? (
        <>
          <DocumentCopy heading={hubPrivateChef.heading} paras={hubPrivateChef.body} />
          <LongFaq items={hubPrivateChef.faqs} title={hubPrivateChef.faqTitle} kicker="Statewide" />
        </>
      ) : null}
      {kind === 'private-chef' ? (
        <HubPhotoGrid
          eyebrow="Related pages"
          heading="Related pages."
          intro="Related pages to help you plan your dinner, event or stay."
          columns={2}
          items={[
            {
              href: '/personal-chef',
              title: household?.cardLabel ?? 'Household week',
              body: household?.lede ?? 'Weekly household cooking lives on each island the personal chef page.',
              still: photos.hubPersonal,
            },
            {
              href: '/vacation-chef',
              title: 'Stay Chef week',
              body: 'A chef for the villa week. Groceries at cost.',
              still: photos.hubVacation,
            },
            {
              href: '/quote',
              title: 'The quote form',
              body: 'Five fields. A human reply. Typical response in Hawaii business hours.',
              still: photos.quoteHub,
            },
            {
              href: '/pricing',
              title: 'What a night costs',
              body: 'The published rate card.',
              still: photos.hubPricing,
            },
          ]}
        />
      ) : (
        <HubPhotoGrid
          eyebrow="Related pages"
          heading="Related pages."
          intro="Related pages to help you plan your dinner, event or stay."
          columns={2}
          items={[
            {
              href: '/private-chef',
              title: 'Visitor dinner',
              body: 'One night in the house.',
              still: photos.hubChef,
            },
            {
              href: '/personal-chef',
              title: household?.cardLabel ?? 'Household week',
              body: household?.lede ?? 'Weekly household cooking lives on each island the personal chef page.',
              still: photos.hubPersonal,
            },
            {
              href: '/quote',
              title: 'The quote form',
              body: 'Five fields. A human reply. Typical response in Hawaii business hours.',
              still: photos.quoteHub,
            },
            {
              href: '/pricing',
              title: 'What a night costs',
              body: 'The published rate card.',
              still: photos.hubPricing,
            },
          ]}
        />
      )}
      <QuoteTeaser />
    </>
  );
}

export function IslandVacationView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const copy = VAC[islandId];
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const day = getDayRate(islandId);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: copy.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={photos[copy.photo].file} alt={photos[copy.photo].alt} min="short">
        <p className="text-[13px] text-mute">{islands[islandId].name}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-ink">{copy.lede}</p>
        <p className="mt-4 text-[17px] text-ink">{formatDayRate(islandId)} · {day.model}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="vacation-chef" variant="light" />
        </div>
      </Hero>
      <DocumentCopy heading={`How a Stay Chef week runs on ${islands[islandId].name}.`} paras={copy.body} />
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${islands[islandId].name} · Related`}
        heading="Related pages."
        intro="The week notes sit in the journal."
        items={copy.related.map((link) => ({
          path: link.path,
          label: link.label,
          detail: link.path,
        }))}
      />
      <SiblingCluster island={islandId} href={href} />
      <LongFaq items={copy.faqs} kicker={copy.faqKicker} />
      <QuoteTeaser island={islandId} />
    </>
  );
}
