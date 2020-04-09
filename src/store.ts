import Vue from 'vue';
import Vuex from 'vuex';
import forecast from '@/store/forecast';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  modules: {
    forecast,
  },
});
