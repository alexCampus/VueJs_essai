// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueX from 'vuex'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './components/DataStore'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueResource,
  store,
  template: '<App/>',
  components: { App }
})
