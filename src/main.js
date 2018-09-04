// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import stores from './store'
import axios from 'axios'
import ElementUI from 'element-ui'

import './assets/css/element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: stores,
  components: { App },
  template: '<App/>'
})
