import InVillaServicesView from '@/components/views/InVillaServicesView';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/in-villa-services/villa-provisioning');

export default function Page() {
  return <InVillaServicesView id="villa-provisioning" />;
}
