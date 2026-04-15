module.exports = {
  ci: {
    collect: {
      staticDistDir: 'dist',
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
      },
      url: [
        'http://localhost/',
        'http://localhost/fr/',
        'http://localhost/services/website/',
        'http://localhost/services/app/',
        'http://localhost/services/ai-automation/',
        'http://localhost/services/n8n/',
        'http://localhost/fr/services/website/',
        'http://localhost/fr/services/app/',
        'http://localhost/fr/services/ai-automation/',
        'http://localhost/fr/services/n8n/',
      ],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.75 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
