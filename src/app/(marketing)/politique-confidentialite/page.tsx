import { getMarketingMetadata } from '@/application/seo/getMarketingMetadata';
import { getPrivacyPolicyContent } from '@/application/legal/getLegalPageContent';
import { LegalPageLayout } from '@/components/marketing/legal';

export const metadata = getMarketingMetadata({
  title: 'Politique de confidentialité',
  description:
    'Comprenez comment Alchimiste Créations collecte, utilise et protège vos données personnelles.',
  pathname: '/politique-confidentialite',
});

export default function PolitiqueConfidentialitePage() {
  const content = getPrivacyPolicyContent();

  return <LegalPageLayout content={content} />;
}
