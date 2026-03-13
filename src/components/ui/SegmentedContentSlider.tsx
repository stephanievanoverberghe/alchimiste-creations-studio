'use client';

import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, type Transition } from 'motion/react';

import { cn } from '@/lib/utils/cn';

export type SegmentedContentSliderItem = {
  id: string;
  label: string;
  eyebrow?: string;
  title?: string;
  content: React.ReactNode;
};

type SegmentedContentSliderProps = {
  items: SegmentedContentSliderItem[];
  initialItemId?: string;
  className?: string;
};

const SPRING = {
  type: 'spring',
  stiffness: 380,
  damping: 34,
  mass: 0.9,
} satisfies Transition;

export function SegmentedContentSlider({
  items,
  initialItemId,
  className,
}: SegmentedContentSliderProps) {
  const initialIndex = useMemo(() => {
    if (!items.length) return 0;
    if (!initialItemId) return 0;

    const foundIndex = items.findIndex((item) => item.id === initialItemId);
    return foundIndex >= 0 ? foundIndex : 0;
  }, [items, initialItemId]);

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const activeItem = items[activeIndex];

  function goTo(index: number) {
    setActiveIndex(index);
  }

  function goPrev() {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }

  function goNext() {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }

  if (!items.length || !activeItem) return null;

  return (
    <div
      className={cn(
        'rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:p-4',
        className,
      )}
    >
      <div className="flex flex-col gap-4 border-b border-white/8 pb-4">
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                className={cn(
                  'relative inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="segmented-slider-pill"
                    className="absolute inset-0 rounded-full border border-primary/20 bg-primary/12 shadow-[0_10px_24px_rgba(124,92,255,0.16)]"
                    transition={SPRING}
                  />
                ) : (
                  <span className="absolute inset-0 rounded-full border border-white/10 bg-white/5 transition hover:border-white/14 hover:bg-white/7" />
                )}

                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-4">
          <motion.div
            key={`heading-${activeItem.id}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="min-w-0"
          >
            {activeItem.eyebrow ? (
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-foreground/55">
                {activeItem.eyebrow}
              </p>
            ) : null}

            {activeItem.title ? (
              <h4 className="mt-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {activeItem.title}
              </h4>
            ) : null}
          </motion.div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Voir le panneau précédent"
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground transition hover:border-white/14 hover:bg-white/8"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Voir le panneau suivant"
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground transition hover:border-white/14 hover:bg-white/8"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
            transition={{
              duration: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {activeItem.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
