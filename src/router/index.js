import { createRouter, createWebHistory } from "vue-router";

import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";
import Politicas from "@/pages/Politicas.vue";
import Interesses from "@/pages/Interesses.vue";
import Orientacoes from "@/pages/Orientacoes.vue";

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    meta: {
      hideHeader: true,
      hideFooter: true
    }
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/politicas',
    component: Politicas
  },
  {
    path: '/interesses',
    component: Interesses
  },
  {
    path: '/orientacoes',
    component: Orientacoes
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});