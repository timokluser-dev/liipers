import {Module} from 'vuex';
import {mutations} from '@/store/storyblok/mutations';
import {actions} from '@/store/storyblok/actions';
import {getters} from '@/store/storyblok/getters';

import {StoryData} from 'storyblok-js-client';

export interface StoryblokState {
  story: StoryData | null;
  storyLoading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const storyblokModule: Module<StoryblokState, any> = {
  state: () => ({
    story: null,
    storyLoading: false,
  }),
  actions,
  getters,
  mutations,
  namespaced: true,
};

export default storyblokModule;
