# Responsive QA multi-devices — US-025

Date : 19 mars 2026  
Scope : pages marketing MVP (`/`, `/services`, `/portfolio`, `/a-propos`, `/contact`)

## 1) Objectif

Valider que le rendu est fluide et lisible sur mobile, tablette et desktop, conformément à US-025.

## 2) Matrice de vérification

| Catégorie         | Résolution cible | Statut                  |
| ----------------- | ---------------: | ----------------------- |
| Mobile petit      |        360 × 800 | À vérifier visuellement |
| Mobile standard   |        390 × 844 | À vérifier visuellement |
| Mobile large      |        430 × 932 | À vérifier visuellement |
| Tablette portrait |       768 × 1024 | À vérifier visuellement |
| Tablette paysage  |       1024 × 768 | À vérifier visuellement |
| Laptop            |       1366 × 768 | À vérifier visuellement |
| Desktop           |       1440 × 900 | À vérifier visuellement |
| Desktop large     |      1920 × 1080 | À vérifier visuellement |

## 3) Checklist QA

### Global

- [ ] Pas de débordement horizontal
- [ ] Header/navigation lisibles et utilisables
- [ ] Footer non cassé et liens accessibles
- [ ] CTA principaux visibles sans friction

### Contenu

- [ ] Typographie lisible (taille + interlignage)
- [ ] Grilles/sections passent correctement en stack sur mobile
- [ ] Images et mockups gardent un ratio cohérent
- [ ] Espacements verticaux homogènes

### Interaction

- [ ] États focus visibles clavier
- [ ] Menus mobile/tablette fonctionnels
- [ ] Formulaire contact utilisable sur mobile
- [ ] Boutons sans chevauchement ni zone cliquable réduite

### Performance perceptive

- [ ] Pas de jank visible au scroll
- [ ] Transitions non bloquantes sur mobile

## 4) Pré-QA technique déjà couverte

- Responsive classes présentes sur les composants marketing majeurs.
- Smoke tests unitaires actifs et passants (`npm test`).
- Lighthouse communiqué : score Performance 100 et Accessibilité 100.

## 5) Action suivante recommandée

Exécuter cette checklist sur les résolutions de la matrice (Device Mode + 1–2 appareils réels), puis consigner les écarts page par page dans ce document.
