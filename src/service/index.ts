import { BASE_URL, TIME_OUT } from "./config"
import YGRequest from "./request"

const ygRequest = new YGRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  requestInterceptors: {
    success: (config) => {
      // console.log("实例一请求拦截成功")
      return config
    },
  },
  responseInterceptors: {
    success: (res) => {
      // console.log("实例一响应拦截成功")
      return res
    },
  },
})

export default ygRequest
