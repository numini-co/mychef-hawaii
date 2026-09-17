export type WorldDestination = {
  label: string;
  domain: string;
  href: string;
  external: boolean;
};

/**
 * Sister myCHEF markets — user-specified order and labels.
 * Hawaii always points at the statewide hub so island guests can reach the door.
 */
export const WORLD_DESTINATIONS: readonly WorldDestination[] = [
  { label: 'Dubai, UAE', domain: 'mychef.ae', href: 'https://mychef.ae', external: true },
  { label: 'Bali, Indonesia', domain: 'mychef.id', href: 'https://mychef.id', external: true },
  {
    label: 'Hawaii, USA',
    domain: 'mychef-hawaii.com',
    href: 'https://mychef-hawaii.com',
    external: false,
  },
  {
    label: 'South Africa',
    domain: 'mychefs.co.za',
    href: 'https://mychefs.co.za',
    external: true,
  },
];
