import { createApp } from 'vue'
import login from './views/login/login.vue'
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'


const app = createApp(login)
app.use(ElementPlus)
app.mount('#app')


// import App from './App.vue'
// createApp(App).mount('#app')