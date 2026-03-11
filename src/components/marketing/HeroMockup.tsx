'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function HeroMockup() {
  const [transform, setTransform] = useState(
    'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
  );
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallaxOffset = useMemo(() => clamp(scrollY * 0.06, 0, 24), [scrollY]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = clamp(((y - centerY) / centerY) * -5, -5, 5);
    const rotateY = clamp(((x - centerX) / centerX) * 7, -7, 7);

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.015)`,
    );
  }

  function handleMouseLeave() {
    setTransform(
      `perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(-${parallaxOffset}px) scale(1)`,
    );
  }

  useEffect(() => {
    setTransform(
      `perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(-${parallaxOffset}px) scale(1)`,
    );
  }, [parallaxOffset]);

  return (
    <div className="relative mx-auto w-full max-w-155">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute right-4 top-12 h-28 w-28 rounded-full bg-accent/20 blur-2xl sm:h-36 sm:w-36" />
        <div className="absolute bottom-8 left-6 h-24 w-24 rounded-full bg-primary/15 blur-2xl sm:h-32 sm:w-32" />
      </div>

      <div className="relative">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform }}
          className="transition-transform duration-200 ease-out will-change-transform motion-reduce:transform-none"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-border/70 bg-card/80 shadow-(--shadow-card) backdrop-blur">
            <div className="absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />

            <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3 sm:px-5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <div className="ml-3 h-8 flex-1 rounded-full border border-border/60 bg-background/60 px-3 text-xs leading-8 text-muted-foreground">
                alchimiste-creations.dev/project
              </div>
            </div>

            <Image
              src="/images/hero-mockup.webp"
              alt="Exemple de site premium conçu par Alchimiste Créations"
              width={1440}
              height={1080}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div
          className="absolute -right-2 top-6 hidden w-44 rounded-2xl border border-border/70 bg-background/80 p-3 shadow-(--shadow-card) backdrop-blur md:block"
          style={{ transform: `translateY(-${parallaxOffset * 0.55}px)` }}
        >
          <p className="text-xs font-medium text-foreground">Design premium</p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Hiérarchie claire, image forte, structure élégante.
          </p>
        </div>

        <div
          className="absolute -left-3 bottom-8 hidden w-48 rounded-2xl border border-border/70 bg-background/80 p-3 shadow-(--shadow-card) backdrop-blur md:block"
          style={{ transform: `translateY(-${parallaxOffset * 0.35}px)` }}
        >
          <p className="text-xs font-medium text-foreground">Pensé conversion</p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Message lisible, CTA visibles, expérience fluide.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:hidden">
          <div className="rounded-2xl border border-border/70 bg-background/70 p-3 backdrop-blur">
            <p className="text-xs font-medium text-foreground">Design premium</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Structure claire et haut de gamme.
            </p>
          </div>

          <div className="rounded-2xl border border-border/70 bg-background/70 p-3 backdrop-blur">
            <p className="text-xs font-medium text-foreground">Conversion</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              CTA visibles et parcours plus efficace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
