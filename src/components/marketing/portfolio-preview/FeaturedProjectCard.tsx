import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui';
import type { PortfolioPreviewProjectItem } from '@/domain/portfolio/types';

type FeaturedProjectCardProps = {
  project: PortfolioPreviewProjectItem;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <Link href={project.href} className="group block">
      <article className="relative overflow-hidden rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.84))] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 ease-out md:hover:-translate-y-0.5">
        <div className="relative h-72 overflow-hidden rounded-3xl sm:h-85">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1400}
            height={1000}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out md:group-hover:scale-[1.04]"
          />
          <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
            <Badge variant="primary">{project.category}</Badge>
          </div>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <MiniCaseCard label="Objectif" value={project.objective} />
          <MiniCaseCard label="Problème" value={project.problem} />
          <MiniCaseCard label="Solution" value={project.solution} />
          <MiniCaseCard label="Résultat" value={project.result} highlight />
        </div>

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
          {project.ctaLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
        </span>
      </article>
    </Link>
  );
}

type MiniCaseCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
};

function MiniCaseCard({ label, value, highlight = false }: MiniCaseCardProps) {
  return (
    <div
      className={
        highlight
          ? 'rounded-2xl border border-primary/20 bg-primary/6 px-4 py-3'
          : 'rounded-2xl border border-white/10 bg-white/4 px-4 py-3'
      }
    >
      <p className="text-[0.66rem] font-medium uppercase tracking-[0.16em] text-foreground/45">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{value}</p>
    </div>
  );
}
