import axios from "axios";

axios.defaults.headers.common['Content-Type'] =
    'application/json;charset=utf-8';


//跨域公共路径
//创建axios实例
const request = axios.create({
    baseURL: 'http://localhost:8001',
})

//请求拦截器，在拦截器中设置token
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    //获取token
    let token = sessionStorage.getItem("token") ? window.localStorage.getItem("token") : null
    //如果token存在，将其添加到请求头中
    if (token) {
        config.headers.Authorization = token;  // 设置请求头
    }
    return config
}, error => {
    //错误处理
    return Promise.reject(error)
});

export default request;