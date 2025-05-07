import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  base: process.env.NODE_ENV === 'production'? '/order-app/' : '/',
  plugins: [
    vue(),
    qiankun('order-app', { useDevMode: true })
  ],
  build: {
    outDir: '../dist/order-app'
  },
  server: {
    port: 5174,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
