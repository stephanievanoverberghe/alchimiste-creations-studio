import { cn } from '@/lib/utils/cn';

type HeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function Heading({ eyebrow, title, description, align = 'left', className }: HeadingProps) {
  return (
    <div className={cn('space-y-4', align === 'center' && 'text-center', className)}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      ) : null}

      <h2 className="max-w-[14ch] text-3xl font-semibold tracking-tight text-text sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="max-w-2xl text-base leading-7 text-text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
