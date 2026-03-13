import Link from 'next/link';
import { ArrowUpRight, Layers3, ShieldCheck, Sparkles, Timer, type LucideIcon } from 'lucide-react';

import { Badge, Button, Container, Section } from '@/components/ui';
import type { ServicesPageContent } from '@/domain/services/page';

type ServicesHeroProps = {
  content: ServicesPageContent['hero'];
};

const HERO_POINT_ICON_BY_KEY: Record<
  ServicesPageContent['hero']['featuredCard']['points'][number]['icon'],
  LucideIcon
> = {
  layers3: Layers3,
  timer: Timer,
  shieldCheck: ShieldCheck,
};

export function ServicesHero({ content }: ServicesHeroProps) {
  const mobileFeaturedPoints = content.featuredCard.points.slice(0, 2);

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
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.82fr)] lg:gap-14 xl:gap-18">
          <div className="max-w-2xl text-center md:text-start">
            <div className="mb-6 md:hidden">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,24,40,0.92),rgba(10,14,24,0.96))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(66,214,255,0.10),transparent_24%)]"
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/14 text-primary">
                        <Sparkles className="h-4 w-4" />
                      </div>

                      <div className="min-w-0 text-start">
                        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/55">
                          {content.featuredCard.badge}
                        </p>
                        <p className="mt-1 truncate text-base font-semibold text-foreground">
                          {content.featuredCard.title}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/90">
                      {content.featuredCard.priceValue}
                    </div>
                  </div>

                  <p className="mt-4 text-start text-sm leading-7 text-muted-foreground">
                    {content.featuredCard.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/85">
                      {content.featuredCard.timeline}
                    </span>

                    {mobileFeaturedPoints.map((point) => (
                      <span
                        key={point.id}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/85"
                      >
                        {point.value}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={{
                      pathname: '/services',
                      query: { offer: content.featuredCard.detailSlug },
                      hash: 'services-details',
                    }}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-foreground transition hover:text-primary"
                  >
                    {content.featuredCard.detailLabel}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <Badge variant="primary" className="mb-4 sm:mb-5">
              {content.eyebrow}
            </Badge>

            <h1 className="max-w-xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.55rem] lg:leading-[1.02]">
              {content.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={content.primaryCta.href} size="lg">
                {content.primaryCta.label}
              </Button>

              <Button href={content.secondaryCta.href} variant="secondary" size="lg">
                {content.secondaryCta.label}
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {content.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full w-full md:w-auto border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 rounded-4xl bg-primary/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(20,24,40,0.92),rgba(10,14,24,0.96))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/14 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-foreground/55">
                    {content.featuredCard.badge}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {content.featuredCard.title}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                {content.featuredCard.description}
              </p>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/4 p-4">
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-foreground/50">
                  {content.featuredCard.priceLabel}
                </p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  {content.featuredCard.priceValue}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {content.featuredCard.timeline}
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {content.featuredCard.points.map((point) => {
                  const Icon = HERO_POINT_ICON_BY_KEY[point.icon];

                  return (
                    <div
                      key={point.id}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/10 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/6 text-foreground/85">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm text-muted-foreground">{point.label}</span>
                      </div>

                      <span className="text-sm font-medium text-foreground">{point.value}</span>
                    </div>
                  );
                })}
              </div>

              <Link
                href={{
                  pathname: '/services',
                  query: { offer: content.featuredCard.detailSlug },
                  hash: 'services-details',
                }}
                className="mt-6 inline-flex items-center text-sm font-semibold text-foreground transition hover:text-primary"
              >
                {content.featuredCard.detailLabel}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
