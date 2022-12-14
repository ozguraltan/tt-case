import VueI18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(VueI18n)
import en from '@/messages/en'
const i18n = new VueI18n({
  locale: 'en',
  messages: {en},
})
export default i18n
