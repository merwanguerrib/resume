# 🚀 merwan-just-dev-it

> Site vitrine bilingue (EN/FR) de Merwan, construit avec Astro + Tailwind et deploye sur Netlify.

[![Netlify Status](https://api.netlify.com/api/v1/badges/275215a4-fe38-421d-9760-ae1331e2f095/deploy-status)](https://app.netlify.com/projects/merwanguerrib/deploys)
![Astro](https://img.shields.io/badge/Astro-5-FF5D01?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-20+-339933?logo=nodedotjs&logoColor=white)
![Bilingual](https://img.shields.io/badge/Lang-EN%20%7C%20FR-6D28D9)

## 🌐 Liens utiles

- Production: [merwanguerrib.com](https://merwanguerrib.com)
- Repository: [github.com/merwanguerrib/merwan-just-dev-it](https://github.com/merwanguerrib/merwan-just-dev-it)

## ⚡ Demarrage rapide

Pre-requis:
- Node.js 20+
- npm

Installation + lancement local:

```bash
npm ci
npm run dev
```

Ouvre ensuite [http://localhost:4321](http://localhost:4321).

## 🧰 Scripts

```bash
npm run dev            # serveur local Astro
npm run build          # build production vers dist/
npm run preview        # preview local du build
npm run schema:validate
```

Generation des frames hero (optionnel):

```bash
npm run rebuild:hero-frames -- <video-path> [fps] [desktop-width] [mobile-width] [desktop-jpeg-quality] [mobile-jpeg-quality]
```

## 🗂 Structure du projet

```text
.
├── src/
│   ├── components/        # sections Home, Layout, Service
│   ├── data/              # contenus et textes du site
│   ├── layouts/
│   ├── lib/
│   ├── pages/             # routes Astro (EN/FR + sitemaps)
│   └── styles/
├── public/                # assets statiques
├── scripts/               # scripts utilitaires
├── docs/                  # notes projet
├── netlify.toml
└── package.json
```

## ✍️ Modifier le contenu

- `src/data/site-strings.ts`: navigation, labels et textes globaux FR/EN
- `src/data/service-pages-data.ts`: pages services (`/services/*` et `/fr/services/*`)
- `src/data/projects-data.ts`: projets/cas clients de la home
- `src/components/Home/*`: structure et presentation des sections d'accueil

## 🛣 Routes principales

- `/` (anglais)
- `/fr/` (francais)
- `/services/:slug`
- `/fr/services/:slug`
- `/sitemap.xml`, `/sitemap-en.xml`, `/sitemap-fr.xml`

## ☁️ Deploiement Netlify

La config est versionnee dans `netlify.toml`:
- `base = "."`
- `command = "npm run build"`
- `publish = "dist"`

Redirection linguistique active:
- navigateur FR sur `/` -> redirection `302` vers `/fr/`

## ✅ Verification avant merge

```bash
npm run build
```

Si le build passe localement, le deploy preview Netlify doit normalement passer aussi.
