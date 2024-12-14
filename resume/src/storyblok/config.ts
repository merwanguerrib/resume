import { storyblokInit, apiPlugin, getStoryblokApi } from '@storyblok/react';
import { Bio } from '../components/Resume/Bio/Bio';

// Components registry
const components = {
  bio: Bio
};

let storyblokApiInstance: any = null;

// Initialize Storyblok
export function initStoryblok() {
  console.log('Starting Storyblok initialization...');
  try {
    storyblokInit({
      accessToken: process.env.REACT_APP_STORYBLOK_TOKEN,
      use: [apiPlugin],
      components,
      apiOptions: {
        region: 'eu',
        cache: {
          type: 'memory'
        }
      }
    });
    storyblokApiInstance = getStoryblokApi();
    console.log('Storyblok initialized with token:', process.env.REACT_APP_STORYBLOK_TOKEN);
  } catch (error) {
    console.error('Error initializing Storyblok:', error);
  }
}

// Get version based on environment
export const getStoryblokVersion = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'draft'; // Always get draft in development (includes both draft and published)
  }
  return 'published'; // Only published content in production
};

// Get API instance
export const getStoryblokApiInstance = () => {
  if (!storyblokApiInstance) {
    throw new Error('Storyblok API not initialized');
  }
  return storyblokApiInstance;
};

// Helper functions for common API calls
export const getArticles = async () => {
  try {
    return await getStoryblokApiInstance().get('cdn/stories', {
      version: getStoryblokVersion(),
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
    return await getStoryblokApiInstance().get(`cdn/stories/blog/${slug}`, {
      version: getStoryblokVersion()
    });
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error);
    throw error;
  }
}; 