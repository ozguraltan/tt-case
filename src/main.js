import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import App from '@/App'

// App Level Styles
import '@/scss/app.sass'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
