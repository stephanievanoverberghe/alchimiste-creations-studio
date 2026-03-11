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
        rotateX: clamp(((y - centerY) / centerY) * -4, -4, 4),
        rotateY: clamp(((x - centerX) / centerX) * 5, -5, 5),
        translateY: -6,
        scale: 1.008,
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

  const desktopOffset = prefersReducedMotion ? 0 : clamp(scrollY * 0.018, 0, 12);
  const mobileOffset = prefersReducedMotion ? 0 : clamp(scrollY * 0.038, 0, 24);

  const groupTransform = prefersReducedMotion
    ? undefined
    : {
        transform: `perspective(1400px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translate3d(0, ${tilt.translateY}px, 0) scale(${tilt.scale})`,
      };

  return (
    <div className="relative mx-auto w-full max-w-205">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="hero-glow-orb absolute left-1/2 top-[34%] h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-[24rem]" />
        <div className="hero-glow-orb-delay absolute right-[8%] top-[14%] h-28 w-28 rounded-full bg-accent/15 blur-3xl sm:h-40 sm:w-40" />
        <div className="hero-glow-orb-slow absolute bottom-[10%] left-[6%] h-24 w-24 rounded-full bg-primary/12 blur-2xl sm:h-32 sm:w-32" />
      </div>

      <div
        ref={frameRef}
        style={groupTransform}
        className="relative transition-transform duration-300 ease-out will-change-transform motion-reduce:transform-none"
      >
        <div className="relative min-h-80 sm:min-h-105 lg:min-h-140">
          <div
            className="absolute inset-x-0 top-[2%] z-20"
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
            className="absolute bottom-[-2%] right-[2%] z-30 w-[30%] sm:w-[24%] lg:right-[4%] lg:w-[22%]"
            style={
              prefersReducedMotion
                ? undefined
                : {
                    transform: `translate3d(0, ${-mobileOffset}px, 0) rotate(7deg)`,
                  }
            }
          >
            <MobileFrame
              imageSrc={mockup.mobile.src}
              alt={mockup.mobile.alt}
              className="hero-float-mobile"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-[6%] top-[8%] z-10 h-[78%] rounded-4xl border border-white/8 bg-white/2 blur-0"
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
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1020]/80 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="absolute inset-0 rounded-[30px] ring-1 ring-white/10" />
      <div className="absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />

      <div className="relative flex items-center gap-2 border-b border-white/10 bg-white/3 px-4 py-3 sm:px-5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />

        <div className="ml-3 h-8 flex-1 rounded-full border border-white/10 bg-black/20 px-3 text-xs leading-8 text-white/55">
          {browserLabel}
        </div>
      </div>

      <div className="relative">
        <Image
          src={imageSrc}
          alt={alt}
          width={1600}
          height={1100}
          priority
          className="h-auto w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_18%,transparent_80%,rgba(0,0,0,0.14))]" />
      </div>
    </div>
  );
}

type MobileFrameProps = {
  imageSrc: string;
  alt: string;
  className?: string;
};

function MobileFrame({ imageSrc, alt, className }: MobileFrameProps) {
  return (
    <div className={className}>
      <div className="rounded-4xl border border-white/10 bg-neutral-950/95 p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="mb-2 flex justify-center">
          <div className="h-1.5 w-16 rounded-full bg-white/12" />
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
          <Image
            src={imageSrc}
            alt={alt}
            width={900}
            height={1600}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
