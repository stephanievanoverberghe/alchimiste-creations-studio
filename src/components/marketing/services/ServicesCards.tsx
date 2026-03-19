import Link from 'next/link';
import { ArrowUpRight, Clock3, CircleCheckBig } from 'lucide-react';

import { Badge, Container, Heading, MobileSwipeServiceCards, Section } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import type { ServicesPageContent } from '@/domain/services/page';
import type { Service } from '@/domain/services/types';

type ServicesCardsProps = {
  content: ServicesPageContent['offers'];
  services: Service[];
};

export function ServicesCards({ content, services }: ServicesCardsProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[6%] top-[20%] h-48 w-48 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute left-[8%] bottom-[10%] h-40 w-40 rounded-full bg-primary/6 blur-3xl" />
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

        <MobileSwipeServiceCards
          className="mt-16"
          variant="rich"
          idealForLabel={content.idealForLabel}
          investmentLabel={content.investmentLabel}
          startingFromLabel={content.startingFromLabel}
          timelineLabel={content.timelineLabel}
          expectedResultLabel={content.expectedResultLabel}
          items={services.map((item) => ({
            id: item.slug,
            title: item.title,
            description: item.shortDescription,
            href: `/services?offer=${item.slug}#services-details`,
            ctaLabel: content.detailsLabel,
            highlightLabel:
              item.highlightLabel ??
              (item.featured ? content.featuredOfferBadge : content.defaultOfferBadge),
            idealFor: item.target.slice(0, 3).join(', ') + '.',
            startingPrice: item.startingPrice,
            timeline: item.timeline,
            includes: item.includes,
            expectedResultTitle: item.objectives[0]
              ? item.objectives[0].charAt(0).toUpperCase() + item.objectives[0].slice(1)
              : content.fallbackResult,
            expectedResultDescription: content.expectedResultDescription,
            detailsLabel: content.detailsLabel,
            detailsDescription: content.detailsDescription,
            featured: Boolean(item.featured),
          }))}
        />

        <div className="mt-16 hidden space-y-6 sm:mt-18 lg:mt-22 lg:block lg:space-y-8">
          {services.map((item, index) => {
            const isFeatured = Boolean(item.featured);
            const highlightLabel =
              item.highlightLabel ??
              (isFeatured ? content.featuredOfferBadge : content.defaultOfferBadge);

            return (
              <Link
                key={item.slug}
                href={{
                  pathname: '/services',
                  query: { offer: item.slug },
                  hash: 'services-details',
                }}
                className={cn(
                  'group relative block cursor-pointer overflow-hidden rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.84))] shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hover:-translate-y-0.5 md:hover:shadow-[0_30px_90px_rgba(80,80,255,0.15)]',
                  isFeatured && 'ring-1 ring-primary/25',
                )}
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute inset-0 opacity-100',
                    index === 0 &&
                      'bg-[radial-gradient(circle_at_85%_20%,rgba(52,211,153,0.08),transparent_18%),radial-gradient(circle_at_90%_80%,rgba(124,92,255,0.10),transparent_24%)]',
                    index === 1 &&
                      'bg-[radial-gradient(circle_at_85%_20%,rgba(124,92,255,0.16),transparent_22%),radial-gradient(circle_at_90%_80%,rgba(50,210,255,0.10),transparent_22%)]',
                    index === 2 &&
                      'bg-[radial-gradient(circle_at_85%_20%,rgba(50,210,255,0.12),transparent_18%),radial-gradient(circle_at_90%_80%,rgba(124,92,255,0.10),transparent_20%)]',
                  )}
                />

                <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10 lg:p-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant={isFeatured ? 'primary' : 'default'}>{highlightLabel}</Badge>
                    </div>

                    <h3 className="mt-5 text-[2rem] font-semibold tracking-tight text-foreground sm:text-[2.3rem] lg:max-w-[12ch] lg:text-[2.7rem] lg:leading-[1.02]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-muted-foreground transition-colors duration-300 md:group-hover:text-text sm:text-lg lg:max-w-[34ch]">
                      {item.shortDescription}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/90">
                        <Clock3 className="h-4 w-4 text-primary" />
                        {item.timeline}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/90">
                        <CircleCheckBig className="h-4 w-4 text-primary" />
                        {content.startingFromLabel} {item.startingPrice}
                      </span>
                    </div>

                    <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                      {item.includes.slice(0, 4).map((include) => (
                        <li
                          key={include}
                          className="rounded-2xl border border-white/8 bg-black/10 px-4 py-3 text-sm text-muted-foreground"
                        >
                          {include}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-between rounded-[1.75rem] border border-white/8 bg-white/3 p-5 lg:p-6">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/50">
                        {content.idealForLabel}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {item.target.slice(0, 3).join(', ')}.
                      </p>

                      <div className="mt-6 overflow-hidden rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4">
                        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/50">
                          {content.expectedResultLabel}
                        </p>

                        <p className="mt-3 text-base font-medium leading-7 text-foreground">
                          {item.objectives[0]
                            ? item.objectives[0].charAt(0).toUpperCase() +
                              item.objectives[0].slice(1)
                            : content.fallbackResult}
                        </p>

                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {content.expectedResultDescription}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-foreground/45">
                          {content.detailsLabel}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {content.detailsDescription}
                        </p>
                      </div>

                      <span
                        className={cn(
                          'inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                          isFeatured &&
                            'border-primary/20 bg-primary/12 text-primary shadow-[0_10px_30px_rgba(124,92,255,0.24)]',
                        )}
                      >
                        <ArrowUpRight className="h-5 w-5" />
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
