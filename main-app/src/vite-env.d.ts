/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'qiankun'

interface ImportMetaEnv {
  BASE_URL: string
  DEV: boolean
  MODE: string
  PROD: boolean
  SSR: boolean
  /** order服务URL */
  VITE_ORDER_APP_URL: string
  /** user服务URL */
  VITE_USER_APP_URL: string
  /** 环境变量 */
  VITE_USER_NODE_ENV: string
}

interface ImportMeta {
  env: ImportMetaEnv
}