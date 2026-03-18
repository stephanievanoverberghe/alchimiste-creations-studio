import { getFinalCtaContent } from '@/application/home/getFinalCtaContent';
import { PageFinalCta } from '@/components/marketing/PageFinalCta';

export function FinalCta() {
  const content = getFinalCtaContent();

  return <PageFinalCta {...content} />;
}
