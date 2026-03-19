import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge, Container, Section } from '@/components/ui';
import type { PortfolioProjectPageContent } from '@/domain/portfolio/page';
import type { PortfolioProject } from '@/domain/portfolio/types';

type PortfolioProjectNextProps = {
  project: PortfolioProject;
  content: PortfolioProjectPageContent;
};

export function PortfolioProjectNext({ project, content }: PortfolioProjectNextProps) {
  return (
    <Section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[10%] top-[18%] h-32 w-32 rounded-full bg-primary/8 blur-3xl sm:h-40 sm:w-40" />
        <div className="absolute right-[8%] bottom-[10%] h-36 w-36 rounded-full bg-accent/8 blur-3xl sm:h-44 sm:w-44" />
      </div>

      <Container>
        <div className="mx-auto max-w-5xl">
          <Link
            href={`/portfolio/${project.slug}`}
            className="group relative block overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.82),rgba(9,14,28,0.92))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:rounded-[2.15rem] sm:p-7 lg:p-10 md:hover:-translate-y-0.5 md:hover:shadow-[0_30px_90px_rgba(80,80,255,0.15)]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.16),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(66,214,255,0.10),transparent_20%)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]"
            />

            <div className="relative z-10">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/45 sm:text-[0.72rem]">
                {content.nextProjectLabel}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <Badge variant="default">{project.category}</Badge>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.72rem] text-foreground/70 sm:text-xs">
                  {project.afterLabel}
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-6 sm:mt-7 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-8">
                <div>
                  <h2 className="max-w-[14ch] text-balance text-[1.75rem] font-semibold tracking-[-0.04em] leading-[1.04] text-foreground sm:max-w-[16ch] sm:text-[2rem] lg:max-w-none lg:text-[2.2rem]">
                    {project.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-end lg:block">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-primary/20 group-hover:bg-primary/12 group-hover:text-primary group-hover:shadow-[0_14px_34px_rgba(124,92,255,0.22)] sm:h-13 sm:w-13 sm:rounded-[1.15rem]">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>

              <div className="mt-6 hidden border-t border-white/8 pt-5 lg:block">
                <p className="text-sm text-muted-foreground">
                  {project.beforeLabel} → {project.afterLabel}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
