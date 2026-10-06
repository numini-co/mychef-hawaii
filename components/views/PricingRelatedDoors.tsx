import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import HubPhotoGrid from '@/components/HubPhotoGrid';
import { getHubDirectory } from '@/data/hubDirectories';
import { photos } from '@/data/photos';
import { islands, type IslandId } from '@/data/islands';

/** Rate-card related doors. The published table stays paper on PricingView. */
export function PricingRelatedDoors({ islandId }: { islandId?: IslandId | null }) {
  const fee = getHubDirectory('/private-chef-cost');
  const menus = getHubDirectory('/menus');

  if (islandId) {
    return (
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${islands[islandId].shortName} · Related`}
        heading="Related pages."
        intro="Related pages to help you plan your dinner, event or stay."
        columns={2}
        items={[
          { path: '/quote', label: 'The quote form', detail: '/quote' },
          { path: '/private-chef-cost', label: 'The fee stack', detail: '/private-chef-cost' },
          { path: '/legal', label: 'Booking notes', detail: '/legal' },
          { path: '/menus', label: 'Menus', detail: '/menus' },
        ]}
      />
    );
  }

  return (
    <HubPhotoGrid
      eyebrow="Related pages"
      heading="Related pages."
      intro="Related pages to help you plan your dinner, event or stay."
      columns={2}
      items={[
        {
          href: '/quote',
          title: 'The quote form',
          body: 'Five fields. A human reply. Typical response in Hawaii business hours.',
          still: photos.quoteHub,
        },
        {
          href: '/private-chef-cost',
          title: fee?.cardLabel ?? 'Fee stack',
          body: fee?.lede ?? '',
          still: photos.hubFeeStack,
        },
        {
          href: '/legal',
          title: 'Booking notes',
          body: 'Quotes, GET, deposits.',
          still: photos.hubLegal,
        },
        {
          href: '/menus',
          title: menus?.cardLabel ?? 'Menus',
          body: menus?.lede ?? 'Sample menus for each island.',
          still: photos.hubMenus,
        },
      ]}
    />
  );
}
