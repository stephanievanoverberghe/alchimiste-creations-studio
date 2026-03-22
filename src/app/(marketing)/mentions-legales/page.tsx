import { getMarketingMetadata } from '@/application/seo/getMarketingMetadata';
import { getLegalNoticeContent } from '@/application/legal/getLegalPageContent';
import { LegalPageLayout } from '@/components/marketing/legal';

export const metadata = getMarketingMetadata({
  title: 'Mentions légales',
  description:
    'Consultez les mentions légales du studio Alchimiste Créations : éditeur, hébergeur et informations réglementaires.',
  pathname: '/mentions-legales',
});

export default function MentionsLegalesPage() {
  const content = getLegalNoticeContent();

  return <LegalPageLayout content={content} />;
}
