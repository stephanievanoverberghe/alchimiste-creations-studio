import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui';

type PortfolioCalloutCardProps = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export function PortfolioCalloutCard({
  title,
  description,
  href,
  ctaLabel,
}: PortfolioCalloutCardProps) {
  return (
    <div className="mt-8 rounded-4xl border border-primary/25 bg-[linear-gradient(180deg,rgba(124,92,255,0.12),rgba(9,14,28,0.86))] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
      <h3 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
        {description}
      </p>
      <div className="mt-6">
        <Button href={href} size="lg" className="inline-flex items-center gap-2">
          {ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
      <Link
        href="/portfolio"
        className="mt-4 inline-flex text-sm text-muted-foreground hover:text-foreground"
      >
        Voir tous les projets
      </Link>
    </div>
  );
}
