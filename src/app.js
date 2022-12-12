import Vue from 'nativescript-vue'

import Login from './views/adm/login/Login'

import store from './store/store'

Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(Login)]),
  store: store
}).$start()
