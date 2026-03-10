import { type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type SectionProps<T extends ElementType = 'section'> = {
  as?: T;
  children: ReactNode;
  className?: string;
};

export function Section<T extends ElementType = 'section'>({
  as,
  children,
  className,
}: SectionProps<T>) {
  const Component = as ?? 'section';

  return <Component className={cn('py-(--space-section-y)', className)}>{children}</Component>;
}
