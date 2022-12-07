import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import generic from '@/store/modules/generic';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    generic,
  },
});