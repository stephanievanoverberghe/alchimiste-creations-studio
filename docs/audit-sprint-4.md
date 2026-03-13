# Audit style

## Points forts

- Direction visuelle cohérente avec le positionnement premium (fond sombre, glow violet/cyan, surfaces glassmorphism).
- Le design system de base (tokens + primitives UI) est bien posé et réutilisé (`Button`, `Card`, `Section`, `Heading`, `Container`).
- Les sections clés de la home sont présentes et alignées avec la logique de conversion du product spec.

## Incohérences

- Quelques variations de styles “hardcodées” dans les sections marketing (gradients, bordures, ombres, radius) qui ne passent pas toujours par les tokens.
- L’intensité des ornements (blur / glow / gradients) varie fortement selon les sections, ce qui peut donner une perception légèrement hétérogène.
- Les pages principales (services/portfolio avant correction) étaient visuellement en retrait vs home (écart de niveau perçu).

## Répétitions

- Motifs visuels proches répétés avec des classes Tailwind longues dans plusieurs sections marketing.
- Contenus services/portfolio dupliqués indirectement entre logique “preview home” et futur besoin des pages dédiées.

## Recommandations

- Continuer à pousser progressivement les patterns visuels fréquents vers des conventions partagées (sans sur-abstraction).
- Garder l’identité actuelle, mais réduire les variations inutiles (shadows/radius/overlay) pour améliorer la cohérence inter-sections.
- Centraliser les contenus métiers services/portfolio pour éviter la divergence entre home et pages dédiées.

# Audit architecture

## Points forts

- Séparation globale saine (`app`, `components`, `content`, `domain`, `application`, `styles`, `tests`) et conforme au spec.
- Couche application simple et lisible (use cases de lecture de contenu).
- UI primitives réutilisables, ce qui limite la duplication bas niveau.

## Faiblesses

- Le domaine “home” mélange des données qui appartiennent aussi aux futures pages “services” et “portfolio”.
- Certaines pages marketing étaient encore placeholders, créant un décalage de maturité produit.
- La cohérence de nommage orientée “preview” peut devenir limitante si tout le contenu métier reste sous `content/home`.

## Dossiers / fichiers à améliorer

- Mieux isoler les contenus transverses marketing (catalogue services et projets portfolio) hors `content/home`.
- Garder `content/home` pour la composition home, pas pour la source unique de vérité de tous les textes métiers.

## Recommandations

- Introduire une source de vérité unique pour services/portfolio.
- Mapper cette source vers home preview et pages dédiées.
- Maintenir une granularité simple (peu de fichiers, mais bien nommés).

# Audit sprint 4

## Terminé

- Home structurée avec Hero, problème, proposition de valeur (solution), services preview, portfolio preview, méthode, CTA final.
- Ajout de sections de confiance supplémentaires (social proof, FAQ) qui renforcent la conversion.
- Responsive et base de qualité cohérente (tests unitaires structurels en place).

## Partiellement terminé

- Uniformisation fine de certains patterns visuels entre sections (différences encore perceptibles sur certaines surfaces).

## À corriger

- Continuer la rationalisation des styles section-level pour éviter les dérives visuelles à mesure des prochains sprints.

## Verdict sprint 4

- **Validé**, avec réserve de polishing visuel continu (non bloquant pour l’avancement).

## Passage sprint 5 : oui / non + justification

- **Oui.** Les objectifs fonctionnels sprint 4 sont couverts; la priorité logique est d’industrialiser les pages principales tout en gardant la cohérence premium.

# Audit contenu services / portfolio

## État actuel

- Le contenu home preview existe et est riche.
- Les pages services/portfolio utilisaient auparavant un contenu minimal non relié à une source métier commune.

## Problèmes

- Risque de duplication de textes entre preview home et pages dédiées.
- Risque de divergence future si les offres/projets évoluent.

## Structure proposée

- `src/domain/marketing/showcase.ts` : types métier services + portfolio.
- `src/content/marketing/showcase.ts` : source de vérité contenus services + portfolio.
- `src/content/home/*-preview.ts` : simple mapping vers le format attendu par les composants home.

## Changements appliqués

- Centralisation des contenus services/portfolio dans un module unique.
- Mapping preview conservé pour ne pas casser la home.
- Pages `/services` et `/portfolio` branchées sur la même source de vérité.

# Refactors appliqués

- Création d’un modèle métier commun services/portfolio.
  - Pourquoi : éviter dispersion et duplication.
  - Bénéfice : meilleure maintenabilité, cohérence cross-pages.

- Centralisation des contenus dans `content/marketing/showcase.ts`.
  - Pourquoi : un seul endroit pour éditer les offres/projets.
  - Bénéfice : évolution plus simple et moins risquée.

- Refonte utile des pages Services et Portfolio (plus placeholders).
  - Pourquoi : aligner le niveau perçu des pages principales avec la home.
  - Bénéfice : crédibilité produit accrue avant sprint 5.

# Niveau réel du site

- **Avis honnête :** base très solide, direction premium crédible, mais encore inégale hors home sans correction (désormais améliorée).
- **Niveau estimé :** bon niveau freelance premium en progression, avec une architecture saine.
- **Crédibilité commerciale :** bonne, surtout après renforcement des pages services/portfolio.
- **Verdict final :** projet professionnel, maintenable, cohérent avec le spec; sprint 4 validé et sprint 5 possible immédiatement.
