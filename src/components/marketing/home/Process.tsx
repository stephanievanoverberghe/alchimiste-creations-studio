import { getProcessContent } from '@/application/home/getProcessContent';
import { Container, Heading, Section } from '@/components/ui';

export function Process() {
  const content = getProcessContent();

  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[10%] top-[12%] h-44 w-44 rounded-full bg-primary/7 blur-3xl" />
        <div className="absolute right-[8%] top-[22%] h-36 w-36 rounded-full bg-accent/7 blur-3xl" />
      </div>

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
          {content.steps.map((step) => (
            <article
              key={step.id}
              className="grid gap-5 text-center lg:text-start border-b border-white/8 py-6 sm:py-8 lg:grid-cols-[120px_minmax(0,220px)_minmax(0,1fr)] lg:gap-8 lg:py-10"
            >
              <div className="">
                <span className="text-sm font-medium tracking-[0.18em] text-foreground/40">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-[2rem] lg:leading-[1.04]">
                  {step.title}
                </h3>
              </div>

              <div>
                <p className="lg:max-w-[42ch] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
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
