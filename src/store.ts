import Vue from 'vue';
import Vuex from 'vuex';
import { fetchForecastToday, fetchLastRun } from '@/util/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forecastLoading: true,
    forecast: null,
    lastRunLoading: true,
    lastRun: null,
  },
  mutations: {
    setForecast(state, forecast) {
      state.forecast = forecast;
      state.forecastLoading = false;
    },
    setLastRun(state, lastRun) {
      state.lastRun = lastRun;
      state.lastRunLoading = false;
    },
  },
  actions: {
    fetchForecast(context) {
      fetchForecastToday().then((forecast) =>
        context.commit('setForecast', forecast),
      );
    },
    fetchLastRun(context) {
      fetchLastRun().then((lastRun) => context.commit('setLastRun', lastRun));
    },
  },
});
