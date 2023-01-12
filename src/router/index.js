import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/louis',
    name: 'louis',
    component: () => import(/* webpackChunkName: "louis" */ '../views/AView.vue')
  },
  {
    path: '/leo',
    name: 'leo',
    component: () => import(/* webpackChunkName: "louis" */ '../views/BView.vue')
  },
  {
    path: '/raymond',
    name: 'raymond',
    component: () => import(/* webpackChunkName: "louis" */ '../views/CView.vue')
  },
  {
    path: '/jenny',
    name: 'jenny',
    component: () => import(/* webpackChunkName: "jenny" */ '../views/DView.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
