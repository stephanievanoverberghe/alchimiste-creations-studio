import { Faq } from '@/components/marketing/home/Faq';
import { Hero } from '@/components/marketing/home/Hero';
import { Problem } from '@/components/marketing/home/Problem';
import { PortfolioPreview } from '@/components/marketing/home/PortfolioPreview';
import { Process } from '@/components/marketing/home/Process';
import { ServicesPreview } from '@/components/marketing/home/ServicesPreview';
import { ValueProposition } from '@/components/marketing/home/ValueProposition';
import { SocialProof } from '@/components/marketing/home/SocialProof';
import { FinalCta } from '@/components/marketing/home/FinalCta';

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
