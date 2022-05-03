// 封装axios
import axios from 'axios';
import store from '@/store'
// import { Message } from 'element-ui';
import { servicesVersion } from 'typescript';
import { getToken, removeToken, removeRoles, removeName, removeAvatar } from './cookies'
// 创建axios实例
const service = axios.create({
    // 请求路由
    baseURL: 'http://localhost:8090',
    // 请求超时时间
    timeout: 5000,
});
// 请求拦截器
service.interceptors.request.use(
    (config: any) => {
        const token = store.getters.userInfo.token;
        if(token) config.headers["X-Token"] = token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const res = response.data;
        return res;
        
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            removeToken()
            removeRoles()
            removeName()
            removeAvatar()
            location.reload()
          }
        return Promise.reject(error);
    }
)

export default service;