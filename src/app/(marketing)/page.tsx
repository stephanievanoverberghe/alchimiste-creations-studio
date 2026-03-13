import { Faq } from '@/components/marketing/Faq';
import { Hero } from '@/components/marketing/Hero';
import { Problem } from '@/components/marketing/Problem';
import { PortfolioPreview } from '@/components/marketing/PortfolioPreview';
import { Process } from '@/components/marketing/Process';
import { ServicesPreview } from '@/components/marketing/ServicesPreview';
import { ValueProposition } from '@/components/marketing/ValueProposition';
import { SocialProof } from '@/components/marketing/SocialProof';
import { FinalCta } from '@/components/marketing/FinalCta';

export default function Page() {
  return (
    <>
      <Hero />
      <Problem />
      <ValueProposition />
      <ServicesPreview />
      <PortfolioPreview />
      <SocialProof />
      <Process />
      <Faq />
      <FinalCta />
    </>
  );
}
