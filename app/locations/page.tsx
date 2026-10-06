import HubPhotoGrid from '@/components/HubPhotoGrid';
import { HubDirectoryView } from '@/components/views/SupportViews';
import { photos } from '@/data/photos';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/locations');

export default function Page() {
  return (
    <HubDirectoryView
      id="locations"
      related={
        <HubPhotoGrid
          eyebrow="Related pages"
          heading="Related pages."
          intro="Related pages to help you plan your dinner, event or stay."
          columns={2}
          items={[
            {
              href: '/areas',
              title: 'Area guide',
              body: 'Corridors plus the rest of the named places.',
              still: photos.hubAreas,
            },
            {
              href: '/coverage',
              title: 'Coverage maps',
              body: 'Each island publishes its own zone list.',
              still: photos.hubCoverage,
            },
            {
              href: '/quote',
              title: 'The quote form',
              body: 'Five fields. A human reply. Typical response in Hawaii business hours.',
              still: photos.quoteHub,
            },
            {
              href: '/how-it-works',
              title: 'How it works',
              body: 'Enquire, menu, written quote.',
              still: photos.hubHow,
            },
          ]}
        />
      }
    />
  );
}
