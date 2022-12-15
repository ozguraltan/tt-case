import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/i18n'
import router from '@/router'
import App from '@/App'
import VueMeta from 'vue-meta'
// App Level Styles
import '@/scss/app.sass'
import store from '@/store/index'
require('@/imports')
Vue.use(VueMeta)

new Vue({
  router,
  vuetify,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
