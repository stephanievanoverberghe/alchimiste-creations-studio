import { Button, Container, Heading, Section } from '@/components/ui';
import type { PortfolioPageContent } from '@/domain/portfolio/page';

type PortfolioFinalCtaProps = {
  content: PortfolioPageContent['finalCta'];
};

export function PortfolioFinalCta({ content }: PortfolioFinalCtaProps) {
  return (
    <Section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[12%] top-[20%] h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[18%] h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />

          <div className="mt-10 flex justify-center">
            <Button href={content.buttonHref} size="lg">
              {content.buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
