import Vue from 'vue'
import App from './App.vue'
import router from './core/router'
import axios from './core/interceptor/token';
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(axios)
Vue.prototype.$http = axios

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
