import { Container, Heading, Section } from '@/components/ui';
import type { ServicesPageContent } from '@/domain/services/page';

type ServicesProcessMiniProps = {
  content: ServicesPageContent['process'];
};

export function ServicesProcessMini({ content }: ServicesProcessMiniProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,38,0.76),rgba(10,14,24,0.92))] p-6"
            >
              <p className="text-sm font-medium tracking-[0.14em] text-primary">{step.number}</p>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
