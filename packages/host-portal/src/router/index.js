import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/micro1',
    name: 'Microfront1',
    component: () => import('mfMicrofront1/App')
  },
  {
    path: '/micro2',
    name: 'Microfront2',
    component: () => import('mfMicrofront2/App')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 