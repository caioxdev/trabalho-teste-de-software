import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '@/stores/auth'

import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";
import Politicas from "@/pages/Politicas.vue";
import Interesses from "@/pages/Interesses.vue";
import Orientacoes from "@/pages/Orientacoes.vue";
import GerenciarPoliticas from "@/pages/Gerenciar-politicas.vue";
import CadastrarPoliticas from "@/pages/Cadastrar-politicas.vue";

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    meta: {
      public: true,
      hideHeader: true,
      hideFooter: true
    }
  },
  {
    path: '/home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/politicas',
    component: Politicas,
    meta: { requiresAuth: true }
  },
  {
    path:'/politicas/:id',
    component: () => import('@/pages/Detalhes.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/interesses',
    component: Interesses,
    meta: { requiresAuth: true }
  },
  {
    path: '/orientacoes',
    component: Orientacoes,
    meta: { requiresAuth: true }
  },
  {
    path: '/gerenciar-politicas',
    component: GerenciarPoliticas,
    meta: {
      requiresAuth: true,
      role: 'admin'
    }
  },
  {
    path: '/cadastrar-politicas',
    component: CadastrarPoliticas,
    meta: {
      requiresAuth: true,
      role: 'admin'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to) => {
  const auth = useAuthStore();
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);
  const isPublic = to.matched.some(route => route.meta.public);
  const role = to.matched.find(r => r.meta.role)?.meta.role;

  if (requiresAuth && !auth.isAuthenticated) {
    return { path: '/login' } ;
  }

  if (role === 'admin' && auth.user?.perfil !== 'admin') {
    return { path: '/home' };
  }

  if (isPublic && auth.isAuthenticated) {
    return { path: '/home' };
  }
});

export default router;