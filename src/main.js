import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import Tabletop from 'tabletop';

Vue.config.productionTip = false;

export const globalStore = new Vue({
  data: {
    response: Tabletop.init({
      key: '169imA-s-IP57blAcVE0hvLJmoKv3jGNTgPHD3wvC7WI',
      simpleSheet: false
    })
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
