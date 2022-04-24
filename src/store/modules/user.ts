
// 用户接口 暂时没有
import { userLogin, userLogout, getUserInfo } from '@/api/user'

// 存储cookie
import { getToken, setToken, getRoles, setRoles, getName, setName, getAvatar, setAvatar } from '@/utils/cookies'
// 存储用户信息
type userInfo = {
  name: string;
  token: string;
  avatar: string;
  roles: string;
};
type state = {
  userInfo: userInfo;
};
type loginData = {
  name: string,
  password: string
};
type context = {
  state: Record<string, unknown>;
  mutations:  Record<string, unknown>;
  actions: Record<string, unknown>;
  dispatch: any;
  commit: any;
};
export default {
  namespace: true,
  state: {
    userInfo: {
      name: "",
      token: "",
      avatar: "",
      roles: ""
    }
  },
  mutations: {
    setUserInfo(state: state, val: userInfo) {
      state.userInfo = val
      // 将用户信息存储到cookie中
      setToken(val.token)
      setAvatar(val.avatar)
      setName(val.name)
      setRoles(val.roles)
    }
  },
  actions: {
    // 登录
    login({ commit, dispatch }: context, userInfo: any) {
      return new Promise((resolve, reject) => {
        userLogin((userInfo))
        .then((res: any) => {
          if(res.token) {
            commit('setUserInfo', {
              name: res.name,
              token: res.token,
              avatar: res.avatar,
              roles: res.roles
            })
            // 可以增加element消息
            
            // 处理权限路由
            // dispatch("permission/handleRoutes", null, { root: true})
          }
          else {
            // 弹出出错信息
          }
          resolve(res)
        })
        .catch((error: any) => {
          reject(error)
        })
      })
    },
    // 退出登录
    loginout({ commit, dispatch }: context) {
      return new Promise ((resolve, reject) => {
        userLogout()
        .then((res: any) => {
          // 清空用户信息
          commit("setUserInfo", {
            name: "",
            token: "",
            avatar: "",
            roles: ""
          })
          // 重置路由
          // dispatch('permission/resetRoute', null, { root: true})
          resolve(res)
        })
        .catch((error: any) => {
          reject(error)
        })
      })
    },
    // 获取用户信息 暂时不写完 到时候根据情况补充
    getInfo({commit, state}: context) {
      
    }
  }
}