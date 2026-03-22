import { Mail, MapPin, ShieldCheck, Sparkles, Gem } from 'lucide-react';
import { legalNavigation, mainNavigation, primaryCta } from './navigation';
import { socialLinks } from './social-links';
import { coreValuePromise } from './messaging';

export const siteBrand = 'Alchimiste Créations';

export const siteValueProposition = coreValuePromise;

export const footerContent = {
  intro: 'Discutons de votre projet',
  title: 'Un site qui donne confiance et donne envie de vous contacter.',
  description:
    'Alchimiste Créations conçoit des sites clairs, élégants et structurés pour mieux présenter votre activité et soutenir votre développement.',
  highlights: [
    { label: 'Message clair', icon: Sparkles },
    { label: 'Image professionnelle', icon: Gem },
    { label: 'Parcours orienté contact', icon: ShieldCheck },
  ],
  contact: {
    email: 'bonjour@alchimiste-creations.fr',
    location: 'Basé en France · Projets à distance',
    icons: {
      mail: Mail,
      map: MapPin,
    },
  },
  navigation: mainNavigation,
  legalNavigation,
  socialLinks,
  cta: primaryCta,
  bottomText: 'Studio web indépendant · Clarté · Exigence · Conversion',
};
