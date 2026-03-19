'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, PanInfo } from 'motion/react';

import { cn } from '@/lib/utils/cn';

type MobileSwipeStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

type MobileSwipeStepsProps = {
  items: MobileSwipeStep[];
  className?: string;
};

const swipeThreshold = 60;

export function MobileSwipeSteps({ items, className }: MobileSwipeStepsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function paginate(nextDirection: 1 | -1) {
    setDirection(nextDirection);
    setActiveIndex((prev) => {
      if (nextDirection === 1) {
        return prev === items.length - 1 ? 0 : prev + 1;
      }

      return prev === 0 ? items.length - 1 : prev - 1;
    });
  }

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (info.offset.x <= -swipeThreshold) {
      paginate(1);
      return;
    }

    if (info.offset.x >= swipeThreshold) {
      paginate(-1);
    }
  }

  if (!items.length) return null;

  const activeItem = items[activeIndex];

  return (
    <div className={cn('lg:hidden', className)}>
      <div className="relative overflow-hidden rounded-4xl border border-white/12 bg-[linear-gradient(165deg,rgba(11,18,32,0.94)_0%,rgba(15,25,42,0.78)_45%,rgba(13,20,35,0.92)_100%)] p-6 shadow-[0_28px_90px_rgba(5,10,20,0.52)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-8 h-44 w-44 rounded-full bg-primary/16 blur-3xl" />
          <div className="absolute -right-12 bottom-5 h-40 w-40 rounded-full bg-accent/18 blur-3xl" />
        </div>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.article
            key={activeItem.id}
            custom={direction}
            initial={{ x: direction > 0 ? 40 : -40, opacity: 0, scale: 0.98 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: direction > 0 ? -40 : 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-foreground/65">
              {activeItem.number}
            </div>

            <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
              {activeItem.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">{activeItem.description}</p>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Voir l'étape précédente"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-foreground transition hover:border-white/20 hover:bg-white/10"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                aria-label={`Aller à l'étape ${index + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  isActive
                    ? 'w-9 bg-linear-to-r from-primary to-accent'
                    : 'w-2 bg-white/25 hover:bg-white/45',
                )}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Voir l'étape suivante"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-foreground transition hover:border-white/20 hover:bg-white/10"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
