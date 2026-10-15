/**
 * Published Hawaii desk contacts — one E.164 everywhere.
 * Voice, WhatsApp, and schema all use this number. Never +971.
 * Island addresses below (confirmed 15 Oct 2026).
 */
export const DESK_EMAIL = 'quotes@mychef-hawaii.com';
export const DESK_MAILTO = `mailto:${DESK_EMAIL}`;

/** Digits only, country code included (wa.me + tel:+). */
export const DESK_PHONE_DIGITS = '18084687748';
export const DESK_PHONE_E164 = `+${DESK_PHONE_DIGITS}`;
export const DESK_PHONE_DISPLAY = '(808) 468-7748';
export const DESK_TEL = `tel:${DESK_PHONE_E164}`;

export const DESK_HOURS = 'Hawaii Standard Time business hours';
export const DESK_WHATSAPP_PREFILL = 'Hawaii villa dinner inquiry';

/** Hawaii Business deep link — same E.164 as voice. Never +971. */
export const DESK_WHATSAPP = `https://wa.me/${DESK_PHONE_DIGITS}`;

/** Island addresses David confirmed on 15 Oct 2026. Used in footer, contact areas and schema. */
export type IslandAddress = {
  label: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
};
export const ISLAND_ADDRESSES: Record<'oahu' | 'maui' | 'kauai' | 'bigisland', IslandAddress> = {
  oahu: { label: 'Oʻahu', streetAddress: '1801 Kalākaua Avenue', addressLocality: 'Honolulu', postalCode: '96815' },
  maui: { label: 'Maui', streetAddress: '1 Cameron Way', addressLocality: 'Kahului', postalCode: '96732' },
  kauai: { label: 'Kauaʻi', streetAddress: '4191 Hardy Street', addressLocality: 'Līhuʻe', postalCode: '96766' },
  bigisland: { label: 'Hawaiʻi Island', streetAddress: '71 Banyan Drive', addressLocality: 'Hilo', postalCode: '96720' },
};
export const ISLAND_ADDRESS_ORDER = ['oahu', 'maui', 'kauai', 'bigisland'] as const;

export function formatIslandAddress(a: IslandAddress): string {
  return `${a.streetAddress}, ${a.addressLocality}, HI ${a.postalCode}`;
}

export function postalAddressJsonLd(id: keyof typeof ISLAND_ADDRESSES) {
  const a = ISLAND_ADDRESSES[id];
  return {
    '@type': 'PostalAddress',
    streetAddress: a.streetAddress,
    addressLocality: a.addressLocality,
    addressRegion: 'HI',
    postalCode: a.postalCode,
    addressCountry: 'US',
  };
}

/** Hub: four island locations as departments, no single hub address. */
export function islandDepartmentsJsonLd() {
  return ISLAND_ADDRESS_ORDER.map((id) => ({
    '@type': 'LocalBusiness',
    name: `myCHEF ${ISLAND_ADDRESSES[id].label}`,
    telephone: DESK_PHONE_E164,
    email: DESK_EMAIL,
    address: postalAddressJsonLd(id),
    areaServed: { '@type': 'AdministrativeArea', name: ISLAND_ADDRESSES[id].label },
  }));
}
