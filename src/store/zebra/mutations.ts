import {ZebraState} from '@/store/zebra/index';
import {MutationTree} from 'vuex';
import {Liiper} from '@/store/zebra/models';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mutations: MutationTree<any> = {
  updateLiipers: (state: ZebraState, liipers: Liiper[]) => {
    state.liipers = liipers;
    state.liipersLoading = false;
  },
  setLiipersLoading: (state: ZebraState) => {
    state.liipersLoading = true;
  },
  updateLiiper: (state: ZebraState, liiper: Liiper) => {
    state.liiper = liiper;
    state.liiperLoading = false;
  },
  setLiiperLoading: (state: ZebraState) => {
    state.liiperLoading = true;
  },
};
