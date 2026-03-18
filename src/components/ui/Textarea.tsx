import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-35 w-full rounded-md border border-white/10 bg-white/4 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 transition-colors duration-(--motion-fast) ease-(--ease-standard) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:border-primary/40 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
});
