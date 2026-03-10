'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export type AccordionItemData = {
  id: string;
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
};

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  function toggleItem(id: string) {
    setOpenItems((prev) => {
      const isOpen = prev.includes(id);

      if (allowMultiple) {
        return isOpen ? prev.filter((item) => item !== id) : [...prev, id];
      }

      return isOpen ? [] : [id];
    });
  }

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-(--shadow-card)"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-text transition-colors duration-(--motion-fast) ease-(--ease-standard) hover:bg-white/5"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="text-sm font-semibold sm:text-base">{item.title}</span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 shrink-0 text-text-muted transition-transform duration-(--motion-base) ease-(--ease-standard)',
                  isOpen && 'rotate-180',
                )}
              />
            </button>

            <div
              id={`accordion-content-${item.id}`}
              className={cn(
                'grid transition-[grid-template-rows] duration-(--motion-base) ease-(--ease-standard)',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-sm leading-7 text-text-muted">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
