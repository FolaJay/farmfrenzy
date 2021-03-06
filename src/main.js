import Vue from 'vue';
import Default from '@/components/layout.vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import Loading from '@/components/loading.vue';

Vue.component('default-layout', Default);
Vue.component('loading', Loading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
