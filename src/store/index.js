import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"
Vue.use(Vuex)

// 导出store实例
export default new Vuex.Store({
    state, // 数据源
    getters, // 可以对数据源二次处理
    actions, // 用于触发mutations中函数来修改state中的书籍，主要用于弥补mutations不能编写异步代码的问题
    mutations // 用于修改数据源中的数据
})