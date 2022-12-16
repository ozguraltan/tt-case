import Vue from 'vue'
import store from '@/store/index'
import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/i18n'
import router from '@/router'
import App from '@/App'
import VueMeta from 'vue-meta'
import { api } from '@/plugins/api'
import VeeValidate, { Validator } from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
Vue.use(VeeValidate, {
  mode: 'eager',
})
Validator.localize('en', en)
// App Level Styles
import '@/scss/app.sass'
require('@/imports')
Vue.use(VueMeta)
Vue.prototype.$api = api

new Vue({
  router,
  vuetify,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
