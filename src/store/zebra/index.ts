import {Module} from 'vuex';
import {mutations} from '@/store/zebra/mutations';
import {actions} from '@/store/zebra/actions';
import {getters} from '@/store/zebra/getters';

import {Liiper} from '@/store/zebra/models';

export interface ZebraState {
  liipers: Liiper[] | null;
  liipersLoading: boolean;
  liiper: Liiper | null;
  liiperLoading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const zebraModule: Module<ZebraState, any> = {
  state: () => ({
    liipers: null,
    liipersLoading: false,
    liiper: null,
    liiperLoading: false,
  }),
  actions,
  getters,
  mutations,
  namespaced: true,
};

export default zebraModule;
