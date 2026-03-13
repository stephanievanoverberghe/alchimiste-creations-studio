import { Badge, Container, Section } from '@/components/ui';
import type { PortfolioPageContent } from '@/domain/portfolio/page';

type PortfolioHeroProps = {
  content: PortfolioPageContent['hero'];
};

export function PortfolioHero({ content }: PortfolioHeroProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[12%] top-[12%] h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[10%] top-[18%] h-36 w-36 rounded-full bg-accent/7 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary">{content.eyebrow}</Badge>

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {content.description}
          </p>
        </div>
      </Container>
    </Section>
  );
}
