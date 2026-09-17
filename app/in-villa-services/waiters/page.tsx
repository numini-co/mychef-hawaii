import InVillaServicesView from '@/components/views/InVillaServicesView';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/in-villa-services/waiters');

export default function Page() {
  return <InVillaServicesView id="waiters" />;
}
