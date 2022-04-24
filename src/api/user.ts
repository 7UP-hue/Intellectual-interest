import request from '../utils/request'
// 登录
export function userLogin(data: any) {
  return request({
    url: 'login',
    method: 'post',
    data: data
  })
}
// 登出
export function userLogout() {
  return request({
    url: 'logout',
    method: 'get',
  })
}
 export function getUserInfo(data: any) {
  return request({
    url: 'getInfo',
    method: 'put',
    data
  })
 }