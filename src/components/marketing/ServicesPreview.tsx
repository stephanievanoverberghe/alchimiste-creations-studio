import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { getServicesPreviewContent } from '@/application/home/getServicesPreviewContent';
import { Badge, Container, Heading, Section } from '@/components/ui';
import { cn } from '@/lib/utils/cn';

export function ServicesPreview() {
  const content = getServicesPreviewContent();

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

        <div className="mt-16 space-y-6 sm:mt-18 lg:mt-22 lg:space-y-8">
          {content.items.map((item, index) => {
            const isFeatured = index === 1;
            const highlightLabel =
              item.highlightLabel ?? (isFeatured ? 'Offre signature' : 'Offre');

            return (
              <Link
                key={item.id}
                href={item.href}
                aria-label={`${item.title} — ${item.ctaLabel}`}
                className={cn(
                  'group relative block cursor-pointer overflow-hidden rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.84))] shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hover:-translate-y-0.5 md:hover:shadow-[0_30px_90px_rgba(80,80,255,0.15)]',
                  isFeatured && 'ring-1 ring-primary/25 shadow-[0_30px_90px_rgba(0,0,0,0.35)]',
                )}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
                >
                  <div className="absolute inset-0 rounded-4xl ring-1 ring-primary/30" />
                </div>

                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
                  <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 md:group-hover:opacity-100" />
                  {isFeatured ? (
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
                  ) : null}
                </div>

                <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.72fr)] lg:gap-10">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-foreground/80 transition-all duration-300 md:group-hover:border-primary/20 md:group-hover:bg-primary/10 md:group-hover:text-primary">
                          <item.icon className="h-5 w-5" />
                        </div>

                        <Badge
                          variant={isFeatured ? 'primary' : 'default'}
                          className="transition-all duration-300 md:group-hover:border-[hsl(var(--primary)/0.35)] md:group-hover:bg-[hsl(var(--primary)/0.10)]"
                        >
                          {highlightLabel}
                        </Badge>
                      </div>

                      <h3 className="mt-5 lg:max-w-[12ch] text-[2rem] font-semibold tracking-tight text-foreground sm:text-[2.3rem] lg:text-[2.7rem] lg:leading-[1.02]">
                        {item.title}
                      </h3>

                      <p className="mt-5 lg:max-w-[34ch] text-base leading-8 text-muted-foreground transition-colors duration-300 md:group-hover:text-text sm:text-lg">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-col justify-between gap-8 lg:border-l lg:border-white/8 lg:pl-8">
                      <div>
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                          <div>
                            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-foreground/50">
                              Idéal pour
                            </p>

                            <p className="mt-3 text-sm leading-7 text-muted-foreground transition-colors duration-300 md:group-hover:text-text sm:text-base">
                              {item.idealFor}
                            </p>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3">
                            <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-foreground/50">
                              Investissement
                            </p>
                            <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">
                              {item.startingPrice}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              Délai habituel : {item.timeline}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                        <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.10),transparent)] transition-opacity duration-300 md:group-hover:opacity-100" />

                        <span
                          className={cn(
                            'group/cta relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-xl px-5 text-sm font-semibold transition-all duration-300 ease-out',
                            isFeatured
                              ? 'bg-primary text-primary-foreground shadow-[0_12px_28px_rgba(124,92,255,0.30)] md:group-hover:-translate-y-0.5 md:group-hover:scale-[1.02] md:group-hover:brightness-110'
                              : 'border border-white/12 bg-white/5 text-foreground md:group-hover:-translate-y-0.5 md:group-hover:scale-[1.02] md:group-hover:border-primary/30 md:group-hover:bg-primary/10 md:group-hover:text-white',
                          )}
                        >
                          {isFeatured ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-0 -translate-x-[140%] bg-[linear-gradient(110deg,transparent_24%,rgba(255,255,255,0.35)_50%,transparent_76%)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:translate-x-[140%]"
                            />
                          ) : null}

                          <span className="relative z-1 inline-flex items-center gap-2">
                            {item.ctaLabel}
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
                          </span>
                        </span>
                      </div>
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
