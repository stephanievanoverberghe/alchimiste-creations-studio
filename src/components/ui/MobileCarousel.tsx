'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, PanInfo } from 'motion/react';

import { cn } from '@/lib/utils/cn';

type MobileCarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  getItemKey: (item: T, index: number) => string;
  className?: string;
};

const swipeConfidenceThreshold = 60;

export function MobileCarousel<T>({
  items,
  renderItem,
  getItemKey,
  className,
}: MobileCarouselProps<T>) {
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
    if (info.offset.x <= -swipeConfidenceThreshold) {
      paginate(1);
      return;
    }

    if (info.offset.x >= swipeConfidenceThreshold) {
      paginate(-1);
    }
  }

  if (!items.length) return null;

  const activeItem = items[activeIndex];

  return (
    <div className={cn('w-full lg:hidden', className)}>
      <div className="relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={getItemKey(activeItem, activeIndex)}
            custom={direction}
            initial={{
              x: direction > 0 ? 48 : -48,
              opacity: 0,
              scale: 0.98,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              x: direction > 0 ? -48 : 48,
              opacity: 0,
              scale: 0.98,
            }}
            transition={{
              duration: 0.26,
              ease: [0.22, 1, 0.36, 1],
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.16}
            onDragEnd={handleDragEnd}
          >
            {renderItem(activeItem, activeIndex)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Voir la comparaison précédente"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground transition hover:border-white/14 hover:bg-white/8"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={getItemKey(item, index)}
                type="button"
                aria-label={`Aller à la comparaison ${index + 1}`}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={cn(
                  'h-2 rounded-full transition-all duration-200',
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
          aria-label="Voir la comparaison suivante"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-foreground transition hover:border-white/14 hover:bg-white/8"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
