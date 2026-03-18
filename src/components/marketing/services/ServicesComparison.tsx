'use client';

import { Badge, Container, Heading, MobileCarousel, Section } from '@/components/ui';
import { Check, Minus } from 'lucide-react';

import { getServicesComparisonModel } from '@/application/services/getServicesComparaisonModel';

import type { ServicesPageContent } from '@/domain/services/page';
import type { Service } from '@/domain/services/types';
import { cn } from '@/lib/utils/cn';

type ServicesComparisonProps = {
  content: ServicesPageContent['comparison'];
  services: Service[];
};

export function ServicesComparison({ content, services }: ServicesComparisonProps) {
  const comparisonModel = getServicesComparisonModel(content);

  return (
    <Section className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />
        </div>

        <div className="mt-14">
          <MobileCarousel
            items={services}
            getItemKey={(service) => service.slug}
            renderItem={(service) => (
              <ComparisonCard
                service={service}
                content={content}
                comparisonModel={comparisonModel}
              />
            )}
          />

          <div className="hidden gap-5 lg:grid lg:grid-cols-3">
            {services.map((service) => (
              <ComparisonCard
                key={service.slug}
                service={service}
                content={content}
                comparisonModel={comparisonModel}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

type ComparisonCardProps = {
  service: Service;
  content: ServicesPageContent['comparison'];
  comparisonModel: ReturnType<typeof getServicesComparisonModel>;
};

function ComparisonCard({ service, content, comparisonModel }: ComparisonCardProps) {
  const formatLabel =
    content.rows.find((row) => row.id === content.formatRowId)?.label ?? content.formatRowId;

  return (
    <article
      className={cn(
        'rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.9))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl',
        service.featured && 'ring-1 ring-primary/25 shadow-[0_30px_90px_rgba(0,0,0,0.3)]',
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <Badge variant={service.featured ? 'primary' : 'default'}>
          {service.highlightLabel ?? content.defaultOfferBadge}
        </Badge>

        <p className="text-sm font-medium text-foreground">
          {content.startingFromLabel} {service.startingPrice}
        </p>
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.shortDescription}</p>

      <div className="mt-6 rounded-3xl border border-white/8 bg-white/4 p-4">
        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-foreground/50">
          {formatLabel}
        </p>

        <p className="mt-2 text-base font-medium text-foreground">
          {comparisonModel.formatByServiceSlug[service.slug]}
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          {content.timelineLabel} : {comparisonModel.timelineByServiceSlug[service.slug]}
        </p>
      </div>

      <ul className="mt-6 space-y-3">
        {comparisonModel.featureRows.map((row) => {
          const value = row.values[service.slug];
          const isPositive = value.toLowerCase() === 'oui';

          return (
            <li
              key={row.id}
              className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-black/10 px-4 py-3"
            >
              <span className="text-sm text-muted-foreground">{row.label}</span>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                {isPositive ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Minus className="h-4 w-4 text-foreground/50" />
                )}
                {value}
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
