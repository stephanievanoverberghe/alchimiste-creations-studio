import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn(
        'flex h-12 w-full rounded-md border border-white/10 bg-white/4 px-4 text-sm text-foreground placeholder:text-foreground/35 transition-colors duration-(--motion-fast) ease-(--ease-standard) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:border-primary/40 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
});
