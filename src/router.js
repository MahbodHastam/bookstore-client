import IndexPage from './pages/index.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  { path: '/', component: IndexPage}
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
