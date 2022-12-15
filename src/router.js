import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/Home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: 'case-study', name: 'home', component: Home},
      { path: 'detail/:slug', name: 'detail' }
    ]
  },

]

export default new VueRouter({
  mode: 'history',
  routes
})
