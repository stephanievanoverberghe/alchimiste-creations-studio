import { getLegalNoticeContent } from '@/application/legal/getLegalPageContent';
import { LegalPageLayout } from '@/components/marketing/legal';

export default function MentionsLegalesPage() {
  const content = getLegalNoticeContent();

  return <LegalPageLayout content={content} />;
}
