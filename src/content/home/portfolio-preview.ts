import type { PortfolioPreviewContent } from '@/domain/home/portfolio-preview';

export const portfolioPreviewContent: PortfolioPreviewContent = {
  eyebrow: 'Projets sélectionnés',
  title: 'Des projets pensés pour améliorer la perception et la conversion.',
  description:
    'Chaque réalisation présentée ici combine direction visuelle, clarté du message et structure orientée résultat pour transformer les visites en demandes qualifiées.',
  items: [
    {
      id: 'studio-lumen',
      type: 'project',
      title: 'Studio Lumen',
      category: 'Site vitrine premium',
      description:
        'Une présence plus éditoriale et plus crédible pour mieux présenter l’offre dès la première visite.',
      context:
        'Contexte : Activité premium avec un positionnement peu lisible et un site qui ne portait pas le niveau de service.',
      result:
        'Résultat : Message clarifié, parcours simplifié et prises de contact plus qualifiées.',
      href: '/portfolio/studio-lumen',
      ctaLabel: 'Voir le projet',
      image: {
        src: '/images/portfolio/studio-lumen-template-home.webp',
        alt: 'Aperçu du projet Studio Lumen',
      },
    },
    {
      id: 'rivage-photo',
      type: 'project',
      title: 'Rivage Photo',
      category: 'Portfolio visuel',
      description:
        'Un portfolio immersif mais structuré pour valoriser le travail visuel sans sacrifier la clarté.',
      context:
        'Contexte : Beaucoup de contenu visuel, mais une navigation qui freinait la découverte des prestations.',
      result:
        'Résultat : Expérience plus fluide, offre mieux comprise et échanges clients mieux orientés.',
      href: '/portfolio/rivage-photo',
      ctaLabel: 'Découvrir le projet',
      image: {
        src: '/images/portfolio/rivage-photo-template-home.webp',
        alt: 'Aperçu du projet Rivage Photo',
      },
    },
    {
      id: 'explorart',
      type: 'project',
      title: 'Explorart',
      category: 'Plateforme éditoriale',
      description:
        'Une expérience de lecture plus structurée pour transmettre un univers riche sans perdre en clarté ni en lisibilité.',
      context:
        'Contexte : Un projet éditorial ambitieux avec beaucoup de contenus, de piliers et de matière à organiser.',
      result:
        'Résultat : Architecture plus claire, navigation plus intuitive et contenu mieux mis en valeur.',
      href: '/portfolio/explorart',
      ctaLabel: 'Voir le projet',
      image: {
        src: '/images/portfolio/explorart-template-home.webp',
        alt: 'Aperçu du projet Explorart',
      },
    },
    {
      id: 'mysteres-a-la-carte',
      type: 'project',
      title: 'Mystères à la Carte',
      category: 'Expérience interactive',
      description:
        'Une interface plus immersive et plus cohérente pour transformer la découverte du concept en véritable expérience.',
      context:
        'Contexte : Un projet original avec une forte identité, mais qui devait gagner en lisibilité et en intensité visuelle.',
      result: 'Résultat : Univers renforcé, expérience plus engageante et parcours mieux maîtrisé.',
      href: '/portfolio/mysteres-a-la-carte',
      ctaLabel: 'Découvrir le projet',
      image: {
        src: '/images/portfolio/mysteres-a-la-carte-cover.webp',
        alt: 'Aperçu du projet Mystères à la Carte',
      },
    },
    {
      id: 'ancre-toi',
      type: 'project',
      title: 'Ancre Toi',
      category: 'Site bien-être',
      description:
        'Une présence plus douce, plus claire et plus crédible pour refléter un accompagnement sensible et professionnel.',
      context:
        'Contexte : Une activité centrée sur l’humain, qui demandait une image apaisante sans perdre en structure ni en impact.',
      result:
        'Résultat : Positionnement plus lisible, identité plus juste et prise de contact plus naturelle.',
      href: '/portfolio/ancre-toi',
      ctaLabel: 'Voir le projet',
      image: {
        src: '/images/portfolio/ancre-toi-cover.webp',
        alt: 'Aperçu du projet Ancre Toi',
      },
    },
    {
      id: 'your-project',
      type: 'cta',
      title: 'Et si le prochain projet était le vôtre ?',
      description:
        'Si votre site n’exprime pas encore votre vraie valeur, nous pouvons construire une présence plus claire, plus élégante et plus convaincante.',
      href: '/contact',
      ctaLabel: 'Parler de votre projet',
    },
  ],
};
