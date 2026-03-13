import { Container, Heading, Section } from '@/components/ui';
import type { AboutPageContent } from '@/domain/about/page';

type AboutJourneyProps = {
  content: AboutPageContent['journey'];
};

export function AboutJourney({ content }: AboutJourneyProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />
        </div>

        <div className="mx-auto mt-16 max-w-5xl border-t border-white/8">
          {content.steps.map((step, index) => (
            <article
              key={step.id}
              className="grid gap-5 border-b border-white/8 py-6 sm:py-8 lg:grid-cols-[120px_minmax(0,220px)_minmax(0,1fr)] lg:gap-8 lg:py-10"
            >
              <div className="flex items-start">
                <span className="text-sm font-medium tracking-[0.18em] text-foreground/40">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-[2rem] lg:leading-[1.04]">
                  {step.title}
                </h3>
              </div>

              <div>
                <p className="max-w-[42ch] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
