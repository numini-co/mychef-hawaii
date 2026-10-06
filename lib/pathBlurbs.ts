/** Short human descriptions for link cards — never show a raw URL path as copy. */
const BLURBS: Record<string, string> = {
  '/': 'In-villa dinners, published prices',
  '/private-chef': 'What a private chef night includes',
  '/catering': 'Staffed events for 10–75 guests',
  '/weddings': 'Welcome dinner to recovery brunch',
  '/quote': 'Five fields and a written reply',
  '/pricing': 'Published starting prices',
  '/private-chef-cost': 'Every line on the bill, explained',
  '/coverage': 'Where we cook and travel zones',
  '/locations': 'Towns and neighborhoods we cook in',
  '/areas': 'Every named place we cover',
  '/faq': 'Common booking questions',
  '/trust': 'What we will and won’t claim',
  '/what-we-dont-do': 'What we decline, in writing',
  '/legal': 'Deposits, changes and weather',
  '/contact': 'Phone, WhatsApp and email',
  '/how-it-works': 'From enquiry to the last plate',
  '/events': 'Birthdays, anniversaries and more',
  '/mobile-bar': 'A four-hour bar package',
  '/bar': 'A bartender for your villa',
  '/staffing': 'Servers, bartenders and butlers',
  '/personal-chef': 'Weekly cooking for residents',
  '/vacation-chef': 'A chef for your whole stay',
  '/menus': 'Sample menus by course',
  '/dietary': 'Allergies and diets, planned in',
  '/guest-counts': 'How many guests a house can host',
  '/kids-menus': 'Plates for younger guests',
  '/honeymoon-dinners': 'Dinner for two',
  '/rehearsal-dinners': 'The night before the ceremony',
  '/corporate-catering': 'Executive dinners and offsites',
  '/retreat-catering': 'Meals for a retreat week',
  '/help': 'Planning guides',
};

export function pathBlurb(path: string): string | undefined {
  const clean = path.split(/[?#]/)[0] || '/';
  return BLURBS[clean];
}

export function isPathLike(text: string | undefined): boolean {
  return !!text && /^\/[\w\-/?=&#]*$/.test(text.trim());
}
