import request from '../utils/request'

//获取所有的话题
export function getAllTag() {
    return request({
        url: '/getAllTag',
        method: 'post',
    })
}

//添加一个话题
export function addTag(data: any) {
    return request({
        url: '/addTag',
        method: 'post',
        params: data
    })
}

//添加一条话题讨论
export function addForumRecord(data: any) {
    return request({
        url: '/addForumRecord',
        method: 'post',
        params: data
    })
}

//获取指定话题对象
export function getSpecificForum(data: any) {
    return request({
        url: '/getSpecificForum',
        method: 'post',
        params: data
    })
}

//获取指定话题的所有评论
export function getSpecificForumAllRecord(data: any) {
    return request({
        url: '/getSpecificForumAllRecord',
        method: 'post',
        params: data
    })
}

//删除一条论坛评论
export function deleteAForumRecord(data: any) {
    return request({
        url: '/deleteAForumRecord',
        method: 'post',
        params: data
    })
}