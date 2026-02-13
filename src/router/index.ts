import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { pinia } from '@/stores';
import { useAuthStore } from '@/stores/useAuthStore';

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Router Guard：示範簡單的權限控制
router.beforeEach((to) => {
  const authStore = useAuthStore(pinia);
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { path: '/' };
  }
  return true;
});

export default router;
