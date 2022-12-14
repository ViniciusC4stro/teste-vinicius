import Vue from 'nativescript-vue'

import Login from './views/adm/login/Login'

import FontIcon from 'nativescript-vue-fonticon'

import store from './store/store'

import './app.css'

Vue.config.silent = !__DEV__

Vue.use(FontIcon, {
  componentName: 'FIcon', // <-- Optional. Will be the name for component icon.
  debug: true, // <-- Optional. Will output the css mapping to console.
  paths: {
    fa: './assets/css/font-awesome1.css',
  }
})

new Vue({
  render: (h) => h('frame', [h(Login)]),
  store: store,
}).$start()

