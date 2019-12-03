import Vue from 'vue'
import App from './App.vue'
import Best from '../src/index'
import '../packages/theme/src/index.scss'

Vue.config.productionTip = false
Vue.use(Best)

new Vue({
  render: h => h(App)
}).$mount('#app')
