import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use('VueRouter')

new Vue({
  router:Router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
