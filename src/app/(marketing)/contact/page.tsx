import { getContactPageContent } from '@/application/contact/getContactPageContent';
import { ContactFormSection, ContactHero, ContactProcess } from '@/components/marketing/contact';

export default function ContactPage() {
  const content = getContactPageContent();

  return (
    <>
      <ContactHero content={content.hero} />
      <ContactFormSection form={content.form} sidebar={content.sidebar} />
      <ContactProcess content={content.process} />
    </>
  );
}
