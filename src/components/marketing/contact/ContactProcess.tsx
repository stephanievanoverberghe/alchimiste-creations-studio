import { Container, Heading, MobileSwipeSteps, Section } from '@/components/ui';
import type { ContactPageContent } from '@/domain/contact/page';

type ContactProcessProps = {
  content: ContactPageContent['process'];
};

export function ContactProcess({ content }: ContactProcessProps) {
  return (
    <Section className="relative overflow-hidden py-6 sm:py-10 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[8%] top-[24%] h-36 w-36 rounded-full bg-accent/7 blur-3xl" />
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

        <MobileSwipeSteps
          className="mx-auto mt-12 max-w-xl"
          items={content.steps.map((step, index) => ({
            id: step.id,
            number: `0${index + 1}`,
            title: step.title,
            description: step.description,
          }))}
        />

        <div className="mx-auto mt-14 hidden max-w-5xl gap-5 md:grid-cols-2 xl:grid-cols-4 lg:grid">
          {content.steps.map((step, index) => (
            <article
              key={step.id}
              className="rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.86))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl"
            >
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/35">
                0{index + 1}
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
