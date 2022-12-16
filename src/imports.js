import Vue from 'vue'

/* App(Tav) Level Component imports  */
const ProductListCard = () => import('@/components/products/ProductListCard')
const ProductStatusText = () => import('@/components/ui/ProductStatusText')
const AppForm = () => import('@/components/ui/AppForm')
const AppCheckboxGroup =  () => import ('@/components/inputs/AppCheckboxGroup')
/* Vuetify components for dynamic imports */
const VTextField = () => import('vuetify/lib/components/VTextField')
const VSelect = () => import('vuetify/lib/components/VSelect')
const VTextarea = () => import('vuetify/lib/components/VTextarea')
const VListItem = () => import('vuetify/lib/components/VList/VListItem')
const VListGroup = () => import('vuetify/lib/components/VList/VListGroup')

/* Global Components Declarations */
Vue.component('ProductListCard', ProductListCard)
Vue.component('ProductStatusText', ProductStatusText)
Vue.component('AppForm', AppForm)
Vue.component('AppCheckboxGroup', AppCheckboxGroup)
Vue.component('VTextField', VTextField)
Vue.component('VSelect', VSelect)
Vue.component('VTextarea', VTextarea)
Vue.component('VListItem', VListItem)
Vue.component('VListGroup', VListGroup)
/* Global Components Declarations End */



