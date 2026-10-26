import PricingView from '@/components/views/PricingView';
import { PricingRelatedDoors } from '@/components/views/PricingRelatedDoors';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/pricing');

// No page-level Suspense: PricingView keeps its own boundary around the ?island= reader,
// so the rate cards, longform and FAQ stream inside <main> in the first HTML response.
export default function Page() {
  return <PricingView related={<PricingRelatedDoors />} />;
}
