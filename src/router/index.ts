import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../pages/home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: (_) => {
      return { path: '/home' }
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('../pages/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import('../pages/register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () =>
      import('../pages/home.vue')
  },
  {
    path: '/aaa',
    name: 'aaa',
    component: () =>
    import('../components/aaa.vue'),
  },
  {
    path: '/about',
    name: 'About',
 
    component: () =>
      import('../components/About.vue'),
  },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: (_) => {
      return { path: '/404' }
    },
  },
]
const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})
export default router