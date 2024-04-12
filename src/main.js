import {createApp} from 'vue'
import App from "@/App";
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'

//路由
import {createRouter, createWebHistory} from "vue-router";
import routes from "@/router";
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')