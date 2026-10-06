import ContactCluster from '@/components/ContactCluster';
import HubPhotoGrid from '@/components/HubPhotoGrid';
import { HubDirectoryView } from '@/components/views/SupportViews';
import { photos } from '@/data/photos';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/contact');

export default function Page() {
  return (
    <HubDirectoryView
      id="contact"
      related={
        <>
        <ContactCluster />
        <HubPhotoGrid
          eyebrow="Related pages"
          heading="Related pages."
          intro="WhatsApp, phone, and email are on this desk — not only on island the contact page."
          columns={2}
          items={[
            {
              href: '/quote',
              title: 'The quote form',
              body: 'Five fields. Kauaʻi and Hawaiʻi Island selections are inquiry, not instant book.',
              still: photos.quoteHub,
            },
            {
              href: '/pricing',
              title: 'What a night costs',
              body: 'The published rate card.',
              still: photos.hubPricing,
            },
            {
              href: '/faq',
              title: 'FAQ',
              body: 'Answers to common booking questions.',
              still: photos.hubFaq,
            },
            {
              href: '/trust',
              title: 'What we will not claim',
              body: 'Reviews we will not invent. Proof is published prices and a written quote.',
              still: photos.hubTrust,
            },
          ]}
        />
        </>
      }
    />
  );
}
