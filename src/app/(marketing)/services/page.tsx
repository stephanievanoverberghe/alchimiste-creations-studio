import { services } from '@/content/services/services';
import { getServicesPageContent } from '@/application/services/getServicesPageContent';
import {
  ServicesCards,
  ServicesComparison,
  ServicesDetails,
  ServicesFinalCta,
  ServicesHero,
  ServicesSelector,
} from '@/components/marketing/services';

export default function ServicesPage() {
  const content = getServicesPageContent();

  return (
    <>
      <ServicesHero content={content.hero} />
      <ServicesSelector content={content.selector} services={services} />
      <ServicesCards content={content.offers} services={services} />
      <ServicesComparison content={content.comparison} services={services} />
      <ServicesDetails content={content.details} services={services} />
      <ServicesFinalCta content={content.finalCta} />
    </>
  );
}
