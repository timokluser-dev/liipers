import {ActionTree} from 'vuex';
import {StoryblokState} from '@/store/storyblok/index';
import {createStoryblokClient} from '@/helpers/storyblok-client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const actions: ActionTree<StoryblokState, any> = {
  async fetchStory({commit}, slug: string) {
    commit('setStoryLoading');

    try {
      const response = await createStoryblokClient().getStory(slug, {
        version: process.env.VUE_APP_STORYBLOK_VERSION ?? 'published',
      });
      if (response.data) {
        commit('updateStory', response.data.story);
      }
    } catch (e) {
      commit('updateStory', null);
    }
  },
};
