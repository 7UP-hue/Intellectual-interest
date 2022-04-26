import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from "axios";
import config from "@/config"; //@代表src一级目录，是我们在vite.config.ts文件里配置的
const {api: {devApiBaseUrl, proApiBaseUrl}} = config;
//process.env.NODE_ENV是vue服务内置的环境变量，有两个值，当本地开发时是development，当打包时是production
const apiBaseUrl = process.env.NODE_ENV === 'production' ? proApiBaseUrl : devApiBaseUrl;
export interface ResponseData {
    // 这里的data是接口返回的数据，是一个对象
    code: number;
    data?: any;
    msg: string;
}
class HttpRequest {// 定义一个接口请求类，用于创建一个axios请求实例
    constructor(public baseUrl: string) {// 这个类接收一个字符串参数，是接口请求的基本路径
        this.baseUrl = baseUrl;
    }


    public request(options: AxiosRequestConfig): AxiosPromise {
        const instance: AxiosInstance = axios.create();// 创建一个axios实例
        options = this.mergeConfig(options) // 合并配置
        this.interceptors(instance, options.url) //调用interceptors方法使拦截器生效
        return instance(options)    // 返回AxiosPromise
    }
    private interceptors(instance: AxiosInstance, url?: string) {// 定义这个函数用于添加全局请求和响应拦截逻辑
             // 在这里添加请求和响应拦截
        instance.interceptors.request.use((config: AxiosRequestConfig) => {
            // 接口请求的所有配置，都在这个config对象中，他的类型是AxiosRequestConfig，你可以看到他有哪些字段
             // 如果你要修改接口请求配置，需要修改 axios.defaults 上的字段值
            return config
        }, 
        (error) => {
            return Promise.reject(error)
        })
            instance.interceptors.response.use((res: AxiosResponse) => {
                const { data } = res // res的类型是AxiosResponse<any>，包含六个字段，其中data是服务端返回的数据
                const { code, msg } = data// 通常服务端会将响应状态码、提示信息、数据等放到返回的数据中
                if (code !== 0) { // 这里我们在服务端将正确返回的状态码标为0
                    console.log(msg)// 如果不是0，则打印错误信息，这里可以使用消息窗提示
                }
                return res//返回数据
            }, 
            (error) => {// 这里是遇到报错的回调
                return Promise.reject(error)
            })
    }
    private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig {//这个函数用于合并配置
        return Object.assign({ baseUrl: this.baseUrl }, options);
    }
}
export default HttpRequest;