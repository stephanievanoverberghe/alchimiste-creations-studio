import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge, Container, Heading, Section } from '@/components/ui';
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
          {services.map((item) => {
            const isFeatured = Boolean(item.featured);
            const highlightLabel =
              item.highlightLabel ?? (isFeatured ? 'Offre signature' : 'Offre');

            return (
              <Link
                key={item.slug}
                href={`#${item.slug}`}
                className={cn(
                  'group relative block overflow-hidden rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.84))] shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 ease-out',
                  isFeatured && 'ring-1 ring-primary/25 shadow-[0_30px_90px_rgba(0,0,0,0.35)]',
                )}
              >
                <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.72fr)] lg:gap-10">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant={isFeatured ? 'primary' : 'default'}>{highlightLabel}</Badge>
                      </div>

                      <h3 className="mt-5 max-w-[12ch] text-[2rem] font-semibold tracking-tight text-foreground sm:text-[2.3rem] lg:text-[2.7rem] lg:leading-[1.02]">
                        {item.title}
                      </h3>

                      <p className="mt-5 max-w-[34ch] text-base leading-8 text-muted-foreground sm:text-lg">
                        {item.shortDescription}
                      </p>

                      <ul className="mt-5 space-y-2 text-sm leading-7 text-muted-foreground">
                        {item.includes.slice(0, 4).map((include) => (
                          <li key={include}>• {include}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col justify-between gap-8 lg:border-l lg:border-white/8 lg:pl-8">
                      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                        <div>
                          <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-foreground/50">
                            Idéal pour
                          </p>

                          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                            {item.target.slice(0, 3).join(', ')}.
                          </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3">
                          <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-foreground/50">
                            Investissement
                          </p>
                          <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">
                            À partir de {item.startingPrice}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Délai habituel : {item.timeline}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                        <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.10),transparent)]" />

                        <span
                          className={cn(
                            'inline-flex min-h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold',
                            isFeatured
                              ? 'bg-primary text-primary-foreground shadow-[0_12px_28px_rgba(124,92,255,0.30)]'
                              : 'border border-white/12 bg-white/5 text-foreground',
                          )}
                        >
                          Voir le détail
                          <ArrowUpRight className="ml-2 h-4 w-4" />
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
