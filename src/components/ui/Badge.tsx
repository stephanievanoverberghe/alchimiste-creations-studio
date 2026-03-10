import { type ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type BadgeVariant = 'default' | 'primary' | 'accent';

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variants: Record<BadgeVariant, string> = {
  default:
    'border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] text-[hsl(var(--text-muted))]',
  primary:
    'border-[hsl(var(--primary)/0.35)] bg-[hsl(var(--primary)/0.12)] text-[hsl(var(--primary-foreground))]',
  accent: 'border-[hsl(var(--accent)/0.35)] bg-[hsl(var(--accent)/0.12)] text-[hsl(var(--text))]',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
