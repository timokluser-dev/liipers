import Vue from 'vue';
import Vuex from 'vuex';
import zebra from './zebra';
import storyblok from './storyblok';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    zebra,
    storyblok,
  },
});
