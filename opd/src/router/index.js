import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../components/Main.vue')
  },
  {
    path: '/prod',
    name: 'Product',
    component: () => import(/* webpackChunkName: "about" */ '../components/Product.vue')
  },
  {
    path: '/cont',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../components/Contacts.vue')
  },
  {
    path: '/liter',
    name: 'Literature',
    component: () => import(/* webpackChunkName: "about" */ '../components/Literature.vue')
  },
  {
    path: '/pres',
    name: 'Presentation',
    component: () => import(/* webpackChunkName: "about" */ '../components/Presentation.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
