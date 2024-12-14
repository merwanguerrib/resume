import { getStoryblokVersion, getStoryblokApiInstance } from './config';
import { BioBlock } from './types';

export async function getBioData(): Promise<BioBlock> {
  console.log('Fetching Bio data...');
  const storyblokApi = getStoryblokApiInstance();
  const { data } = await storyblokApi.get('cdn/stories/resume/bio', {
    version: getStoryblokVersion(),
    resolve_relations: process.env.NODE_ENV === 'development' ? '1' : '0',
  });
  console.log('Bio data received:', data);
  return data.story.content;
}
