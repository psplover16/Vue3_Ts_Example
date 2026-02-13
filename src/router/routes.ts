import type { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FormValidationView from '@/views/FormValidationView.vue';
import CrudView from '@/views/CrudView.vue';
import AboutView from '@/views/AboutView.vue';

// 路由設定：示範前端路由的基礎概念
export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/forms', name: 'forms', component: FormValidationView },
  {
    path: '/crud',
    name: 'crud',
    component: CrudView,
    meta: { requiresAuth: true }
  },
  { path: '/about', name: 'about', component: AboutView }
];
