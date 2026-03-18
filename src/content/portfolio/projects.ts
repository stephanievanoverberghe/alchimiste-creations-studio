import type { PortfolioProject } from '@/domain/portfolio/types';

const portfolioProjectsData: PortfolioProject[] = [
  {
    slug: 'studio-lumen',
    title: 'Studio Lumen',
    category: 'Site vitrine premium',
    description:
      'Une présence plus éditoriale et plus crédible pour mieux présenter l’offre dès la première visite.',
    objective: 'Clarifier l’offre et renforcer immédiatement la valeur perçue.',
    problem:
      'Le positionnement était trop flou et le site ne reflétait pas réellement le niveau de service.',
    solution:
      'Une refonte orientée message, structure et perception premium pour rendre la prise de contact plus naturelle.',
    context:
      'Activité premium avec un positionnement peu lisible et un site qui ne portait pas le niveau de service.',
    result: 'Message clarifié, parcours simplifié et prises de contact plus qualifiées.',
    beforeLabel: 'Avant : positionnement flou',
    afterLabel: 'Après : présence claire et crédible',
    ctaLabel: 'Voir le projet',
    image: {
      src: '/images/portfolio/lumen/studio-lumen-template-home.webp',
      alt: 'Aperçu du projet Studio Lumen',
    },
    images: {
      desktop: [
        {
          src: '/images/portfolio/lumen/studio-lumen-hero.webp',
          alt: 'Page d’accueil desktop du projet Studio Lumen',
        },
        {
          src: '/images/portfolio/lumen/studio-lumen-template-work.webp',
          alt: 'Section services desktop du projet Studio Lumen',
        },
      ],
      mobile: [
        {
          src: '/images/portfolio/lumen/studio-lumen-template-mobile-home.webp',
          alt: 'Page d’accueil mobile du projet Studio Lumen',
        },
      ],
    },
    liveUrl: 'https://studio-lumen.vercel.app/',
    featured: true,
    order: 1,
  },
  {
    slug: 'rivage-photo',
    title: 'Rivage Photo',
    category: 'Portfolio visuel',
    description:
      'Un portfolio immersif mais structuré pour valoriser le travail visuel sans sacrifier la clarté.',
    objective: 'Mieux valoriser l’univers visuel tout en rendant l’offre plus lisible.',
    problem:
      'Le contenu visuel était riche, mais la navigation freinait la découverte des prestations.',
    solution:
      'Une structure plus fluide, un meilleur rythme visuel et une lecture plus claire des services.',
    context:
      'Beaucoup de contenu visuel, mais une navigation qui freinait la découverte des prestations.',
    result: 'Expérience plus fluide, offre mieux comprise et échanges clients mieux orientés.',
    beforeLabel: 'Avant : navigation dispersée',
    afterLabel: 'Après : parcours plus fluide',
    ctaLabel: 'Découvrir le projet',
    image: {
      src: '/images/portfolio/rivage/rivage-photo-hero.webp',
      alt: 'Aperçu du projet Rivage Photo',
    },
    images: {
      desktop: [
        {
          src: '/images/portfolio/rivage/rivage-photo-template-home.webp',
          alt: 'Page d’accueil desktop du projet Rivage Photo',
        },
        {
          src: '/images/portfolio/rivage/rivage-photo-template-gallery.webp',
          alt: 'Section galerie desktop du projet Rivage Photo',
        },
      ],
      mobile: [
        {
          src: '/images/portfolio/rivage/rivage-photo-template-mobile-admin-dashboard.webp',
          alt: 'Version mobile du projet Rivage Photo',
        },
      ],
    },
    liveUrl: 'https://rivage-photo.vercel.app/',
    order: 2,
  },
  {
    slug: 'explorart',
    title: 'Explorart',
    category: 'Plateforme éditoriale',
    description:
      'Une expérience de lecture plus structurée pour transmettre un univers riche sans perdre en clarté ni en lisibilité.',
    objective: 'Rendre un univers éditorial dense plus accessible et plus agréable à parcourir.',
    problem:
      'Le volume de contenu et la richesse du projet rendaient l’ensemble difficile à structurer.',
    solution:
      'Une architecture éditoriale plus nette, pensée pour guider la lecture et mieux hiérarchiser la matière.',
    context:
      'Un projet éditorial ambitieux avec beaucoup de contenus, de piliers et de matière à organiser.',
    result: 'Architecture plus claire, navigation plus intuitive et contenu mieux mis en valeur.',
    beforeLabel: 'Avant : contenu difficile à parcourir',
    afterLabel: 'Après : lecture plus structurée',
    ctaLabel: 'Voir le projet',
    image: {
      src: '/images/portfolio/explorart/explorart-template-home.webp',
      alt: 'Aperçu du projet Explorart',
    },
    images: {
      desktop: [
        {
          src: '/images/portfolio/explorart/explorart-template-home.webp',
          alt: 'Page d’accueil desktop du projet Explorart',
        },
        {
          src: '/images/portfolio/explorart/explorart-template-article.webp',
          alt: 'Page article desktop du projet Explorart',
        },
      ],
      mobile: [
        {
          src: '/images/portfolio/explorart/explorart-template-mobile-articles.webp',
          alt: 'Version mobile du projet Explorart',
        },
      ],
    },
    liveUrl: 'https://explorart-blog.vercel.app/',
    order: 3,
  },
  {
    slug: 'mysteres-a-la-carte',
    title: 'Mystères à la carte',
    category: 'Expérience immersive',
    description:
      'Une expérience narrative et visuelle pensée pour immerger l’utilisateur dans un univers mystérieux.',
    objective: 'Créer une atmosphère forte et engager la curiosité dès les premières secondes.',
    problem:
      'Les expériences interactives peuvent facilement perdre l’utilisateur si la narration et la structure ne sont pas maîtrisées.',
    solution:
      'Une approche immersive mêlant rythme visuel, narration et interactions pour guider l’exploration.',
    context:
      'Projet expérimental visant à explorer une expérience web plus narrative et immersive.',
    result:
      'Une expérience visuelle marquante qui renforce l’engagement et la curiosité du visiteur.',
    beforeLabel: 'Avant : concept abstrait',
    afterLabel: 'Après : univers immersif',
    ctaLabel: 'Explorer le projet',
    image: {
      src: '/images/portfolio/mysteres-a-la-carte/mysteres-a-la-carte-hero.webp',
      alt: 'Aperçu du projet Mystères à la carte',
    },
    images: {
      desktop: [
        {
          src: '/images/portfolio/mysteres-a-la-carte/mysteres-a-la-carte-template-home.webp',
          alt: 'Page desktop du projet Mystères à la carte',
        },
        {
          src: '/images/portfolio/mysteres-a-la-carte/mysteres-a-la-carte-section-experience.webp',
          alt: 'Scène immersive desktop du projet Mystères à la carte',
        },
      ],
      mobile: [
        {
          src: '/images/portfolio/mysteres-a-la-carte/mysteres-a-la-carte-template-mobile.webp',
          alt: 'Version mobile du projet Mystères à la carte',
        },
      ],
    },
    liveUrl: 'https://mysteres-a-la-carte.vercel.app/',
    order: 4,
  },
  {
    slug: 'ancre-toi',
    title: 'Ancre-toi',
    category: 'Site vitrine',
    description:
      'Un site pensé pour transmettre une sensation d’ancrage, de calme et de confiance.',
    objective: 'Créer une présence en ligne alignée avec l’univers apaisant de la marque.',
    problem:
      'La communication existante ne reflétait pas suffisamment la dimension humaine et sensible du projet.',
    solution:
      'Un design plus doux, une structure claire et une narration plus incarnée pour renforcer la connexion avec les visiteurs.',
    context:
      'Projet autour du bien-être nécessitant une présence en ligne plus cohérente et plus rassurante.',
    result:
      'Une identité digitale plus alignée avec l’univers du projet et une meilleure connexion avec le public.',
    beforeLabel: 'Avant : message peu incarné',
    afterLabel: 'Après : présence plus humaine',
    ctaLabel: 'Découvrir le projet',
    image: {
      src: '/images/portfolio/ancre-toi/ancre-toi-hero.webp',
      alt: 'Aperçu du projet Ancre-toi',
    },
    images: {
      desktop: [
        {
          src: '/images/portfolio/ancre-toi/ancre-toi-template-programmes.webp',
          alt: 'Page d’accueil desktop du projet Ancre-toi',
        },
        {
          src: '/images/portfolio/ancre-toi/ancre-toi-template-mon-espace.webp',
          alt: 'Sections desktop du projet Ancre-toi',
        },
      ],
      mobile: [
        {
          src: '/images/portfolio/ancre-toi/ancre-toi-template-mobile-admin-programmes.webp',
          alt: 'Version mobile du projet Ancre-toi',
        },
      ],
    },
    liveUrl: 'https://ancretoi.vercel.app/',
    order: 5,
  },
];

export const portfolioProjects = [...portfolioProjectsData].sort(
  (a, b) => (a.order ?? 99) - (b.order ?? 99),
);
