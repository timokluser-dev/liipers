import {GetterTree} from 'vuex';
import {StoryblokState} from '@/store/storyblok/index';
import {StoryData} from 'storyblok-js-client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getters: GetterTree<StoryblokState, any> = {
  story: (state): StoryData | null => {
    return state.story;
  },
  storyLoading: (state): boolean => {
    return state.storyLoading;
  },
};
