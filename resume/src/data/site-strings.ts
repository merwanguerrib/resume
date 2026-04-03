export type Lang = 'en' | 'fr';

export const t = (lang: Lang) => ({
  nav: {
    services: lang === 'en' ? 'Services' : 'Services',
    work: lang === 'en' ? 'Work' : 'Projets',
    about: lang === 'en' ? 'About' : 'À propos',
    contact: lang === 'en' ? 'Start a project' : 'Démarrer',
  },
  hero: {
    available: lang === 'en' ? 'Available for new projects' : 'Disponible pour de nouveaux projets',
    tagline: 'Just dev it.',
    subtitle:
      lang === 'en'
        ? 'Premium web & app development.\nBuilt fast, built right.'
        : 'Développement web & app premium.\nVite fait, bien fait.',
    cta_primary: lang === 'en' ? 'Start a project' : 'Démarrer un projet',
    cta_secondary: lang === 'en' ? 'See my work' : 'Voir mes projets',
    trustedBy: lang === 'en' ? 'Trusted by' : 'Ils me font confiance',
  },
  stats: [
    { value: '6+', label: lang === 'en' ? 'Years of experience' : "Années d'expérience" },
    { value: '12+', label: lang === 'en' ? 'Projects delivered' : 'Projets livrés' },
    { value: '100%', label: lang === 'en' ? 'Remote-ready' : 'Full remote' },
  ],
  services: {
    eyebrow: lang === 'en' ? 'What I do' : 'Ce que je fais',
    title:
      lang === 'en'
        ? 'Every layer of the stack,\ncovered.'
        : 'Toutes les couches du stack,\ncouvertes.',
  },
  work: {
    eyebrow: lang === 'en' ? 'Selected work' : 'Projets sélectionnés',
    title: lang === 'en' ? 'Results that speak\nfor themselves.' : 'Des résultats qui\nparlent d\'eux-mêmes.',
    cta: lang === 'en' ? 'View case study' : 'Voir le cas client',
  },
  process: {
    eyebrow: lang === 'en' ? 'How it works' : 'Comment ça marche',
    title: lang === 'en' ? 'Fast, transparent,\nno surprises.' : 'Rapide, transparent,\nsans surprises.',
    steps: [
      {
        number: '01',
        title: lang === 'en' ? 'Discovery' : 'Découverte',
        description:
          lang === 'en'
            ? 'We align on goals, scope, and timeline. I ask the right questions so nothing gets lost in translation.'
            : 'On s\'aligne sur les objectifs, le périmètre et le calendrier. Je pose les bonnes questions.',
      },
      {
        number: '02',
        title: 'Design',
        description:
          lang === 'en'
            ? 'Wireframes and high-fidelity mockups in Figma. You see exactly what we\'re building before a line of code is written.'
            : 'Wireframes et maquettes haute fidélité en Figma. Vous voyez exactement ce qu\'on construit avant d\'écrire une ligne de code.',
      },
      {
        number: '03',
        title: lang === 'en' ? 'Build' : 'Développement',
        description:
          lang === 'en'
            ? 'Clean, documented code. Weekly updates. You\'re never left wondering where the project stands.'
            : 'Code propre et documenté. Updates hebdomadaires. Vous savez toujours où en est le projet.',
      },
      {
        number: '04',
        title: 'Launch',
        description:
          lang === 'en'
            ? 'Deployed, tested, and handed over with full documentation. I stay available for 30 days post-launch.'
            : 'Déployé, testé et livré avec documentation complète. Je reste disponible 30 jours après le lancement.',
      },
    ],
  },
  about: {
    eyebrow: lang === 'en' ? 'About me' : 'À propos',
    title: lang === 'en' ? 'Merwan Guerrib' : 'Merwan Guerrib',
    bio:
      lang === 'en'
        ? 'Fullstack developer with 6+ years building web products for startups and scale-ups. I\'ve shipped features used by hundreds of thousands of people at companies like PayFit and Capgemini.\n\nI work best at the intersection of solid engineering and product thinking — writing code that\'s clean, fast, and built for the real world.\n\nBased in Marseille, available worldwide.'
        : 'Développeur fullstack avec 6+ ans d\'expérience à construire des produits web pour des startups et scale-ups. J\'ai livré des fonctionnalités utilisées par des centaines de milliers de personnes chez PayFit et Capgemini.\n\nJe suis à mon meilleur à l\'intersection de l\'ingénierie solide et de la pensée produit.\n\nBasé à Marseille, disponible dans le monde entier.',
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
        ? "Let's build something\ntogether."
        : 'Construisons quelque\nchose ensemble.',
    subtitle:
      lang === 'en'
        ? 'Tell me about your project. I\'ll get back to you within 24 hours.'
        : 'Parlez-moi de votre projet. Je vous réponds sous 24 heures.',
    fields: {
      name: lang === 'en' ? 'Full name' : 'Nom complet',
      email: 'Email',
      project: lang === 'en' ? 'Project description' : 'Description du projet',
      budget: lang === 'en' ? 'Estimated budget' : 'Budget estimé',
      budgetOptions: [
        lang === 'en' ? 'Select a range' : 'Sélectionner une fourchette',
        '< 3 000€',
        '3 000 – 8 000€',
        '8 000 – 20 000€',
        '20 000€+',
      ],
      submit: lang === 'en' ? 'Send message' : 'Envoyer le message',
    },
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
