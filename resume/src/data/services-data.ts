export interface Service {
  id: string;
  icon: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  tags: string[];
  size: 'large' | 'medium' | 'small';
}

export const servicesData: Service[] = [
  {
    id: 'web-dev',
    icon: 'browser',
    title: { en: 'Web Development', fr: 'Développement Web' },
    description: {
      en: 'Marketing sites, SaaS landing pages, and full-stack web apps built for speed, clarity, and conversion. From Figma to production in days, not months.',
      fr: 'Sites marketing, landing pages SaaS et apps web full-stack conçus pour la performance et la conversion. De Figma à la production en jours, pas en mois.',
    },
    tags: ['React', 'Next.js', 'Astro', 'TypeScript'],
    size: 'large',
  },
  {
    id: 'app-dev',
    icon: 'device-mobile',
    title: { en: 'App Development', fr: 'Développement App' },
    description: {
      en: 'Scalable web applications with solid architecture. APIs, databases, auth systems — all wired up and ready to grow.',
      fr: 'Applications web scalables avec une architecture solide. APIs, bases de données, systèmes d\'auth — tout est câblé pour grandir.',
    },
    tags: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    size: 'medium',
  },
  {
    id: 'ui-design',
    icon: 'palette',
    title: { en: 'UI/UX Design', fr: 'Design UI/UX' },
    description: {
      en: 'Design systems and interfaces that look premium and feel intuitive. Figma to pixel-perfect code.',
      fr: 'Systèmes de design et interfaces qui semblent premium et intuitifs. Figma to code pixel-perfect.',
    },
    tags: ['Figma', 'Design System', 'Tailwind'],
    size: 'small',
  },
  {
    id: 'ai-integration',
    icon: 'robot',
    title: { en: 'AI Integration', fr: 'Intégration IA' },
    description: {
      en: 'Chatbots, automation workflows, and AI-powered features embedded directly into your product. Fast to ship, built to last.',
      fr: 'Chatbots, workflows automatisés et fonctionnalités IA intégrées directement dans votre produit.',
    },
    tags: ['Claude API', 'OpenAI', 'n8n', 'Agents'],
    size: 'medium',
  },
  {
    id: 'product-marketing',
    icon: 'megaphone',
    title: { en: 'Product Marketing', fr: 'Product Marketing' },
    description: {
      en: 'Positioning, messaging, and go-to-market strategy that turns your product into a story people want to tell.',
      fr: 'Positionnement, messaging et stratégie go-to-market qui transforment votre produit en une histoire que les gens veulent raconter.',
    },
    tags: ['Positioning', 'GTM', 'Messaging'],
    size: 'small',
  },
  {
    id: 'product-management',
    icon: 'clipboard',
    title: { en: 'Product Management', fr: 'Product Management' },
    description: {
      en: 'Roadmaps, specs, and prioritization frameworks that keep teams aligned and shipping the right things.',
      fr: 'Roadmaps, specs et frameworks de priorisation qui gardent les équipes alignées et livrent les bonnes choses.',
    },
    tags: ['Roadmap', 'Agile', 'Specs'],
    size: 'small',
  },
  {
    id: 'marketing',
    icon: 'chart',
    title: { en: 'Marketing', fr: 'Marketing' },
    description: {
      en: 'Content, email campaigns, and growth strategies built around real user data — not guesses.',
      fr: 'Contenu, campagnes email et stratégies de croissance construits autour de vraies données utilisateurs.',
    },
    tags: ['Content', 'Email', 'Growth'],
    size: 'small',
  },
  {
    id: 'seo',
    icon: 'search',
    title: { en: 'SEO', fr: 'SEO' },
    description: {
      en: 'Technical audits, on-page optimization, and content strategy that compounds over time.',
      fr: 'Audits techniques, optimisation on-page et stratégie de contenu qui s\'amplifient dans le temps.',
    },
    tags: ['Technical SEO', 'On-page', 'Analytics'],
    size: 'small',
  },
];
