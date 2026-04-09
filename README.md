# Merwan Just Dev It - Website

Astro 5 + Tailwind website deployed on Netlify.

## Structure

The app is now at repository root (flattened structure):

```text
.
├── src/
├── public/
├── scripts/
├── docs/
├── dist/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── netlify.toml
```

## Commands

Run from repository root:

```bash
npm run dev
npm run build
npm run preview
```

Optional helper:

```bash
npm run rebuild:hero-frames -- <video-path> [fps] [desktop-width] [mobile-width] [desktop-jpeg-quality] [mobile-jpeg-quality]
```

## Deployment

- Netlify build base: repository root (`.`)
- Build command: `npm run build`
- Publish directory: `dist`
