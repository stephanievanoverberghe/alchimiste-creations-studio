import { Mail, MapPin, ShieldCheck, Sparkles, Gem } from 'lucide-react';
import { legalNavigation, mainNavigation, primaryCta } from './navigation';
import { socialLinks } from './social-links';

export const siteBrand = 'Alchimiste Créations';

export const siteValueProposition =
  'J’aide les entrepreneurs et créateurs à transformer leur activité en un site web clair, moderne et crédible qui inspire confiance et attire les bonnes personnes.';

export const footerContent = {
  intro: 'Discutons de votre projet',
  title: 'Un site plus clair, plus crédible, plus juste.',
  description:
    'Chaque projet est conçu pour valoriser votre activité, inspirer confiance et donner envie de vous contacter.',
  highlights: [
    { label: 'Clarté du message', icon: Sparkles },
    { label: 'Design moderne et crédible', icon: Gem },
    { label: 'Performance & conversion', icon: ShieldCheck },
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
  bottomText: 'Studio web indépendant · Clarté · Crédibilité · Performance',
};
