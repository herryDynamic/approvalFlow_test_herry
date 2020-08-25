// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from "vue";
import Router from "vue-router"
Vue.use(Router);



const router = new Router({
    // base说明：启动后地址http://localhost:8080/lsa#/  和  http://localhost:8080/#/ 都可以
    base: "/lsa",
    routes: [
        {
            path: "/lsa",
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
            path: "/",
            name: "approver",
            component: () =>
                import("./views/admin/approver"), // url地址
            meta: {
                title: "approver"
            }
        },
        {
            path: "/jsx",
            name: "jsx",
            component: () =>
                import("./views/render/jsx"), // url地址
            meta: {
                title: "jsx"
            }
        },
        {
            path: "/tem",
            name: "tem",
            component: () =>
                import("./views/render/render_one/tem"), // url地址
            meta: {
                title: "tem"
            }
        },
        {
            path: "/ren",
            name: "ren",
            component: () =>
                import("./views/render/render_one/ren"), // url地址
            meta: {
                title: "ren"
            }
        },
        {
            path: "/tem1.1",
            name: "tem1.1",
            component: () =>
                import("./views/render/render_one/render_1.1/tem1.1"), // url地址
            meta: {
                title: "tem1.1"
            }
        }

    ] // (缩写) 相当于 routes: routes
})



export default router;
// 现在，应用已经启动了！