import {MutationTree} from 'vuex';
import {StoryData} from 'storyblok-js-client';
import {StoryblokState} from '@/store/storyblok/index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mutations: MutationTree<any> = {
  updateStory: (state: StoryblokState, story: StoryData) => {
    state.story = story;
    state.storyLoading = false;
  },
  setStoryLoading: (state: StoryblokState) => {
    state.storyLoading = true;
  },
};
