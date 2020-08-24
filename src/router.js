// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from "vue";
import Router from "vue-router"
Vue.use(Router);

import Home from "./views/admin/approver.vue"

const router = new Router({
    // base说明：启动后地址http://localhost:8080/lsa#/  和  http://localhost:8080/#/ 都可以
    base: "/lsa",
    routes: [
        {
            path: "/",
            name: "lsa",
            component: () =>
                import("./views/login"), // url地址
            meta: {
                title: "lsa"
            }
        },
        {
            path: "/test",
            name: "test",
            component: () =>
                import("./views/test"), // url地址
            meta: {
                title: "test"
            }
        },

        {
            path: '/approver',
            name: 'approver',
            component: Home
        },
    ] // (缩写) 相当于 routes: routes
})



export default router;
// 现在，应用已经启动了！