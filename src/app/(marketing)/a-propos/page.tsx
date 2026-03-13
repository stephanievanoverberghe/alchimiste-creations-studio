import { getAboutPageContent } from '@/application/about/getAboutPageContent';
import {
  AboutFinalCta,
  AboutHero,
  AboutIntro,
  AboutJourney,
  AboutValues,
  AboutVision,
} from '@/components/marketing/about';

export default function AboutPage() {
  const content = getAboutPageContent();

  return (
    <>
      <AboutHero content={content.hero} />
      <AboutIntro content={content.intro} />
      <AboutVision content={content.vision} />
      <AboutValues content={content.values} />
      <AboutJourney content={content.journey} />
      <AboutFinalCta content={content.finalCta} />
    </>
  );
}
