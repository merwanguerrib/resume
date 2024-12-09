import { storyblokInit, apiPlugin, getStoryblokApi } from '@storyblok/react';

// Initialize Storyblok client with API plugin
storyblokInit({
  accessToken: process.env.REACT_APP_STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu', // Set to 'eu' or 'us' depending on your Storyblok space region
    cache: {
      type: 'memory'
    }
  }
});

// Get the API instance
const storyblokApi = getStoryblokApi();

// Export the API instance
export { storyblokApi };

// Helper functions for common API calls
export const getArticles = async () => {
  try {
    return await storyblokApi.get('cdn/stories', {
      version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
      starts_with: 'blog/',
      is_startpage: false
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const getArticleBySlug = async (slug: string) => {
  try {
    return await storyblokApi.get(`cdn/stories/blog/${slug}`, {
      version: process.env.NODE_ENV === 'development' ? 'draft' : 'published'
    });
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error);
    throw error;
  }
};
