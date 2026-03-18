import Link from 'next/link';
import { type ButtonHTMLAttributes, type HTMLAttributeAnchorTarget, type ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLinkProps = BaseProps & {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
};

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const baseClasses =
  'ui-button cursor-pointer group relative inline-flex items-center justify-center overflow-hidden rounded-xl font-semibold transition-all duration-[var(--motion-base)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))] disabled:pointer-events-none disabled:opacity-50';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:brightness-110',
  secondary:
    'border border-[hsl(var(--border))] bg-[hsl(var(--surface-elevated))] text-[hsl(var(--text))] hover:-translate-y-0.5 hover:border-[hsl(var(--primary))] hover:text-white',
  ghost:
    'bg-transparent text-[hsl(var(--text-muted))] hover:bg-white/5 hover:text-[hsl(var(--text))]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-6 text-base',
};

function ButtonInner({ children, variant }: Required<Pick<BaseProps, 'children' | 'variant'>>) {
  return (
    <>
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 -translate-x-[140%] bg-[linear-gradient(110deg,transparent_24%,rgba(255,255,255,0.35)_50%,transparent_76%)] transition-transform duration-620 ease-[cubic-bezier(0.22,1,0.36,1)]',
          variant === 'ghost' && 'hidden',
          'group-hover:translate-x-[140%]',
        )}
      />
      <span className="relative z-1">{children}</span>
    </>
  );
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className } = props;
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ('href' in props && props.href) {
    const { href, target, rel } = props;

    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        <ButtonInner variant={variant}>{children}</ButtonInner>
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  const { type = 'button', ...restButtonProps } = buttonProps;

  return (
    <button type={type} {...restButtonProps} className={classes}>
      <ButtonInner variant={variant}>{children}</ButtonInner>
    </button>
  );
}
