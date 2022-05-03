import request from '../utils/request'

// 登录
export function userLogin(data: any) {
  return request({
    url: '/loginUser',
    method: 'post',
    params: {
      username: data.username,
      password: data.password
    }
  })
}
// 登出
export function userLogout() {
  return request({
    url: 'logout',
    method: 'get',
  })
}
// 获取所有用户信息
 export function getAllUser() {
  return request({
    url: '/getAll',
    method: 'get',
  })
 }
 //管理员添加老师
  export function addTeacher(data: any) {
  return request({
    url: '/addTeacherByAdmin',
    method: 'post',
    params: data
  })
}
//管理员修改用户信息
export function updateUser(data: any) {
  return request({
    url: '/updateUserInfoByAdmin',
    method: 'post',
    params: data
  })
}
//删除用户
export function deleteUser(data: any) {
  return request({
    url: '/deleteUser',
    method: 'post',
    params: data
  })
}
//通过用户名查询用户信息
export function getUserByName(data: any) {
  return request({
    url: '/getUserByName',
    method: 'post',
    params: data
  })
}
//通过用户名添加到班级
export function addClassByName(data: any) { 
  return request({
    url: '/updateUserClassName',
    method: 'post',
    params: data
  })
}
//通过班级名搜索用户
export function getUserByClassName(data: any) {
  return request({
    url: '/getUserByClassName',
    method: 'post',
    params: data
  })
}