# Resume Project

An Astro-based personal resume/CV website with Tailwind CSS, deployed to Netlify.

## Project Structure

```
resume/           ← monorepo root
├── netlify.toml  ← Netlify config (base: resume/, publish: dist/)
└── resume/       ← Astro app
    ├── src/
    │   ├── components/
    │   │   ├── Layout/     ← layout shell components
    │   │   └── Resume/     ← resume section components (Bio, Skills, WorkExperiences, etc.)
    │   ├── data/           ← CV content as TypeScript files (bio-data.ts, skills-data.ts, etc.)
    │   ├── interfaces.ts   ← shared TypeScript interfaces
    │   ├── layouts/        ← Astro layout wrappers
    │   ├── pages/          ← Astro pages (index.astro, 404.astro)
    │   └── styles/         ← global CSS
    ├── astro.config.mjs
    ├── tailwind.config.mjs
    └── package.json
```

## Commands

All commands must be run from `resume/` (the Astro app directory):

```bash
cd resume
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Tech Stack

- **Astro 5** — static site generator
- **Tailwind CSS 3** via `@astrojs/tailwind`
- **TypeScript**
- **simple-icons** — icon library
- **Netlify** — deployment

## Content Editing

All CV content lives in `resume/src/data/`. Each section has its own file:

- `bio-data.ts` — name, title, summary
- `work-experience-data.ts` — job history
- `education-data.ts` — degrees
- `skills-data.ts` — technical skills
- `languages-data.ts` — language proficiencies
- `contact-info-data.ts` — contact details
- `personal-interests-data.ts` — hobbies/interests
- `references-data.ts` — references

## Deployment

Pushing to `main` triggers a Netlify build automatically.
