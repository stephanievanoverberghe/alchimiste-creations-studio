import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import { Badge, Button, Container, Section } from '@/components/ui';
import type { PortfolioPageContent } from '@/domain/portfolio/page';
import type { PortfolioProject } from '@/domain/portfolio/types';

type PortfolioHeroProps = {
  content: PortfolioPageContent['hero'];
  featuredProject: PortfolioProject;
  secondaryProjects: PortfolioProject[];
  projectsCount: number;
};

export function PortfolioHero({
  content,
  featuredProject,
  secondaryProjects,
  projectsCount,
}: PortfolioHeroProps) {
  const stackedProjects = secondaryProjects.slice(0, 2);

  const stats = [
    { label: 'Projets sélectionnés', value: String(projectsCount) },
    { label: 'Projet vedette', value: featuredProject.title },
    { label: 'Focus', value: featuredProject.category },
  ];

  return (
    <Section className="relative overflow-hidden pt-10 sm:pt-12 md:pt-16 lg:pt-18">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(66,214,255,0.10),transparent_22%)]" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-24 h-44 w-44 rounded-full bg-accent/10 blur-3xl sm:h-64 sm:w-64" />
      </div>

      <Container>
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,1fr)] lg:gap-14 xl:gap-18">
          <div className="order-2 max-w-2xl text-center md:order-1 md:text-start">
            <Badge variant="primary" className="mb-4 sm:mb-5">
              {content.eyebrow}
            </Badge>

            <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[4rem] lg:leading-[0.98]">
              {content.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Button href={content.primaryCta.href} size="lg">
                {content.primaryCta.label}
              </Button>

              <Button href={content.secondaryCta.href} variant="secondary" size="lg">
                {content.secondaryCta.label}
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.35rem] border border-white/10 bg-white/3 px-4 py-4 text-center backdrop-blur-xl md:text-start"
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/45">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 relative md:order-2">
            <div className="absolute inset-0 rounded-[4xl bg-primary/10 blur-2xl" />

            <div className="relative min-h-85 sm:min-h-115">
              <div className="absolute right-0 top-0 z-10 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.82),rgba(9,14,28,0.96))] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-foreground/80 shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                {projectsCount} projets sélectionnés
              </div>

              <Link
                href={`/portfolio/${featuredProject.slug}`}
                className="group relative z-0 ml-auto block w-[92%] overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(20,24,40,0.9),rgba(10,14,24,0.96))] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_36px_110px_rgba(0,0,0,0.4)] sm:w-[82%]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(66,214,255,0.10),transparent_20%)]"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/14 text-primary">
                        <Sparkles className="h-4 w-4" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/45">
                          Projet vedette
                        </p>
                        <p className="mt-1 truncate text-sm font-semibold text-foreground">
                          {featuredProject.title}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] text-foreground/75">
                      {featuredProject.category}
                    </span>
                  </div>

                  <div className="relative mt-4 aspect-16/10 overflow-hidden rounded-[1.35rem] border border-white/8">
                    <Image
                      src={featuredProject.image.src}
                      alt={featuredProject.image.alt}
                      fill
                      priority
                      quality={100}
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 42vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {featuredProject.description}
                  </p>

                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-foreground transition group-hover:text-primary">
                    {featuredProject.ctaLabel}
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>

              {stackedProjects[0] ? (
                <MiniFloatingProjectCard
                  project={stackedProjects[0]}
                  className="absolute left-0 top-[18%] z-20 w-[54%] sm:w-[46%]"
                />
              ) : null}

              {stackedProjects[1] ? (
                <MiniFloatingProjectCard
                  project={stackedProjects[1]}
                  className="absolute left-[6%] bottom-[2%] z-20 w-[50%] sm:w-[42%]"
                />
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

type MiniFloatingProjectCardProps = {
  project: PortfolioProject;
  className?: string;
};

function MiniFloatingProjectCard({ project, className }: MiniFloatingProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={[
        'group overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.82),rgba(9,14,28,0.96))] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1',
        className,
      ].join(' ')}
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/8">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          quality={100}
          sizes="(max-width: 640px) 54vw, (max-width: 1024px) 32vw, 20vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-3">
        <p className="truncate text-sm font-semibold text-foreground">{project.title}</p>
        <p className="mt-1 line-clamp-1 text-[0.72rem] uppercase tracking-[0.14em] text-foreground/45">
          {project.category}
        </p>
      </div>
    </Link>
  );
}
