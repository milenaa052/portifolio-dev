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
      path: '/sobre',
      name: 'sobre',
      component: () => import('../components/Sobre.vue')
    },
    {
      path: '/formacao',
      name: 'formacao',
      component: () => import('../components/Formacao.vue')
    },
    {
      path: '/certificados',
      name: 'certificados',
      component: () => import('../components/Certificados.vue')
    },
    {
      path: '/experiencia',
      name: 'experiencia',
      component: () => import('../components/Experiencia.vue')
    },
    {
      path: '/skils',
      name: 'skils',
      component: () => import('../components/Skils.vue')
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: () => import('../components/Projetos.vue')
    },
  ]
})

export default router;