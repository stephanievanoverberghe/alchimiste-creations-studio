import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Globe } from 'lucide-react';

import { Badge, Button, Container, Section } from '@/components/ui';
import type { PortfolioProjectPageContent } from '@/domain/portfolio/page';
import type { PortfolioProject } from '@/domain/portfolio/types';

type PortfolioProjectHeroProps = {
  project: PortfolioProject;
  content: PortfolioProjectPageContent;
};

export function PortfolioProjectHero({ project, content }: PortfolioProjectHeroProps) {
  return (
    <Section className="relative overflow-hidden pt-10 sm:pt-12 md:pt-16 lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.14),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(66,214,255,0.08),transparent_20%)]" />
        <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[8%] bottom-[10%] h-44 w-44 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
      </div>

      <Container>
        <div className="mx-auto max-w-6xl">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {content.backLabel}
          </Link>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
            <div className="order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="primary">{project.category}</Badge>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/70">
                  {content.caseStudyLabel}
                </span>

                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                  {project.afterLabel}
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[4rem] lg:leading-[0.98]">
                {project.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                {project.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {project.liveUrl ? (
                  <Button
                    href={project.liveUrl}
                    size="lg"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group"
                  >
                    <span className="inline-flex items-center whitespace-nowrap">
                      <Globe className="mr-2 h-4 w-4 shrink-0" />
                      <span>{content.liveSiteLabel}</span>
                    </span>
                  </Button>
                ) : null}

                <Button href="/contact" variant="secondary" size="lg">
                  {content.contactLabel}
                </Button>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <MetaPanel label={content.projectOverviewLabel} value={project.context} />
                <MetaPanel label={content.resultLabel} value={project.result} isHighlighted />
              </div>
            </div>

            <div className="order-1 relative lg:order-2">
              <div className="absolute inset-0 rounded-[2.15rem] bg-primary/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.15rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.84),rgba(9,14,28,0.95))] shadow-[0_28px_100px_rgba(0,0,0,0.26)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(66,214,255,0.10),transparent_22%)]"
                />

                <div className="relative aspect-16/10 sm:aspect-video">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="relative z-20 border-t border-white/8 bg-[linear-gradient(180deg,rgba(12,16,28,0.82),rgba(8,12,22,0.94))] px-5 py-4 sm:px-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/45">
                        {content.transformationLabel}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {project.beforeLabel} → {project.afterLabel}
                      </p>
                    </div>

                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={content.liveSiteLabel}
                        className="group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground transition hover:-translate-y-0.5 hover:translate-x-0.5 hover:border-primary/20 hover:bg-primary/12 hover:text-primary"
                      >
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

type MetaPanelProps = {
  label: string;
  value: string;
  isHighlighted?: boolean;
};

function MetaPanel({ label, value, isHighlighted = false }: MetaPanelProps) {
  return (
    <div
      className={[
        'rounded-[1.45rem] border p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl',
        isHighlighted
          ? 'border-primary/20 bg-[linear-gradient(180deg,rgba(124,92,255,0.08),rgba(10,14,24,0.94))]'
          : 'border-white/10 bg-[linear-gradient(180deg,rgba(18,24,38,0.78),rgba(10,14,24,0.94))]',
      ].join(' ')}
    >
      <p className="text-[0.72rem] uppercase tracking-[0.16em] text-foreground/45">{label}</p>
      <p className="mt-4 text-sm leading-8 text-muted-foreground">{value}</p>
    </div>
  );
}
