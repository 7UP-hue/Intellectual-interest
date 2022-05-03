import request from '../utils/request'

//查询所有班级信息
export function getAllClass() {
    return request({
        url: '/getAllClass',
        method: 'post',
    })
}

//增加一个班级
export function addClass(data: any) {
    return request({
        url: '/addClass',
        method: 'post',
        params: data
    })
}

//通过班级老师名查询班级信息
export function getClassByTeacherName(data: any) {
    return request({
        url: '/getClassByTeacherName',
        method: 'post',
        params: data
    })
}

//通过班级名查看班级信息
export function getClassByClassName(data: any) {
    return request({
        url: '/getClassByClassName',
        method: 'post',
        params: data
    })
}

//更新班级信息
export function updateClassInfo(data: any) {
    return request({
        url: '/updateClassInfo',
        method: 'post',
        params: data
    })
}

//删除班级
export function deleteClass(data: any) {
    return request({
        url: '/deleteClass',
        method: 'post',
        params: data
    })
}