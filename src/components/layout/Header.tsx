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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/86 backdrop-blur-xl transition-all duration-(--motion-base) ease-(--ease-standard)">
      <Container className="flex items-center justify-between gap-3 py-3 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-6">
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

        <nav
          aria-label="Navigation principale"
          className="hidden md:flex md:items-center md:gap-1 md:rounded-2xl md:border md:border-border/60 md:bg-surface/60 md:p-1 lg:justify-center lg:border-0 lg:bg-transparent lg:p-0"
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

        <div className="hidden items-center gap-2 md:flex">
          <Button
            href={siteContent.ctaPrimary.href}
            variant="secondary"
            size="sm"
            className="lg:hidden"
          >
            Contact
          </Button>

          <Button
            href={siteContent.ctaPrimary.href}
            variant="secondary"
            size="sm"
            className="hidden lg:inline-flex"
          >
            {siteContent.ctaPrimary.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-surface/65 transition-all duration-(--motion-fast) ease-(--ease-standard) hover:-translate-y-0.5 hover:border-primary/40 md:hidden"
          aria-expanded={open}
          aria-controls="site-mobile-menu"
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
      </Container>

      <div
        id="site-mobile-menu"
        className={cn(
          'overflow-hidden border-t border-border/70 transition-[max-height,opacity] duration-(--motion-base) ease-(--ease-standard) md:hidden',
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
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={siteContent.ctaPrimary.href}
            onClick={() => setOpen(false)}
            className={cn(
              'mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-(--shadow-glow) transition-all duration-(--motion-fast) ease-(--ease-standard) hover:-translate-y-0.5 hover:brightness-110',
              open && 'animate-[revealUp_var(--motion-slow)_var(--ease-standard)_both]',
            )}
            style={open ? { animationDelay: `${siteContent.nav.length * 50}ms` } : undefined}
          >
            {siteContent.ctaPrimary.label}
          </Link>
        </Container>
      </div>
    </header>
  );
}
