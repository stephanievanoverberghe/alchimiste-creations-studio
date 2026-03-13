import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui';

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
    <div className="mt-8">
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,19,30,0.82),rgba(10,14,24,0.96))] px-5 py-5 shadow-[0_18px_38px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:px-6 sm:py-6 md:hover:border-primary/22 md:hover:shadow-[0_28px_58px_rgba(54,54,130,0.16)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
        >
          <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-primary/14" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]"
        />

        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <Badge variant="primary">À votre tour</Badge>
              <span className="hidden h-px w-12 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent)] sm:block" />
            </div>

            <h3 className="mt-4 text-[1.24rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.42rem]">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground transition-colors duration-300 md:group-hover:text-text sm:text-base sm:leading-8">
              {description}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-transform duration-300 ease-out md:group-hover:translate-x-0.5">
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </div>
  );
}
