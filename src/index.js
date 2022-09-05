import Vue from 'vue'
import App from './page/app'
import router from './router'
import store from './vuex'
import './responsive'
import './assets/icon/loadAll.js'
import './index.css'

Vue.config.productionTip = false

import { post } from './api'
Vue.prototype.$post = post

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
