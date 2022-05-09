import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  { path: '/', component: () => import('./pages/index.vue') },
  { path: '/books', component: () => import('./pages/books.vue') },
  { path: '/about', component: () => import('./pages/about.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
