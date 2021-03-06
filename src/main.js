import Vue from 'vue'
import App from './App'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/reset.css'
import '@/styles/global.scss'

Vue.config.productionTip = false

import './mock'
import './mount'

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
