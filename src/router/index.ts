import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import store from "@/store";
// import Home from '../pages/home.vue'

/**
 * meta
 *   title: 名称
 *   needAuth: 是否需要登录
 *   roles: 身份
 */

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
      import('../pages/login.vue'),
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
    component: () => import('../pages/file.vue'),
    meta: {
      needAuth: false ,
      roles: null
    }
  },
  {
    path:'/discussion',
    name:'discussion',
    component: () => import('../pages/discussion/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../pages/home.vue'),
    children: [
      {
        name:'ShowSubject', 
        path:'',
        component: () => import('../pages/showSubject.vue'),
        meta: {
          needAuth: false ,
          roles: null
        },
      },
      {
        name:'ShowDetail',
        path:'showDetail',
        component: () => import('../pages/showDetail.vue'),
        meta: {
          needAuth: false,
          roles: null
        },
      }
    
    ]
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../pages/admin/manage.vue'),
    children: [
      {
        path: '',
        name: 'manage',
        component: () => import('../pages/admin/home.vue'),
        meta: {
          needAuth: true ,
          roles: 'teacher'
        }
      },
      {
        path: '/uploadList',
        name: 'uploadList',
        component: () => import('../pages/admin/resource/index.vue'),
        meta: {
          title:['资源管理', '资源列表'],
          needAuth: true ,
          roles: 'teacher'
        }
      },
      {
        path: '/uploadRes',
        name: 'uploadRes',
        component: () => import('../pages/admin/resource/addResource.vue'),
        meta: {
          title:['资源管理', '上传'],
          needAuth: true,
          roles: 'teacher'
        }
      },
      {
        path: '/userList',
        name: 'users',
        component: () => import('../pages/admin/userList/index.vue'),
        meta: {
          title:['用户管理', '用户列表'],
          needAuth: true,
          roles: 'teacher'
        }
      },
      {
        path: '/adminList',
        name: 'admin',
        component: () => import('../pages/admin/adminList/index.vue'),
        meta: {
          title: ['用户管理', '管理员列表'],
          needAuth: true,
          roles: 'teacher'
        }
      },
      {
        path: '/explain',
        name: 'explain',
        component: () => import('../pages/admin/explain.vue'),
        meta: {
          title: ['系统管理', '说明'],
          needAuth: true,
          roles: 'teacher'
        }
      },
      {
        path:'/classList',
        name:'classList',
        component: () => import('../pages/admin/classList/index.vue'),
        meta: {
           title: ['班级管理', '班级列表'] ,
           needAuth: true ,
           roles: 'teacher'
        }
      },
      {
        path:'/management',
        name:'management',
        component: () => import('../pages/admin/classList/management.vue'),
        meta: {
          title: ['班级管理', '我管理的'] ,
          needAuth: true ,
          roles: 'teacher'
       }
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

// 在这里添加路由前置守卫
router.beforeEach((to, from, next) => {
  /* 
    false 以取消导航
    一个路由
    不返回或者返回true 则去to
    如果遇到了意料之外的情况，可能会抛出一个 Error 这会取消导航并且调用 router.onError() 注册过的回调
    也就是用不到next了，但是next还是可以使用
  */
  if(to.path ==='/login' || to.path === '/register' || to.path === '/404') {
    next()
  }
  else {
    // 如果to需要鉴权
    if (to.meta.needAuth) {
      // 获取userInfo
      next( { path: "/login" });
      // const userInfo = store.getters.userInfo;
      // // 如果未登录
      // if (!userInfo.name || !userInfo.roles.length) {
      //   return { name: "Login" };
      // }
      // // 如果不是老师或管理员且试图进入管理页面
      // if(userInfo.roles === 'student' && to.meta.roles === 'teacher' ) {
      //   return { name: "Login" };
      // }
    }
    else {
      next()
    }
  }
});
// 在这里添加路由后置守卫

export default router