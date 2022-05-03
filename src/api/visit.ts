import request from '../utils/request'

//增加一条访问量
export function addVisitCount(data: any) {
    return request({
        url: '/addVisitCount',
        method: 'post',
        params: data
    })
}

//获取今日访问量
export function getTodayVisitNumber(){
    return request({
        url: '/getTodayVisitNumber',
        method: 'post',
    })
} 

//获取总访问量
export function getTotalVisitNumber(){
    return request({
        url: '/getTotalVisitNumber',
        method: 'post',
    })
}