'use client';

import { cn } from '@/lib/utils/cn';

export type TabsItem<T extends string> = {
  value: T;
  label: string;
  badge?: string;
};

type TabsProps<T extends string> = {
  items: TabsItem<T>[];
  value: T;
  onValueChange: (value: T) => void;
  className?: string;
  listClassName?: string;
  triggerClassName?: string;
};

export function Tabs<T extends string>({
  items,
  value,
  onValueChange,
  className,
  listClassName,
  triggerClassName,
}: TabsProps<T>) {
  return (
    <div className={cn('w-full', className)}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        className={cn(
          'inline-flex w-full flex-wrap gap-2 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.9))] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl',
          listClassName,
        )}
      >
        {items.map((item) => {
          const isActive = item.value === value;

          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              id={`tab-${item.value}`}
              aria-selected={isActive}
              aria-controls={`panel-${item.value}`}
              onClick={() => onValueChange(item.value)}
              className={cn(
                'group inline-flex min-h-12 cursor-pointer flex-1 items-center justify-center gap-2 rounded-[1.2rem] px-4 py-3 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
                isActive
                  ? 'border border-primary/20 bg-primary/12 text-foreground shadow-[0_10px_30px_rgba(124,92,255,0.16)]'
                  : 'border border-transparent bg-transparent text-muted-foreground hover:border-white/8 hover:bg-white/5 hover:text-foreground',
                triggerClassName,
              )}
            >
              <span>{item.label}</span>

              {item.badge ? (
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-[0.68rem] font-medium',
                    isActive
                      ? 'bg-primary/18 text-primary'
                      : 'bg-white/6 text-foreground/65 group-hover:text-foreground/85',
                  )}
                >
                  {item.badge}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
