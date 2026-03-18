'use client';

import Image from 'next/image';

import type { HeroContent } from '@/domain/home/hero';

type HeroMockupProps = {
  mockup: HeroContent['mockup'];
};

export function HeroMockup({ mockup }: HeroMockupProps) {
  return (
    <div className="relative mx-auto w-full max-w-215">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="hero-glow-orb absolute left-1/2 top-[28%] h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-[24rem]" />
        <div className="hero-glow-orb-delay absolute right-[6%] top-[12%] h-24 w-24 rounded-full bg-accent/15 blur-3xl sm:h-36 sm:w-36" />
        <div className="hero-glow-orb-slow absolute bottom-[8%] left-[4%] h-20 w-20 rounded-full bg-primary/10 blur-2xl sm:h-28 sm:w-28" />
        <div className="absolute left-1/2 top-[42%] h-[72%] w-[88%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative mx-auto w-full">
        <div className="relative aspect-16/11 w-full">
          <div className="absolute inset-x-0 top-0 z-10">
            <DesktopFrame
              browserLabel={mockup.browserLabel}
              imageSrc={mockup.desktop.src}
              alt={mockup.desktop.alt}
            />
          </div>

          <div className="absolute bottom-[-3%] right-[3%] z-20 w-[34%] min-w-28 max-w-215 sm:bottom-[-4%] sm:w-[28%] sm:max-w-215 md:bottom-[-5%] md:w-[24%] lg:right-[4%] lg:w-[26%] lg:scale-[1.05] xl:w-[24%]">
            <MobileFrame
              imageSrc={mockup.mobile.src}
              alt={mockup.mobile.alt}
              className="hero-float-mobile"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-[-7%] right-[8%] z-10 h-8 w-[26%] rounded-full bg-black/35 blur-2xl sm:right-[7%] sm:w-[22%] md:right-[6%] md:w-[18%] lg:right-[8%] lg:w-[20%]"
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
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(9,14,28,0.82))] shadow-[0_18px_50px_rgba(0,0,0,0.28),0_40px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl">
      <div className="absolute inset-0 rounded-[30px] ring-1 ring-white/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
      <div className="absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />

      <div className="relative flex items-center gap-2 border-b border-white/10 bg-white/3 px-3 py-2.5 sm:px-4 sm:py-3 md:px-5">
        <span className="h-2 w-2 rounded-full bg-white/30 sm:h-2.5 sm:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-white/10 sm:h-2.5 sm:w-2.5" />

        <div className="ml-2 hidden h-8 flex-1 rounded-full border border-white/10 bg-black/20 px-3 text-xs leading-8 text-white/55 sm:block">
          {browserLabel}
        </div>

        <div className="ml-2 h-2.5 flex-1 rounded-full border border-white/10 bg-white/5 sm:hidden" />
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

        <div className="pointer-events-none absolute inset-y-[6%] right-[1.2%] hidden w-1.5 rounded-full bg-white/6 sm:block" />
        <div className="pointer-events-none absolute right-[1.2%] top-[22%] hidden h-[22%] w-1.5 rounded-full bg-white/18 sm:block" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(5,8,15,0.22)_55%,rgba(5,8,15,0.44))]" />
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
      <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,24,0.96),rgba(8,8,12,0.96))] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.26),0_28px_90px_rgba(0,0,0,0.42)]">
        <div className="mb-2 flex justify-center">
          <div className="h-1.5 w-16 rounded-full bg-white/12" />
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
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
