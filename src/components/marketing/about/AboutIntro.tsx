import { Container, Heading, Section } from '@/components/ui';
import type { AboutPageContent } from '@/domain/about/page';

type AboutIntroProps = {
  content: AboutPageContent['intro'];
};

export function AboutIntro({ content }: AboutIntroProps) {
  return (
    <Section className="relative overflow-hidden py-6 sm:py-10 lg:py-28">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <div className="lg:sticky lg:top-24">
                <Heading eyebrow={content.eyebrow} title={content.title} align="left" />

                <div className="mt-8 hidden lg:block">
                  <div className="h-px w-24 bg-[linear-gradient(90deg,rgba(255,255,255,0.16),transparent)]" />
                </div>
              </div>
            </div>

            <div className="max-w-3xl">
              <div className="space-y-6">
                {content.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={[
                      'leading-8',
                      index === 0
                        ? 'text-lg text-foreground/92 sm:text-[1.15rem]'
                        : 'text-sm text-muted-foreground sm:text-base',
                    ].join(' ')}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
