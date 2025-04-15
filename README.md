# Off-Canvas, accessible, responsive et shrodinger

## Phase 1 : Mise en place initiale (45 min)

### 1. Configuration HTML initiale (15 min)
- Telecharger le fichier zip et initialiser ton repo
- Ajouter HTML du menu latéral et le css de style et layout interne (carte blanche)
- Pour le positionnement, place le en fixe, avec un top et left à 0).
- **Commit :** `feat: ajout structure HTML et CSS initiale du menu off-canvas`

### 2. JavaScript de gestion d'affichage (15 min)
- JavaScript basculant la classe `.active` pour afficher/masquer le menu.
- Classe `.active` modifiant la propriété CSS `display`.
- **Commit :** `feat: bascule visibilité menu off-canvas avec JS`

### 3. Effets visuels CSS (15 min)
- Ajouter transitions CSS douces (opacité? flou? experimente, mais que ca reste discret).
- **Commit :** `style: ajout transitions CSS pour apparition progressive menu`

---

## Phase 2 : Effet coulissant (30 min)

### 1. Animation coulissante (20 min)
- CSS avec `transform: translateX()`.
- **Commit :** `feat: implémentation animation glissante du menu off-canvas`

### 2. Adaptation flexible du contenu (10 min)
- Largeur minimale (ex. : 13rem) et naturelle pour un design aéré.
- **Commit :** `style: ajustement largeur flexible et minimale du menu`

---

## Phase 3 : Accessibilité (30 min)

### 1. Conformité WCAG 2.1 AA (20 min)
- Navigation clavier (`tab`, focus visible).
- Attributs ARIA (`aria-label`, `aria-expanded`, `aria-controls`).
- Contraste couleur suffisant.
- Fermeture du menu via `ESC`.
- **Commit :** `a11y: implémentation attributs ARIA et navigation clavier`

### 2. Simplification ARIA (10 min)
- Remplacer la classe `.active` par `aria-expanded`.
- **Commit :** `refactor: suppression classe .active au profit d’aria-expanded`

---

## Phase 4 : Réactivité (15 min)
- CSS responsive via media queries (largeur pleine sous 480px).
- Test multi-support (mobile, tablette, desktop).
- **Commit :** `style: optimisation responsive du menu off-canvas`

---

## Phase 5 : Interaction avancée (30 min)
- Suppression du bouton d'ouverture.
- Affichage automatique selon proximité du curseur à gauche.
- Délais/distance d'ouverture pour éviter l'ouverture accidentelle.
- **Commit :** `feat: ouverture automatique du menu sur proximité du curseur`

---
