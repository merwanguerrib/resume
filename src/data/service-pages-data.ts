import type { Lang } from './site-strings';

export type ServiceSlug = 'website' | 'app' | 'ai-automation' | 'n8n';

type LocalizedText = {
  en: string;
  fr: string;
};

type LocalizedList = {
  en: string[];
  fr: string[];
};

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

type LocalizedFaqList = {
  en: ServiceFaqItem[];
  fr: ServiceFaqItem[];
};

export interface ServicePageContent {
  slug: ServiceSlug;
  label: LocalizedText;
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
  h1: LocalizedText;
  intro: LocalizedText;
  offerTitle: LocalizedText;
  offerItems: LocalizedList;
  outcomesTitle: LocalizedText;
  outcomesItems: LocalizedList;
  processTitle: LocalizedText;
  processSteps: LocalizedList;
  proofTitle: LocalizedText;
  proofItems: LocalizedList;
  leadMagnetTitle: LocalizedText;
  leadMagnetSubtitle: LocalizedText;
  leadMagnetDeliverablesTitle: LocalizedText;
  leadMagnetDeliverables: LocalizedList;
  leadMagnetCtaLabel: LocalizedText;
  faqTitle: LocalizedText;
  faqItems: LocalizedFaqList;
  finalCtaTitle: LocalizedText;
  finalCtaBody: LocalizedText;
  finalCtaPrimary: LocalizedText;
  finalCtaSecondary: LocalizedText;
}

export const servicePageSlugs: ServiceSlug[] = [
  'website',
  'app',
  'ai-automation',
  'n8n',
];

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  website: {
    slug: 'website',
    label: { en: 'Website Development', fr: 'Développement Website' },
    seoTitle: {
      en: 'Website Development in Marseille | Conversion-Focused Sites',
      fr: 'Développement Website à Marseille | Sites Orientés Conversion',
    },
    seoDescription: {
      en: 'Agency website development in Marseille: conversion-first UX, technical SEO, and clean delivery to generate qualified leads.',
      fr: 'Développement website en agence à Marseille: UX orientée conversion, SEO technique et delivery propre pour générer des leads qualifiés.',
    },
    h1: {
      en: 'Conversion-Focused Website Development',
      fr: 'Développement de Website Orienté Conversion',
    },
    intro: {
      en: `Most websites do not underperform because of design. They underperform because the offer is vague, page flow is unclear, and the next step is weak. We rebuild websites around one commercial goal: more qualified pipeline conversations. That means tighter positioning, cleaner page hierarchy, stronger CTA logic, and technical SEO integrated from day one. We usually step in when traffic looks healthy but conversion is inconsistent, or when a redesign is needed without losing search momentum. Based in Marseille, we work with founders, product teams, and agencies in France and internationally. You get a website that is easier to rank, easier to manage, and easier for the right prospects to say yes to.`,
      fr: `Nous concevons des websites pensés pour convertir avant d'être pensés pour décorer. Chaque page sert un objectif business clair: plus de rendez-vous qualifiés, plus de demandes de démo, ou un inbound plus rentable. Notre approche combine positionnement, copywriting de conversion, hiérarchie UX, SEO technique et implémentation performante pour que votre site soit visible et convaincant. Basés à Marseille, nous accompagnons des équipes en France et à l'international, surtout quand le trafic progresse mais que la conversion stagne, ou lorsqu'une refonte est nécessaire sans casser l'acquisition en cours. Avec plus de 10 ans d'expérience et 50+ missions livrées, nous aidons les fondateurs, équipes produit et agences à transformer des pages dispersées en système d'acquisition cohérent. Vous obtenez des priorités actionnables, des décisions mesurables et un site facile à faire évoluer dans le temps.`,
    },
    offerTitle: {
      en: 'What is included',
      fr: 'Ce qui est inclus',
    },
    offerItems: {
      en: [
        'Positioning workshop and offer framing',
        'Conversion-oriented information architecture',
        'Responsive UI implementation with clean code',
        'Technical SEO foundations (metadata, schema, internal links)',
        'Launch checklist and post-launch optimization plan',
      ],
      fr: [
        'Atelier de positionnement et cadrage de l\'offre',
        'Architecture de contenu orientée conversion',
        'Implémentation UI responsive avec code maintenable',
        'Fondations SEO techniques (metadata, schema, maillage interne)',
        'Checklist de lancement et plan d\'optimisation post-live',
      ],
    },
    outcomesTitle: {
      en: 'Best fit when',
      fr: 'Le meilleur fit quand',
    },
    outcomesItems: {
      en: [
        'Your traffic is growing but qualified leads stay flat',
        'Your current site looks good but message clarity is weak',
        'You need a redesign that preserves speed and SEO',
      ],
      fr: [
        'Votre trafic progresse mais les leads qualifiés stagnent',
        'Votre site est visuel mais le message reste flou',
        'Vous devez refondre sans perdre vitesse et SEO',
      ],
    },
    processTitle: {
      en: 'Typical sprint flow',
      fr: 'Déroulé type du sprint',
    },
    processSteps: {
      en: [
        'Audit and scope lock',
        'UX, copy, and SEO priorities',
        'Build, QA, and analytics setup',
        'Launch and conversion follow-up',
      ],
      fr: [
        'Audit et cadrage du périmètre',
        'Priorités UX, copy et SEO',
        'Build, QA et setup analytics',
        'Mise en ligne et suivi conversion',
      ],
    },
    proofTitle: {
      en: 'Proof and context',
      fr: 'Preuves et contexte',
    },
    proofItems: {
      en: [
        '10+ years in product and web delivery',
        '50+ missions across startups and scale-ups',
        'Experience in demanding environments (PayFit, Capgemini)',
        'Average first response in 24h',
      ],
      fr: [
        '10+ ans en delivery produit et web',
        '50+ missions pour startups et scale-ups',
        'Expérience dans des contextes exigeants (PayFit, Capgemini)',
        'Première réponse en moyenne sous 24h',
      ],
    },
    leadMagnetTitle: {
      en: 'Free website conversion audit',
      fr: 'Audit gratuit de conversion website',
    },
    leadMagnetSubtitle: {
      en: 'Send your URL and receive a short action plan focused on structure, messaging, and lead capture performance.',
      fr: 'Partagez votre URL et recevez un plan d\'action court centré sur la structure, le message et la capture de leads.',
    },
    leadMagnetDeliverablesTitle: {
      en: 'You get in 5 business days',
      fr: 'Vous recevez en 5 jours ouvrés',
    },
    leadMagnetDeliverables: {
      en: [
        'Top 5 conversion leaks on your key pages',
        'Prioritized SEO and UX fixes',
        'Execution sequence for the next 30 days',
      ],
      fr: [
        'Top 5 des fuites de conversion sur vos pages clés',
        'Corrections SEO et UX priorisées',
        'Séquence d\'exécution sur les 30 prochains jours',
      ],
    },
    leadMagnetCtaLabel: {
      en: 'Request the free website audit',
      fr: 'Demander l\'audit website gratuit',
    },
    faqTitle: {
      en: 'Website development FAQ',
      fr: 'FAQ développement website',
    },
    faqItems: {
      en: [
        {
          question: 'How long does a conversion-focused website project take?',
          answer:
            'Most projects run 3 to 6 weeks. Timing depends on page count, integrations, and whether we rewrite the messaging and SEO structure.',
        },
        {
          question: 'Do you handle SEO during development?',
          answer:
            'Yes. Metadata, heading structure, internal links, schema, and performance are built into development rather than added at the end.',
        },
        {
          question: 'Can you work with our in-house marketing team?',
          answer:
            'Yes. We regularly collaborate with in-house marketing teams and agencies in collaborative or white-label mode, with clear handover documentation.',
        },
      ],
      fr: [
        {
          question: 'Quel délai prévoir pour un website orienté conversion ?',
          answer:
            'La plupart des projets sont livrés en 3 à 6 semaines selon le volume de pages, les intégrations et la reprise de la copy/SEO.',
        },
        {
          question: 'Le SEO est-il intégré pendant le développement ?',
          answer:
            'Oui. Nous intégrons le SEO technique dès le départ: metadata, hiérarchie sémantique, maillage interne, préparation schema et performance.',
        },
        {
          question: 'Pouvez-vous collaborer avec notre équipe marketing interne ?',
          answer:
            'Oui. Nous intervenons régulièrement en collaboration avec des équipes internes et agences, y compris en marque blanche.',
        },
      ],
    },
    finalCtaTitle: {
      en: 'Want a website that turns traffic into qualified pipeline?',
      fr: 'Besoin d\'un website qui convertit sans freiner l\'équipe ?',
    },
    finalCtaBody: {
      en: 'Share your current URL and context, and we will map the fastest route to clearer messaging, cleaner structure, and better conversion.',
      fr: 'Partagez votre contexte et nous vous proposons le chemin le plus rapide vers un site prêt à convertir.',
    },
    finalCtaPrimary: {
      en: 'Book a website strategy call',
      fr: 'Démarrer avec un appel projet',
    },
    finalCtaSecondary: {
      en: 'See all services',
      fr: 'Voir tous les services',
    },
  },
  app: {
    slug: 'app',
    label: { en: 'App Development', fr: 'Développement App' },
    seoTitle: {
      en: 'Full-Stack App Development in Marseille | Product Delivery',
      fr: 'Développement App Full-Stack à Marseille | Delivery Produit',
    },
    seoDescription: {
      en: 'Full-stack app development in Marseille: architecture, secure auth, APIs, and reliable delivery for startups and product teams.',
      fr: 'Développement app full-stack à Marseille: architecture, auth sécurisée, APIs et delivery fiable pour startups et équipes produit.',
    },
    h1: {
      en: 'Full-Stack Web App Development',
      fr: 'Développement d\'Applications Web Full-Stack',
    },
    intro: {
      en: `Shipping features gets hard once an app has real usage. Quick fixes accumulate, release confidence drops, and each sprint takes longer than planned. We help teams regain delivery speed without creating new technical debt. We can join an existing codebase, map the bottlenecks, and ship across frontend, backend, API, and data layers. Most engagements start when velocity slows after MVP, when product and engineering handoffs break down, or when roadmap delivery needs senior full-stack ownership. You get pragmatic architecture decisions, reliable implementation, and code your team can maintain after handover.`,
      fr: `Nous aidons les équipes à livrer des applications web qui restent maintenables quand les fonctionnalités, les utilisateurs et la pression business augmentent. L'objectif n'est pas seulement de livrer vite, mais de livrer sans accumuler une dette invisible qui bloque les prochaines releases. Nous intervenons souvent lors du passage MVP vers usage réel, quand la vélocité roadmap baisse, ou quand l'équipe a besoin d'un renfort senior front, back et data. Notre périmètre couvre la discovery de features, les choix d'architecture, la conception API et modèle de données, l'authentification, les intégrations, les tests et la préparation production. Nous avons livré dans des contextes startup et enterprise, notamment PayFit et Capgemini, avec le même principe: des fondations propres puis de l'itération rapide. Vous gagnez un partenaire pragmatique capable d'aligner objectifs produit et exécution technique durable.`,
    },
    offerTitle: {
      en: 'What is included',
      fr: 'Ce qui est inclus',
    },
    offerItems: {
      en: [
        'Feature scoping with technical constraints',
        'Frontend and backend implementation',
        'Data model and API design',
        'Authentication, permissions, and security basics',
        'Testing, QA flow, and release support',
      ],
      fr: [
        'Cadrage fonctionnel avec contraintes techniques',
        'Implémentation frontend et backend',
        'Conception API et modèle de données',
        'Authentification, permissions et sécurité de base',
        'Tests, QA et support de release',
      ],
    },
    outcomesTitle: {
      en: 'Best fit when',
      fr: 'Le meilleur fit quand',
    },
    outcomesItems: {
      en: [
        'You need to ship product features with less regression risk',
        'Your team needs senior full-stack reinforcement',
        'Your app has grown and architecture debt is slowing releases',
      ],
      fr: [
        'Vous devez livrer des features avec moins de régressions',
        'Votre équipe a besoin de renfort full-stack senior',
        'Votre app a grandi et la dette d\'architecture freine les releases',
      ],
    },
    processTitle: {
      en: 'Typical sprint flow',
      fr: 'Déroulé type du sprint',
    },
    processSteps: {
      en: [
        'Discovery, scope, and success metrics',
        'Architecture and implementation',
        'Testing, monitoring, and hardening',
        'Release and handover documentation',
      ],
      fr: [
        'Discovery, cadrage et métriques de succès',
        'Architecture et implémentation',
        'Tests, monitoring et fiabilisation',
        'Release et documentation de handover',
      ],
    },
    proofTitle: {
      en: 'Proof and context',
      fr: 'Preuves et contexte',
    },
    proofItems: {
      en: [
        '10+ years in full-stack delivery',
        'Features delivered for product teams at scale',
        'Cross-functional work with product, design, and growth',
        'Code quality and maintainability as default',
      ],
      fr: [
        '10+ ans de delivery full-stack',
        'Features livrées pour des équipes produit à l\'échelle',
        'Travail transversal avec produit, design et growth',
        'Qualité de code et maintenabilité comme standard',
      ],
    },
    leadMagnetTitle: {
      en: 'Free app architecture mini-audit',
      fr: 'Mini-audit gratuit d\'architecture app',
    },
    leadMagnetSubtitle: {
      en: 'Get a quick assessment of bottlenecks in your app stack and a practical roadmap for safer delivery.',
      fr: 'Recevez une évaluation rapide des goulots dans votre stack app et une roadmap pratique pour livrer plus sereinement.',
    },
    leadMagnetDeliverablesTitle: {
      en: 'You get in 5 business days',
      fr: 'Vous recevez en 5 jours ouvrés',
    },
    leadMagnetDeliverables: {
      en: [
        'Main technical debt hotspots',
        'Priority fixes with estimated impact',
        'Sprint-ready implementation sequence',
      ],
      fr: [
        'Principaux points de dette technique',
        'Correctifs prioritaires avec impact estimé',
        'Séquence d\'implémentation prête pour sprint',
      ],
    },
    leadMagnetCtaLabel: {
      en: 'Request the free app audit',
      fr: 'Demander l\'audit app gratuit',
    },
    faqTitle: {
      en: 'App development FAQ',
      fr: 'FAQ développement app',
    },
    faqItems: {
      en: [
        {
          question: 'Can you join an existing codebase?',
          answer:
            'Yes. We regularly onboard into existing products, map the current architecture, and ship new features while reducing fragile areas.',
        },
        {
          question: 'Do you work on both frontend and backend?',
          answer:
            'Yes. We work end to end: UI, backend services, data modeling, integrations, and release hardening.',
        },
        {
          question: 'Do you provide documentation for handover?',
          answer:
            'Yes. Every handover includes technical notes, key decisions, and clear next steps so your team can continue without guesswork.',
        },
      ],
      fr: [
        {
          question: 'Pouvez-vous rejoindre une codebase existante ?',
          answer:
            'Oui. Nous pouvons onboard rapidement, cartographier l\'architecture actuelle et livrer des features en réduisant le risque.',
        },
        {
          question: 'Intervenez-vous sur le front et le back ?',
          answer:
            'Oui. Nous couvrons frontend, backend, data et intégrations pour faire avancer l\'équipe avec un interlocuteur technique responsable.',
        },
        {
          question: 'Fournissez-vous de la documentation de handover ?',
          answer:
            'Oui. Nous livrons des notes techniques, le contexte d\'architecture et les décisions clés pour assurer la continuité interne.',
        },
      ],
    },
    finalCtaTitle: {
      en: 'Need to ship faster without paying for regressions later?',
      fr: 'Besoin d\'accélérer sans dégrader la qualité ?',
    },
    finalCtaBody: {
      en: 'Share your roadmap and current blockers, and we will propose a delivery plan that improves velocity while keeping the codebase stable.',
      fr: 'Nous pouvons aider votre équipe à retrouver de la vélocité avec une architecture plus claire et une exécution ciblée.',
    },
    finalCtaPrimary: {
      en: 'Book a full-stack scoping call',
      fr: 'Planifier un appel technique',
    },
    finalCtaSecondary: {
      en: 'Explore all services',
      fr: 'Explorer tous les services',
    },
  },
  'ai-automation': {
    slug: 'ai-automation',
    label: { en: 'AI Automation', fr: 'Automatisation IA' },
    seoTitle: {
      en: 'AI Automation Services in Marseille | Workflows & Agents',
      fr: 'Services d\'Automatisation IA à Marseille | Workflows & Agents',
    },
    seoDescription: {
      en: 'AI automation development in Marseille: workflows, agents, and integrations that reduce manual work and speed up operations.',
      fr: 'Automatisation IA à Marseille: workflows, agents et intégrations qui réduisent les tâches manuelles et accélèrent les opérations.',
    },
    h1: {
      en: 'AI Automation Development',
      fr: 'Développement d\'Automatisations IA',
    },
    intro: {
      en: `AI automation is useful only when it removes real friction from daily operations. We build workflows that take repetitive work off your team, including lead qualification, support triage, content operations, internal copilots, and reporting pipelines connected to your existing tools. The focus is operational impact, not demo effects. We define success early, such as time saved, response time, and error reduction, then implement with guardrails so quality stays predictable. From Marseille, we work with teams in France and internationally, often after failed pilots or scattered AI experiments. You get maintainable automations your team can run every day, not fragile one-off prototypes.`,
      fr: `L'automatisation IA crée de la valeur uniquement quand elle cible des points de friction opérationnels concrets. Nous concevons des systèmes pragmatiques qui réduisent les tâches répétitives, accélèrent les délais de réponse et améliorent la qualité de décision pour les équipes produit, sales et marketing. Les projets couvrent souvent la qualification de leads, les copilotes internes, le tri support, les opérations de contenu et les pipelines de reporting connectés à vos outils existants. L'objectif reste mesurable: temps gagné, moins d'erreurs, délais raccourcis et meilleure visibilité sur la performance des process. Nous combinons vision produit et profondeur d'implémentation pour livrer une couche d'automatisation maintenable, intégrée à votre website, votre app, votre CRM et votre stack data. Basés à Marseille et actifs à l'international, nous aidons les équipes à passer d'expérimentations IA isolées à des automatisations solides au service de l'exécution quotidienne et de la croissance.`,
    },
    offerTitle: {
      en: 'What is included',
      fr: 'Ce qui est inclus',
    },
    offerItems: {
      en: [
        'Automation opportunity audit and prioritization',
        'Workflow design with quality guardrails',
        'LLM integrations and tool orchestration',
        'Monitoring, fallback logic, and alerting',
        'Team enablement and maintainability docs',
      ],
      fr: [
        'Audit des opportunités d\'automatisation',
        'Design de workflows avec garde-fous qualité',
        'Intégrations LLM et orchestration d\'outils',
        'Monitoring, logique de fallback et alerting',
        'Documentation de maintien et transfert équipe',
      ],
    },
    outcomesTitle: {
      en: 'Best fit when',
      fr: 'Le meilleur fit quand',
    },
    outcomesItems: {
      en: [
        'Manual operations are blocking team velocity',
        'Lead and support response times are too slow',
        'You need AI workflows tied to business KPIs',
      ],
      fr: [
        'Les opérations manuelles bloquent votre vélocité',
        'Le traitement des leads et du support est trop lent',
        'Vous voulez des workflows IA reliés à des KPI business',
      ],
    },
    processTitle: {
      en: 'Typical sprint flow',
      fr: 'Déroulé type du sprint',
    },
    processSteps: {
      en: [
        'Process audit and KPI definition',
        'Workflow architecture and integration plan',
        'Implementation with quality controls',
        'Rollout and iterative optimization',
      ],
      fr: [
        'Audit process et définition des KPI',
        'Architecture workflow et plan d\'intégration',
        'Implémentation avec contrôles qualité',
        'Déploiement et optimisation continue',
      ],
    },
    proofTitle: {
      en: 'Proof and context',
      fr: 'Preuves et contexte',
    },
    proofItems: {
      en: [
        'Automation projects linked to clear operating metrics',
        'End-to-end implementation from idea to production',
        'Integration experience across product and growth stacks',
        'Pragmatic approach focused on measurable outcomes',
      ],
      fr: [
        'Projets d\'automatisation reliés à des métriques opérationnelles',
        'Implémentation end-to-end de l\'idée à la production',
        'Expérience d\'intégration sur stacks produit et growth',
        'Approche pragmatique orientée résultats mesurables',
      ],
    },
    leadMagnetTitle: {
      en: 'Free AI automation opportunity audit',
      fr: 'Audit gratuit des opportunités d\'automatisation IA',
    },
    leadMagnetSubtitle: {
      en: 'Identify where AI can remove manual work first, with clear impact and realistic implementation effort.',
      fr: 'Identifiez où l\'IA peut supprimer du travail manuel en priorité, avec impact clair et effort réaliste.',
    },
    leadMagnetDeliverablesTitle: {
      en: 'You get in 5 business days',
      fr: 'Vous recevez en 5 jours ouvrés',
    },
    leadMagnetDeliverables: {
      en: [
        'Top 3 automation opportunities by ROI',
        'Suggested workflow architecture',
        'Execution plan with effort estimate',
      ],
      fr: [
        'Top 3 des opportunités d\'automatisation par ROI',
        'Architecture workflow recommandée',
        'Plan d\'exécution avec estimation d\'effort',
      ],
    },
    leadMagnetCtaLabel: {
      en: 'Request the free AI automation audit',
      fr: 'Demander l\'audit IA gratuit',
    },
    faqTitle: {
      en: 'AI automation FAQ',
      fr: 'FAQ automatisation IA',
    },
    faqItems: {
      en: [
        {
          question: 'Do you build custom AI agents or only no-code flows?',
          answer:
            'Both. We can ship quickly with no-code or low-code where it fits, and add custom integrations when your process needs deeper control.',
        },
        {
          question: 'How do you avoid hallucinations and quality issues?',
          answer:
            'By design. We add prompt constraints, validation layers, fallback routes, and human review for high-risk steps.',
        },
        {
          question: 'Can we start with one workflow before scaling?',
          answer:
            'Yes. We usually launch one high-impact workflow first, measure results, then scale with a prioritized backlog.',
        },
      ],
      fr: [
        {
          question: 'Construisez-vous des agents IA custom ou seulement du no-code ?',
          answer:
            'Les deux. Nous pouvons implémenter des automatisations no-code/low-code et développer des intégrations custom quand nécessaire.',
        },
        {
          question: 'Comment limitez-vous les hallucinations et erreurs de qualité ?',
          answer:
            'Nous intégrons des garde-fous, validations, règles de fallback et du contrôle humain quand la fiabilité est critique.',
        },
        {
          question: 'Peut-on démarrer avec un seul workflow avant de scaler ?',
          answer:
            'Oui. Nous lançons souvent un workflow à fort impact, nous mesurons les gains, puis nous étendons avec une roadmap claire.',
        },
      ],
    },
    finalCtaTitle: {
      en: 'Ready to reduce manual work with reliable AI workflows?',
      fr: 'Vous voulez moins de tâches répétitives et plus de vitesse ?',
    },
    finalCtaBody: {
      en: 'Tell us where your team is losing time today, and we will map the first automation sprint with expected impact and implementation effort.',
      fr: 'Nous pouvons concevoir une roadmap d\'automatisation IA pratique, adaptée à votre équipe, vos outils et vos contraintes.',
    },
    finalCtaPrimary: {
      en: 'Book an AI automation call',
      fr: 'Planifier un appel automatisation',
    },
    finalCtaSecondary: {
      en: 'Browse other services',
      fr: 'Voir les autres services',
    },
  },
  n8n: {
    slug: 'n8n',
    label: { en: 'n8n Workflows', fr: 'Workflows n8n' },
    seoTitle: {
      en: 'n8n Workflow Automation in Marseille | Integration & Ops',
      fr: 'Automatisation n8n à Marseille | Intégration & Ops',
    },
    seoDescription: {
      en: 'n8n integration in Marseille for lead routing, CRM sync, alerts, and operations automation with resilient workflow architecture.',
      fr: 'Intégration n8n à Marseille pour routing leads, sync CRM, alertes et automatisation opérations avec architecture fiable.',
    },
    h1: {
      en: 'n8n Workflow Integration',
      fr: 'Intégration de Workflows n8n',
    },
    intro: {
      en: `n8n can remove a lot of manual operations work, but only if workflows are built like production systems. We design n8n architectures that connect forms, CRM, email tools, internal APIs, AI services, and reporting without creating hidden failure points. Most clients call us when lead routing breaks, alerts are noisy, or ownership is unclear across tools. We set naming standards, add retries and fallback paths, and make failures visible before they hurt pipeline performance. Based in Marseille and working internationally, we help teams turn ad-hoc automations into a stable operations layer they can trust every day.`,
      fr: `n8n est l'un des moyens les plus rapides pour automatiser les opérations, à condition de concevoir des workflows robustes et maintenables. Nous construisons des systèmes n8n qui connectent formulaires, CRM, outils email, APIs internes, fournisseurs IA et reporting dans une même couche d'exécution. C'est particulièrement utile quand l'équipe perd du temps en copier-coller, en routage manuel de leads, en notifications répétitives et en handovers fragiles entre outils. Notre rôle est de structurer l'architecture d'automatisation, de sécuriser la logique des flux et de mettre en place l'observabilité pour détecter les incidents avant impact pipeline. Vous obtenez des workflows prêts production, des conventions de nommage, une gestion des erreurs et une documentation exploitable. Basés à Marseille et actifs à l'international, nous visons un résultat simple: moins de chaos opérationnel, plus de vitesse d'exécution et une base workflow qui scale avec votre activité.`,
    },
    offerTitle: {
      en: 'What is included',
      fr: 'Ce qui est inclus',
    },
    offerItems: {
      en: [
        'n8n workflow architecture and naming standards',
        'Core automations for lead, CRM, and operations flows',
        'Webhook/API integrations and data transformations',
        'Error handling, retries, and monitoring alerts',
        'Handover guide for internal ownership',
      ],
      fr: [
        'Architecture n8n et standards de nommage',
        'Automatisations coeur de flux lead, CRM et opérations',
        'Intégrations webhook/API et transformations de données',
        'Gestion d\'erreurs, retries et alerting de monitoring',
        'Guide de handover pour reprise interne',
      ],
    },
    outcomesTitle: {
      en: 'Best fit when',
      fr: 'Le meilleur fit quand',
    },
    outcomesItems: {
      en: [
        'Your team repeats manual ops tasks every day',
        'Your tool stack is connected inconsistently',
        'You need reliable automation without heavy lock-in',
      ],
      fr: [
        'Votre équipe répète les mêmes tâches opérationnelles chaque jour',
        'Votre stack est connectée de manière fragile',
        'Vous voulez des automatisations fiables sans lock-in excessif',
      ],
    },
    processTitle: {
      en: 'Typical sprint flow',
      fr: 'Déroulé type du sprint',
    },
    processSteps: {
      en: [
        'Workflow mapping and source-of-truth definition',
        'Node implementation and data validation',
        'Resilience setup (alerts, retries, logs)',
        'Team documentation and rollout',
      ],
      fr: [
        'Mapping workflows et définition de la source of truth',
        'Implémentation des nodes et validation des données',
        'Mise en place de la résilience (alertes, retries, logs)',
        'Documentation équipe et déploiement',
      ],
    },
    proofTitle: {
      en: 'Proof and context',
      fr: 'Preuves et contexte',
    },
    proofItems: {
      en: [
        'Production-oriented workflow design',
        'Clean standards for team maintainability',
        'Integration across CRM, forms, API, and AI services',
        'Monitoring-first mindset to reduce downtime',
      ],
      fr: [
        'Design workflow orienté production',
        'Standards clairs pour une maintenance équipe durable',
        'Intégrations CRM, formulaires, API et services IA',
        'Approche monitoring-first pour réduire les incidents',
      ],
    },
    leadMagnetTitle: {
      en: 'Free n8n workflow audit',
      fr: 'Audit gratuit de workflows n8n',
    },
    leadMagnetSubtitle: {
      en: 'We review your current workflows and identify where reliability, speed, and maintainability can improve quickly.',
      fr: 'Nous passons en revue vos workflows actuels et identifions où améliorer vite la fiabilité, la vitesse et la maintenance.',
    },
    leadMagnetDeliverablesTitle: {
      en: 'You get in 5 business days',
      fr: 'Vous recevez en 5 jours ouvrés',
    },
    leadMagnetDeliverables: {
      en: [
        'Map of fragile nodes and failure points',
        'Priority fixes for stability and visibility',
        'Migration path toward cleaner workflow architecture',
      ],
      fr: [
        'Cartographie des nodes fragiles et points de rupture',
        'Correctifs prioritaires pour stabilité et visibilité',
        'Chemin de migration vers une architecture workflow plus propre',
      ],
    },
    leadMagnetCtaLabel: {
      en: 'Request the free n8n audit',
      fr: 'Demander l\'audit n8n gratuit',
    },
    faqTitle: {
      en: 'n8n integration FAQ',
      fr: 'FAQ intégration n8n',
    },
    faqItems: {
      en: [
        {
          question: 'Can you improve existing n8n workflows?',
          answer:
            'Yes. We audit current workflows, isolate fragile nodes, and refactor for clarity, resilience, and easier team ownership.',
        },
        {
          question: 'Do you handle alerts and failure recovery?',
          answer:
            'Yes. We set up retries, fallback branches, and alerting so failures are detected quickly and recovery is straightforward.',
        },
        {
          question: 'Can n8n connect with our CRM and internal APIs?',
          answer:
            'Yes. We regularly connect n8n with CRMs, internal APIs, forms, email tools, and data sources, with validation and mapping rules.',
        },
      ],
      fr: [
        {
          question: 'Pouvez-vous améliorer des workflows n8n existants ?',
          answer:
            'Oui. Nous auditons les flux existants, corrigeons les logiques fragiles et refactorisons pour plus de résilience et de lisibilité.',
        },
        {
          question: 'Gérez-vous les alertes et la reprise sur erreur ?',
          answer:
            'Oui. Nous mettons en place retries, branches de fallback et alertes pour rendre les échecs visibles et récupérables.',
        },
        {
          question: 'Pouvez-vous connecter n8n à notre CRM et nos APIs internes ?',
          answer:
            'Oui. Nous intégrons régulièrement n8n avec CRM, APIs custom, formulaires, outils email et sources data avec validation.',
        },
      ],
    },
    finalCtaTitle: {
      en: 'Need n8n workflows your team can trust every day?',
      fr: 'Besoin d\'une automatisation fiable avec n8n ?',
    },
    finalCtaBody: {
      en: 'Share your current setup and failure points, and we will propose a practical hardening plan with clear priorities.',
      fr: 'Nous pouvons vous aider à passer de flux fragiles à une couche d\'automatisation robuste et exploitable au quotidien.',
    },
    finalCtaPrimary: {
      en: 'Book an n8n architecture call',
      fr: 'Discuter de votre setup n8n',
    },
    finalCtaSecondary: {
      en: 'Back to homepage services',
      fr: 'Retour aux services',
    },
  },
};

export const getServicePage = (slug: ServiceSlug) => servicePages[slug];

export const getServicePath = (slug: ServiceSlug, lang: Lang) =>
  lang === 'fr' ? `/fr/services/${slug}/` : `/services/${slug}/`;

export const getRelatedServiceSlugs = (slug: ServiceSlug) =>
  servicePageSlugs.filter((item) => item !== slug);
