import Vue from 'vue'
import App from './App.vue'
import router from "./router"
// import store from "./store/index"
import store from "./store"


Vue.config.productionTip = false; // 为true时加载后控制台多现实一行文字，说明是开发模式

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
