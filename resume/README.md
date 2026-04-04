# Resume (Astro)

## Scripts

### `npm run dev`
Starts the Astro dev server.

### `npm run build`
Builds the site into `dist/`.

### `npm run preview`
Previews the production build locally.

### `npm run rebuild:hero-frames -- <video-path> [fps] [desktop-width] [mobile-width] [desktop-jpeg-quality] [mobile-jpeg-quality]`
Rebuilds both frame sets:
- desktop: `public/assets/hero-scroll/frames-desktop` (2K by default)
- mobile fallback: `public/assets/hero-scroll/frames`

Example:

```bash
npm run rebuild:hero-frames -- ./assets/source/hero.mp4 24 2560 1280 3 4
```

Defaults:
- `fps`: `24`
- `desktop-width`: `2560`
- `mobile-width`: `1280`
- `desktop-jpeg-quality`: `3`
- `mobile-jpeg-quality`: `4`

## Tech

- Astro
- Tailwind CSS
