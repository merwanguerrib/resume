module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
      sites: [
        {
          name: "strapi-merwanguerrib",
          id: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_SITE_ID,
          buildHook:
            `https://api.netlify.com/build_hooks/${process.env.NETLIFY_DEPLOYMENTS_PLUGIN_BUILD_HOOK_ID}`,
          branch: "main",
        },
      ],
    },
  },
});
