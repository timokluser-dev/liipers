import StoryblokClient, {StoryblokConfig} from 'storyblok-js-client';

export const storyblokConfig: StoryblokConfig = {
  accessToken: process.env.VUE_APP_STORYBLOK_TOKEN,
};

export function createStoryblokClient(): StoryblokClient {
  return new StoryblokClient(storyblokConfig);
}
