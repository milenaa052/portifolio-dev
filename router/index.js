import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../pages/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/Sobre.vue')
    }
  ]
})

export default router
