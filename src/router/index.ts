import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'auth',
    meta: { requiresAuth: false },
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/RegisterView.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { requiresAuth: true },
    component: () => import('@/views/DashboardView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()
  const { isAuthenticated } = storeToRefs(authStore)

  if (to.name !== 'login' && !isAuthenticated.value && to.meta.requiresAuth) {
    return { name: 'login' }
  }

  if (isAuthenticated.value && !to.meta.requiresAuth) {
    return { name: 'dashboard' }
  }
})

export default router
