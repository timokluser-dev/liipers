import {ZebraState} from '@/store/zebra/index';
import {GetterTree} from 'vuex';
import {Liiper} from '@/store/zebra/models';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getters: GetterTree<ZebraState, any> = {
  liipers: (state): Liiper[] | null => {
    return state.liipers;
  },
  liipersNameAscending: (state): Liiper[] | null => {
    if (!state.liipers) return null;

    return state.liipers.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  },
  liipersLoading: (state): boolean => {
    return state.liipersLoading;
  },
  liiper: (state): Liiper | null => {
    return state.liiper;
  },
  liiperLoading: (state): boolean => {
    return state.liiperLoading;
  },
};
