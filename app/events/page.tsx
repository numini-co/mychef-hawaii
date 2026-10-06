import HubPhotoGrid from '@/components/HubPhotoGrid';
import { HubDirectoryView } from '@/components/views/SupportViews';
import { photos } from '@/data/photos';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/events');

export default function Page() {
  return (
    <HubDirectoryView
      id="events"
      related={
        <HubPhotoGrid
          eyebrow="Related pages"
          heading="Related pages."
          intro="Related pages to help you plan your dinner, event or stay."
          columns={2}
          items={[
            {
              href: '/catering',
              title: 'Villa catering',
              body: 'The larger staffed room.',
              still: photos.cateringHero,
            },
            {
              href: '/weddings',
              title: 'Wedding week',
              body: 'Welcome dinner to recovery brunch.',
              still: photos.weddingHero,
            },
            {
              href: '/quote',
              title: 'The quote form',
              body: 'Five fields. A human reply. Typical response in Hawaii business hours.',
              still: photos.quoteHub,
            },
            {
              href: '/mobile-bar',
              title: 'The packaged cart',
              body: 'The four-hour villa package.',
              still: photos.hubMobileBar,
            },
          ]}
        />
      }
    />
  );
}
