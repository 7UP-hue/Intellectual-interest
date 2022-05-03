import request from '../utils/request'

//获取文件列表
export function getFileList(data: any) {
    return request({
        url: '/getFileList',
        method: 'post',
        params: data
    })
}

//获取对应科目文件
export function getFileBySubject(data: any) {
    return request({
        url: '/getSpecificFileList',
        method: 'post',
        params: data
    })
}

//获取今日更新量
export function getTodayUpdate(data: any) {
    return request({
        url: '/getTodayFileUpdateNumber',
        method: 'post',
        params: data
    })
}

//获取总文件数
export function getTotalFile(data: any) {
    return request({
        url: '/getTotalFileNumber',
        method: 'post',
        params: data
    })
}

//搜索文件
export function searchFile(data: any) {
    return request({
        url: '/searchFile',
        method: 'post',
        params: data
    })
}

//文件点赞数+1
export function addFileLike(data: any) {
    return request({
        url: '/addFileLike',
        method: 'post',
        params: data
    })
}

//文件下载数+1
export function addFileDownload(data: any) {    
    return request({
        url: '/addFileDownload',
        method: 'post',
        params: data
    })
}

//文件点击数+1
export function addFileClick(data: any) {
    return request({
        url: '/addFileClick',
        method: 'post',
        params: data
    })
}

//上传文件
export function upload(data: any) {
    return request({
        url: '/upload',
        method: 'post',
        params: data
    })
}

//文件下载或者预览
export function download(data: any) {
    return request({
        url: '/download',
        method: 'post',
        params: data
    })
}

//删除文件
export function deleteFile(data: any) {
    return request({
        url: '/delete',
        method: 'post',
        params: data
    })
}
