'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import type { HeroContent } from '@/domain/home/hero';

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(media.matches);

    function onChange(event: MediaQueryListEvent) {
      setPrefersReducedMotion(event.matches);
    }

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return prefersReducedMotion;
}

type HeroMockupProps = {
  mockup: HeroContent['mockup'];
};

type TiltState = {
  rotateX: number;
  rotateY: number;
  translateY: number;
  scale: number;
};

const INITIAL_TILT: TiltState = {
  rotateX: 0,
  rotateY: 0,
  translateY: 0,
  scale: 1,
};

export function HeroMockup({ mockup }: HeroMockupProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [scrollY, setScrollY] = useState(0);
  const [tilt, setTilt] = useState<TiltState>(INITIAL_TILT);

  const frameRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<TiltState>(INITIAL_TILT);
  const currentRef = useRef<TiltState>(INITIAL_TILT);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTilt(INITIAL_TILT);
      return;
    }

    function updateTilt() {
      const current = currentRef.current;
      const target = targetRef.current;

      const next: TiltState = {
        rotateX: current.rotateX + (target.rotateX - current.rotateX) * 0.12,
        rotateY: current.rotateY + (target.rotateY - current.rotateY) * 0.12,
        translateY: current.translateY + (target.translateY - current.translateY) * 0.12,
        scale: current.scale + (target.scale - current.scale) * 0.12,
      };

      currentRef.current = next;
      setTilt(next);

      const hasMotion =
        Math.abs(next.rotateX - target.rotateX) > 0.01 ||
        Math.abs(next.rotateY - target.rotateY) > 0.01 ||
        Math.abs(next.translateY - target.translateY) > 0.01 ||
        Math.abs(next.scale - target.scale) > 0.001;

      if (hasMotion) {
        rafRef.current = window.requestAnimationFrame(updateTilt);
      } else {
        rafRef.current = null;
      }
    }

    function startAnimation() {
      if (rafRef.current !== null) {
        return;
      }

      rafRef.current = window.requestAnimationFrame(updateTilt);
    }

    const element = frameRef.current;
    if (!element) {
      return;
    }

    function handlePointerMove(event: PointerEvent) {
      const rect = element.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      targetRef.current = {
        rotateX: clamp(((y - centerY) / centerY) * -5, -5, 5),
        rotateY: clamp(((x - centerX) / centerX) * 7, -7, 7),
        translateY: -6,
        scale: 1.01,
      };

      startAnimation();
    }

    function handlePointerLeave() {
      targetRef.current = INITIAL_TILT;
      startAnimation();
    }

    element.addEventListener('pointermove', handlePointerMove);
    element.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      element.removeEventListener('pointermove', handlePointerMove);
      element.removeEventListener('pointerleave', handlePointerLeave);

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    function handleScroll() {
      setScrollY(window.scrollY);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  const desktopOffset = prefersReducedMotion ? 0 : clamp(scrollY * 0.018, 0, 10);
  const tabletOffset = prefersReducedMotion ? 0 : clamp(scrollY * 0.03, 0, 18);
  const mobileOffset = prefersReducedMotion ? 0 : clamp(scrollY * 0.042, 0, 24);
  const noteOffsetA = prefersReducedMotion ? 0 : clamp(scrollY * 0.02, 0, 12);
  const noteOffsetB = prefersReducedMotion ? 0 : clamp(scrollY * 0.024, 0, 14);

  const groupTransform = prefersReducedMotion
    ? undefined
    : {
        transform: `perspective(1400px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translate3d(0, ${tilt.translateY}px, 0) scale(${tilt.scale})`,
      };

  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="hero-glow-orb absolute left-1/2 top-[36%] h-56 w-56 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl sm:h-72 sm:w-72 lg:h-80 lg:w-80" />
        <div className="hero-glow-orb-delay absolute right-[6%] top-[18%] h-28 w-28 rounded-full bg-accent/20 blur-3xl sm:h-36 sm:w-36" />
        <div className="hero-glow-orb-slow absolute bottom-[14%] left-[8%] h-24 w-24 rounded-full bg-primary/15 blur-2xl sm:h-32 sm:w-32" />
      </div>

      <div
        ref={frameRef}
        style={groupTransform}
        className="relative transition-transform duration-300 ease-out will-change-transform motion-reduce:transform-none"
      >
        <div className="relative min-h-[340px] sm:min-h-[440px] lg:min-h-[560px]">
          <div
            className="absolute left-[2%] top-[14%] z-10 hidden w-[34%] md:block"
            style={
              prefersReducedMotion
                ? undefined
                : {
                    transform: `translate3d(0, ${-tabletOffset}px, 0) rotate(-11deg)`,
                  }
            }
          >
            <DeviceFrame
              variant="tablet"
              imageSrc={mockup.tablet.src}
              alt={mockup.tablet.alt}
              className="hero-float-tablet"
            />
          </div>

          <div
            className="absolute inset-x-[4%] top-[4%] z-20"
            style={
              prefersReducedMotion
                ? undefined
                : {
                    transform: `translate3d(0, ${-desktopOffset}px, 0)`,
                  }
            }
          >
            <DesktopFrame
              browserLabel={mockup.browserLabel}
              imageSrc={mockup.desktop.src}
              alt={mockup.desktop.alt}
            />
          </div>

          <div
            className="absolute bottom-0 right-[1%] z-30 w-[34%] sm:w-[28%] md:right-[2%] md:w-[24%]"
            style={
              prefersReducedMotion
                ? undefined
                : {
                    transform: `translate3d(0, ${-mobileOffset}px, 0) rotate(9deg)`,
                  }
            }
          >
            <DeviceFrame
              variant="mobile"
              imageSrc={mockup.mobile.src}
              alt={mockup.mobile.alt}
              className="hero-float-mobile"
            />
          </div>

          <FloatingNote
            title={mockup.floatingNotes.desktop[0].title}
            description={mockup.floatingNotes.desktop[0].description}
            className="hero-float-note absolute -right-2 top-[13%] z-40 hidden w-44 md:block"
            style={
              prefersReducedMotion
                ? undefined
                : {
                    transform: `translate3d(0, ${-noteOffsetA}px, 0)`,
                  }
            }
          />

          <FloatingNote
            title={mockup.floatingNotes.desktop[1].title}
            description={mockup.floatingNotes.desktop[1].description}
            className="hero-float-note-delay absolute -left-3 bottom-[12%] z-40 hidden w-48 md:block"
            style={
              prefersReducedMotion
                ? undefined
                : {
                    transform: `translate3d(0, ${-noteOffsetB}px, 0)`,
                  }
            }
          />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 md:hidden">
          <FloatingNote
            title={mockup.floatingNotes.mobile[0].title}
            description={mockup.floatingNotes.mobile[0].description}
          />
          <FloatingNote
            title={mockup.floatingNotes.mobile[1].title}
            description={mockup.floatingNotes.mobile[1].description}
          />
        </div>
      </div>
    </div>
  );
}

type DesktopFrameProps = {
  browserLabel: string;
  imageSrc: string;
  alt: string;
};

function DesktopFrame({ browserLabel, imageSrc, alt }: DesktopFrameProps) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-border/70 bg-card/80 shadow-[var(--shadow-card)] backdrop-blur">
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3 sm:px-5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <div className="ml-3 h-8 flex-1 rounded-full border border-border/60 bg-background/60 px-3 text-xs leading-8 text-muted-foreground">
          {browserLabel}
        </div>
      </div>

      <Image
        src={imageSrc}
        alt={alt}
        width={1440}
        height={1080}
        priority
        className="h-auto w-full object-cover"
      />
    </div>
  );
}

type DeviceFrameProps = {
  variant: 'tablet' | 'mobile';
  imageSrc: string;
  alt: string;
  className?: string;
};

function DeviceFrame({ variant, imageSrc, alt, className }: DeviceFrameProps) {
  const shellClassName =
    variant === 'mobile'
      ? 'rounded-[28px] border border-white/10 bg-neutral-950/95 p-2 shadow-[var(--shadow-card)]'
      : 'rounded-[24px] border border-white/10 bg-neutral-950/95 p-2 shadow-[var(--shadow-card)]';

  const screenClassName =
    variant === 'mobile'
      ? 'overflow-hidden rounded-[22px] border border-white/10 bg-black'
      : 'overflow-hidden rounded-[18px] border border-white/10 bg-black';

  return (
    <div className={className}>
      <div className={shellClassName}>
        <div className={screenClassName}>
          <Image
            src={imageSrc}
            alt={alt}
            width={900}
            height={1200}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

type FloatingNoteProps = {
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
};

function FloatingNote({ title, description, className, style }: FloatingNoteProps) {
  return (
    <div
      className={[
        'rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.72))] p-3 shadow-[var(--shadow-card)] backdrop-blur-xl',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <p className="text-xs font-medium text-white">{title}</p>
      <p className="mt-1 text-xs leading-5 text-white/70">{description}</p>
    </div>
  );
}
