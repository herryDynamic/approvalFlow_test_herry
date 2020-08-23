import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    //要设置的全局访问的state对象
    state: {
        token: "", //用户token
        test: "1233"


    },
    //用于监听state的变化的
    getters: {},
    mutations: {
        // 存储token中的数据
        setToken(state, token) {
            state.token = token;
        },

        test(state, test) {
            state.test = test;
        }

    },
    actions: {},
});
export default store;
