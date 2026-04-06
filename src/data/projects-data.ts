export interface Project {
  id: string;
  client: string;
  logo?: string;
  category: { en: string; fr: string };
  period?: { en: string; fr: string };
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  result: { en: string; fr: string };
  achievements: { en: string[]; fr: string[] };
  metric: string;
  metricLabel: { en: string; fr: string };
  stack: string[];
  year: number;
  image: string;
  imageAlt: { en: string; fr: string };
}

export const projectsData: Project[] = [
  {
    id: 'payfit',
    client: 'PayFit',
    logo: 'https://res.cloudinary.com/mrwn211/image/upload/v1712069470/resume/payfit_logo.jpg',
    category: { en: 'Marketing Platform', fr: 'Plateforme marketing' },
    period: { en: '2022 — 2025', fr: '2022 — 2025' },
    title: {
      en: 'Marketing platform rebuild with scalable delivery',
      fr: 'Refonte de la plateforme marketing avec delivery scalable',
    },
    description: {
      en: 'Built and shipped marketing platform features on Gatsby and React, with HubSpot modules and AWS Lambda services used by marketing and engineering teams.',
      fr: 'Développement et livraison de fonctionnalités sur Gatsby et React, avec modules HubSpot et services AWS Lambda utilisés par les équipes marketing et engineering.',
    },
    result: {
      en: 'A more reliable platform for campaigns, with faster handoffs between business and engineering.',
      fr: 'Une plateforme plus fiable pour les campagnes, avec des passages de relais plus fluides entre business et engineering.',
    },
    achievements: {
      en: [
        'Shipped production features on the corporate website in TypeScript',
        'Delivered backend services with AWS Lambda for marketing operations',
        'Built HubSpot modules and internal automations (Zapier, Slack workflows)',
      ],
      fr: [
        'Livraison de fonctionnalités en production sur le site corporate en TypeScript',
        'Mise en place de services backend AWS Lambda pour les opérations marketing',
        'Création de modules HubSpot et d\'automatisations internes (Zapier, Slack)',
      ],
    },
    metric: '3 years',
    metricLabel: { en: 'continuous delivery', fr: 'de delivery continu' },
    stack: ['Gatsby', 'React', 'TypeScript', 'AWS Lambda', 'HubSpot'],
    year: 2023,
    image: 'https://picsum.photos/seed/payfit-client-case/1200/780',
    imageAlt: {
      en: 'Modern marketing website interface shown on desktop screen',
      fr: 'Interface de site marketing moderne affichée sur écran desktop',
    },
  },
  {
    id: 'fulll',
    client: 'Fulll',
    logo: 'https://picsum.photos/seed/fulll-brand/120/120',
    category: { en: 'B2B SaaS Product', fr: 'Produit SaaS B2B' },
    period: { en: '2025 — Today', fr: '2025 — Aujourd\'hui' },
    title: {
      en: 'Product features and maintainable front-end architecture',
      fr: 'Features produit et architecture front maintenable',
    },
    description: {
      en: 'Built product features in a React and TypeScript stack with Redux state architecture and Material UI standards in a Scrum environment.',
      fr: 'Développement de features produit sur une stack React et TypeScript, avec architecture Redux et standards Material UI dans un cadre Scrum.',
    },
    result: {
      en: 'A clearer product surface and a codebase that supports faster iteration sprint after sprint.',
      fr: 'Un produit plus lisible et une base de code qui accélère l\'itération sprint après sprint.',
    },
    achievements: {
      en: [
        'Delivered complex B2B workflows with reusable UI components',
        'Structured Redux flows for multi-step product journeys',
        'Used code reviews and GitHub Projects to keep delivery quality high',
      ],
      fr: [
        'Livraison de parcours B2B complexes avec composants UI réutilisables',
        'Structuration des flux Redux sur des parcours produit multi-étapes',
        'Code reviews et pilotage GitHub Projects pour maintenir la qualité de delivery',
      ],
    },
    metric: '2-week',
    metricLabel: { en: 'sprint cadence', fr: 'cadence sprint' },
    stack: ['React', 'TypeScript', 'Redux', 'Material UI', 'GitHub Projects'],
    year: 2025,
    image: 'https://picsum.photos/seed/fulll-dashboard-case/1200/780',
    imageAlt: {
      en: 'B2B SaaS dashboard with metrics and modular interface blocks',
      fr: 'Dashboard SaaS B2B avec métriques et blocs d\'interface modulaires',
    },
  },
  {
    id: 'assistant-des-profs',
    client: "L'assistant des Profs",
    logo: 'https://picsum.photos/seed/assistant-des-profs-brand/120/120',
    category: { en: 'AI Product', fr: 'Produit IA' },
    period: { en: '2025 — Today', fr: '2025 — Aujourd\'hui' },
    title: {
      en: 'Agentic workflow for teacher-ready lesson generation',
      fr: 'Workflow agentique pour générer des cours prêts à l\'emploi',
    },
    description: {
      en: 'Designed and built an end-to-end workflow that transforms educational programs into structured lesson plans using OpenAI, NotebookLM, Notion, and automation.',
      fr: 'Conception et développement d\'un workflow end-to-end qui transforme les programmes scolaires en séquences structurées avec OpenAI, NotebookLM, Notion et automatisation.',
    },
    result: {
      en: 'A concrete AI service with published pedagogical assets and an active SaaS roadmap.',
      fr: 'Un service IA concret avec livrables pédagogiques publiés et une roadmap SaaS active.',
    },
    achievements: {
      en: [
        'Built the full generation pipeline from source material to publish-ready content',
        'Published pedagogical hub, program mindmap, and public waitlist',
        'Structured product roadmap with BMAD (epics, stories, acceptance criteria)',
      ],
      fr: [
        'Création du pipeline complet de génération, de la source au contenu publiable',
        'Publication du hub pédagogique, de la mindmap programme et de la waitlist',
        'Structuration de la roadmap produit avec BMAD (epics, stories, critères)',
      ],
    },
    metric: '1 pipeline',
    metricLabel: { en: 'source to lesson', fr: 'source vers cours' },
    stack: ['OpenAI', 'NotebookLM', 'Notion', 'BMAD', 'Next.js'],
    year: 2025,
    image: 'https://picsum.photos/seed/assistant-des-profs-case/1200/780',
    imageAlt: {
      en: 'AI workflow dashboard connected to educational content systems',
      fr: 'Tableau de bord d\'un workflow IA connecté à des systèmes de contenus pédagogiques',
    },
  },
  {
    id: 'galileo',
    client: 'Galileo Global Education',
    logo: 'https://res.cloudinary.com/mrwn211/image/upload/v1712069469/resume/galileo_global_education_logo.jpg',
    category: { en: 'Digital Product Leadership', fr: 'Pilotage produit digital' },
    period: { en: '2018 — 2019', fr: '2018 — 2019' },
    title: {
      en: 'Backlog ownership, website redesign, and SEO execution',
      fr: 'Pilotage backlog, refonte web et exécution SEO',
    },
    description: {
      en: 'Led delivery between business and technical teams, wrote product requirements, tracked release quality, and coordinated roadmap priorities.',
      fr: 'Pilotage de la delivery entre équipes business et techniques, rédaction des besoins produit, suivi qualité des releases et coordination des priorités roadmap.',
    },
    result: {
      en: 'More predictable releases and tighter alignment between decision-makers, content teams, and delivery.',
      fr: 'Des releases plus prévisibles et un meilleur alignement entre décisionnaires, équipes contenu et delivery.',
    },
    achievements: {
      en: [
        'Prioritized digital backlog and release scope with stakeholders',
        'Wrote user requirements and acceptance criteria for technical teams',
        'Managed a team of 3 apprentices on content and performance topics',
      ],
      fr: [
        'Priorisation du backlog digital et du scope de release avec les parties prenantes',
        'Rédaction des besoins utilisateurs et critères d\'acceptation pour les équipes techniques',
        'Management d\'une équipe de 3 apprentis sur les sujets contenu et performance',
      ],
    },
    metric: '3 people',
    metricLabel: { en: 'team led', fr: 'équipe pilotée' },
    stack: ['Product Ownership', 'SEO', 'QA', 'Agile', 'Stakeholder Management'],
    year: 2019,
    image: 'https://picsum.photos/seed/galileo-case-study/1200/780',
    imageAlt: {
      en: 'Project team workshop around roadmap and delivery planning board',
      fr: 'Atelier d\'équipe projet autour d\'un planning de roadmap et delivery',
    },
  },
  {
    id: 'capgemini',
    client: 'Capgemini',
    logo: 'https://res.cloudinary.com/mrwn211/image/upload/v1712069468/resume/capgemini_logo.jpg',
    category: { en: 'Enterprise Delivery', fr: 'Delivery enterprise' },
    period: { en: '2019 — 2022', fr: '2019 — 2022' },
    title: {
      en: 'Multi-client React and Node delivery in Agile squads',
      fr: 'Delivery multi-clients en React et Node dans des squads Agile',
    },
    description: {
      en: 'Delivered interfaces, proofs of concept, and full-stack features for multiple enterprise clients, with sprint planning and iterative releases.',
      fr: 'Livraison d\'interfaces, de proof of concepts et de fonctionnalités full-stack pour plusieurs clients enterprise, avec planification sprint et releases itératives.',
    },
    result: {
      en: 'Faster feature rollout and improved collaboration between technical and business teams across projects.',
      fr: 'Accélération de la livraison de fonctionnalités et meilleure collaboration entre équipes techniques et métiers sur plusieurs projets.',
    },
    achievements: {
      en: [
        'Built React components and Node services across diverse product contexts',
        'Contributed to architecture decisions and production-grade POCs',
        'Worked in Scrum cycles with continuous feedback and delivery tracking',
      ],
      fr: [
        'Développement de composants React et de services Node sur des contextes produits variés',
        'Contribution aux choix d\'architecture et à des POC prêts à industrialiser',
        'Travail en cycles Scrum avec feedback continu et suivi de delivery',
      ],
    },
    metric: '3 years',
    metricLabel: { en: 'enterprise projects', fr: 'projets enterprise' },
    stack: ['React', 'Node.js', 'TypeScript', 'Agile', 'Scrum'],
    year: 2022,
    image: 'https://picsum.photos/seed/capgemini-enterprise-project/1200/780',
    imageAlt: {
      en: 'Enterprise product team collaborating on digital delivery',
      fr: 'Équipe produit enterprise en collaboration sur la delivery digitale',
    },
  },
  {
    id: 'eskimoz',
    client: 'Eskimoz',
    logo: 'https://picsum.photos/seed/eskimoz-brand/120/120',
    category: { en: 'SEO Consulting', fr: 'Conseil SEO' },
    period: { en: '2017 — 2018', fr: '2017 — 2018' },
    title: {
      en: 'Technical SEO audits and performance reporting',
      fr: 'Audits SEO techniques et reporting de performance',
    },
    description: {
      en: 'Led SEO audits (technical, semantic, off-page) and client-facing recommendations with clear action plans and measurable priorities.',
      fr: 'Pilotage d\'audits SEO (technique, sémantique, off-page) et recommandations client avec plans d\'action clairs et priorités mesurables.',
    },
    result: {
      en: 'Clients gained stronger visibility on blocking issues and a clearer roadmap for organic growth.',
      fr: 'Les clients ont gagné en visibilité sur les blocages et en clarté sur la roadmap de croissance organique.',
    },
    achievements: {
      en: [
        'Delivered complete SEO diagnostics with prioritized fixes',
        'Presented performance reports and strategic recommendations to clients',
        'Tracked implementation impact through recurring analysis cycles',
      ],
      fr: [
        'Livraison de diagnostics SEO complets avec priorisation des correctifs',
        'Présentation de reportings de performance et recommandations stratégiques aux clients',
        'Suivi de l\'impact des actions via des cycles d\'analyse récurrents',
      ],
    },
    metric: '10+',
    metricLabel: { en: 'accounts followed', fr: 'comptes suivis' },
    stack: ['Technical SEO', 'Content Strategy', 'Analytics', 'Reporting'],
    year: 2018,
    image: 'https://picsum.photos/seed/eskimoz-seo-audit/1200/780',
    imageAlt: {
      en: 'SEO audit dashboard with analytics charts and recommendations',
      fr: 'Dashboard d\'audit SEO avec graphiques analytics et recommandations',
    },
  },
  {
    id: 'webnotoriete',
    client: 'Webnotoriété',
    logo: 'https://picsum.photos/seed/webnotoriete-brand/120/120',
    category: { en: 'Web Marketing PM', fr: 'Chef de projet web marketing' },
    period: { en: '2016 — 2017', fr: '2016 — 2017' },
    title: {
      en: 'SEO project delivery from brief to execution',
      fr: 'Pilotage de projets SEO du brief à l\'exécution',
    },
    description: {
      en: 'Managed a portfolio of SEO projects end-to-end: client discovery, execution planning, production follow-up, and recurring performance reviews.',
      fr: 'Gestion d\'un portefeuille de projets SEO de bout en bout : cadrage client, plan d\'exécution, suivi de production et revues de performance récurrentes.',
    },
    result: {
      en: 'Clearer delivery cycles and stronger client alignment on priorities, timing, and expected business outcomes.',
      fr: 'Cycles de delivery plus clairs et meilleur alignement client sur les priorités, le timing et les résultats business attendus.',
    },
    achievements: {
      en: [
        'Led a portfolio of around 10 client accounts with weekly delivery follow-up',
        'Turned strategic briefs into actionable SEO roadmaps and production tasks',
        'Ran recurring reporting rituals to prioritize next high-impact actions',
      ],
      fr: [
        'Pilotage d\'un portefeuille d\'environ 10 comptes avec suivi hebdomadaire',
        'Traduction des briefs stratégiques en roadmaps SEO actionnables',
        'Animation de reportings récurrents pour prioriser les prochaines actions',
      ],
    },
    metric: '~10',
    metricLabel: { en: 'accounts managed', fr: 'comptes pilotés' },
    stack: ['SEO Delivery', 'Client Management', 'Reporting', 'Content Ops'],
    year: 2017,
    image: 'https://picsum.photos/seed/webnotoriete-client-ops/1200/780',
    imageAlt: {
      en: 'Project management dashboard with marketing roadmap and account tracking',
      fr: 'Dashboard de pilotage marketing avec roadmap et suivi de comptes',
    },
  },
  {
    id: 'uber-support',
    client: 'Uber',
    logo: 'https://picsum.photos/seed/uber-brand/120/120',
    category: { en: 'Customer Operations', fr: 'Opérations client' },
    period: { en: '2015', fr: '2015' },
    title: {
      en: 'Support workflows and incident resolution at scale',
      fr: 'Workflows de support et résolution d\'incidents à grande échelle',
    },
    description: {
      en: 'Handled high-volume support operations with Zendesk, resolving incidents and improving response consistency in customer-facing workflows.',
      fr: 'Gestion d\'opérations support à fort volume avec Zendesk, résolution d\'incidents et amélioration de la constance des workflows orientés client.',
    },
    result: {
      en: 'More reliable customer handling and stronger process discipline on sensitive support cases.',
      fr: 'Prise en charge client plus fiable et meilleure discipline process sur les cas support sensibles.',
    },
    achievements: {
      en: [
        'Managed ticket resolution with clear escalation and follow-up logic',
        'Handled conflict situations while maintaining service quality standards',
        'Contributed to repeatable support practices for day-to-day operations',
      ],
      fr: [
        'Gestion de la résolution de tickets avec logique claire d\'escalade et de suivi',
        'Traitement de situations de conflit en maintenant les standards de qualité de service',
        'Contribution à des pratiques support réplicables pour l\'opérationnel quotidien',
      ],
    },
    metric: '6 months',
    metricLabel: { en: 'support mission', fr: 'mission support' },
    stack: ['Zendesk', 'Customer Support', 'CRM', 'Operations'],
    year: 2015,
    image: 'https://picsum.photos/seed/uber-support-ops/1200/780',
    imageAlt: {
      en: 'Customer support operations board with workflow and queue management',
      fr: 'Tableau d\'opérations support client avec gestion des files et workflows',
    },
  },
];
