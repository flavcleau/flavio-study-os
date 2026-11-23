# Study OS

Application web installable (PWA) de suivi scolaire : notes, agenda de la journée, devoirs, erreurs récurrentes et préparation de demandes pour un tuteur IA.

- Interface : `index.html` (HTML/CSS/JS sans framework), `manifest.webmanifest`, `sw.js` (hors ligne).
- Données : Supabase (table `docs`, protégée par une liste d'adresses autorisées et des règles RLS). Aucune donnée personnelle n'est stockée dans ce dépôt.
- `config.js` contient l'URL du projet et la clé *publishable* Supabase, publiques par conception.
