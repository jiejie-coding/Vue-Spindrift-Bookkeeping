import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui';
import { DatePicker, Dropdown, DropdownItem, DropdownMenu} from 'element-ui';


import Icons from '@/components/Icons.vue';
import Layout from '@/components/Layout.vue';

Vue.config.productionTip = false

import '@/assets/style/element-ui.scss';
// Vue.use(ElementUI);
Vue.use(DatePicker);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
import 'default-passive-events'

// import ECharts from 'vue-echarts/components/ECharts.vue'
// Vue.component('chart', ECharts)


Vue.component('Icons',Icons)
Vue.component('Layout',Layout);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
