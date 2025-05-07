import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun'
import { router } from './router'

const props = {}  // 这里可以传递一些参数给子应用

registerMicroApps([
  {
    name: 'order-app',
    entry: import.meta.env.VITE_ORDER_APP_URL,
    container: '#subapp-viewport',
    activeRule: '/order',
    props
  },
  {
    name: 'user-app',
    entry: import.meta.env.VITE_USER_APP_URL,
    container: '#subapp-viewport',
    activeRule: '/user',
    props
  }
])
start()

createApp(App).use(router).mount('#main-app')
