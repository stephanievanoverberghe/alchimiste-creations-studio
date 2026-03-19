import { type LabelHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn('mb-2 block cursor-pointer text-sm font-medium text-text', className)}
      {...props}
    />
  );
}
