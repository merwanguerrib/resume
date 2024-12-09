import { storyblokInit, apiPlugin } from '@storyblok/react';
import { getStoryblokApi } from '@storyblok/react';

interface StoryContent {
  component: string;
  [key: string]: any;
}

interface Story {
  content: StoryContent;
}

const testStoryblokConnection = async () => {
  try {
    // Initialize Storyblok
    storyblokInit({
      accessToken: process.env.REACT_APP_STORYBLOK_TOKEN,
      use: [apiPlugin],
    });

    // Get the Storyblok API instance
    const storyblokApi = getStoryblokApi();

    console.log('Testing Storyblok connection...');
    
    // Test general connection
    const space = await storyblokApi.get('cdn/spaces/me');
    console.log('✅ Successfully connected to Storyblok space:', space.data.space.name);
    
    // Test stories endpoint (get all stories)
    const stories = await storyblokApi.get('cdn/stories', {
      version: 'draft'
    });
    
    if (stories.data.stories.length > 0) {
      console.log('✅ Retrieved stories:', stories.data.stories.length);
      const storyTypes = Array.from(
        new Set(
          stories.data.stories.map((story: Story) => story.content.component)
        )
      );
      console.log('Available story types:', storyTypes);
    } else {
      console.log('ℹ️ No stories found in your space. You might want to create some content first.');
    }
  } catch (error) {
    console.error('❌ Error connecting to Storyblok:', error);
  }
};

// Run the test
testStoryblokConnection();
