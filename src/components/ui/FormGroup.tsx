import { type ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type FormGroupProps = {
  children: ReactNode;
  className?: string;
};

export function FormGroup({ children, className }: FormGroupProps) {
  return <div className={cn('space-y-2', className)}>{children}</div>;
}
