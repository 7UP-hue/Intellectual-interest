/*
 * @Description: 
 * @Author: caojun
 * @Date: 2022-05-31 21:26:31
 * @LastEditors: caojun
 * @LastEditTime: 2022-05-31 22:30:44
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Index from '../pages/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: (_) => {
      return { path: '/home' }
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/home.vue'),
    children: [
      {
        path :'',
        name:'HelloWorld',
        component: () => import('../pages/HelloWorld.vue')
      },
      {
        path :'/infoEnter',
        name:'infoEnter',
        component: () => import('../pages/infoEnter.vue')
      },
      {
        path :'/infoManage',
        name:'infoManage',
        component: () => import('../pages/infoManage.vue')
      },
      {
        path :'/upload',
        name:'upload',
        component: () => import('../pages/upload.vue')
      }
    ]
  },
  {
    path: '/aaa',
    name: 'aaa',
    component: () => import('../components/aaa.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue'),
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