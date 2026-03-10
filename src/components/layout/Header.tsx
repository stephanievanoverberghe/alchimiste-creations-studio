'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button, Container } from '@/components/ui';
import { siteContent } from '@/content/site-content';
import { cn } from '@/lib/utils/cn';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 hidden border-b border-border/70 bg-bg/86 backdrop-blur-xl transition-all duration-(--motion-base) ease-(--ease-standard) sm:block">
      <Container className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3 lg:gap-6">
        <Link
          href="/"
          aria-label={siteContent.brand}
          className="inline-flex items-center gap-3 transition-transform duration-(--motion-fast) ease-(--ease-standard) hover:-translate-y-0.5"
        >
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_20px_rgba(122,84,255,0.95)]"
          />
          <span className="text-sm font-semibold tracking-wide md:text-base">
            {siteContent.brand}
          </span>
        </Link>

        {/* Desktop nav uniquement */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center justify-center gap-1 rounded-2xl p-1 lg:flex"
        >
          {siteContent.nav.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-xl px-3 py-2 text-sm transition-all duration-(--motion-fast) ease-(--ease-standard)',
                  active
                    ? 'bg-surface-elevated text-text shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'
                    : 'text-text-muted hover:-translate-y-0.5 hover:text-text',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2">
          {/* CTA desktop */}
          <Button
            href={siteContent.ctaPrimary.href}
            variant="secondary"
            size="sm"
            className="hidden lg:inline-flex"
          >
            {siteContent.ctaPrimary.label}
          </Button>

          {/* CTA court tablette */}
          <Button
            href={siteContent.ctaPrimary.href}
            variant="secondary"
            size="sm"
            className="hidden md:inline-flex lg:hidden"
          >
            Contact
          </Button>

          {/* Hamburger tablette uniquement */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-surface/65 transition-all duration-(--motion-fast) ease-(--ease-standard) hover:-translate-y-0.5 hover:border-primary/40 lg:hidden"
            aria-expanded={open}
            aria-controls="site-tablet-menu"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span
              className={cn(
                'transition-transform duration-(--motion-fast) ease-(--ease-standard)',
                open && 'rotate-90',
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
          </button>
        </div>
      </Container>

      {/* Menu compact tablette */}
      <div
        id="site-tablet-menu"
        className={cn(
          'overflow-hidden border-t border-border/70 transition-[max-height,opacity] duration-(--motion-base) ease-(--ease-standard) lg:hidden',
          open ? 'max-h-130 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <Container className="grid gap-1 py-3">
          {siteContent.nav.map((item, index) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={open ? { animationDelay: `${index * 50}ms` } : undefined}
                className={cn(
                  'rounded-xl px-3 py-3 text-sm transition-all duration-(--motion-fast) ease-(--ease-standard)',
                  open && 'animate-[revealUp_var(--motion-slow)_var(--ease-standard)_both]',
                  active
                    ? 'bg-surface-elevated text-text shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'
                    : 'text-text-muted hover:text-text',
                )}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </Container>
      </div>
    </header>
  );
}
