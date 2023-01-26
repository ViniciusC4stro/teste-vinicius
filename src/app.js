import Vue from 'nativescript-vue'

import Login from './views/adm/login/Login'
import Calendar from './views/adm/teste/Teste'

import FontIcon from 'nativescript-vue-fonticon'

import store from './store/store'

// import CalendarView from 'nativescript-ui-calendar/vue';

import './app.css'
import RadCalendar from 'nativescript-ui-calendar/vue'

Vue.use(RadCalendar)

Vue.config.silent = !__DEV__

Vue.use(FontIcon, {
  componentName: 'FIcon', // <-- Optional. Will be the name for component icon.
  debug: true, // <-- Optional. Will output the css mapping to console.
  paths: {
    fa: './assets/css/font-awesome1.css',
  }
})

new Vue({
  render: (h) => h('frame', [h(Calendar)]),
  store: store,
}).$start()

