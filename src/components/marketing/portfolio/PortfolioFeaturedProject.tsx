import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge, Container, Heading, Section } from '@/components/ui';
import type { PortfolioPageContent } from '@/domain/portfolio/page';
import type { PortfolioProject } from '@/domain/portfolio/types';

type PortfolioFeaturedProjectProps = {
  content: PortfolioPageContent['featuredProject'];
  project: PortfolioProject;
};

export function PortfolioFeaturedProject({ content, project }: PortfolioFeaturedProjectProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
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

        <div className="mt-14 overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.82),rgba(9,14,28,0.94))] shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]">
            <Link
              href={`/portfolio/${project.slug}`}
              className="group relative min-h-80 overflow-hidden border-b border-white/8 lg:min-h-full lg:border-b-0 lg:border-r"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(66,214,255,0.10),transparent_24%)]"
              />

              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(7,10,18,0.06),rgba(7,10,18,0.22))]" />

              <div className="relative h-full w-full">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
                <div className="max-w-md rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,18,30,0.76),rgba(8,12,22,0.92))] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/45">
                    {project.category}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{project.title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {project.afterLabel}
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="primary">{project.category}</Badge>
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {project.title}
              </h2>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6 rounded-3xl border border-white/8 bg-white/3 p-5">
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-foreground/45">
                  {content.contextLabel}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.context}</p>
              </div>

              <div className="mt-6 grid gap-4">
                <CaseStudyDuo
                  leftLabel={content.objectiveLabel}
                  leftValue={project.objective}
                  rightLabel={content.problemLabel}
                  rightValue={project.problem}
                />

                <CaseStudyDuo
                  leftLabel={content.solutionLabel}
                  leftValue={project.solution}
                  rightLabel={content.resultLabel}
                  rightValue={project.result}
                />
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/8 pt-6">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/45">
                    {content.caseStudyLabel}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {content.caseStudyDescription}
                  </p>
                </div>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground transition hover:-translate-y-0.5 hover:translate-x-0.5 hover:border-primary/20 hover:bg-primary/12 hover:text-primary"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

type CaseStudyDuoProps = {
  leftLabel: string;
  leftValue: string;
  rightLabel: string;
  rightValue: string;
};

function CaseStudyDuo({ leftLabel, leftValue, rightLabel, rightValue }: CaseStudyDuoProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <InfoPanel label={leftLabel} value={leftValue} />
      <InfoPanel label={rightLabel} value={rightValue} />
    </div>
  );
}

type InfoPanelProps = {
  label: string;
  value: string;
};

function InfoPanel({ label, value }: InfoPanelProps) {
  return (
    <div className="rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4">
      <p className="text-[0.7rem] uppercase tracking-[0.16em] text-foreground/45">{label}</p>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{value}</p>
    </div>
  );
}
