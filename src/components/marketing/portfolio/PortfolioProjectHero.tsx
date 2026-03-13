import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { Badge, Container, Section } from '@/components/ui';
import type { PortfolioProjectPageContent } from '@/domain/portfolio/page';
import type { PortfolioProject } from '@/domain/portfolio/types';

type PortfolioProjectHeroProps = {
  project: PortfolioProject;
  content: PortfolioProjectPageContent;
};

export function PortfolioProjectHero({ project, content }: PortfolioProjectHeroProps) {
  return (
    <Section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {content.backLabel}
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <Badge variant="primary">{project.category}</Badge>

            <p className="mt-5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/40">
              {content.caseStudyLabel}
            </p>

            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              {project.description}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.76),rgba(9,14,28,0.88))] shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={1600}
              height={1100}
              className="h-auto w-full object-cover object-top"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
