import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge, Button, Container, Heading, Section } from '@/components/ui';
import type { PortfolioProjectPageContent } from '@/domain/portfolio/page';
import type { PortfolioProject } from '@/domain/portfolio/types';

type PortfolioProjectNextProps = {
  nextProject: PortfolioProject | null;
  content: PortfolioProjectPageContent;
};

export function PortfolioProjectNext({ nextProject, content }: PortfolioProjectNextProps) {
  return (
    <Section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <Container>
        {nextProject ? (
          <div className="mb-10 rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.76),rgba(9,14,28,0.88))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8">
            <Badge variant="default">{content.nextProjectLabel}</Badge>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {nextProject.title}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {nextProject.description}
            </p>

            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              {nextProject.ctaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}

        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.finalCta.eyebrow}
            title={content.finalCta.title}
            description={content.finalCta.description}
            align="center"
          />

          <div className="mt-10 flex justify-center">
            <Button href={content.finalCta.buttonHref} size="lg">
              {content.finalCta.buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
