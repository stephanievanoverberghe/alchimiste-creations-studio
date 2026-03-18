import { getAboutPageContent } from '@/application/about/getAboutPageContent';
import { PageFinalCta } from '@/components/marketing/PageFinalCta';
import {
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
      <PageFinalCta
        {...content.finalCta}
        panelSize="lg"
        buttonClassName="group relative px-8 py-3 text-[0.95rem] font-semibold tracking-wide"
      />
    </>
  );
}
