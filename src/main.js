import {createApp} from 'vue'
import App from "@/App";
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'
// import "@/styles/index.scss"
import '@element-plus/icons' //图标库
import 'element-plus/theme-chalk/index.css';
import {createPinia} from 'pinia';
import axios from "axios";

//路由
import {createRouter, createWebHistory} from "vue-router";
import routes from "@/router";
import {store} from "core-js/internals/reflect-metadata";
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

/*前端拦截器请求加token*/
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 判断是否存在token,如果存在将每个页面header添加token
    if (sessionStorage.getItem("token")) {
        config.headers.common['Authorization'] = sessionStorage.getItem("token");
    }
    return config
}, function (error) {
    router.push('/login')
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response
}, function (error) {
    // 对响应错误做点什么
    if (error.response) {
        switch (error.response.status) {
            case 401:
                store.commit('del_token')
                router.push('/login')
        }
    }
    return Promise.reject(error)
})


const pinia = createPinia(); // 创建Pinia实例

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')