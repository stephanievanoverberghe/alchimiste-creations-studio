import { Button, Container, Heading, Section } from '@/components/ui';
import type { PortfolioProjectPageContent } from '@/domain/portfolio/page';

type PortfolioProjectFinalCtaProps = {
  content: PortfolioProjectPageContent['finalCta'];
};

export function PortfolioProjectFinalCta({ content }: PortfolioProjectFinalCtaProps) {
  return (
    <Section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute left-[12%] top-[20%] h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[18%] h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
      </div>
      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="absolute inset-0 -z-10 rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,22,34,0.82),rgba(8,12,22,0.96))] shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl" />

          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <Heading
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
              align="center"
            />

            <div className="mt-12 flex flex-col items-center gap-6">
              <Button
                href={content.buttonHref}
                size="lg"
                className="group relative px-8 py-3 text-[0.95rem] font-semibold tracking-wide"
              >
                {content.buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
