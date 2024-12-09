import { storyblokInit, apiPlugin } from "@storyblok/react";

// Import your components
// import Feature from '../components/Feature';
// import Grid from '../components/Grid';
// import Page from '../components/Page';
// import Teaser from '../components/Teaser';

const components = {
  // feature: Feature,
  // grid: Grid,
  // page: Page,
  // teaser: Teaser,
};

export function initStoryblok() {
  storyblokInit({
    accessToken: process.env.REACT_APP_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components,
    apiOptions: {
      region: "eu", // Set to 'eu' or 'us' depending on your Storyblok space region
    },
  });
}
