import InVillaServicesView from '@/components/views/InVillaServicesView';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/in-villa-services/breakfast-service');

export default function Page() {
  return <InVillaServicesView id="breakfast-service" />;
}
