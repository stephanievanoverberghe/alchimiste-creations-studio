import { getContactPageContent } from '@/application/contact/getContactPageContent';
import {
  ContactAlt,
  ContactFormSection,
  ContactGuidelines,
  ContactHero,
  ContactProcess,
} from '@/components/marketing/contact';

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
