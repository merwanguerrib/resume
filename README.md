# merwan-just-dev-it

Site vitrine bilingue (EN/FR) de Merwan, construit avec Astro + Tailwind et deploye sur Netlify.

- Production: [https://merwanguerrib.com](https://merwanguerrib.com)
- Repo: [https://github.com/merwanguerrib/merwan-just-dev-it](https://github.com/merwanguerrib/merwan-just-dev-it)

## Demarrage rapide

Prerquis:
- Node.js 20+ recommande
- npm

Installation et lancement local:

```bash
npm ci
npm run dev
```

Puis ouvrir `http://localhost:4321`.

## Scripts utiles

```bash
npm run dev            # serveur local Astro
npm run build          # build production vers dist/
npm run preview        # preview local du build
npm run schema:validate
```

Helper assets (hero scroll):

```bash
npm run rebuild:hero-frames -- <video-path> [fps] [desktop-width] [mobile-width] [desktop-jpeg-quality] [mobile-jpeg-quality]
```

## Structure du projet

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

## Ou modifier le contenu

- `src/data/site-strings.ts`: textes globaux (navigation, sections, labels, FR/EN)
- `src/data/service-pages-data.ts`: contenu des pages services (`/services/*` et `/fr/services/*`)
- `src/data/projects-data.ts`: projets/cas clients affiches sur la home
- `src/components/Home/*`: structure des sections de la page d'accueil

## Routes principales

- `/` (anglais)
- `/fr/` (francais)
- `/services/:slug`
- `/fr/services/:slug`
- `/sitemap.xml`, `/sitemap-en.xml`, `/sitemap-fr.xml`

## Deploiement (Netlify)

La config est geree dans `netlify.toml`:
- `base = "."`
- `command = "npm run build"`
- `publish = "dist"`

Une redirection linguistique est active:
- navigateur FR sur `/` -> redirection 302 vers `/fr/`

## Verification avant merge

```bash
npm run build
```

Si le build passe localement, le deploy preview Netlify doit passer egalement.
