import Vue from 'nativescript-vue'

import Login from './views/adm/login/Login'

import { TNSFontIcon, fonticon } from 'nativescript-fonticon'

import store from './store/store'

Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(Login)]),
  store: store,
}).$start()

TNSFontIcon.debug = true
TNSFontIcon.paths = {
  fa: './assets/css/brands.css',
}
TNSFontIcon.loadCss()
Vue.filter('fonticon', fonticon)