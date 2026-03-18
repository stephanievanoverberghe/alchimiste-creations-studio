import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge, Container, Heading, Section } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import type { PortfolioPageContent } from '@/domain/portfolio/page';
import type { PortfolioProject } from '@/domain/portfolio/types';

type PortfolioProjectsGridProps = {
  content: PortfolioPageContent['projectsGrid'];
  projects: PortfolioProject[];
};

export function PortfolioProjectsGrid({ content, projects }: PortfolioProjectsGridProps) {
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

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isLarge = index === 0 || index % 3 === 0;

            return (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className={cn(
                  'group overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.82),rgba(9,14,28,0.94))] shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_34px_100px_rgba(80,80,255,0.12)]',
                  isLarge && 'lg:col-span-2',
                )}
              >
                <div
                  className={cn(
                    'relative overflow-hidden',
                    isLarge ? 'aspect-video' : 'aspect-16/10',
                  )}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(7,10,18,0.02),rgba(7,10,18,0.18))]"
                  />

                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    quality={100}
                    sizes={
                      isLarge
                        ? '(max-width: 1024px) 100vw, 100vw'
                        : '(max-width: 1024px) 100vw, 50vw'
                    }
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
                    <div className="max-w-xl rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,18,30,0.76),rgba(8,12,22,0.92))] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="primary">{project.category}</Badge>
                        <span className="text-sm text-muted-foreground">{project.afterLabel}</span>
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {project.description}
                      </p>

                      <span className="mt-5 inline-flex items-center text-sm font-semibold text-foreground transition group-hover:text-primary">
                        {project.ctaLabel}
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
