import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui';
import type { PortfolioPreviewProjectItem } from '@/domain/portfolio/types';

type SecondaryProjectCardProps = {
  project: PortfolioPreviewProjectItem;
};

export function SecondaryProjectCard({ project }: SecondaryProjectCardProps) {
  return (
    <Link href={project.href} className="group block">
      <article className="rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.86))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 md:hover:-translate-y-0.5">
        <Badge variant="default">{project.category}</Badge>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
          {project.ctaLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
        </span>
      </article>
    </Link>
  );
}
