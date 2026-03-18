import { getPrivacyPolicyContent } from '@/application/legal/getLegalPageContent';
import { LegalPageLayout } from '@/components/marketing/legal';

export default function PolitiqueConfidentialitePage() {
  const content = getPrivacyPolicyContent();

  return <LegalPageLayout content={content} />;
}
