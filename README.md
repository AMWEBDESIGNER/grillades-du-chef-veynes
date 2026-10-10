# Grillades du Chef — site vitrine complet

Site vitrine multipage indépendant pour **Grillades du Chef**, restaurant, snack, salon de thé et épicerie fine d’inspiration arménienne situé à Veynes.

- **Catégorie :** restaurant, snack, salon de thé et épicerie fine
- **Commune :** Veynes, Hautes-Alpes
- **État d’activité :** actif en saison, vérifié le 10 octobre 2026 sur deux fiches touristiques et un registre public

## Architecture

- accueil éditorial autour de la braise et des photographies de l’établissement ;
- pages Signature, La braise, L’expérience, Infos pratiques et Contact ;
- téléphone, itinéraire, FAQ, page 404, sitemap, robots et pages légales.

## Liens

- Site Cloudflare Pages : [grillades-du-chef-veynes.pages.dev](https://grillades-du-chef-veynes.pages.dev)
- Dépôt GitHub : [AMWEBDESIGNER/grillades-du-chef-veynes](https://github.com/AMWEBDESIGNER/grillades-du-chef-veynes)
- Téléphone public : 07 58 84 14 30

## Sources publiques

- [Fiche officielle Hautes-Alpes](https://www.hautes-alpes.net/fiche/grillades-du-chef/)
- [Fiche régionale Provence-Alpes-Côte d’Azur](https://provence-alpes-cotedazur.com/sejourner/restaurants/tous-les-restaurants/grillades-du-chef-veynes-fr-5064575/)
- [Registre public de l’entreprise](https://rubypayeur.com/societe/grillades-du-chef-939494399)

Les photos de l’établissement présentes dans `assets/` proviennent des fiches touristiques publiques Apidae. Elles restent attachées à leurs auteurs et à l’établissement ; leur exploitation commerciale définitive doit être autorisée. Cette réalisation est une proposition indépendante et n’est pas le site officiel.

## Personnalisation

Site statique en HTML, CSS et JavaScript, sans compilation. Les textes sont dans `index.html` et les pages thématiques, l’identité dans `styles.css`/`pages.css`, et les interactions dans `app.js`/`pages.js`.

## Éléments à confirmer par l’établissement

- carte complète, tarifs, allergènes et modalités de commande ;
- horaires saisonniers et jours fériés ;
- capacité, événements et prestations exactes ;
- crédits et autorisations définitives des photographies ;
- mentions légales, SIRET, courriel et responsable de publication.

## Motion design et provenance du code

Animations réalisées en CSS vanilla, avec respect de `prefers-reduced-motion`, et une révélation progressive inspirée du pattern public [Scroll animation: IntersectionObserver and CSS](https://codepen.io/oscar-jite/pen/qBzwOVq). La logique reste locale, légère et adaptée à l’identité de chaque établissement ; aucune dépendance payante ni contenu généré n’est requis.

## Informations pratiques livrées

`site-enhance.js` ajoute sur l’accueil un bloc dédié à l’adresse, aux horaires, aux services, au téléphone et à l’itinéraire, ainsi qu’un footer local complet. Les informations signalées « à confirmer » doivent être validées par l’établissement avant mise en production commerciale.
