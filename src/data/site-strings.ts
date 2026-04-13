export type Lang = 'en' | 'fr';

export const t = (lang: Lang) => ({
  seo: {
    title:
      lang === 'en'
        ? 'Just Dev It Agency | Websites, Apps & AI Automation'
        : 'Just Dev It Agency | Websites, Apps & Automatisation IA',
    description:
      lang === 'en'
        ? 'We design and build conversion-focused websites, full-stack apps, and AI automation systems with n8n and modern no-code tooling. Based in Marseille, serving clients worldwide.'
        : 'Nous concevons des websites orientés conversion, des applications full-stack et des systèmes d\'automatisation IA avec n8n et les meilleurs outils no-code. Basés à Marseille, nous accompagnons des clients partout.',
  },
  nav: {
    services: lang === 'en' ? 'Services' : 'Services',
    work: lang === 'en' ? 'Work' : 'Projets',
    about: lang === 'en' ? 'About' : 'À propos',
    contact: lang === 'en' ? 'Get free audit' : 'Audit gratuit',
  },
  notFound: {
    title: lang === 'en' ? '404 | Page not found' : '404 | Page introuvable',
    description:
      lang === 'en'
        ? 'This page no longer exists or has moved. Head back home or request your free growth audit.'
        : 'Cette page n\'existe plus ou a été déplacée. Revenez à l\'accueil ou lancez votre audit gratuit.',
    badge: lang === 'en' ? 'Error 404' : 'Erreur 404',
    heading: lang === 'en' ? 'This page cannot be found.' : 'Cette page est introuvable.',
    body:
      lang === 'en'
        ? 'The link may be outdated, the URL might contain a typo, or the page was moved during the conversion-focused redesign.'
        : 'Le lien a peut-être expiré, l\'URL contient une erreur, ou la page a été déplacée pendant la refonte orientée conversion.',
    pathLabel: lang === 'en' ? 'Requested URL' : 'URL demandée',
    primaryCta: lang === 'en' ? 'Back to home' : 'Retour à l\'accueil',
    secondaryCta: lang === 'en' ? 'Get a free audit' : 'Recevoir un audit gratuit',
    quickLinksTitle: lang === 'en' ? 'Quick access' : 'Accès rapide',
    quickLinks:
      lang === 'en'
        ? [
            { label: 'Services', section: 'services' },
            { label: 'Case studies', section: 'work' },
            { label: 'Contact', section: 'contact' },
          ]
        : [
            { label: 'Services', section: 'services' },
            { label: 'Cas clients', section: 'work' },
            { label: 'Contact', section: 'contact' },
          ],
    helpCardTitle:
      lang === 'en'
        ? 'Turn this dead end into growth.'
        : 'Transformons cette erreur en opportunité.',
    helpCardBody:
      lang === 'en'
        ? 'Share your context and I will send a focused action plan to improve acquisition, conversion, and automation.'
        : 'Partagez votre contexte, je vous envoie un plan d\'action concret pour améliorer acquisition, conversion et automatisation.',
    helpCardCta: lang === 'en' ? 'Request my audit' : 'Demander mon audit',
  },
  hero: {
    available: lang === 'en' ? 'Available for new projects' : 'Disponible pour de nouveaux projets',
    seoH1:
      lang === 'en'
        ? 'Freelance Full-Stack Developer in Marseille'
        : 'Développeur Full-Stack à Marseille',
    tagline: 'Just dev it.',
    subtitle:
      lang === 'en'
        ? 'Websites, apps, and AI automations built for growth.\nFrom strategy to production, with clear ROI.'
        : 'Websites, apps et automatisations IA conçus pour la croissance.\nDe la stratégie à la production, avec un ROI clair.',
    cta_primary: lang === 'en' ? 'Get free audit' : 'Recevoir un audit gratuit',
    cta_secondary: lang === 'en' ? 'See my work' : 'Voir mes projets',
    trustedBy: lang === 'en' ? 'Trusted by' : 'Ils me font confiance',
  },
  stats: [
    { value: '10+', label: lang === 'en' ? 'Years of experience' : "Années d'expérience" },
    { value: '50+', label: lang === 'en' ? 'Missions delivered' : 'Missions livrées' },
    { value: '24h', label: lang === 'en' ? 'Average response time' : 'Délai moyen de réponse' },
  ],
  services: {
    eyebrow: lang === 'en' ? 'How I help' : 'Ce que je construis',
    title:
      lang === 'en'
        ? 'Four service tracks.\nOne growth system.'
        : 'Website, app et workflows IA,\navec n8n + no-code.',
  },
  work: {
    eyebrow: lang === 'en' ? 'Case studies' : 'Cas clients',
    title:
      lang === 'en'
        ? 'Projects shipped with\nbusiness impact.'
        : 'Projets livrés avec\nimpact business.',
    cta: lang === 'en' ? 'View case study' : 'Voir le cas client',
  },
  process: {
    eyebrow: lang === 'en' ? 'How we work' : 'Méthode',
    title:
      lang === 'en'
        ? 'Clear process.\nFast execution.'
        : 'Process clair.\nExécution rapide.',
    steps: [
      {
        number: '01',
        title: lang === 'en' ? 'Audit & scope' : 'Audit & cadrage',
        description:
          lang === 'en'
            ? 'We define your goals, user journey, and priority outcomes before writing any code.'
            : 'On définit vos objectifs, le parcours utilisateur et les résultats prioritaires avant d\'écrire une ligne de code.',
      },
      {
        number: '02',
        title: lang === 'en' ? 'Architecture & UX' : 'Architecture & UX',
        description:
          lang === 'en'
            ? 'You get a clean technical plan and interface direction aligned with conversion and usability.'
            : 'Vous obtenez un plan technique clair et une direction interface alignée conversion et usage.',
      },
      {
        number: '03',
        title: lang === 'en' ? 'Build & automate' : 'Build & automate',
        description:
          lang === 'en'
            ? 'I deliver production-ready code plus AI automations and n8n/no-code workflows when relevant.'
            : 'Je livre un code prêt production avec automatisations IA et workflows n8n/no-code si pertinent.',
      },
      {
        number: '04',
        title: lang === 'en' ? 'Launch & optimize' : 'Launch & optimise',
        description:
          lang === 'en'
            ? 'Deployment, QA, documentation, and post-launch optimization to improve conversion and operations.'
            : 'Déploiement, QA, documentation et optimisation post-lancement pour améliorer conversion et opérations.',
      },
    ],
  },
  leadMagnet: {
    eyebrow: '',
    title:
      lang === 'en'
        ? 'Free growth audit for your website,\napp, or AI workflow.'
        : 'Audit croissance gratuit pour votre website,\napp ou workflow IA.',
    subtitle:
      lang === 'en'
        ? 'Get a concise action plan to increase leads, reduce manual work, and improve your technical foundations.'
        : 'Recevez un plan d\'action concret pour augmenter vos leads, réduire le travail manuel et renforcer vos fondations techniques.',
    highlightsTitle: lang === 'en' ? 'What we analyze' : 'Ce que j\'analyse',
    highlights:
      lang === 'en'
        ? [
            'Conversion leaks on your website or landing pages',
            'Automation opportunities with n8n and no-code tools',
            'AI workflow bottlenecks and quick wins',
            'SEO + GEO opportunities for visibility in Google and AI assistants',
          ]
        : [
            'Fuites de conversion sur votre website ou vos landing pages',
            'Opportunités d\'automatisation avec n8n et les outils no-code',
            'Bottlenecks sur vos workflows IA et quick wins',
            'Opportunités SEO + GEO pour Google et les assistants IA',
          ],
    deliverablesTitle:
      lang === 'en' ? 'What you get in 5 business days' : 'Ce que vous recevez en 5 jours ouvrés',
    deliverables:
      lang === 'en'
        ? [
            'A 10-point diagnostic with priority score',
            '3 actions to launch in the next 30 days',
            'Estimated budget and implementation timeline',
          ]
        : [
            'Un diagnostic en 10 points avec score de priorité',
            '3 actions à lancer dans les 30 prochains jours',
            'Une estimation budget + délai de mise en oeuvre',
          ],
    form: {
      title:
        lang === 'en'
          ? 'Get the audit by email'
          : 'Recevoir l\'audit par email',
      subtitle:
        lang === 'en'
          ? '2 required fields. Response in 24 business hours with the best next action.'
          : '2 champs requis. Réponse sous 24h ouvrées avec la meilleure prochaine action.',
      email: lang === 'en' ? 'Work email' : 'Email professionnel',
      context: lang === 'en' ? 'URL or stack context' : 'URL ou contexte stack',
      contextPlaceholder:
        lang === 'en'
          ? 'https://your-site.com or HubSpot + n8n + Notion'
          : 'https://votre-site.fr ou HubSpot + n8n + Notion',
      objective: lang === 'en' ? 'Primary objective (optional)' : 'Objectif principal (optionnel)',
      objectivePlaceholder:
        lang === 'en'
          ? 'Ex: increase qualified leads without rebuilding everything'
          : 'Ex: augmenter les leads qualifiés sans tout reconstruire',
      cta:
        lang === 'en'
          ? 'Send me the free audit'
          : 'Envoyer mon audit gratuit',
      privacy:
        lang === 'en'
          ? 'No spam. You can unsubscribe anytime.'
          : 'Pas de spam. Désinscription possible à tout moment.',
      success:
        lang === 'en'
          ? 'Request received. Check your inbox shortly.'
          : 'Demande reçue. Vérifiez votre boîte mail.',
    },
    ctaPrimary: lang === 'en' ? 'Get my free audit' : 'Je veux mon audit gratuit',
    ctaSecondary: lang === 'en' ? 'See case studies' : 'Voir les cas clients',
  },
  faq: {
    eyebrow: lang === 'en' ? 'FAQ' : 'FAQ',
    title:
      lang === 'en'
        ? 'Questions about websites, apps,\nAI automation, and n8n.'
        : 'Questions sur les websites, apps,\nautomatisation IA et n8n.',
    items:
      lang === 'en'
        ? [
            {
              question: 'What services do you offer?',
              answer:
                'I build conversion-focused websites, full-stack web applications, AI automation systems, and workflow integrations with n8n or no-code tools.',
            },
            {
              question: 'Can you integrate n8n with my current stack?',
              answer:
                'Yes. I design and implement n8n workflows connected to your CRM, forms, databases, APIs, and AI tools to remove repetitive manual work.',
            },
            {
              question: 'Do you also handle SEO and GEO optimization?',
              answer:
                'Yes. I optimize technical SEO, on-page structure, and AI-search readiness (GEO) so your website can rank in Google and be easier to cite by AI assistants.',
            },
            {
              question: 'How long does a typical project take?',
              answer:
                'Most focused projects are delivered in about 3 to 6 weeks depending on scope, integrations, and number of pages or workflows.',
            },
            {
              question: 'What do you include in the free audit?',
              answer:
                'You receive a prioritized diagnostic, quick wins, and a practical delivery roadmap for website performance, automation, and acquisition.',
            },
            {
              question: 'Do you work in white-label mode for agencies?',
              answer:
                'Yes. I regularly collaborate in white-label with agencies and product teams, with clear communication, strict deadlines, and clean handover documentation.',
            },
          ]
        : [
            {
              question: 'Quels services proposez-vous ?',
              answer:
                'Je conçois des websites orientés conversion, des applications web full-stack, des systèmes d\'automatisation IA, et des intégrations de workflows avec n8n ou des outils no-code.',
            },
            {
              question: 'Pouvez-vous intégrer n8n à mon stack actuel ?',
              answer:
                'Oui. Je conçois et implémente des workflows n8n connectés à votre CRM, formulaires, bases de données, APIs et outils IA pour réduire les tâches manuelles.',
            },
            {
              question: 'Gérez-vous aussi l\'optimisation SEO et GEO ?',
              answer:
                'Oui. J\'optimise le SEO technique, la structure on-page et la préparation GEO pour mieux performer sur Google et dans les réponses d\'assistants IA.',
            },
            {
              question: 'Quel est le délai moyen pour un projet ?',
              answer:
                'La plupart des projets ciblés sont livrés en 3 à 6 semaines selon le périmètre, les intégrations et le volume de pages ou workflows.',
            },
            {
              question: 'Que contient l\'audit gratuit ?',
              answer:
                'Vous recevez un diagnostic priorisé, des quick wins et une roadmap opérationnelle pour la performance website, l\'automatisation et l\'acquisition.',
            },
            {
              question: 'Travaillez-vous en marque blanche pour les agences ?',
              answer:
                'Oui. Je collabore en marque blanche avec des agences et des équipes produit, avec communication claire, respect des délais et documentation de handover.',
            },
          ],
  },
  about: {
    eyebrow: lang === 'en' ? 'About me' : 'À propos',
    title: lang === 'en' ? 'Merwan Guerrib' : 'Merwan Guerrib',
    bio:
      lang === 'en'
        ? 'I am a fullstack developer focused on one thing: shipping digital products that generate measurable business outcomes.\n\nOver the last 10+ years, I have delivered projects for teams like PayFit and Capgemini, from high-traffic websites to complex product features.\n\nToday, I combine development, AI automation, and product thinking to help founders and teams move faster without sacrificing quality.'
        : 'Je suis développeur fullstack avec une obsession: livrer des produits digitaux qui génèrent des résultats business mesurables.\n\nDepuis plus de 10 ans, j\'accompagne des équipes comme PayFit et Capgemini, du site web à fort trafic aux fonctionnalités produit complexes.\n\nAujourd\'hui, je combine développement, automatisation IA et vision produit pour aider les équipes à aller vite sans compromettre la qualité.',
    values: [
      { icon: 'lightning', label: lang === 'en' ? 'Fast delivery' : 'Livraison rapide' },
      { icon: 'shield', label: lang === 'en' ? 'Clean code' : 'Code propre' },
      { icon: 'chat', label: lang === 'en' ? 'Clear comms' : 'Communication claire' },
      { icon: 'trend-up', label: lang === 'en' ? 'Product thinking' : 'Vision produit' },
    ],
  },
  contact: {
    eyebrow: lang === 'en' ? 'Get in touch' : 'Contact',
    title:
      lang === 'en'
        ? "Let's build your next\ngrowth system."
        : 'Construisons votre prochain\nsystème de croissance.',
    subtitle:
      lang === 'en'
        ? 'Tell me what you need: website, app, AI automation, or n8n/no-code workflow. I reply within 24 hours.'
        : 'Expliquez votre besoin: website, app, automatisation IA, ou workflow n8n/no-code. Réponse sous 24h.',
    fields: {
      email: lang === 'en' ? 'Work email' : 'Email professionnel',
      context: lang === 'en' ? 'URL or stack context' : 'URL ou contexte stack',
      contextPlaceholder:
        lang === 'en'
          ? 'https://your-site.com or current stack'
          : 'https://votre-site.fr ou stack actuelle',
      objective: lang === 'en' ? 'Primary objective (optional)' : 'Objectif principal (optionnel)',
      objectivePlaceholder:
        lang === 'en'
          ? 'Ex: launch a conversion-focused website in 6 weeks'
          : 'Ex: lancer un site orienté conversion en 6 semaines',
      submit: lang === 'en' ? 'Send my request' : 'Envoyer ma demande',
    },
    privacy:
      lang === 'en'
        ? 'No spam. You can unsubscribe anytime.'
        : 'Pas de spam. Désinscription possible à tout moment.',
    success:
      lang === 'en'
        ? 'Message sent. I\'ll be in touch shortly.'
        : 'Message envoyé. Je reviens vers vous rapidement.',
  },
  footer: {
    tagline: 'Just dev it.',
    rights: lang === 'en' ? 'All rights reserved.' : 'Tous droits réservés.',
    privacy: lang === 'en' ? 'Privacy' : 'Confidentialité',
    links: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
});
