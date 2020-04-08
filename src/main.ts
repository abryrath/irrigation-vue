import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueTailwind from 'vue-tailwind';
import '@/app.scss';

Vue.config.productionTip = false;
Vue.use(VueTailwind);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
