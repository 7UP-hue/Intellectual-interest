import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
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
    path:'/file',
    name:'File',
    component: () => import('../pages/file.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../pages/home.vue'),
    children: [
      {
        name:'ShowSubject', 
        path:'',  
        component: () => import('../pages/showSubject.vue')
      },
      {
        name:'ShowDetail',
        path:'showDetail',
        component: () => import('../pages/showDetail.vue')
      }
    ]
  },
  {
    path: '/aaa',
    name: 'aaa',
    component: () =>
    import('../components/aaa.vue'),
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../pages/admin/manage.vue'),
    children: [
      {
        path: '',
        name: 'manage',
        component: () => import('../pages/admin/home.vue')
      },
      {
        path: '/uploadList',
        name: 'uploadList',
        component: () => import('../pages/admin/resource/index.vue'),
        meta: ['资源管理', '资源列表']
      },
      {
        path: '/uploadRes',
        name: 'uploadRes',
        component: () => import('../pages/admin/resource/addResource.vue'),
        meta: ['资源管理', '上传']
      },
      {
        path: '/userList',
        name: 'users',
        component: () => import('../pages/admin/userList/index.vue'),
        meta: ['用户管理', '用户列表']
      },
      {
        path: '/adminList',
        name: 'admin',
        component: () => import('../pages/admin/adminList/index.vue'),
        meta: ['用户管理', '管理员列表']
      },
      {
        path: '/explain',
        name: 'explain',
        component: () => import('../pages/admin/explain.vue'),
        meta: ['系统管理', '说明']
      }
    ]
  },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: (_) => {
      return { path: '/404' }
    },
  },
  {
    path: '/404',
    component: () => import('../pages/404.vue')
  }
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