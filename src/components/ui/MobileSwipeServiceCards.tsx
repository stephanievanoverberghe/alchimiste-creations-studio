'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { AnimatePresence, motion, type PanInfo } from 'motion/react';

import { Badge } from '@/components/ui';
import { cn } from '@/lib/utils/cn';

type MobileSwipeServiceCardItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  highlightLabel: string;
  idealFor: string;
  startingPrice: string;
  timeline: string;
  icon: LucideIcon;
  featured?: boolean;
};

type MobileSwipeServiceCardsProps = {
  items: MobileSwipeServiceCardItem[];
  idealForLabel: string;
  investmentLabel: string;
  startingFromLabel: string;
  timelineLabel: string;
  className?: string;
};

const SWIPE_THRESHOLD = 56;

export function MobileSwipeServiceCards({
  items,
  idealForLabel,
  investmentLabel,
  startingFromLabel,
  timelineLabel,
  className,
}: MobileSwipeServiceCardsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const total = items.length;
  const activeItem = items[activeIndex];

  const progressLabel = useMemo(() => {
    return `${String(activeIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  }, [activeIndex, total]);

  function paginate(nextDirection: 1 | -1) {
    if (total <= 1) return;

    setDirection(nextDirection);
    setActiveIndex((prev) => {
      if (nextDirection === 1) {
        return prev === total - 1 ? 0 : prev + 1;
      }

      return prev === 0 ? total - 1 : prev - 1;
    });
  }

  function goTo(index: number) {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (info.offset.x <= -SWIPE_THRESHOLD) {
      paginate(1);
      return;
    }

    if (info.offset.x >= SWIPE_THRESHOLD) {
      paginate(-1);
    }
  }

  if (!items.length || !activeItem) return null;

  const Icon = activeItem.icon;

  return (
    <div className={cn('lg:hidden', className)}>
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-4 right-0 w-[calc(100%-2rem)] rounded-4xl border border-white/8 bg-white/2"
        />

        <div className="overflow-hidden pr-8">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={activeItem.id}
              custom={direction}
              initial={{ x: direction > 0 ? 72 : -72, opacity: 0, scale: 0.97 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction > 0 ? -72 : 72, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={handleDragEnd}
              className="relative"
            >
              <article
                className={cn(
                  'relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(165deg,rgba(11,18,32,0.96)_0%,rgba(15,24,40,0.88)_42%,rgba(10,16,28,0.98)_100%)] p-6 shadow-[0_28px_90px_rgba(5,10,20,0.52)] backdrop-blur-xl',
                  activeItem.featured && 'ring-1 ring-primary/25',
                )}
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]" />
                  <div className="absolute -left-16 top-8 h-40 w-40 rounded-full bg-primary/14 blur-3xl" />
                  <div className="absolute -right-10 bottom-4 h-36 w-36 rounded-full bg-accent/16 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <Badge variant={activeItem.featured ? 'primary' : 'default'}>
                        {activeItem.highlightLabel}
                      </Badge>
                    </div>

                    <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-foreground/40">
                      {progressLabel}
                    </span>
                  </div>

                  <h3 className="mt-5 max-w-[12ch] text-balance text-[2rem] font-semibold tracking-[-0.04em] text-foreground leading-[1.02]">
                    {activeItem.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {activeItem.description}
                  </p>

                  <div className="mt-6 rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-foreground/50">
                      {idealForLabel}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {activeItem.idealFor}
                    </p>
                  </div>

                  <div className="mt-4 rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-foreground/50">
                      {investmentLabel}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {startingFromLabel} {activeItem.startingPrice}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {timelineLabel} : {activeItem.timeline}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <Link
                      href={activeItem.href}
                      className={cn(
                        'group/cta relative inline-flex min-h-11 w-full items-center justify-center overflow-hidden rounded-2xl px-5 text-sm font-semibold transition-all duration-300 ease-out',
                        activeItem.featured
                          ? 'bg-primary text-primary-foreground shadow-[0_12px_28px_rgba(124,92,255,0.30)]'
                          : 'border border-white/12 bg-white/5 text-foreground hover:border-primary/30 hover:bg-primary/10 hover:text-white',
                      )}
                    >
                      {activeItem.featured ? (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 -translate-x-[140%] bg-[linear-gradient(110deg,transparent_24%,rgba(255,255,255,0.35)_50%,transparent_76%)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-[140%]"
                        />
                      ) : null}

                      <span className="relative z-10 inline-flex items-center gap-2">
                        {activeItem.ctaLabel}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <NavButton
            label="Voir l’offre précédente"
            onClick={() => paginate(-1)}
            icon={<ArrowLeft className="h-4 w-4" />}
          />
          <NavButton
            label="Voir l’offre suivante"
            onClick={() => paginate(1)}
            icon={<ArrowRight className="h-4 w-4" />}
          />
        </div>

        <div className="flex items-center gap-2">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Aller à l’offre ${index + 1}`}
                className={cn(
                  'relative h-2.5 rounded-full transition-all duration-300 ease-out',
                  isActive ? 'w-10 bg-white/12' : 'w-2.5 bg-white/22 hover:bg-white/38',
                )}
              >
                {isActive ? (
                  <span className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,rgba(124,92,255,1),rgba(64,210,255,0.95))]" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type NavButtonProps = {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
};

function NavButton({ label, icon, onClick }: NavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/4.5 text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/8"
    >
      {icon}
    </button>
  );
}
