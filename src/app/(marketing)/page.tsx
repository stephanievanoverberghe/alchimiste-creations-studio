import { Faq } from '@/components/marketing/Faq';
import { Hero } from '@/components/marketing/Hero';
import { PortfolioPreview } from '@/components/marketing/PortfolioPreview';
import { Process } from '@/components/marketing/Process';
import { ServicesPreview } from '@/components/marketing/ServicesPreview';
import { ValueProposition } from '@/components/marketing/ValueProposition';
import { FinalCta } from '@/components/marketing/FinalCta';

export default function Page() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ServicesPreview />
      <PortfolioPreview />
      <Process />
      <Faq />
      <FinalCta />
    </>
  );
}
