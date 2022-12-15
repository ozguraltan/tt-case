import Vue from 'vue'
import Vuex from 'vuex'
import appStore from '@/store/appStore'
import productStore from '@/store/productStore'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    appStore,
    productStore
  },
  strict: debug,
});
