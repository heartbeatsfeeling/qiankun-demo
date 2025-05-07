import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/Home.vue'

// 配置主应用的路由
const routes = [
  {
    path: '/',
    component: About
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
});