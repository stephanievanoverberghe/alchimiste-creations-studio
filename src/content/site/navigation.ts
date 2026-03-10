import { type LucideIcon, BriefcaseBusiness, Gem, House, Send, Sparkles } from 'lucide-react';

export type SiteNavItem = {
  href: string;
  label: string;
  icon?: LucideIcon;
};

export const mainNavigation: SiteNavItem[] = [
  { href: '/', label: 'Accueil', icon: House },
  { href: '/portfolio', label: 'Portfolio', icon: BriefcaseBusiness },
  { href: '/services', label: 'Services', icon: Sparkles },
  { href: '/a-propos', label: 'À propos', icon: Gem },
];

export const primaryCta = {
  href: '/contact',
  label: 'Réserver un appel découverte',
  icon: Send,
};

export const legalNavigation: SiteNavItem[] = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
];
