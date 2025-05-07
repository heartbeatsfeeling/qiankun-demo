import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [
    vue(),
    qiankun('user-app', { useDevMode: true })
  ],
  server: {
    port: 5175,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
