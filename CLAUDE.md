# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Merwan Guerrib's freelance portfolio/business site. Bilingual (EN/FR), SEO-focused, deployed on Netlify.

## Commands

Specific commands run from the repo root:

```bash

npm run schema:validate   # validate JSON-LD schema via scripts/validate-schema.mjs
npm run rebuild:hero-frames  # regenerate hero animation frames via scripts/rebuild-hero-frames.sh
```

## Architecture

### i18n Pattern

All user-facing strings live in [src/data/site-strings.ts](src/data/site-strings.ts). The `t(lang)` function accepts `'en' | 'fr'` and returns a typed object with every string for that locale. Pages call `t('en')` or `t('fr')` and pass strings down as props — no runtime i18n library.

English pages live at `src/pages/` (index.astro, services/[slug].astro, 404.astro).  
French mirrors live at `src/pages/fr/`. Netlify auto-redirects French-browser requests at `/` → `/fr/`.

### Routing

- `/` — English home (`src/pages/index.astro`)
- `/fr/` — French home (`src/pages/fr/index.astro`)
- `/services/[slug]` — dynamic service pages (`src/pages/services/[slug].astro`)
- `/fr/services/[slug]` — French service pages

Service slugs and all service page content are defined in [src/data/service-pages-data.ts](src/data/service-pages-data.ts). The `ServiceSlug` union type there drives `getStaticPaths`.

### Data Files

- [src/data/site-strings.ts](src/data/site-strings.ts) — all localized UI copy; edit here first for any text change
- [src/data/service-pages-data.ts](src/data/service-pages-data.ts) — service page definitions (slug, meta, sections, FAQ)
- [src/data/projects-data.ts](src/data/projects-data.ts) — portfolio work items

### Component Hierarchy

```
BaseLayout (src/layouts/BaseLayout.astro)
  └── page (e.g. index.astro)
        ├── Nav (Layout/Nav.astro)
        ├── [Home section components] (Home/*.astro)
        │     Hero, SeoIntro, ScrollShowcase, Services, LeadMagnet,
        │     Work, Process, Faq, About, Contact
        ├── Service pages: ServicePageContent (Service/ServicePageContent.astro)
        └── Footer (Layout/Footer.astro)
```

`BaseLayout` handles `<head>`, JSON-LD schema, and global styles. It accepts `schemaPageType` and `breadcrumbTrail` props for structured data.

### Sitemaps

Three sitemap endpoints: `sitemap.xml` (index), `sitemap-en.xml`, `sitemap-fr.xml`. The helper in [src/lib/sitemap.ts](src/lib/sitemap.ts) resolves all static paths dynamically, including service slugs.

### Tailwind Design Tokens

Custom tokens in [tailwind.config.mjs](tailwind.config.mjs):

- **Colors**: `canvas`, `surface`, `elevated`, `dark`, `ink`, `muted`
- **Fonts**: `font-display` (Plus Jakarta Sans), `font-sans` (DM Sans), `font-mono` (Geist Mono)
- **Spacing**: `section` (7rem) for consistent vertical rhythm
- **Font sizes**: `display-xl/lg/md` — fluid with `clamp()`

### Path Alias

`@/*` resolves to `src/*` (configured in [tsconfig.json](tsconfig.json)).

## Deployment

Push to `main` → Netlify auto-builds. No manual deploy step needed. Build config in [netlify.toml](netlify.toml) (base: `.`, publish: `dist`).
