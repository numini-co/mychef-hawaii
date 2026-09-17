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
          eyebrow="Beside this desk"
          heading="Open a related document."
          intro="This page is the four-island picker for how to reach a coordinator. The form, the rate card, the FAQ, and the honesty register are their own URLs. Island desks stay on the island host. WhatsApp, phone, and email are on this desk — not only on island /contact."
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
              body: 'The published rate card. Distinct from the fee-stack explainer.',
              still: photos.hubPricing,
            },
            {
              href: '/faq',
              title: 'FAQ',
              body: 'Booking questions live on the island host. This hub page is the picker.',
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
