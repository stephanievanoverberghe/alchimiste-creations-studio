import { cn } from '@/lib/utils/cn';

type HeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function Heading({ eyebrow, title, description, align = 'left', className }: HeadingProps) {
  const centered = align === 'center';

  return (
    <div className={cn('space-y-4', centered && 'text-center', className)}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      ) : null}

      <h2
        className={cn(
          'lg:max-w-[14ch] text-3xl font-semibold tracking-tight text-text sm:text-4xl md:text-5xl',
          centered && 'mx-auto',
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            'max-w-2xl text-base leading-7 text-text-muted md:text-lg',
            centered && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
