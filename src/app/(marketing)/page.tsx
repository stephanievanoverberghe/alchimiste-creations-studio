import { Hero } from '@/components/marketing/home/Hero';
import { Problem } from '@/components/marketing/home/Problem';
import { PortfolioPreview } from '@/components/marketing/home/PortfolioPreview';
import { Process } from '@/components/marketing/home/Process';
import { ServicesPreview } from '@/components/marketing/home/ServicesPreview';
import { ValueProposition } from '@/components/marketing/home/ValueProposition';
import { SocialProof } from '@/components/marketing/home/SocialProof';
import { FinalCta } from '@/components/marketing/home/FinalCta';
import { HumanSection } from '@/components/marketing/home/HumanSection';
import { getMarketingMetadata } from '@/application/seo/getMarketingMetadata';

export const metadata = getMarketingMetadata({
  title: 'Studio web premium pour entrepreneurs',
  description:
    'Alchimiste Créations conçoit des sites clairs, crédibles et orientés conversion pour attirer des prospects qualifiés.',
  pathname: '/',
});

export default function Page() {
  return (
    <>
      <Hero />
      <Problem />
      <ValueProposition />
      <ServicesPreview />
      <PortfolioPreview />
      <Process />
      <HumanSection />
      <SocialProof />
      <FinalCta />
    </>
  );
}
