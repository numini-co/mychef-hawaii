import type { IslandId } from './islands';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog MENU_SLUGS — designed per table, not a fake standing carte.
 * Distinct from /menus (the process), /catering/family-style (the service format),
 * and /events/brunch (the occasion).
 */

export const MENU_SKU_SLUGS = ['three-course', 'family-style-menu', 'breakfast', 'lunch'] as const;
export type MenuSkuSlug = (typeof MENU_SKU_SLUGS)[number];

export interface MenuSkuPage extends UniqueCell {
  slug: MenuSkuSlug;
}

export const menuSkuPages: Record<IslandId, MenuSkuPage[]> = {
  oahu: [
    {
      slug: 'three-course',
      name: 'Three-course',
      h1: 'A three-course in an Oahu dining room — designed per table.',
      title: 'A three-course in an Oahu dining room | myCHEF',
      description:
        'Three-course menus in Kahala rooms and Ko Olina villas. Per table, not a standing carte.',
      lede:
        'Crudo, a sear, a close — paced for that Kahala or Ko Olina table.',
      photo: 'menuThreeOahu',
      body: [
        'The cook is in the dining-room kitchen with time to set plates before anyone sits. A Honolulu tower still waits on its freight window. A Ko Olina villa can start once the house is open. Courses leave the pass one at a time, and the kitchen is cleared before we go. See [how Oʻahu menus are designed](/menus).',
        'This is the designed dinner, not [the tasting menu](/fine-dining/tasting-menu). The sample on the menus page shows length. It is not your carte. One night uses the signature per-guest band, groceries inside it. Read [pricing](/pricing), then [request a written quote](/quote) with the address and the seats.',
      ],
      faqs: [
        {
          q: 'Is the sample on the menus page the dinner we will actually eat?',
          a: 'It shows the length of an Oʻahu dinner, not the plates for your table. We still write the draft after we know the kitchen and who sits down. A poke start or a sear can change. [How Oʻahu menus are designed](/menus) is the process. Your menu is the quote.',
        },
        {
          q: 'Can a Kahala dinner run to four courses instead of three?',
          a: 'A fourth course can be written into the same dinner. It stays one table and one written total, not a second product with its own card. Say so when you [request a written quote](/quote). We will not invent a four-course price.',
        },
        {
          q: 'How is this different from the tasting menu?',
          a: 'Three courses are a first, a main, and a close, paced in the dining room. The tasting menu is a longer arc on its own page. If you want that arc, open [the tasting menu](/fine-dining/tasting-menu). This page is the shorter dinner.',
        },
        {
          q: 'What does the Ko Olina kitchen need before plates start leaving the pass?',
          a: 'A cooktop, a fridge, and a table the group can use. A hotel room with a coffee maker is declined. Send photos of the burners with the address. Dietary limits are written before the shop. See [dietary notes](/dietary).',
        },
        {
          q: 'How is a three-course dinner priced, and are groceries extra?',
          a: 'One night uses the signature per-guest band, and grocery buying sits inside that band. It is not billed again as groceries at cost. A Stay Chef day is the other model: the day rate, then groceries at cost with receipts. See [pricing](/pricing). Gratuity is never required.',
        },
        {
          q: 'What should we send to request a written quote for this table?',
          a: 'The address, the date, who is eating, and any allergy or child’s plate. Add building rules if the house is a Kahala tower. Quotes are open. Use [the quote form](/quote) or the desk at quotes@mychef-hawaii.com, +1 (808) 468-7748.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'family-style-menu',
      name: 'Family-style menu',
      h1: 'A family-style menu in Oahu houses — platters, not the service format.',
      title: 'A family-style menu in Oahu houses | myCHEF',
      description:
        'Family-style menus in Kahala and Ko Olina houses. Designed per table.',
      lede:
        'Platters down a Kahala dining table. Not the staffed service format.',
      photo: 'menuFamilyOahu',
      body: [
        'These are the platters for one table, written for that house. They are not the staffed format. That format, with a floor crew, is [family-style service](/catering/family-style). In a tower the trays wait on the freight window. In Ko Olina they come through the villa. Then the platters go down the table. See [how Oʻahu menus are designed](/menus).',
        'Honolulu welcome dinners often use this menu. Children’s plates are planned beside the adults on [kids’ menus](/kids-menus), before the shop. One night uses the signature band, groceries inside it. There is no separate platter price. Read [pricing](/pricing) and [request a written quote](/quote).',
      ],
      faqs: [
        {
          q: 'How is a family-style menu different from family-style service?',
          a: 'This page is the food: platters designed for the table. Family-style service is the staffed format, with hours for the floor written apart from the food. Open [family-style service](/catering/family-style) if you need that crew. Stay here if you need the menu.',
        },
        {
          q: 'Do Honolulu welcome dinners use these platters?',
          a: 'Often, yes, when the night is a shared table in the house rather than paced plates. The menu is still written for that kitchen. It is not a standing welcome carte. Tell us it is a welcome when you [request a written quote](/quote).',
        },
        {
          q: 'Where do children’s plates sit on a Kahala table?',
          a: 'Beside the adults, at the same seating, not after the platters are finished. We write those plates before the shop. See [kids’ menus](/kids-menus). A tower still needs its freight window before the trays come up.',
        },
        {
          q: 'What kitchen do you need for platters in a Ko Olina house?',
          a: 'A cooktop, a fridge, and a table long enough for the platters. Photos help. A hotel suite without burners is declined. Building rules, if the house has them, belong on the note. We confirm the room before anyone shops.',
        },
        {
          q: 'How is one platter dinner priced?',
          a: 'As the signature per-guest band for that night, with groceries inside the band. We do not add a platter surcharge, and we do not publish a second price for sharing. On a Stay Chef day the meal sits in the day rate. See [pricing](/pricing). Gratuity is never required.',
        },
        {
          q: 'What should I send to request a written quote for platters?',
          a: 'The house address, the date, who eats, and whether children need their own plates. Say plated courses if that is actually what you want. Quotes are open. The desk is quotes@mychef-hawaii.com, +1 (808) 468-7748, or [the quote form](/quote).',
        },
      ],
      related: [
        { path: '/catering/family-style', label: 'Family-style service' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/kids-menus', label: 'Kids at the table' },
      ],
    },
    {
      slug: 'breakfast',
      name: 'Breakfast',
      h1: 'Breakfast in an Oahu house — morning food, not the brunch occasion.',
      title: 'Breakfast in an Oahu house | myCHEF',
      description:
        'Breakfast menus in Kahala houses and Ko Olina villas.',
      lede:
        'Eggs, fruit, last night’s fish recast.',
      photo: 'menuBreakfastOahu',
      body: [
        'A Kahala breakfast starts with the freight window, not the eggs. The cook is in the kitchen before the household is up and sets fruit, coffee, and the pan. Ko Olina loads through the villa. Kailua uses the driveway, with no lobby clock. Burners are clean before the family returns. See [how Oʻahu menus are designed](/menus).',
        'This morning is the house meal, not [the brunch occasion](/events/brunch). No breakfast price is published. On a Stay Chef day it sits in the day rate, groceries billed at cost with receipts. A signature dinner keeps groceries inside the per-guest band. Read [pricing](/pricing) and [Stay Chef](/vacation-chef), then [request a written quote](/quote).',
      ],
      faqs: [
        {
          q: 'What makes a Kahala breakfast different from booking brunch?',
          a: 'Breakfast is the morning meal in the house. Brunch is the occasion, with its own guests and clock, on [the brunch page](/events/brunch). A tower breakfast still needs the freight window before the cook arrives. Request a written quote if you want the morning, not the party.',
        },
        {
          q: 'When does the cook need the freight window in a Honolulu tower?',
          a: 'Before the household is up, and only after the building has given a window. A Ko Olina villa loads through the house instead. A Kailua driveway has no lobby desk. The quote names which arrival applies. Send the building rules with the address.',
        },
        {
          q: 'What does a Ko Olina kitchen need before the eggs go on?',
          a: 'A cooktop, a fridge, and a table the household can use. A hotel room with only a coffee maker is declined. Photos of the burners keep the draft honest. We wipe the stove before we leave so the house can use it.',
        },
        {
          q: 'Can a child’s plate and a shellfish note be on the shop before you buy?',
          a: 'Both go on the draft before the shop. We keep a restriction only when that kitchen can hold it. A child’s plate is served with the adults, not as a later seating. See [kids’ menus](/kids-menus) and [dietary notes](/dietary).',
        },
        {
          q: 'How is a single breakfast priced next to a Stay Chef day?',
          a: 'A single morning has no published breakfast price. It is quoted in writing. On a Stay Chef day the meal sits inside the day rate, and groceries are billed at cost with receipts. A signature dinner keeps groceries inside the band. See [pricing](/pricing). Gratuity is never required.',
        },
        {
          q: 'What should a Kailua house send to request a written breakfast quote?',
          a: 'The address, the date, who eats, dietary limits, and whether children need their own plates. Add gate or tower rules if this is not a Kailua driveway. Quotes are open. Use [the quote form](/quote) or quotes@mychef-hawaii.com, +1 (808) 468-7748.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch occasion' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'lunch',
      name: 'Lunch',
      h1: 'Lunch in an Oahu house — a midday menu, cooked in your kitchen.',
      title: 'Lunch in an Oahu house | myCHEF',
      description:
        'Lunch menus in Kailua houses, Kahala dining rooms and Ko Olina villas. Midday food. Designed per table.',
      lede:
        'Mokulua in the window if you are in Kailua. A shorter arc than dinner.',
      photo: 'menuLunchOahu',
      body: [
        'Midday in a Kailua or Lanikai house is a shorter cook than dinner: a set table, a hot plate, then a clean stove. Kahala and Ko Olina can take the same midday menu when the kitchen is real. A hotel room is in only if it has a stove. Most suites do not. See [how Oʻahu menus are designed](/menus).',
        'This is not a [meal-prep](/meal-prep) drop in the fridge. We cook, serve, and clear. No lunch price is published. On a Stay Chef day, lunch is part of the day rate when the day includes it, groceries at cost with receipts. Read [pricing](/pricing) and [vacation chef](/vacation-chef). [Request a written quote](/quote).',
      ],
      faqs: [
        {
          q: 'How is a house lunch different from a meal-prep drop?',
          a: 'Lunch is cooked in the house at midday, then served and cleared. Meal prep is a gated fridge program, not this menu. Open [meal prep](/meal-prep) if you wanted bags left behind. Stay here if someone should be at the stove.',
        },
        {
          q: 'Is a midday menu cheaper than the signature dinner?',
          a: 'It is often a shorter cook, and it is still quoted in writing. There is no published lunch band and no automatic discount off dinner. A signature dinner keeps groceries inside the per-guest band. See [pricing](/pricing). Gratuity is never required.',
        },
        {
          q: 'Can you cook lunch in a Waikīkī hotel room?',
          a: 'Only when the room has a stove we can use. Most suites have a coffee maker, and those are declined. A residence or a villa with burners is the booking. Send a photo of the cooktop with the address on [the quote form](/quote).',
        },
        {
          q: 'What window does a Kailua lunch actually use?',
          a: 'The cook is in the house with time to set the kitchen before you sit, then clears the burners after. Lanikai uses the same driveway logic. We do not hold a public beach as the dining room. Name the hour you want to eat.',
        },
        {
          q: 'How are dietary notes and kids’ plates handled before the midday shop?',
          a: 'They are written into the draft before the buy. A child’s plate comes out with the adults. We only keep a restriction the kitchen can cook. See [dietary notes](/dietary) and [kids’ menus](/kids-menus). Send the limits with the address.',
        },
        {
          q: 'What should I send to request a written lunch quote?',
          a: 'The address, the date, the hour you want to eat, who is there, and any dietary limits. Say if this sits inside a Stay Chef day. Quotes are open. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748, or [the quote form](/quote).',
        },
      ],
      related: [
        { path: '/meal-prep', label: 'Meal prep' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
  ],
  maui: [
    {
      slug: 'three-course',
      name: 'Three-course',
      h1: 'A three-course in a Maui dining room — designed per table.',
      title: 'A three-course in a Maui dining room | myCHEF',
      description:
        'Three-course menus, Wailea and Kapalua. Designed per table, not a standing carte.',
      lede:
        'Crudo, a grill, a close. Wailea and Kapalua, one table at a time.',
      photo: 'menuThreeMaui',
      body: [
        'In a Wailea dining room the cook sets the pass, then sends a first, a grill, and a close. Kapalua uses the same pacing. If the trade wind shuts the lānai, plates move indoors, decided before you accept. We do not copy another Maui kitchen’s menu. See [how Maui menus are designed](/menus).',
        'A three-course is not [the tasting menu](/fine-dining/tasting-menu), and the sample on the menus page is only an example of length. One night uses the signature per-guest band, groceries inside it. Upcountry is a surcharge zone, quoted with the menu. Read [pricing](/pricing) and [request a written quote](/quote).',
      ],
      faqs: [
        {
          q: 'Is the Wailea sample a standing carte I can order from?',
          a: 'No carte is standing. The sample shows how long a villa dinner runs. Your draft is written for that kitchen after you tell us who is eating. Open [how Maui menus are designed](/menus). The sample is not a menu to tick.',
        },
        {
          q: 'How is a three-course different from a tasting arc on Maui?',
          a: 'Three courses are a first, a main, and a close. A tasting arc is more passes and lives on [the tasting menu](/fine-dining/tasting-menu). Pick this page for the shorter dinner. We will not stretch three courses into a tasting without writing it.',
        },
        {
          q: 'What if the house is Upcountry rather than Wailea or Kapalua?',
          a: 'Upcountry is a surcharge zone. The extra is quoted with the menu, not slipped in after you accept. Pāʻia and the North Shore are handled the same way. The band itself is on [pricing](/pricing). Send the town with the address.',
        },
        {
          q: 'Can one guest’s gluten note change a course without rewriting the night?',
          a: 'One course can change when the kitchen can keep that restriction. The rest of the table stays. We write the change before the shop, not at the pass. See [dietary notes](/dietary). If the kitchen cannot hold it, we say so in the quote.',
        },
        {
          q: 'Do you cook from another Maui restaurant’s menu?',
          a: 'We cook from a draft written for your villa. We do not impersonate another kitchen or reprint its dishes as ours. If you want a direction, say grill, crudo, or a lighter close. The plates are still designed for your burners.',
        },
        {
          q: 'What turns a Kapalua three-course into a written total?',
          a: 'The address, the date, who sits down, and any dietary limits. Quotes are open. One night uses the signature band with groceries inside it. Service, GET, and the deposit sit on [pricing](/pricing). Send it on [the quote form](/quote). Gratuity is never required.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'family-style-menu',
      name: 'Family-style menu',
      h1: 'A family-style menu in Maui villas — platters, not the service format.',
      title: 'A family-style menu in Maui villas | myCHEF',
      description:
        'Family-style menus in Wailea, Kīhei and West Maui. Designed per table.',
      lede:
        'Platters on a Wailea or Kapalua lānai, with an indoor backup if the wind rises.',
      photo: 'menuFamilyMaui',
      body: [
        'Platters are the menu: bowls and boards for one villa table. The staffed format is a different booking, [family-style service](/catering/family-style). On a Wailea lānai we set the platters out of the wind. If the trade comes up, the same food moves inside, written before you accept. Kīhei houses use the dining table they have. See [how Maui menus are designed](/menus).',
        'Children eat from plates planned on [kids’ menus](/kids-menus), beside the adults. One platter night uses the signature per-guest band, groceries inside it. No platter price is published on its own. Read [pricing](/pricing) and [request a written quote](/quote) with the shore.',
      ],
      faqs: [
        {
          q: 'Are lānai platters the same booking as staffed family-style service?',
          a: 'The platters are this menu. The staffed format, with a floor crew, is [family-style service](/catering/family-style). You can ask for both, and the hours stay apart from the food. This page only designs what goes on the table.',
        },
        {
          q: 'What happens to Wailea platters if the wind rises?',
          a: 'They move to the dining room, and that backup is written before you accept. We do not add a tent after the fact. Kapalua uses the same rule. Kīhei family houses that already eat indoors stay indoors. Say which table you have.',
        },
        {
          q: 'Can children eat from the same platters in a Kīhei house?',
          a: 'They get plates written for them, served beside the adults, not after the table is cleared. Spice and portion are set before the shop. See [kids’ menus](/kids-menus). The adult platters do not have to be bland for that to work.',
        },
        {
          q: 'Does a Kapalua platter dinner include a server?',
          a: 'Not from this page. A server is a separate ask on [staffing](/staffing), with hours apart from the food. A bartender is quoted in writing, with no hourly figure on the card. The menu can be served without that crew if the house wants it that way.',
        },
        {
          q: 'Is there a separate published price for platters?',
          a: 'No second card exists for sharing. One night uses the signature per-guest band, groceries inside it. A Stay Chef day folds the meal into the day rate, groceries at cost with receipts. See [pricing](/pricing). Gratuity is never required.',
        },
        {
          q: 'What should a West Maui platter request include?',
          a: 'The villa address, the date, the shore, who eats, and any children’s plates. Saturday arrival toward Kapalua already accounts for Honoapiʻilani. Quotes are open. Send it on [the quote form](/quote). We write the total before you accept.',
        },
      ],
      related: [
        { path: '/catering/family-style', label: 'Family-style service' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/kids-menus', label: 'Kids at the table' },
      ],
    },
    {
      slug: 'breakfast',
      name: 'Breakfast',
      h1: 'Breakfast in a Maui villa — morning food, not the brunch occasion.',
      title: 'Breakfast in a Maui villa | myCHEF',
      description:
        'Breakfast menus in Wailea and West Maui villas.',
      lede:
        'Eggs, fruit, the pool still.',
      photo: 'menuBreakfastMaui',
      body: [
        'In Wailea the cook is in the villa before the pool is in use. Fruit and coffee go on a shaded table. Eggs follow. If the trade wind shuts the lānai, those plates move to the dining room, decided before you accept. Kapalua and Kāʻanapali keep that indoor backup. See [how Maui menus are designed](/menus).',
        'A villa breakfast is not [brunch as an occasion](/events/brunch). No breakfast price is published. A Stay Chef morning sits in the day rate, groceries at cost with receipts. The signature dinner is a different night, groceries inside the band. Open [pricing](/pricing) and [vacation chef](/vacation-chef). [Request a written quote](/quote).',
      ],
      faqs: [
        {
          q: 'Is a Wailea breakfast the same booking as a brunch party?',
          a: 'It is the morning meal in the villa, cooked before the pool. Brunch is the occasion, with a larger clock, on [the brunch page](/events/brunch). Ask for breakfast if the household is eating. Ask for brunch if you are hosting.',
        },
        {
          q: 'How early does the Kapalua kitchen need to be free if we eat before the pool?',
          a: 'Before you want plates, with the cooktop and fridge clear. The cook sets fruit and coffee first, then eggs. A Saturday arrival from the south already allows for Honoapiʻilani. Tell us the hour you want to sit. We write that hour into the quote.',
        },
        {
          q: 'Where does the fruit board go if the trade wind shuts the lānai?',
          a: 'Onto the dining table indoors. That move is written before you accept, not invented at the door. Kāʻanapali and Wailea use the same backup. We do not add a tent for breakfast. Send a photo of both spots if you have them.',
        },
        {
          q: 'How do you write a dairy-free child’s plate into a South Maui shop?',
          a: 'It is on the draft before the buy, beside the adult plates, not as a second seating. We only promise a limit the villa kitchen can keep. See [kids’ menus](/kids-menus) and [dietary notes](/dietary). Name the child and the limit together.',
        },
        {
          q: 'Does one villa breakfast have its own published price?',
          a: 'It does not. A morning is quoted in writing. On a Stay Chef day it sits inside the day rate, and groceries are billed at cost with receipts. Dinner’s signature band is a different night, groceries inside the band. See [pricing](/pricing). Gratuity is never required.',
        },
        {
          q: 'What belongs on a Kāʻanapali note before you write the total?',
          a: 'The villa, the date, the hour, who eats, and dietary limits. Say South or West so arrival is honest. Quotes are open. Service and GET live on [pricing](/pricing). Send the note on [the quote form](/quote).',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch occasion' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'lunch',
      name: 'Lunch',
      h1: 'Lunch in a Maui house — midday in Kīhei and Wailea.',
      title: 'Lunch in a Maui house | myCHEF',
      description:
        'Lunch in Kīhei family houses and Wailea villas. Midday food. Designed per table.',
      lede:
        'A shorter arc than dinner. South Maui light.',
      photo: 'menuLunchMaui',
      body: [
        'A Kīhei or Wailea lunch is cooked in the house at midday: set the kitchen, serve, clear the burners. It is not a beach park, and it is not a hotel lawn without a stove. West Maui houses add Honoapiʻilani to the arrival, especially on Saturday. Wind moves an open table inside, written first. See [how Maui menus are designed](/menus).',
        'Lunch is not a [meal-prep](/meal-prep) fridge drop. No lunch price is published. When a Stay Chef day includes midday, the meal sits in the day rate and groceries are at cost with receipts. Read [pricing](/pricing) and [vacation chef](/vacation-chef). [Request a written quote](/quote) and name the shore.',
      ],
      faqs: [
        {
          q: 'Is a Kīhei lunch the gated fridge program?',
          a: 'Lunch is cooked and served in the house, then cleared. The fridge program is [meal prep](/meal-prep), and it stays gated. If you want a cook at midday, use this page. If you want bags left behind, that is the other one.',
        },
        {
          q: 'Will you cook a beach-park lunch in South Maui?',
          a: 'We cook houses. A park is not a kitchen, and a resort lawn without burners is not one either. Wailea and Kīhei rentals with a cooktop are the booking. Send the address, not a beach name, on [the quote form](/quote).',
        },
        {
          q: 'How does Saturday traffic change a West Maui lunch?',
          a: 'Honoapiʻilani is planned into arrival before you accept. We do not discover the drive on the day and add it later. A Wailea lunch does not inherit that clock. Name Kapalua or Kāʻanapali if that is the house, and name the hour you want to eat.',
        },
        {
          q: 'Why is a shorter lunch still a written total instead of a discount card?',
          a: 'Because no lunch band is published. A shorter cook is still quoted in writing. It is not an automatic cut off the signature dinner. Groceries on a Stay Chef day are at cost with receipts. See [pricing](/pricing). Gratuity is never required.',
        },
        {
          q: 'Can a child’s plate be ready when the adults sit in Wailea?',
          a: 'The child’s plate is written before the shop and served when the adults sit, not after. See [kids’ menus](/kids-menus). Dietary limits go on the same draft. See [dietary notes](/dietary). Tell us ages only so portions make sense.',
        },
        {
          q: 'What does a Kapalua lunch quote need from us?',
          a: 'The rental address, the date, the hour, who eats, and dietary limits. Quotes are open. Say whether midday sits inside a Stay Chef day. Bands and fee items are on [pricing](/pricing). Send the note on [the quote form](/quote).',
        },
      ],
      related: [
        { path: '/meal-prep', label: 'Meal prep' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'three-course',
      name: 'Three-course',
      h1: 'A three-course on a Kauai estate — designed per table, inquiry.',
      title: 'A three-course on a Kauai estate | myCHEF',
      description:
        'Three-course menus in Princeville and Poʻipū. Inquiry stage. Designed per table.',
      lede:
        'Crudo, a sear, a close. Princeville or Poʻipū, by a request for availability.',
      photo: 'menuThreeKauai',
      body: [
        'A three-course on the south uses Poʻipū sun and a shorter drive from Līhuʻe. A Princeville table is mist, a covered lānai, and the Hanalei bridge notes if the house sits past the bridge. Rain moves the courses under cover. It does not move the booking to the other shore. See [how Kauaʻi menus are designed](/menus).',
        'The sample is an example of length, not a carte you can book off. This dinner is not [the tasting menu](/fine-dining/tasting-menu). No date is held because the sample exists. [Request availability](/quote) and name the shore. The signature band, with groceries inside it, is on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Is the estate sample the menu you will cook?',
          a: 'It is an example of length for a Kauaʻi dinner. The plates are still written for that kitchen. A Princeville draft and a Poʻipū draft are not the same shop. Read [how Kauaʻi menus are designed](/menus), then request availability with the shore named.',
        },
        {
          q: 'How does a three-course differ from the tasting menu here?',
          a: 'Three courses are a first, a sear, and a close. The tasting menu is a longer arc on [its own page](/fine-dining/tasting-menu). Request availability for the one you mean. We will not turn three courses into a tasting after the shop.',
        },
        {
          q: 'What does rain do to a Princeville three-course?',
          a: 'Courses move under a covered lānai or into the dining room. That backup is in the note before anyone accepts. A bridge limit can move the night. It does not quietly become Poʻipū. The south shore does not inherit the bridge clause.',
        },
        {
          q: 'Can dietary changes be written before the South Shore shop?',
          a: 'They are written before the buy, for the shore you named. A shellfish change can swap one course when the kitchen can keep it. See [dietary notes](/dietary). Request availability again if the house changes shores. The other shore is a different shop.',
        },
        {
          q: 'Is a three-course confirmed because a sample is published?',
          a: 'Publication is not a hold. Request availability and name Princeville or Poʻipū. A reply is not a crew. The signature band on [pricing](/pricing) is the dinner shape when a crew exists, groceries inside the band. Gratuity is never required.',
        },
        {
          q: 'How do I request availability for a three-course and name the shore?',
          a: 'Send the house, the date, the shore, who sits, and dietary limits on [the quote form](/quote). Say if rain backup is a covered lānai or the dining room. The desk is quotes@mychef-hawaii.com, +1 (808) 468-7748. There is no instant confirm.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'family-style-menu',
      name: 'Family-style menu',
      h1: 'A family-style menu on Kauai estates — platters, both shores.',
      title: 'A family-style menu on Kauai estates | myCHEF',
      description:
        'Family-style menus in Princeville and Poʻipū. Inquiry stage. Designed per table.',
      lede:
        'Platters down the estate table. Request availability and name the shore.',
      photo: 'menuFamilyKauai',
      body: [
        'Estate platters are the menu on the table. They are not the staffed format. That format is [family-style service](/catering/family-style). Poʻipū can set them in the south sun, with a covered backup if rain starts. Princeville uses the covered lānai first. Past the Hanalei bridge, that clause still applies. See [how Kauaʻi menus are designed](/menus).',
        'Children’s plates are written on [kids’ menus](/kids-menus) before the shop, beside the adults. One dinner uses the signature band, groceries inside it, when a crew exists. Nothing is held until you [request availability](/quote). Bands sit on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Are estate platters the staffed family-style format?',
          a: 'They are the food on the table. The staffed format is [family-style service](/catering/family-style), and the floor hours are separate. Request availability for the menu, and name a server only if you want that extra. This page does not assume a floor crew.',
        },
        {
          q: 'Do North Shore platters still follow the Hanalei bridge clause?',
          a: 'If the house is past the bridge, yes. A closure moves the night. It does not forfeit it, and it does not hand the platters to Poʻipū. The south does not inherit that clause. Read the [bridge notes](/hanalei-bridge) and name the shore when you request availability.',
        },
        {
          q: 'Does rain move a Poʻipū platter table under cover?',
          a: 'Rain moves that table under the cover already written into the note. We do not add a tent. Princeville starts under cover. Request availability with which roof you have. A lawn with no indoor table is a decline.',
        },
        {
          q: 'How are children’s plates handled on either shore?',
          a: 'They are written before the shop and served beside the adults. North and south do not share one draft. See [kids’ menus](/kids-menus). Spice stays adjustable without bland platters for the whole table. Tell us the shore and the plates together.',
        },
        {
          q: 'How is a platter dinner priced while availability is still a request?',
          a: 'The signature per-guest band is the shape of one dinner, groceries inside it, and it is not a confirmation. No platter price is published separately. See [pricing](/pricing). Service and GET are on that card. Gratuity is never required. Request availability first.',
        },
        {
          q: 'How do I request availability for platters and name the shore?',
          a: 'Send the estate, the date, Princeville or Poʻipū, who eats, and any children’s plates on [the quote form](/quote). A request is not a held crew. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748. We answer when a shore crew exists.',
        },
      ],
      related: [
        { path: '/catering/family-style', label: 'Family-style service' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'breakfast',
      name: 'Breakfast',
      h1: 'Breakfast on a Kauai estate — morning food, inquiry, both shores.',
      title: 'Breakfast on a Kauai estate | myCHEF',
      description:
        'Breakfast menus in Poʻipū and Princeville. Inquiry stage.',
      lede:
        'Eggs, fruit, South sun or North mist.',
      photo: 'menuBreakfastKauai',
      body: [
        'A Poʻipū breakfast uses south sun and a short drive from Līhuʻe. Princeville is mist, a covered lānai, and the Hanalei bridge notes if the house is past the bridge. Rain moves the table under cover. It does not swap shores. [Request availability](/quote) and name the shore. See [how Kauaʻi menus are designed](/menus).',
        'Estate breakfast is the morning meal, not [the brunch occasion](/events/brunch). No breakfast price is published. On a Stay Chef day the meal is inside the day rate and groceries are billed at cost with receipts. See [pricing](/pricing) and [vacation chef](/vacation-chef).',
      ],
      faqs: [
        {
          q: 'Why is estate breakfast a different request from brunch?',
          a: 'Breakfast is the household morning, eggs and fruit in the kitchen you have. Brunch is the occasion on [its own page](/events/brunch). Request availability for the one you mean, and name the shore. A published page is not a held morning.',
        },
        {
          q: 'What changes on a Princeville morning if the Hanalei bridge is limited?',
          a: 'The call moves with the road. A closure shifts the morning. It does not cancel the food, and it does not become Poʻipū. Houses that are not past the bridge do not inherit that clause. Say which side of the bridge the kitchen is on.',
        },
        {
          q: 'What does a Poʻipū kitchen need if rain starts during breakfast?',
          a: 'A cooktop, a fridge, and a covered table already named in the note. We do not hunt for a tent. Princeville starts covered. Request availability with photos of the burners and the roof you will use. A lawn alone is not a kitchen.',
        },
        {
          q: 'Can dietary notes for both shores be shopped before the first morning?',
          a: 'Only for the shore you booked. North and south are different shops. Notes are written before that buy. See [dietary notes](/dietary). A child’s plate is on [kids’ menus](/kids-menus), served with the adults. Changing shores means a new request.',
        },
        {
          q: 'Is a breakfast price printed while we are still requesting availability?',
          a: 'No breakfast price is published. A morning is quoted in writing after availability is real. On a Stay Chef day it sits in the day rate, groceries at cost with receipts. See [pricing](/pricing) and [vacation chef](/vacation-chef). Gratuity is never required.',
        },
        {
          q: 'How do I request availability for a morning and name the shore?',
          a: 'Send the house, the date, the hour, Poʻipū or Princeville, and who eats on [the quote form](/quote). Add bridge side if the house is north. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748. A request is not a confirmation.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch occasion' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'lunch',
      name: 'Lunch',
      h1: 'Lunch on Kauai — midday in Kapaʻa and estate kitchens, inquiry.',
      title: 'Lunch on Kauai — midday, inquiry | myCHEF',
      description:
        'Lunch menus in Kapaʻa houses and Princeville or Poʻipū estates. Inquiry stage. Midday food.',
      lede:
        'A shorter arc. A Kapaʻa house or an estate kitchen. Request availability.',
      photo: 'menuLunchKauai',
      body: [
        'Kapaʻa is the shorter drive from Līhuʻe, and it is a real midday booking, not a stop on the way to an estate. Princeville or Poʻipū lunches follow the shore you name, including rain cover and the bridge clause on the far north. We cook, serve, and clear. See [how Kauaʻi menus are designed](/menus). [Request availability](/quote).',
        'This is not a [meal-prep](/meal-prep) drop. No lunch price is published. If a Stay Chef day includes midday, the meal sits in the day rate and groceries are at cost with receipts. The card is [pricing](/pricing). The day rate is [vacation chef](/vacation-chef).',
      ],
      faqs: [
        {
          q: 'How is a Kapaʻa lunch different from meal prep?',
          a: 'A cook is in the house at midday, then leaves it clean. Meal prep is the gated fridge program on [its page](/meal-prep). Kapaʻa is closer to Līhuʻe than Princeville and still needs a request for availability. It is not a bag drop on the highway.',
        },
        {
          q: 'Does a shorter midday service have a published lunch price?',
          a: 'It does not. A shorter cook is still quoted in writing after you request availability. It is not a discount card under dinner. See [pricing](/pricing) for the signature band and the day rate. Gratuity is never required. Nothing is held by the request alone.',
        },
        {
          q: 'What if rain hits an estate lunch on the North Shore?',
          a: 'The table moves under the cover already named in the note. If the house is past the Hanalei bridge, a closure moves the midday too. It does not become Kapaʻa or Poʻipū. Request availability with the roof and the shore in the same note.',
        },
        {
          q: 'Is Kapaʻa treated as a real booking?',
          a: 'Kapaʻa is a house kitchen on the way around from Līhuʻe, not a lesser stop. You still request availability. An estate lunch is the other choice, with its shore and weather. We do not stack Kapaʻa and Princeville on one clock.',
        },
        {
          q: 'How do dietary limits get into the midday shop?',
          a: 'They are written before that shore’s buy. A child’s plate is served with the adults. See [dietary notes](/dietary) and [kids’ menus](/kids-menus). Changing from Kapaʻa to an estate is a new request, because the shop is not the same.',
        },
        {
          q: 'How do I request availability for lunch and name the shore?',
          a: 'Send the house, the date, the hour, and Kapaʻa, Princeville, or Poʻipū on [the quote form](/quote). Add dietary limits. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748. Request availability. A reply is not a held cook.',
        },
      ],
      related: [
        { path: '/meal-prep', label: 'Meal prep' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'three-course',
      name: 'Three-course',
      h1: 'A three-course on the Kohala Coast — designed per table, west side.',
      title: 'A three-course on the Kohala Coast | myCHEF',
      description:
        'Three-course menus in Kona and Kohala houses. Inquiry stage. Designed per table. East side is a different day.',
      lede:
        'Kanpachi crudo, a sear, a close. West-side houses. A Hilo table is a different day.',
      photo: 'menuThreeBigisland',
      body: [
        'A west-side three-course is paced in a Kona or Kohala kitchen: a first, a sear, a close, then a clean pass. The sample is a west-side example of length, not a carte. Hilo or Volcano is a separate dedicated east-side day, quoted in writing, not added on. See [how Hawaiʻi Island menus are designed](/menus).',
        'This is not [the tasting menu](/fine-dining/tasting-menu). One west-side night uses the signature per-guest band, groceries inside it. The simpler open table lives only on this island’s [pricing](/pricing) page. [Join the inquiry list](/quote) for Kona–Kohala. Do not attach an east-side house to that note.',
      ],
      faqs: [
        {
          q: 'Is the kanpachi sample the menu for every west-side table?',
          a: 'It is one example of length for a Kona–Kohala dinner. Your draft is still written for that kitchen. A Waikoloa house and a Kona town house can share a west-side shop. They do not share a standing carte. See [how Hawaiʻi Island menus are designed](/menus).',
        },
        {
          q: 'Can a Hilo three-course share the evening with a Waikoloa dinner?',
          a: 'Hilo cannot share that evening with Waikoloa. Hilo and Volcano are a separate dedicated east-side day, quoted in writing. They are not a second seating after the west side. Join the inquiry list for Kona–Kohala, or send the east side alone.',
        },
        {
          q: 'How is this menu different from the west-side tasting menu?',
          a: 'Three courses are a first, a main, and a close. The tasting menu is a longer arc on [its page](/fine-dining/tasting-menu). Join the inquiry list for the format you mean. We do not lengthen a three-course into a tasting after the shop is done.',
        },
        {
          q: 'What does a Kohala kitchen need for three paced courses?',
          a: 'A cooktop, a fridge, and a table out of the hard sun. Shade is the house, not the open lava. Photos of the burners belong with the address. Dietary limits are written before the west-side shop. See [dietary notes](/dietary).',
        },
        {
          q: 'How is the west-side dinner priced?',
          a: 'One night uses the signature per-guest band, groceries inside it. The simpler open table is on [pricing](/pricing) and only on this island. Neither figure is a hold. A Stay Chef day is the day rate plus groceries at cost with receipts. Gratuity is never required.',
        },
        {
          q: 'What do I include to join the inquiry list without pulling Hilo into the same night?',
          a: 'The west-side address, the date, who eats, and dietary limits on [the quote form](/quote). Write Kona, Waikoloa, or Kohala. If the house is Hilo or Volcano, send that as its own day. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
    {
      slug: 'family-style-menu',
      name: 'Family-style menu',
      h1: 'A family-style menu on west-side Hawaiʻi Island — platters on lava.',
      title: 'A family-style menu on west-side Hawaiʻi Island | myCHEF',
      description:
        'Family-style menus in Kona and Kohala. Inquiry stage. East side is a different day.',
      lede:
        'Platters in a west-side house. A Hilo table is a separate dedicated east-side day.',
      photo: 'menuFamilyBigisland',
      body: [
        'West-side platters are bowls on a Kona or Kohala table, in the shade of the house. They are not [family-style service](/catering/family-style). Open lava is not the dining room. Children eat inside with the adults. Hilo is a separate dedicated east-side day, quoted in writing. See [how Hawaiʻi Island menus are designed](/menus).',
        'Join the inquiry list for the Kona–Kohala side. One night uses the signature band, groceries inside it. Kids’ plates are on [kids’ menus](/kids-menus) before the shop. Read [pricing](/pricing). Do not add Volcano to a Waikoloa note.',
      ],
      faqs: [
        {
          q: 'Are west-side platters the same thing as family-style service?',
          a: 'The platters are this menu. The staffed format is [family-style service](/catering/family-style), and floor hours are separate. Join the inquiry list for the food, and name a server only if you need one. The lava house still needs a real table, not a lawn.',
        },
        {
          q: 'Can children eat on the open lava, or do they stay in the house?',
          a: 'They stay in the house, in the shade, with plates written before the shop. See [kids’ menus](/kids-menus). The open rock at midday is not a kids’ table. Adult platters use the same shaded room. Tell us ages only so portions fit.',
        },
        {
          q: 'Can a Hilo platter night be added onto a Waikoloa dinner?',
          a: 'It cannot. Hilo and Volcano are a separate dedicated east-side day, quoted in writing. Join the inquiry list for the west side, or send the east side by itself. We do not drive the platters across after a Kohala seating.',
        },
        {
          q: 'What does the Kohala kitchen need for platters?',
          a: 'A cooktop, a fridge, and a shaded table that holds the bowls. Photos help. A hotel room with a minibar is declined. Dietary limits are written before the west-side shop. See [dietary notes](/dietary). We confirm the room in the reply.',
        },
        {
          q: 'How is a platter dinner priced on the west side?',
          a: 'As the signature per-guest band, groceries inside it, quoted in writing after you join the inquiry list. No platter price is published on its own. A Stay Chef day uses the day rate plus groceries at cost with receipts. See [pricing](/pricing). Gratuity is never required.',
        },
        {
          q: 'What do I send to join the inquiry list for west-side platters?',
          a: 'The Kona, Waikoloa, or Kohala address, the date, who eats, and any children’s plates on [the quote form](/quote). Leave Hilo off that note. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748. An inquiry is not a held crew.',
        },
      ],
      related: [
        { path: '/catering/family-style', label: 'Family-style service' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
    {
      slug: 'breakfast',
      name: 'Breakfast',
      h1: 'Breakfast on west-side Hawaiʻi Island — morning food, not brunch.',
      title: 'Breakfast on west-side Hawaiʻi Island | myCHEF',
      description:
        'Breakfast menus in Kona and Kohala villas. Inquiry stage. East side is a different day.',
      lede:
        'Eggs, fruit, breakfast fish, hard sun. Coffee cherries on a side board if the house has them — origin labeled when the law requires it.',
      photo: 'menuBreakfastBigisland',
      body: [
        'On the Kona–Kohala side breakfast is set inside, because the terrace is already hot. Shade is the house. Coffee may be poured, origin labeled when the law requires it. We name no farm we cannot document. Hilo or Volcano is a separate dedicated east-side day, quoted in writing. See [how Hawaiʻi Island menus are designed](/menus).',
        'West-side breakfast is not [the brunch occasion](/events/brunch). No breakfast price is published. [Join the inquiry list](/quote) for Kona or Kohala. On a Stay Chef day the meal sits in the day rate, groceries at cost with receipts. Read [pricing](/pricing) and [vacation chef](/vacation-chef).',
      ],
      faqs: [
        {
          q: 'What separates a Kona breakfast from the west-side brunch occasion?',
          a: 'Breakfast is the morning in the house: eggs, fruit, maybe fish. Brunch is the occasion on [its page](/events/brunch). Join the inquiry list for the morning if that is the meal. Do not use brunch language if the household is simply eating early.',
        },
        {
          q: 'Can a Volcano morning share the day with a Waikoloa breakfast?',
          a: 'It cannot. Volcano and Hilo are a separate dedicated east-side day, quoted in writing. Join the inquiry list for the west side only, or send the east side alone. The hard sun in Waikoloa does not make Hilo a second stop.',
        },
        {
          q: 'Why is a Kohala breakfast served inside when the terrace is already hot?',
          a: 'Because the lava is not shade. Fruit, coffee, and eggs stay in the house. We do not set a picnic on the rock and call it a kitchen. If you have a covered lānai that is actually cool, say so. Otherwise the dining table is the plan.',
        },
        {
          q: 'When is a child’s plate written for the west-side shop?',
          a: 'Before the buy, with the adult breakfast, not after the bags are in. See [kids’ menus](/kids-menus). A fish allergy is a [dietary note](/dietary) on that same draft. Coffee on the side board is labeled for origin when the law requires it. We name no farm we cannot document.',
        },
        {
          q: 'Why does breakfast not have its own published band?',
          a: 'Because no breakfast price is published. It is quoted in writing. On a Stay Chef day it sits in the day rate, groceries at cost with receipts. The signature dinner band is a different meal, groceries inside it. See [pricing](/pricing). Gratuity is never required.',
        },
        {
          q: 'What do I include to join the inquiry list for a west-side morning?',
          a: 'The Kona or Kohala address, the date, the hour, who eats, and dietary limits on [the quote form](/quote). Keep Hilo off the note. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748. Joining the inquiry list is not a held morning.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch occasion' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    {
      slug: 'lunch',
      name: 'Lunch',
      h1: 'Lunch in a Waikoloa house — midday, west side, inquiry.',
      title: 'Lunch in a Waikoloa house | myCHEF',
      description:
        'Lunch menus in Waikoloa and Kona houses. Inquiry stage. Midday food. East side is a different day.',
      lede:
        'A shorter arc than dinner. Hard sun over Waikoloa. Hilo is a separate day.',
      photo: 'menuLunchBigisland',
      body: [
        'A Waikoloa or Kona lunch is a shorter cook than dinner, served inside while the rock is hot. Shade is the room, not a picnic. We set the kitchen, serve, and clear. Volcano is not a drive from Waikoloa. The east side is its own dedicated day, quoted in writing. See [how Hawaiʻi Island menus are designed](/menus).',
        'Lunch is not a [meal-prep](/meal-prep) fridge drop, and no lunch price is published. [Join the inquiry list](/quote) for the west side. On a Stay Chef day, midday sits in the day rate, groceries at cost with receipts. Read [pricing](/pricing) and [vacation chef](/vacation-chef).',
      ],
      faqs: [
        {
          q: 'How is a Waikoloa lunch different from a fridge drop?',
          a: 'Someone cooks in the house at midday, serves, and clears the burners. A fridge drop is [meal prep](/meal-prep), and it stays gated. Join the inquiry list if you want the cook. Do not use this page for bags left in Kona.',
        },
        {
          q: 'Can a Volcano picnic leave from Waikoloa the same day?',
          a: 'It cannot. Volcano and Hilo are a separate dedicated east-side day, quoted in writing. A west-side lunch stays in the Waikoloa or Kona house. Join the inquiry list for that house, or send the east side on its own. We will not stack the drive.',
        },
        {
          q: 'Where does a Kohala lunch sit when the sun is hard?',
          a: 'Inside the house, or on a covered lānai that is actually shaded. The open rock is not the dining room. Send a photo of the table you mean. A hotel room with a minibar is declined. The kitchen needs a cooktop and a fridge.',
        },
        {
          q: 'Is midday food a cheaper published band than dinner?',
          a: 'No lunch band is published. A shorter cook is still quoted in writing. It is not an automatic cut from the signature dinner, which keeps groceries inside the per-guest band. See [pricing](/pricing). Gratuity is never required. Join the inquiry list before any total exists.',
        },
        {
          q: 'When are kids’ plates and allergy notes locked for a west-side lunch?',
          a: 'Before the shop, on the same draft as the adults. See [kids’ menus](/kids-menus) and [dietary notes](/dietary). Plates come out together, in the shade. Changing the house from Kona to Hilo means a new inquiry, not a note on the bottom.',
        },
        {
          q: 'What do I send to join the inquiry list for a west-side lunch?',
          a: 'The Waikoloa, Kona, or Kohala address, the date, the hour, who eats, and dietary limits on [the quote form](/quote). Leave Volcano off. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748. The inquiry list is not a held midday.',
        },
      ],
      related: [
        { path: '/meal-prep', label: 'Meal prep' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/menus', label: 'How menus are designed' },
      ],
    },
  ],
};

export function getMenuSkuPage(island: IslandId, slug: string): MenuSkuPage | undefined {
  return menuSkuPages[island].find((row) => row.slug === slug);
}
