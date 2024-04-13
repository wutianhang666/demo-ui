import axios from "axios";

axios.defaults.headers.common['Content-Type'] =
    'application/json;charset=utf-8';

/*跨域公共路径*/
const request = axios.create({
    baseURL: 'http://localhost:8001',
})

export default request;