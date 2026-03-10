import { type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
  className?: string;
};

export function Container<T extends ElementType = 'div'>({
  as,
  children,
  className,
}: ContainerProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component className={cn('mx-auto w-full max-w-300 px-4 md:px-6', className)}>
      {children}
    </Component>
  );
}
