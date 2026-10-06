import HubPhotoGrid from '@/components/HubPhotoGrid';
import { HubDirectoryView } from '@/components/views/SupportViews';
import { photos } from '@/data/photos';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/personal-chef');

export default function Page() {
  return (
    <HubDirectoryView
      id="personalChef"
      related={
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
              href: '/vacation-chef',
              title: 'Stay Chef week',
              body: 'A chef for the villa week.',
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
      }
    />
  );
}
