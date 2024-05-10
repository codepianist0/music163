import type {
  AxiosRequestConfig,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios"

interface IresponseInterceptors<T = AxiosResponse> {
  success?: (res: T) => T
  failed?: (err: any) => any
}

// 创建实例的config,去除了headers
export interface YgCreateAxiosDefaults extends CreateAxiosDefaults {
  requestInterceptors?: {
    success?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    failed?: (err: any) => any
  }
  responseInterceptors?: IresponseInterceptors
}

// 请求时的config,有headers
export interface YgAxiosRequestConfig<T> extends AxiosRequestConfig {
  requestInterceptors?: {
    success?: (config: AxiosRequestConfig) => AxiosRequestConfig
    failed?: (err: any) => any
  }
  responseInterceptors?: IresponseInterceptors<T>
}
