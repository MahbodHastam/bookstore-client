import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  { path: '/', component: () => import('./pages/index.vue') },
  { path: '/about', component: () => import('./pages/about.vue') },
  { path: '/features', component: () => import('./pages/features.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
