'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import { siteContent } from '@/content/site-content';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileBottomNav() {
  const pathname = usePathname();
  const left = siteContent.nav.slice(0, 2);
  const right = siteContent.nav.slice(2, 4);
  const CtaIcon = siteContent.ctaPrimary.icon;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[calc(env(safe-area-inset-bottom)+0.6rem)] md:hidden animate-[mobileNavIn_240ms_cubic-bezier(0.2,0.8,0.2,1)_both]">
      <nav
        aria-label="Navigation mobile"
        className="mx-auto max-w-md rounded-3xl border border-border/70 bg-surface/85 shadow-[0_14px_40px_rgba(4,7,18,0.45)] backdrop-blur-xl"
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
                  'flex h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 text-[10px] font-semibold transition-all duration-(--motion-fast) ease-(--ease-standard)',
                  active ? 'text-text' : 'text-text-muted hover:-translate-y-0.5 hover:text-text',
                )}
              >
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
            className="-mt-6 flex flex-col items-center justify-center gap-1"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_26px_rgba(122,84,255,0.42)] transition-all duration-(--motion-fast) ease-(--ease-standard) hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(122,84,255,0.5)]">
              {CtaIcon ? <CtaIcon className="h-5 w-5" /> : null}
            </span>
            <span className="text-[10px] font-semibold text-text">Contact</span>
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
                  'flex h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 text-[10px] font-semibold transition-all duration-(--motion-fast) ease-(--ease-standard)',
                  active ? 'text-text' : 'text-text-muted hover:-translate-y-0.5 hover:text-text',
                )}
              >
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
