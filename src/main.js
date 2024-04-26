import {createApp} from 'vue'
import App from "@/App";
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'
// import "@/styles/index.scss"
import '@element-plus/icons' //图标库
import 'element-plus/theme-chalk/index.css';
import {createPinia} from 'pinia';
// import axios from "axios";
//路由
import {createRouter, createWebHistory} from "vue-router";
import routes from "@/router";
// import {store} from "core-js/internals/reflect-metadata";
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
const pinia = createPinia(); // 创建Pinia实例

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')