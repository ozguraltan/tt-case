import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
    ]
  },

]

export default new VueRouter({
  mode: 'history',
  routes
})
