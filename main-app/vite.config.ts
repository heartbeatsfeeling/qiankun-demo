import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    outDir: '../dist/main-app'
  },
  server: {
    port: 5176,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
})
