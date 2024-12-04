import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home',
    meta: { requiresAuth: false },
    redirect: to => {
      const authStore = useAuthStore()
      const { isAuthenticated } = storeToRefs(authStore)

      if (isAuthenticated.value) {
        return 'dashboard';
      }

      return 'login';
    },
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
    name: 'auth',
    meta: { requiresAuth: true },
    component: () => import('@/layouts/AuthenticatedLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/DashboardView.vue')
      }
    ]
  },
  {
    path: '/verify-email',
    name: 'email-verify',
    meta: { requiresAuth: true },
    component: () => { },
    beforeEnter: async (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const authStore = useAuthStore()
      const { isVerified } = storeToRefs(authStore)
      const { validateEmail } = authStore
      if (isVerified.value) {
        next({ name: 'dashboard' })
        return
      }

      if (to.query.url && to.query.signature) {
        const backendUrl = `${to.query.url}&signature=${to.query.signature}`
        await validateEmail(backendUrl)
      }

      next({ name: 'dashboard' })
    }
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

})

export default router
