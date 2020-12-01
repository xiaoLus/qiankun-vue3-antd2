/* eslint-disable*/
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

let instance

function render() {
  instance = createApp(App).use(Antd).mount('#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('subapp bootstraped');
}

export async function unmount() {
  console.log('unmount')
  instance = null
}

export const mount = async () => {
  render()
};