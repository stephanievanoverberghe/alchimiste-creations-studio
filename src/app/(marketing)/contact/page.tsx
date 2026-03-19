import { getContactPageContent } from '@/application/contact/getContactPageContent';
import {
  ContactAlt,
  ContactFormSection,
  ContactGuidelines,
  ContactHero,
  ContactProcess,
} from '@/components/marketing/contact';
import { getMarketingMetadata } from '@/application/seo/getMarketingMetadata';

export const metadata = getMarketingMetadata({
  title: 'Contact studio web',
  description:
    'Parlons de votre projet web : partagez votre besoin, votre budget et vos priorités pour recevoir un retour clair et structuré.',
  pathname: '/contact',
});

export default function ContactPage() {
  const content = getContactPageContent();

  return (
    <>
      <ContactHero content={content.hero} />
      <ContactGuidelines content={content.guidelines} />
      <ContactFormSection content={content.form} />
      <ContactProcess content={content.process} />
      <ContactAlt content={content.alternativeContact} />
    </>
  );
}
