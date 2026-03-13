import { Container, Heading, Section } from '@/components/ui';
import type { PortfolioPageContent } from '@/domain/portfolio/page';

type PortfolioProcessProps = {
  content: PortfolioPageContent['process'];
};

export function PortfolioProcess({ content }: PortfolioProcessProps) {
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

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
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
