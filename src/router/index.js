import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        { path: '/segunda', component: () => import('../views/Segunda.vue') },
        { path: '/terca', component: () => import('../views/Terca.vue') },
        { path: '/quarta', component: () => import('../views/Quarta.vue') },
        { path: '/quinta', component: () => import('../views/Quinta.vue') },
        { path: '/sexta', component: () => import('../views/Sexta.vue') },
        { path: '/sabado', component: () => import('../views/Sabado.vue') },
      ]
    },
    {
      path: '/sobre',
      name: 'sobre',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/sobre.vue')
    }
  ]
})

export default router
