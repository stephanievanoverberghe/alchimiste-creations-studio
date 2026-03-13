import { getLegalNoticeContent } from '@/application/legal/getLegalPageContent';
import { Container, Heading, Section } from '@/components/ui';

export default function MentionsLegalesPage() {
  const content = getLegalNoticeContent();

  return (
    <main>
      <Section>
        <Container className="max-w-4xl">
          <Heading title={content.title} description={content.description} />
          <p className="mt-4 text-sm text-muted-foreground">{content.updatedAt}</p>

          <div className="mt-8 space-y-6">
            {content.sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-border/60 bg-surface/40 p-5"
              >
                <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
