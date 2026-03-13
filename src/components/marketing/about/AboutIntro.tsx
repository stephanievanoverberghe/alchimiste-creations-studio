import { Container, Heading, Section } from '@/components/ui';
import type { AboutPageContent } from '@/domain/about/page';

type AboutIntroProps = {
  content: AboutPageContent['intro'];
};

export function AboutIntro({ content }: AboutIntroProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <Heading eyebrow={content.eyebrow} title={content.title} align="left" />
          </div>

          <div className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
