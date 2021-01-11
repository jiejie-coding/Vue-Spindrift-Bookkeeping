import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Icons from '@/components/Icons.vue';
import Layout from '@/components/Layout.vue';

Vue.config.productionTip = false

Vue.component('Icons',Icons)
Vue.component('Layout',Layout);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
