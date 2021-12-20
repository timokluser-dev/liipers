import {ZebraState} from '@/store/zebra/index';
import {ActionTree} from 'vuex';
import {createApiClient} from '@/helpers/api-client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const actions: ActionTree<ZebraState, any> = {
  async fetchLiipers({commit}) {
    commit('setLiipersLoading');

    const response = await createApiClient().get('users', {params: {status: ['liiper']}});
    if (response.data && response.data.success) {
      commit('updateLiipers', Object.values(response.data.data.list));
    }
  },
  async fetchLiiper({commit}, id: number) {
    commit('setLiiperLoading');

    const response = await createApiClient().get('users', {params: {ids: [id]}});
    if (response.data && response.data.success) {
      commit('updateLiiper', Object.values(response.data.data.list)[0] ?? null);
    }
  },
};
