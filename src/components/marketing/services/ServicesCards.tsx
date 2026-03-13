import Link from 'next/link';
import { ArrowUpRight, Clock3, CircleCheckBig, Sparkles } from 'lucide-react';

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

        <div className="mt-16 space-y-8 lg:mt-20">
          {services.map((item, index) => {
            const isFeatured = Boolean(item.featured);
            const highlightLabel =
              item.highlightLabel ?? (isFeatured ? 'Offre signature' : 'Offre');

            return (
              <Link
                key={item.slug}
                href={`#${item.slug}`}
                className={cn(
                  'group relative block overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(19,25,40,0.84),rgba(10,14,24,0.96))] shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_35px_110px_rgba(0,0,0,0.34)]',
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
                      {isFeatured ? (
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          <Sparkles className="h-3.5 w-3.5" />
                          Offre la plus demandée
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-5 max-w-[11ch] text-[2rem] font-semibold tracking-tight text-foreground sm:text-[2.4rem] lg:text-[3rem] lg:leading-[1.02]">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-[34ch] text-base leading-8 text-muted-foreground sm:text-lg">
                      {item.shortDescription}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/90">
                        <Clock3 className="h-4 w-4 text-primary" />
                        {item.timeline}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/90">
                        <CircleCheckBig className="h-4 w-4 text-primary" />À partir de{' '}
                        {item.startingPrice}
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
                        Idéal pour
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {item.target.slice(0, 3).join(', ')}.
                      </p>

                      <div className="mt-6 overflow-hidden rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4">
                        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/50">
                          Résultat recherché
                        </p>
                        <p className="mt-3 text-base font-medium leading-7 text-foreground">
                          {item.objectives[0]
                            ? item.objectives[0].charAt(0).toUpperCase() +
                              item.objectives[0].slice(1)
                            : 'Créer une présence claire et crédible'}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          Une offre cadrée pour aller à l’essentiel sans sacrifier la qualité
                          perçue.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-foreground/45">
                          Voir le détail complet
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          inclus, livrables, options et périmètre
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
