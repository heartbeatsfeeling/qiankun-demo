import { createApp, type App } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/es/helper'
import app from './App.vue'
import { router } from './router'

let root: App

// renders 生命周期函数
renderWithQiankun({
  mount (props: any) { render(props) },
  bootstrap () {},
  unmount () { root.unmount() },
  update () { }
})

// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  window.addEventListener('DOMContentLoaded', () => {
    console.log(document.documentElement.innerHTML)
    render({})
  })
}

// 渲染页面
function render (props: any) {
  const { container } = props
  root = createApp(app)
  const dom = container ? container.querySelector('#app') : document.getElementById('app')
  root.use(router).mount(dom)
}