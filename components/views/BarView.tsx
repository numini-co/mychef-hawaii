import HostLink from '@/components/HostLink';
import { QuoteCta } from '@/components/Cta';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import Eyebrow from '@/components/Eyebrow';
import Hero from '@/components/Hero';
import HubPhotoGrid from '@/components/HubPhotoGrid';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { DocumentCopy, LongFaq, SiblingCluster } from '@/components/Longform';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import { islands, type IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import { FEE_DISCLOSURE, formatMobileBarGuest, formatMobileBarPackage, getMobileBar } from '@/data/rateCard';
import { islandHref } from '@/lib/paths';
import { PRIVATE_CHEF_PAGE_ANCHOR } from '@/lib/ownerAnchors';

const hubBarFaqs = [
  {
    q: 'Which island page books the terrace hour?',
    a: 'The mobile bar page on the island with the house. [Oʻahu](oahu:/mobile-bar) and [Maui](maui:/mobile-bar) take a written quote. [Kauaʻi](kauai:/mobile-bar) is a request for availability. [Big Island](bigisland:/mobile-bar) is join the inquiry list, Kona–Kohala first.',
  },
  {
    q: 'Is this hub page the four-hour cart?',
    a: 'It only routes you. The four-hour package, with the cart, citrus, and ice, is written on that island’s mobile bar page. A cocktail hour inside a dinner is still a line on the same written quote.',
  },
  {
    q: 'How do I ask for a Kauaʻi terrace hour?',
    a: 'Request availability on [Kauaʻi mobile bar](kauai:/mobile-bar) and name Princeville, Hanalei, or Poʻipū. Those shores are not one driveway. A reply does not hold the glassware. Far-north weather can still move the night.',
  },
  {
    q: 'Can the cart pour in Hilo on the same day as Kona?',
    a: 'The cart stays on the Kona–Kohala side unless the east is booked as its own day. Open [Big Island mobile bar](bigisland:/mobile-bar) and join the inquiry list for the terrace you mean. A Hilo pour is not a second stop after a Kohala sunset.',
  },
];

const hubMobileBarFaqs = [
  {
    q: 'What does mobile bar Hawaii include?',
    a: 'A cart, a bartender, citrus, ice and glassware for four hours. Spirits billed at cost with receipts, or you supply your own. Island the mobile bar page pages publish the package price for that shore.',
  },
  {
    q: 'How is this different from the villa bar page?',
    a: 'Open the island the mobile bar page document for that shore’s cart.',
  },
  {
    q: 'Do you staff all four islands?',
    a: 'Yes. Oʻahu and Maui take a written package quote now. Kauaʻi and Hawaiʻi Island are by inquiry only — join the list with dates and shore. Starting prices are still published on every island page.',
  },
  {
    q: 'Can we stack the cart with dinner or a wedding week?',
    a: 'Yes. The packaged cart is a line on the same written quote as a visitor dinner or a wedding week. It is not buried inside a hospitality fee.',
  },
];

const rows: { id: IslandId; line: string }[] = [
  { id: 'oahu', line: 'Waikīkī residences, Kahala lawns, Ko Olina villas and Kailua houses.' },
  { id: 'maui', line: 'Welcome pours in Wailea, Kapalua and Kāʻanapali.' },
  { id: 'kauai', line: 'Princeville, Hanalei and Poʻipū — a bartender on the terrace.' },
  { id: 'bigisland', line: 'Kona–Kohala first. Sunset bar on lava-coast terraces.' },
];

const COPY: Record<
  IslandId,
  { h1: string; lede: string; detail: string; hero: { file: string; alt: string }; faqs: { q: string; a: string }[] }
> = {
  oahu: {
    h1: 'A cocktail bar on your lānai — Waikīkī to Ko Olina.',
    lede: 'Bartender, citrus, ice and glassware on the terrace. Stack it with an Oʻahu chef night or book the hour alone.',
    detail:
      'This hour is the bartender beside the chef, or the hour on its own if dinner is not booked. Honolulu towers, Kahala houses, Ko Olina villas, and Kailua weeks can all take it. The four-hour cart, with the package price, is the [mobile bar](/mobile-bar). There is no published bartender hour. The line is quoted in writing. A 20% service charge and Hawaiʻi GET up to 4.712% follow on their own lines, and a 50% deposit follows once you accept. Gratuity is never required. Those fee lines are on [pricing](/pricing). Say if you are supplying the spirits when you request a written quote.',
    hero: photos.barOahu,
    faqs: [
      {
        q: 'How does a bartender line sit next to a Honolulu dinner?',
        a: 'The dinner and the pour are separate lines on one written quote. Service at 20% and Hawaiʻi GET up to 4.712% come after those lines, not inside them. A 50% deposit follows once you accept. Gratuity is never required. The fee pattern is on [pricing](/pricing).',
      },
      {
        q: 'If Kahala already bought the wine, what does the bartender pour?',
        a: 'Your bottles. Spirits are billed at cost with receipts, or you supply your own. Say which when you request a written quote so the reply does not invent a bottle line. The four-hour kit is a different page.',
      },
      {
        q: 'What is the bartender doing while the chef uses a Ko Olina kitchen?',
        a: 'The chef stays on the food. The bartender sets the terrace, pours through dinner, and clears the station at the end time you named. They are not a second cook. Both names belong on the same quote if you want them the same night.',
      },
      {
        q: 'What should an Oahu note include for a pour with dinner?',
        a: 'The address, the date, the headcount, and whether the bartender is with the chef or alone. Add who supplies the spirits. A tower should mention the freight window if the building has one. Request a written quote on [the quote form](/quote).',
      },
      {
        q: 'Is this lānai hour the four-hour cart?',
        a: 'The four-hour cart is the [mobile bar](/mobile-bar). This page is the bartender for the dinner hour, or the hour alone. The package price is not this line. Request a written quote and name the hour you want.',
      },
      {
        q: 'Can we book the Oahu bartender without a chef?',
        a: 'You can book the hour alone. It is still quoted in writing, with 20% service and Hawaiʻi GET up to 4.712% on their own lines. A cooktop is a dinner question, not a bar question. Say it is bar only on [the quote form](/quote).',
      },
    ],
  },
  maui: {
    h1: 'Villa bartender add-on — Wailea and Kapalua terraces.',
    lede: 'Welcome pours and a terrace hour in Wailea, Kapalua, Kāʻanapali, and Makena, beside the chef.',
    detail:
      'Book this when the villa dinner needs a person on the terrace for the hour, including the evening you land. Wailea, Kapalua, and Kāʻanapali are the usual lawns. Makena can be named the same way. The packaged four hours live on the [mobile bar](/mobile-bar), not here. No bartender hour is printed on the card. You get a written line, then service at 20% and Hawaiʻi GET up to 4.712% each alone. A 50% deposit holds the dates after you accept. Gratuity is never required. Open [pricing](/pricing) for the fee lines. Quotes are open. Tell us if the house already bought the bottles.',
    hero: photos.barMaui,
    faqs: [
      {
        q: 'How is a welcome pour written on a Wailea arrival total?',
        a: 'As its own line beside that arrival dinner, on the quote you accept before anyone shops. It is not a second company after you land. Service at 20% and Hawaiʻi GET up to 4.712% follow, each alone. A 50% deposit holds the dates after you accept. See [pricing](/pricing).',
      },
      {
        q: 'The villa stocked the bar. Does the Kapalua bartender still buy bottles?',
        a: 'Only if you ask for that. Spirits are billed at cost with receipts, or you supply your own. A house that already bought the wine should say so, or the reply may add a bottle line you did not want. Quotes are open.',
      },
      {
        q: 'Where is the bartender during plated service in Kāʻanapali?',
        a: 'On the terrace or the lānai you named, while the chef works the kitchen. The pour is not a course. If you want both for the landing night, put both on the quote. Saturday traffic changes the call time, not those two lines.',
      },
      {
        q: 'What do we tell the desk for a Maui dinner pour?',
        a: 'The villa, the shore, the date, the headcount, and whether this is the landing night. Say if bottles are already in the house. Request a written quote on [the quote form](/quote). A Kapalua welcome and a later Wailea dinner are two lines when you ask for both.',
      },
      {
        q: 'Why open the Maui bartender page instead of the four-hour cart?',
        a: 'This page is the dinner-hour bartender. The cart, priced as a package, is the [mobile bar](/mobile-bar). Use that page for four hours and the setup as a package. Use this one when the pour sits with the chef.',
      },
      {
        q: 'Can one Saturday quote include a Kapalua pour and a Wailea dinner?',
        a: 'It can, as two lines with the drive planned in. They are not one terrace. Name both houses and which one gets the bartender. Request a written quote. The food stays on [pricing](/pricing), separate from the pour.',
      },
    ],
  },
  kauai: {
    h1: 'Estate cocktails on both Kauaʻi shores.',
    lede: 'Request availability for a bartender on a Princeville, Hanalei, or Poʻipū dinner. Name the shore.',
    detail:
      'Request availability for a bartender on the dinner, and name Princeville, Hanalei, or Poʻipū. Kapaʻa is a different driveway, so name it if that is the house. This is not the four-hour package. That cart is the [mobile bar](/mobile-bar). A request does not reserve the glassware. If a shore can be staffed, the reply shows the bartender as its own line, then 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit follows a written yes. Gratuity is never required. The fee lines are on [pricing](/pricing). A house past the bridge should say so. A closure moves the night.',
    hero: photos.barKauai,
    faqs: [
      {
        q: 'How does a Princeville bartender show on the written reply?',
        a: 'As a written line next to dinner, if that shore can be staffed. Then 20% service and Hawaiʻi GET up to 4.712%, each alone. A 50% deposit follows a written yes, not the request. Gratuity is never required. Fee lines are on [pricing](/pricing). Request availability and name the north shore.',
      },
      {
        q: 'Does a Poʻipū dinner pour include the bottles?',
        a: 'The bottles are a choice in the request, not part of the person on the terrace. Spirits are billed at cost with receipts, or you supply your own. Put that choice next to the shore when you request availability so the reply does not guess.',
      },
      {
        q: 'How do the chef and the bartender share a south-shore night?',
        a: 'The chef cooks. The bartender runs the terrace you named and stops at the end time on the reply. Rain may move the table under cover. That backup should be in the request. They are one booking with two lines, not two companies.',
      },
      {
        q: 'What do we put in a Kauai request for a dinner pour?',
        a: 'The shore, the estate, the date, the headcount, and whether dinner is booked the same night. Add who brings the bottles, and say if the house is past the bridge. Request availability on [the quote form](/quote). A request is not a confirmation.',
      },
      {
        q: 'Where is the four-hour Kauai package if we want the cart?',
        a: 'On the [mobile bar](/mobile-bar). This page stays the dinner-hour bartender. Do not expect the package price on this hour. Request availability and say cart or dinner hour so the reply uses the right line.',
      },
      {
        q: 'If the Hanalei road closes, what happens to the bar line?',
        a: 'The night moves. A closure does not forfeit a deposit, and it does not silently become a Poʻipū pour. The clause is on the [Hanalei bridge](/hanalei-bridge) page and on the written reply when the house is past the bridge. South-shore bars do not use it.',
      },
    ],
  },
  bigisland: {
    h1: 'Sunset pours on the Kohala Coast.',
    lede: 'Join the inquiry list for a bartender on a Kona or Kohala dinner. Hilo is not a second stop.',
    detail:
      'Join the inquiry list for a bartender on a Kona, Waikoloa, or Kohala dinner. Waimea can be named when the house is up there. Do not leave that town off the note you send. Hilo is a separate dedicated day and is not a second pour after sunset. The four-hour package is the [mobile bar](/mobile-bar). No bartender hour is published. The reply lists the pour, then a 20% service charge and Hawaiʻi GET up to 4.712% as separate lines. A 50% deposit follows a written yes. Gratuity is never required. Read [pricing](/pricing) for those lines. An inquiry is not a held terrace.',
    hero: photos.barBigisland,
    faqs: [
      {
        q: 'How is a Kohala bartender written on the west-side reply?',
        a: 'On its own line with the west-side dinner, after you join the inquiry list and the day can be staffed. A 20% service charge and Hawaiʻi GET up to 4.712% follow as separate lines. A 50% deposit follows a written yes. Gratuity is never required. The card is [pricing](/pricing).',
      },
      {
        q: 'We did not ship bottles to Kona. Who brings them?',
        a: 'Buy them in town, or ask the desk to buy them and attach the receipts at cost. Spirits are billed at cost with receipts, or you supply your own. Write that choice into the inquiry so the terrace line stays the bartender.',
      },
      {
        q: 'Can the chef and a bartender work the same Waikoloa night?',
        a: 'They can, on one reply. The chef uses the kitchen. The bartender keeps the terrace for the hour you named. Put both in the inquiry or the pour is left off. Hilo is not added after dessert.',
      },
      {
        q: 'What belongs in the inquiry when we want a pour with dinner?',
        a: 'The west-side address, the date, the headcount, and that you want a bartender with dinner. Note who supplies the spirits. Flag Ironman if the week is the race. Join the inquiry list on [the quote form](/quote). Leave Hilo off that note.',
      },
      {
        q: 'Which page has the four-hour cart on Hawaiʻi Island?',
        a: 'The [mobile bar](/mobile-bar). Join the inquiry list there for the package. This page is only the dinner-hour bartender, quoted in writing, with no hourly figure on the card. Do not mix the two lines in one unlabeled note.',
      },
      {
        q: 'Can a Hilo pour ride along with a Kona bartender?',
        a: 'Keep Hilo off the Kona bartender note. East-side glassware is a different day, confirmed in writing, with its own inquiry. If the house is in Hilo or Volcano, start that note from scratch. Do not treat Waikoloa as the same sunset.',
      },
    ],
  },
};

function IslandBarPicker({
  path,
  heading,
  stills,
  priceOf,
}: {
  path: '/bar' | '/mobile-bar';
  heading: string;
  stills: Record<IslandId, { hero: { file: string; alt: string } }>;
  priceOf: (id: IslandId) => string;
}) {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
        <Eyebrow>Where we pour</Eyebrow>
        <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
          {heading}
        </h2>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {rows.map((row) => {
            const still = stills[row.id].hero;
            return (
              <li key={row.id}>
                <HostLink island={row.id} path={path} className="group block">
                  <span className="relative block aspect-[3/4] overflow-hidden bg-sand">
                    <Photo
                      src={still.file}
                      alt={still.alt}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
                    />
                  </span>
                  <span className="mt-5 block font-display text-[1.5rem] font-light text-ink">{islands[row.id].name}</span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-mute">{row.line}</span>
                  <span className="mt-2 block text-[13px] text-mute">{priceOf(row.id)}</span>
                </HostLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function HubBarView() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: hubBarFaqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={photos.barHero.file} alt={photos.barHero.alt} min="short">
        <p className="text-[13px] text-mute">Cocktails</p>
        <LineReveal
          text="Cocktails where you already are."
          className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ink">
          A bartender, a terrace bar, citrus and ice — stacked with dinner or booked as its own hour.
        </p>
        <p className="mt-5 text-[17px] text-ink">From {formatMobileBarGuest('maui')}, Maui.</p>
        <div className="mt-8">
          <QuoteCta service="mobile-bar" variant="light" />
        </div>
      </Hero>
      <DocumentCopy
        heading="Open the island mobile bar."
        paras={[
          'The terrace hour is booked on the island where the glassware goes, not from this hub page. [Oʻahu mobile bar](oahu:/mobile-bar) covers Waikīkī residences, Kahala lawns, Ko Olina villas, and Kailua houses. Request a written quote. [Maui mobile bar](maui:/mobile-bar) is the welcome pour in Wailea, Kapalua, and Kāʻanapali. Quotes are open.',
          '[Kauaʻi mobile bar](kauai:/mobile-bar) is Princeville, Hanalei, and Poʻipū. Request availability and name the shore. [Big Island mobile bar](bigisland:/mobile-bar) is Kona–Kohala first. Join the inquiry list. Hilo is not added to a west-side pour. The packaged cart on each of those pages is the four-hour line. This page only routes you.',
        ]}
      />
      <IslandBarPicker
        path="/bar"
        heading="Related pages."
        stills={COPY}
        priceOf={(id) => {
          const bar = getMobileBar(id);
          return `${formatMobileBarPackage(id)} · or $${bar.perGuest[0]}–$${bar.perGuest[1]} a guest`;
        }}
      />
      <HubPhotoGrid
        eyebrow="Related pages"
        heading="Related pages."
        intro="Related pages to help you plan your dinner, event or stay."
        columns={2}
        items={[
          {
            href: '/mobile-bar',
            title: 'The packaged cart',
            body: 'Four hours, priced as a package.',
            still: photos.hubMobileBar,
          },
          {
            href: '/weddings',
            title: 'Wedding week',
            body: 'One team for the week. The bar is a line on that quote, not a second company.',
            still: photos.weddingHero,
          },
          {
            href: '/private-chef',
            title: 'Visitor dinner',
            body: 'One night in the house. Stack the terrace hour or book dinner alone.',
            still: photos.hubChef,
          },
          {
            href: '/quote',
            title: 'The quote form',
            body: 'Five fields. A human reply. Typical response in Hawaii business hours.',
            still: photos.quoteHub,
          },
        ]}
      />
      <LongFaq items={hubBarFaqs} title="Before you open an island bar." />
      <QuoteTeaser headline="Date, headcount, island — we quote the bar in writing." />
    </>
  );
}

const PACKAGE: Record<IslandId, { h1: string; lede: string; detail: string; hero: { file: string; alt: string } }> = {
  oahu: {
    h1: 'The 4-hour mobile bar package — Waikīkī to Ko Olina.',
    lede:
      'A cart, ice, citrus, glassware and a bartender for four hours. Stack it with a Honolulu dinner or book the package alone on a Ko Olina lānai.',
    detail:
      'The four hours cover the bartender, the setup, ice, citrus, and glassware. Spirits are billed at cost with receipts, or you bring the bottles. A Kahala counter and a Waikīkī residence both need a place for ice. The cart can pour beside dinner, and dinner still needs a real cooktop if you stack the two. The written quote shows the package as its own line. A 20% service charge and Hawaiʻi GET up to 4.712% follow on their own lines. A 50% deposit holds the date after you accept. Gratuity is never required.',
    hero: photos.mobileBarOahu,
  },
  maui: {
    h1: 'A 4-hour mobile bar for Maui villa nights.',
    lede:
      'The packaged cart for a villa night in Wailea, Kapalua, Kāʻanapali, or Makena, including the arrival evening.',
    detail:
      'What the four hours cover is the bartender, the setup, ice, citrus, and glassware on that villa lānai. You may bring the spirits, or we bill them at cost with receipts. On arrival night the bar is a line next to dinner, not a second company. A welcome pour in Kapalua and a later Wailea dinner are separate lines when you ask for both. Saturday traffic between those shores is planned into the call time. Service at 20% and Hawaiʻi GET up to 4.712% follow the lines. A 50% deposit holds the dates after you accept. Gratuity is never required.',
    hero: photos.mobileBarMaui,
  },
  kauai: {
    h1: 'A 4-hour mobile bar on both Kauaʻi shores.',
    lede:
      'Request availability for a full cart on a Princeville, Hanalei, or Poʻipū terrace. The add-on hour is on the villa bar page.',
    detail:
      'The package is a bartender, setup, ice, citrus, and glassware for four hours. Spirits are at cost with receipts, or the estate supplies them. The bar can sit with dinner on the same written reply, as its own line. A house past the Hanalei bridge keeps the 72-hour notice and the weather clause. A closure moves the night. It does not forfeit a deposit. The reply lists 20% service and Hawaiʻi GET up to 4.712% after the package. A 50% deposit follows a written yes. Gratuity is never required. Request availability and name the shore.',
    hero: photos.mobileBarKauai,
  },
  bigisland: {
    h1: 'A 4-hour mobile bar on the Kohala Coast.',
    lede:
      'A west-side cart for Kona and Kohala: ice, citrus, glassware, and a bartender. Hilo is not a second stop.',
    detail:
      'Join the inquiry list for four hours on a Kona or Kohala terrace. The package covers the bartender, setup, ice, citrus, and glassware. Spirits are billed at cost with receipts, or you supply them. The bar is a line beside a west-side dinner on the same reply. It is not a drive to Hilo after dessert. Hilo is its own dedicated day. The reply shows the package, then a 20% service charge and Hawaiʻi GET up to 4.712% as separate lines. A 50% deposit follows a written yes. Gratuity is never required.',
    hero: photos.mobileBarBigisland,
  },
};

function packageFaqs(islandId: IslandId): { q: string; a: string }[] {
  const price = `The package price is ${formatMobileBarPackage(islandId)}, or ${formatMobileBarGuest(islandId)}. ${FEE_DISCLOSURE}`;
  if (islandId === 'oahu') {
    return [
      {
        q: 'What does the four-hour Oʻahu cart cover?',
        a: 'A bartender, bar setup, ice, citrus, and glassware for four hours, from Waikīkī residences to Ko Olina. The villa bar page is the shorter add-on stacked with dinner. This page is the packaged cart.',
      },
      {
        q: 'Who brings the spirits for a Kahala or Ko Olina bar?',
        a: 'You may bring them, or we buy them and bill the receipts at cost. The package price does not hide the bottles inside the bartender line. Say which way you want it when you request a written quote.',
      },
      {
        q: 'Can the cart sit beside a Honolulu dinner?',
        a: 'It can, on the same written quote, or you can book the four hours alone. Dinner still needs a cooktop. A hotel suite with a minibar is not that kitchen. The cart needs a counter and a place for ice.',
      },
      {
        q: 'Where do the bar, service charge, and GET sit?',
        a: 'The package is its own line. A 20% service charge and Hawaiʻi GET up to 4.712% follow as their own lines. A 50% deposit holds the date after you accept. Gratuity is never required. Quotes are open.',
      },
      {
        q: 'What is the Oʻahu package price?',
        a: price,
      },
    ];
  }
  if (islandId === 'maui') {
    return [
      {
        q: 'What is inside a four-hour Wailea cart?',
        a: 'A bartender, setup, ice, citrus, and glassware for four hours in Wailea, Kapalua, Kāʻanapali, or Makena. This is the packaged cart. The villa bar page is the shorter terrace hour.',
      },
      {
        q: 'Do we bring the bottles, or does the villa?',
        a: 'Either. The villa can supply the spirits, or we buy them and bill at cost with receipts. Tell us which on the quote so the bottle line is not a surprise next to the package.',
      },
      {
        q: 'How does the bar sit on an arrival-night dinner?',
        a: 'As a line next to that dinner on one written total, not a second company after you land. A Kapalua welcome and a later Wailea dinner are separate lines when you ask for both. Saturday traffic between them is planned in.',
      },
      {
        q: 'How is the Maui bar written next to the dinner band?',
        a: 'Package, then dinner, then service at 20% and Hawaiʻi GET up to 4.712%, each on its own line. A 50% deposit holds the dates after you accept. Gratuity is never required. Quotes are open. Request a written quote.',
      },
      {
        q: 'What does the Maui cart cost?',
        a: price,
      },
    ];
  }
  if (islandId === 'kauai') {
    return [
      {
        q: 'What does a four-hour Princeville cart include?',
        a: 'A bartender, setup, ice, citrus, and glassware for four hours on a Princeville, Hanalei, or Poʻipū terrace. Request availability. The villa bar page is the shorter add-on, not this package.',
      },
      {
        q: 'Who supplies the spirits when the estate is by request?',
        a: 'The estate can supply them, or we buy them and bill at cost with receipts. The package line is the cart and the bartender. Bottles stay separate. Say which you want when you request availability.',
      },
      {
        q: 'How does the bar sit with a Poʻipū dinner?',
        a: 'On the same written reply, as its own line next to dinner. A north-shore terrace is a different request from Poʻipū. Name the shore. A request does not hold the glassware.',
      },
      {
        q: 'What changes if the house is past the Hanalei bridge?',
        a: 'The 72-hour notice and the weather clause stay on the quote. A closure moves the night. It does not forfeit a deposit. South-shore carts do not use that clause. Request availability with the bridge side named.',
      },
      {
        q: 'How does the Kauaʻi package show on the reply?',
        a: price,
      },
    ];
  }
  return [
    {
      q: 'What does the four-hour Kohala cart include?',
      a: 'A bartender, setup, ice, citrus, and glassware for four hours on a Kona or Kohala terrace. Join the inquiry list for the west-side house. The villa bar page is the shorter add-on.',
    },
    {
      q: 'Who brings the spirits on a Kona terrace?',
      a: 'You can supply them, or we buy them and bill at cost with receipts. The package does not swallow the bottle cost. Say which when you join the inquiry list so the reply has a clean line.',
    },
    {
      q: 'How does the bar sit with a west-side dinner?',
      a: 'As its own line on the same reply as the Kona or Kohala dinner. It is not a second company, and it is not a drive to Hilo after dessert. Hilo is its own dedicated day.',
    },
    {
      q: 'Can the same cart cover a Hilo night?',
      a: 'Hilo is quoted as its own dedicated day, never stacked on a Kohala sunset. Join the inquiry list for the terrace you mean. A west-side note does not include the east side.',
    },
    {
      q: 'How is the Big Island package written on the reply?',
      a: price,
    },
  ];
}

export function HubMobileBarView() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'FoodService',
            name: 'Mobile bar Hawaii — myCHEF',
            description:
              'A cart, a bartender, citrus and ice as a published package. For a cocktail hour inside a dinner booking, add a villa bartender instead.',
            areaServed: 'Hawaiʻi',
            serviceType: 'Mobile bar',
            parentOrganization: { '@type': 'Organization', name: 'myCHEF Hawaii' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: hubMobileBarFaqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />
      <Hero src={photos.hubMobileBar.file} alt={photos.hubMobileBar.alt} min="short">
        <p className="text-[13px] text-mute">4-hour package</p>
        <LineReveal
          text="Mobile bar Hawaii — four hours, four islands."
          className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ink">
          A cart, a bartender, citrus and ice as a published package. For a cocktail hour inside a dinner booking, add a villa bartender instead.
        </p>
        <div className="mt-8">
          <QuoteCta service="mobile-bar" variant="light" />
        </div>
      </Hero>
      <IslandBarPicker
        path="/mobile-bar"
        heading="Related pages."
        stills={PACKAGE}
        priceOf={(id) => formatMobileBarPackage(id)}
      />
      <HubPhotoGrid
        eyebrow="Related pages"
        heading="Related pages."
        intro="Related pages to help you plan your dinner, event or stay."
        columns={2}
        items={[
          {
            href: '/bar',
            title: 'Bartender add-on',
            body: 'The terrace hour stacked with dinner.',
            still: photos.barHero,
          },
          {
            href: '/weddings',
            title: 'Wedding week',
            body: 'One team for the week. The packaged cart is a line on that quote.',
            still: photos.weddingHero,
          },
          {
            href: '/private-chef',
            title: 'Visitor dinner',
            body: 'One night in the house. Stack the cart or book dinner alone.',
            still: photos.hubChef,
          },
          {
            href: '/quote',
            title: 'The quote form',
            body: 'Five fields. A human reply. Typical response in Hawaii business hours.',
            still: photos.quoteHub,
          },
        ]}
      />
      <LongFaq items={hubMobileBarFaqs} />
      <QuoteTeaser headline="Date, headcount, island — we quote the package in writing." />
    </>
  );
}

export function IslandMobileBarView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const copy = PACKAGE[islandId];
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const faqs = packageFaqs(islandId);

  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'FoodService',
            name: `${copy.h1.split('—')[0].trim().replace(/\.$/, '')} — myCHEF`,
            description: copy.lede,
            areaServed: islands[islandId].name,
            serviceType: 'Bartending',
            parentOrganization: { '@type': 'Organization', name: `myCHEF ${islands[islandId].name}` },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />
      <Hero src={copy.hero.file} alt={copy.hero.alt} min="short">
        <p className="text-[13px] text-mute">{islands[islandId].name} · 4-hour package</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-ink">{copy.lede}</p>
        <p className="mt-4 text-[17px] text-ink">{formatMobileBarPackage(islandId)}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="mobile-bar" variant="light" />
        </div>
      </Hero>
      <DocumentCopy
        heading={`How the packaged cart runs on ${islands[islandId].name}.`}
        paras={[
          copy.lede,
          copy.detail,
          `${formatMobileBarPackage(islandId)}, or ${formatMobileBarGuest(islandId)}. ${FEE_DISCLOSURE}`,
        ]}
      />
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${islands[islandId].name} · Related`}
        heading="Related pages."
        intro="A bartender for one dinner, a full wedding week, or a single private chef night."
        items={[
          { path: '/bar', label: 'Bartender add-on', detail: '/bar' },
          { path: '/weddings', label: 'Wedding week', detail: '/weddings' },
          { path: '/private-chef', label: 'What’s included', detail: '/private-chef' },
        ]}
      />
      <LongFaq items={faqs} title="The packaged cart." />
      <SiblingCluster island={islandId} href={href} />
      <QuoteTeaser island={islandId} />
    </>
  );
}

export function IslandBarView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const copy = COPY[islandId];
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const faqs = copy.faqs;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={copy.hero.file} alt={copy.hero.alt} min="short">
        <p className="text-[13px] text-mute">{islands[islandId].name}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-ink">{copy.lede}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="mobile-bar" variant="light" />
        </div>
      </Hero>
      <DocumentCopy
        heading={`How the terrace bar runs on ${islands[islandId].name}.`}
        paras={[copy.lede, copy.detail]}
      />
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${islands[islandId].name} · Beside the add-on`}
        heading="Related pages."
        intro="The four-hour bar package, the wedding week and a single in-villa dinner each have their own page."
        items={[
          { path: '/mobile-bar', label: '4-hour package', detail: 'The bar cart, start to finish' },
          { path: '/weddings', label: 'Wedding week', detail: 'Rehearsal to farewell brunch' },
          { path: '/private-chef', label: PRIVATE_CHEF_PAGE_ANCHOR[islandId], detail: 'One dinner in the villa' },
        ]}
      />
      <LongFaq items={faqs} />
      <SiblingCluster island={islandId} href={href} />
      <QuoteTeaser island={islandId} />
    </>
  );
}
