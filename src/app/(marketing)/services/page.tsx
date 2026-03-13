import { Suspense } from 'react';

import { getServicesPageContent } from '@/application/services/getServicesPageContent';
import { getServices } from '@/application/services/getServices';
import {
  ServicesCards,
  ServicesComparison,
  ServicesDetails,
  ServicesFinalCta,
  ServicesHero,
  ServicesProcessMini,
  ServicesProblemStrip,
} from '@/components/marketing/services';

export default function ServicesPage() {
  const content = getServicesPageContent();
  const services = getServices();

  return (
    <>
      <ServicesHero content={content.hero} />
      <ServicesProblemStrip content={content.problemStrip} />
      <ServicesCards content={content.offers} services={services} />
      <ServicesComparison content={content.comparison} services={services} />
      <Suspense
        fallback={
          <div className="py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-5xl rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.55),rgba(9,14,28,0.72))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8 lg:p-10" />
          </div>
        }
      >
        <ServicesDetails content={content.details} services={services} />
      </Suspense>
      <ServicesProcessMini content={content.process} />
      <ServicesFinalCta content={content.finalCta} />
    </>
  );
}
