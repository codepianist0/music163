import axios from "axios"
import type { AxiosInstance } from "axios"
import type { YgCreateAxiosDefaults, YgAxiosRequestConfig } from "./type"

class YGRequest {
  instance: AxiosInstance
  constructor(config: YgCreateAxiosDefaults) {
    this.instance = axios.create(config)
    // 添加全局的拦截器
    this.instance.interceptors.request.use((config) => {
      // console.log("全局请求拦截成功")
      return config
    })
    this.instance.interceptors.response.use((res) => {
      // console.log("全局响应拦截成功")
      return res.data
    })
    // 添加实例的拦截器
    this.instance.interceptors.request.use(
      config.requestInterceptors?.success,
      config.requestInterceptors?.failed,
    )
    this.instance.interceptors.response.use(
      config.responseInterceptors?.success,
      config.responseInterceptors?.failed,
    )
  }
  request<T = any>(config: YgAxiosRequestConfig<T>) {
    // 添加单个请求的拦截(如果存在的话)
    if (config.requestInterceptors?.success) {
      config.requestInterceptors?.success(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应的拦截
          if (config.responseInterceptors?.success) {
            res = config.responseInterceptors.success(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: YgAxiosRequestConfig<T>) {
    return this.request({
      ...config,
      method: "GET",
    })
  }
  post<T = any>(config: YgAxiosRequestConfig<T>) {
    return this.request({
      ...config,
      method: "POST",
    })
  }
  patch<T = any>(config: YgAxiosRequestConfig<T>) {
    return this.request({
      ...config,
      method: "PATCH",
    })
  }
  delete<T = any>(config: YgAxiosRequestConfig<T>) {
    return this.request({
      ...config,
      method: "DELETE",
    })
  }
}

export default YGRequest
