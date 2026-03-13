'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
  Badge,
  Container,
  Heading,
  Section,
  Tabs,
  SegmentedContentSlider,
  type SegmentedContentSliderItem,
} from '@/components/ui';
import type { ServicesPageContent } from '@/domain/services/page';
import type { Service, ServiceSlug } from '@/domain/services/types';

type ServicesDetailsProps = {
  content: ServicesPageContent['details'];
  services: Service[];
};

export function ServicesDetails({ content, services }: ServicesDetailsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const firstServiceSlug = services[0]?.slug;

  const validSlugs = useMemo(
    () => new Set<ServiceSlug>(services.map((service) => service.slug)),
    [services],
  );

  const searchParamOffer = searchParams.get('offer');

  const activeSlug =
    searchParamOffer && validSlugs.has(searchParamOffer as ServiceSlug)
      ? (searchParamOffer as ServiceSlug)
      : firstServiceSlug;

  const activeService = services.find((service) => service.slug === activeSlug) ?? services[0];

  function handleTabChange(nextValue: ServiceSlug) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('offer', nextValue);

    router.replace(`${pathname}?${params.toString()}#services-details`, { scroll: false });
  }

  const tabItems = services.map((service) => ({
    value: service.slug,
    label: service.title,
    badge: service.featured ? 'Populaire' : undefined,
  }));

  const detailItems: SegmentedContentSliderItem[] = [
    {
      id: 'objectives',
      label: 'Objectifs',
      eyebrow: 'Ce que vise cette offre',
      title: 'Objectifs',
      content: <BulletList items={activeService.objectives} />,
    },
    {
      id: 'includes',
      label: 'Inclus',
      eyebrow: 'Ce qui est prévu',
      title: 'Inclus dans la prestation',
      content: <BulletList items={activeService.includes} />,
    },
    {
      id: 'deliverables',
      label: 'Livrables',
      eyebrow: 'Ce que vous recevez',
      title: 'Livrables',
      content: <BulletList items={activeService.deliverables} />,
    },
    {
      id: 'possible-content',
      label: 'Contenu',
      eyebrow: 'Selon votre projet',
      title: 'Contenu possible',
      content: <BulletList items={activeService.possibleContent ?? ['Selon le projet']} />,
    },
    ...(activeService.options?.length
      ? [
          {
            id: 'options',
            label: 'Options',
            eyebrow: 'Pour aller plus loin',
            title: 'Options possibles',
            content: <OptionsGrid options={activeService.options} />,
          },
        ]
      : []),
  ];

  return (
    <Section
      id="services-details"
      className="relative scroll-mt-28 overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Tabs<ServiceSlug>
            items={tabItems}
            value={activeService.slug}
            onValueChange={handleTabChange}
          />
        </div>

        <div className="mx-auto mt-8 max-w-5xl">
          <section
            key={activeService.slug}
            id={`panel-${activeService.slug}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeService.slug}`}
            className="rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.88))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant={activeService.featured ? 'primary' : 'default'}>
                    {activeService.highlightLabel ?? 'Offre'}
                  </Badge>

                  <span className="text-sm text-muted-foreground">
                    À partir de {activeService.startingPrice} • {activeService.timeline}
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {activeService.title}
                </h3>

                <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
                  {activeService.description}
                </p>
              </div>

              <aside className="rounded-3xl border border-white/10 bg-white/4 p-5">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-foreground/55">
                  En bref
                </p>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Investissement</p>
                    <p className="mt-1 text-lg font-semibold text-foreground">
                      À partir de {activeService.startingPrice}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Délai habituel</p>
                    <p className="mt-1 text-lg font-semibold text-foreground">
                      {activeService.timeline}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Idéal pour</p>
                    <p className="mt-1 text-sm leading-7 text-foreground/90">
                      {activeService.target.slice(0, 3).join(', ')}.
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            <div className="mt-8">
              <SegmentedContentSlider items={detailItems} />
            </div>
          </section>
        </div>
      </Container>
    </Section>
  );
}

type BulletListProps = {
  items: string[];
};

function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-7 text-muted-foreground sm:text-[0.95rem]"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type OptionsGridProps = {
  options: { name: string; price: string }[];
};

function OptionsGrid({ options }: OptionsGridProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => (
        <li
          key={option.name}
          className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/10 px-4 py-3 text-sm"
        >
          <span className="text-muted-foreground">{option.name}</span>
          <span className="font-medium text-foreground">{option.price}</span>
        </li>
      ))}
    </ul>
  );
}
