export interface Service {
  id: string;
  icon: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  tags: string[];
  size: 'large' | 'medium' | 'small';
  tone:
    | 'sky'
    | 'emerald'
    | 'rose'
    | 'amber'
    | 'teal'
    | 'slate'
    | 'cyan'
    | 'lime';
}

export const servicesData: Service[] = [
  {
    id: 'web-dev',
    icon: 'browser',
    title: { en: 'Website Development', fr: 'Développement Website' },
    description: {
      en: 'Conversion-focused websites and landing pages built to turn traffic into qualified leads and sales calls.',
      fr: 'Websites et landing pages orientés conversion pour transformer le trafic en prospects qualifiés et rendez-vous commerciaux.',
    },
    tags: ['Astro', 'Next.js', 'React', 'TypeScript'],
    size: 'large',
    tone: 'sky',
  },
  {
    id: 'app-dev',
    icon: 'device-mobile',
    title: { en: 'App Development', fr: 'Développement App' },
    description: {
      en: 'Full-stack web applications with clean architecture, secure auth, and maintainable code designed for long-term growth.',
      fr: 'Applications web full-stack avec architecture propre, auth sécurisée et code maintenable pour soutenir la croissance.',
    },
    tags: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    size: 'medium',
    tone: 'emerald',
  },
  {
    id: 'ui-design',
    icon: 'palette',
    title: { en: 'UI/UX Design', fr: 'Design UI/UX' },
    description: {
      en: 'UI systems and interfaces built for clarity, trust, and conversion from first visit to final action.',
      fr: 'Interfaces et systèmes UI pensés pour la clarté, la confiance et la conversion de la première visite à l\'action finale.',
    },
    tags: ['Figma', 'Design System', 'Tailwind'],
    size: 'small',
    tone: 'rose',
  },
  {
    id: 'ai-integration',
    icon: 'robot',
    title: { en: 'AI Integration', fr: 'Intégration IA' },
    description: {
      en: 'AI assistants, copilots, and automations connected to your product and internal tools for faster execution.',
      fr: 'Assistants IA, copilotes et automatisations connectés à votre produit et à vos outils internes pour accélérer l\'exécution.',
    },
    tags: ['OpenAI', 'Claude API', 'Agents', 'Automation'],
    size: 'medium',
    tone: 'amber',
  },
  {
    id: 'product-marketing',
    icon: 'megaphone',
    title: { en: 'Product Marketing', fr: 'Product Marketing' },
    description: {
      en: 'Positioning and messaging that clarify your offer and improve conversion across your website and funnel.',
      fr: 'Positionnement et messaging pour clarifier votre offre et améliorer la conversion sur votre website et votre funnel.',
    },
    tags: ['Positioning', 'GTM', 'Messaging'],
    size: 'small',
    tone: 'teal',
  },
  {
    id: 'product-management',
    icon: 'clipboard',
    title: { en: 'Product Management', fr: 'Product Management' },
    description: {
      en: 'Roadmaps and specs that align stakeholders, reduce ambiguity, and keep delivery predictable.',
      fr: 'Roadmaps et specs qui alignent les équipes, réduisent les zones floues et sécurisent la delivery.',
    },
    tags: ['Roadmap', 'Agile', 'Specs'],
    size: 'small',
    tone: 'slate',
  },
  {
    id: 'marketing',
    icon: 'chart',
    title: { en: 'Marketing', fr: 'Marketing' },
    description: {
      en: 'Acquisition-focused content and growth actions connected to measurable KPIs, not vanity metrics.',
      fr: 'Actions de croissance et contenus orientés acquisition, pilotés par des KPI mesurables.',
    },
    tags: ['Content', 'Email', 'Growth'],
    size: 'small',
    tone: 'cyan',
  },
  {
    id: 'seo',
    icon: 'search',
    title: { en: 'SEO + GEO', fr: 'SEO + GEO' },
    description: {
      en: 'Technical SEO, on-page structure, and AI-search optimization so your brand is visible in search and AI answers.',
      fr: 'SEO technique, structure on-page et optimisation pour la recherche IA afin d\'augmenter votre visibilité sur Google et dans les réponses IA.',
    },
    tags: ['Technical SEO', 'On-page', 'AI Search'],
    size: 'small',
    tone: 'lime',
  },
];
