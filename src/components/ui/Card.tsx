import { type ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-surface-elevated p-6 shadow-(--shadow-card) transition-all duration-(--motion-base) ease-(--ease-standard) hover:-translate-y-1 hover:border-[hsl(var(--primary)/0.45)]',
        className,
      )}
    >
      {children}
    </div>
  );
}
