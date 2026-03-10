'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { isNearTop, getScrollDirection } from '@/lib/utils/scroll-direction';
import { siteContent } from '@/content/site-content';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileBottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const left = siteContent.nav.slice(0, 2);
  const right = siteContent.nav.slice(2, 4);
  const CtaIcon = siteContent.ctaPrimary.icon;
  const ctaActive = isActive(pathname, siteContent.ctaPrimary.href);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;

        if (isNearTop(currentY)) {
          setIsVisible(true);
        } else {
          const direction = getScrollDirection({
            currentY,
            previousY: lastScrollY.current,
          });

          if (direction === 'up') setIsVisible(true);
          if (direction === 'down') setIsVisible(false);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[calc(env(safe-area-inset-bottom)+0.6rem)] sm:hidden">
      <nav
        aria-label="Navigation mobile"
        data-visible={isVisible}
        className="mobile-bottom-nav mx-auto max-w-md rounded-3xl border border-border/70 bg-surface/85 shadow-[0_14px_40px_rgba(4,7,18,0.45)] backdrop-blur-xl"
      >
        <div className="grid grid-cols-5 items-end gap-1 p-2">
          {left.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative flex h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 text-[10px] font-semibold transition-all duration-(--motion-fast) ease-(--ease-standard) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
                  active ? 'text-text' : 'text-text-muted hover:-translate-y-0.5 hover:text-text',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-1.5 h-1.5 w-1.5 rounded-full bg-primary transition-all duration-(--motion-fast) ease-(--ease-standard)',
                    active ? 'opacity-100 scale-100' : 'opacity-0 scale-50',
                  )}
                />

                {Icon ? (
                  <span
                    className={cn(
                      'inline-flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-(--motion-fast) ease-(--ease-standard)',
                      active && 'bg-white/6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]',
                    )}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                ) : null}

                <span>{item.label}</span>
              </Link>
            );
          })}

          <Link
            href={siteContent.ctaPrimary.href}
            aria-label={siteContent.ctaPrimary.label}
            aria-current={ctaActive ? 'page' : undefined}
            className="focus-ring -mt-6 flex flex-col items-center justify-center gap-1 rounded-xl"
          >
            <span className="inline-flex h-15 w-15 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_26px_rgba(122,84,255,0.42)] transition-all duration-(--motion-fast) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(122,84,255,0.5)]">
              {CtaIcon ? <CtaIcon className="h-5 w-5" /> : null}
            </span>

            <span
              className={cn(
                'text-[10px] font-semibold',
                ctaActive ? 'text-text' : 'text-text-muted',
              )}
            >
              Contact
            </span>
          </Link>

          {right.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative flex h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 text-[10px] font-semibold transition-all duration-(--motion-fast) ease-(--ease-standard) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
                  active ? 'text-text' : 'text-text-muted hover:-translate-y-0.5 hover:text-text',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-1.5 h-1.5 w-1.5 rounded-full bg-primary transition-all duration-(--motion-fast) ease-(--ease-standard)',
                    active ? 'opacity-100 scale-100' : 'opacity-0 scale-50',
                  )}
                />

                {Icon ? (
                  <span
                    className={cn(
                      'inline-flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-(--motion-fast) ease-(--ease-standard)',
                      active && 'bg-white/6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]',
                    )}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                ) : null}

                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
