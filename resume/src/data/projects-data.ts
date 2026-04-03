export interface Project {
  id: string;
  client: string;
  logo?: string;
  category: { en: string; fr: string };
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  result: { en: string; fr: string };
  metric: string;
  metricLabel: { en: string; fr: string };
  stack: string[];
  year: number;
}

export const projectsData: Project[] = [
  {
    id: 'payfit',
    client: 'PayFit',
    logo: 'https://res.cloudinary.com/mrwn211/image/upload/v1712069470/resume/payfit_logo.jpg',
    category: { en: 'Marketing Site', fr: 'Site Marketing' },
    title: {
      en: 'Full marketing platform rebuild',
      fr: 'Refonte complète de la plateforme marketing',
    },
    description: {
      en: 'Rebuilt the entire marketing site on Gatsby with a headless CMS, serverless Lambda functions, and HubSpot integrations — delivering a measurably faster and more maintainable platform.',
      fr: 'Refonte complète du site marketing sur Gatsby avec CMS headless, fonctions Lambda serverless et intégrations HubSpot.',
    },
    result: {
      en: 'Core Web Vitals improved across all metrics, reducing bounce rate significantly.',
      fr: 'Core Web Vitals améliorés sur tous les indicateurs, réduisant significativement le taux de rebond.',
    },
    metric: '+47%',
    metricLabel: { en: 'Performance score', fr: 'Score de performance' },
    stack: ['Gatsby', 'React', 'AWS Lambda', 'HubSpot', 'TypeScript'],
    year: 2023,
  },
  {
    id: 'klappo',
    client: 'Klappo',
    category: { en: 'SaaS App', fr: 'App SaaS' },
    title: {
      en: 'SaaS platform from 0 to production',
      fr: 'Plateforme SaaS de 0 à la production',
    },
    description: {
      en: 'Designed and built a full-stack B2B SaaS platform — from auth system to billing, dashboard, and onboarding flow — in 6 weeks. Solo build, production-grade.',
      fr: 'Conception et développement d\'une plateforme SaaS B2B complète — de l\'auth au billing, dashboard et onboarding — en 6 semaines.',
    },
    result: {
      en: 'Launched on schedule, onboarded first 3 enterprise clients within the first month.',
      fr: 'Lancé dans les délais, 3 clients enterprise onboardés dans le premier mois.',
    },
    metric: '6 weeks',
    metricLabel: { en: '0 → production', fr: '0 → production' },
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    year: 2024,
  },
  {
    id: 'assistant-profs',
    client: 'Projet personnel',
    category: { en: 'Educational SaaS', fr: 'SaaS éducationnel' },
    title: {
      en: 'Teacher\'s assistant — AI-powered lesson prep',
      fr: 'Assistant des profs — préparation de cours assistée par IA',
    },
    description: {
      en: 'An educational SaaS designed to drastically cut the time teachers spend preparing lessons. AI generates structured course plans, exercises, and assessments from simple prompts.',
      fr: 'Un SaaS éducationnel conçu pour réduire drastiquement le temps que les profs passent à préparer leurs cours. L\'IA génère des plans de cours structurés, des exercices et des évaluations à partir de simples prompts.',
    },
    result: {
      en: 'Early testers report saving 3–5 hours per week on lesson preparation.',
      fr: 'Les premiers testeurs rapportent économiser 3 à 5 heures par semaine sur la préparation de cours.',
    },
    metric: '−4h',
    metricLabel: { en: 'Per week, per teacher', fr: 'Par semaine, par prof' },
    stack: ['Next.js', 'Claude API', 'PostgreSQL', 'Stripe', 'Tailwind'],
    year: 2025,
  },
  {
    id: 'stryve',
    client: 'Stryve',
    category: { en: 'Landing + Funnel', fr: 'Landing + Funnel' },
    title: {
      en: 'Lead generation redesign',
      fr: 'Refonte de la génération de leads',
    },
    description: {
      en: 'Redesigned the marketing site and lead funnel for a B2B HR startup. New messaging architecture, improved CTA hierarchy, and A/B tested conversion flows.',
      fr: 'Refonte du site marketing et du funnel de leads pour une startup RH B2B. Nouvelle architecture de messaging et flows de conversion A/B testés.',
    },
    result: {
      en: 'MQL volume grew substantially quarter-over-quarter after launch.',
      fr: 'Volume de MQL en forte croissance trimestre après trimestre depuis le lancement.',
    },
    metric: '+31%',
    metricLabel: { en: 'MQL conversions', fr: 'Conversions MQL' },
    stack: ['Astro', 'Tailwind', 'TypeScript', 'Netlify'],
    year: 2024,
  },
];
