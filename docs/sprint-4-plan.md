# Sprint 4 — Plan d'exécution (Page d'accueil)

## Pré-requis

- Structure Sprint 1-3 stabilisée (layout global + design system + navigation).
- CTA principal unique : **Réserver un appel découverte**.
- Tokens et composants UI utilisés par défaut (`Section`, `Container`, `Heading`, `Card`, `Button`).

## Sections à construire (ordre recommandé)

1. **Hero**
   - proposition de valeur
   - sous-titre
   - CTA principal + CTA secondaire
2. **Problème**
   - douleurs client (crédibilité, visibilité, clarté)
3. **Solution**
   - réponse studio (design, clarté, performance)
4. **Services preview**
   - Landing page, Site vitrine, Refonte
5. **Portfolio preview**
   - 3 cas + lien vers portfolio
6. **Méthode**
   - échange → conception → développement → mise en ligne
7. **CTA final**
   - reprise de l'action principale

## Points à verrouiller avant implémentation

- Ton éditorial (humain, créatif, élégant, professionnel)
- Microcopy CTA cohérente sur toute la page
- Hiérarchie responsive des sections (mobile first)
- Convention d'accessibilité (titres, landmarks, labels)

## Mini plan technique

- `src/content/home/*` : contenu sectionnalisé (texte + listes)
- `src/components/marketing/*` : sections home réutilisables
- `src/app/(marketing)/page.tsx` : orchestration des sections
- `src/tests/*` : smoke tests structure/accessibilité de base
