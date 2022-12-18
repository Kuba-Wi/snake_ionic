import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/game/:board_size',
    name: 'game',
    component: () => import('../views/GameView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
