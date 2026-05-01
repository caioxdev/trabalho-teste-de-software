import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    meta: { hideHeader: true }
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});