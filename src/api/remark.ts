import request from '../utils/request'

//添加一条文件评论
export function addRecord(data: any) {
    return request({
        url: '/addRecord',
        method: 'post',
        params: data
    })
}

//获取对应文件的评论
export function getSpecificFileRemark(data: any) {
    return request({
        url: '/getSpecificFileRemark',
        method: 'post',
        params: data
    })
}

//删除一条文件评论
export function deleteARecord(data: any) {
    return request({
        url: '/deleteARecord',
        method: 'post',
        params: data
    })
}