import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  /* created() {
    router.push('/');
  }, */
  render: h => h(App),
}).$mount('#app');
