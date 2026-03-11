import type { PortfolioPreviewContent } from '@/domain/home/portfolio-preview';

export const portfolioPreviewContent: PortfolioPreviewContent = {
  eyebrow: 'Projets sélectionnés',
  title: 'Un aperçu du niveau d’exigence apporté à chaque projet.',
  description:
    'Chaque réalisation combine direction visuelle, clarté du message et structure pensée pour inspirer confiance dès les premières secondes.',
  items: [
    {
      id: 'studio-lumen',
      type: 'project',
      title: 'Studio Lumen',
      category: 'Site vitrine premium',
      description:
        'Une présence plus éditoriale, une image plus crédible et une structure pensée pour valoriser l’activité dès l’arrivée sur le site.',
      href: '/portfolio/studio-lumen',
      ctaLabel: 'Voir le projet',
      image: {
        src: '/images/portfolio/studio-lumen-cover.webp',
        alt: 'Aperçu du projet Studio Lumen',
      },
    },
    {
      id: 'rivage-photo',
      type: 'project',
      title: 'Rivage Photo',
      category: 'Portfolio visuel',
      description:
        'Un portfolio plus immersif et plus structuré pour mettre en valeur le travail visuel tout en conservant une navigation claire et élégante.',
      href: '/portfolio/rivage-photo',
      ctaLabel: 'Découvrir le projet',
      image: {
        src: '/images/portfolio/rivage-photo-cover.webp',
        alt: 'Aperçu du projet Rivage Photo',
      },
    },
    {
      id: 'your-project',
      type: 'cta',
      title: 'Et si le prochain projet était le vôtre ?',
      description:
        'Votre activité mérite peut-être une présence en ligne plus claire, plus élégante et plus crédible. Le prochain projet mis en avant ici pourrait être le vôtre.',
      href: '/contact',
      ctaLabel: 'Parler de votre projet',
    },
  ],
};
