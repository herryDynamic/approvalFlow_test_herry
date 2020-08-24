import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/components/DynamicForm/styles/index.styl'

// 弹框样式：在Process的侧边弹框中使用
import '@/components/DynamicForm/icons'
import FormControls from './components/FormControls/index.js'
Vue.use(FormControls)
Vue.use(ElementUI);
Vue.config.productionTip = false; // 为true时加载后控制台多现实一行文字，说明是开发模式
Vue.prototype.log = console.log
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
