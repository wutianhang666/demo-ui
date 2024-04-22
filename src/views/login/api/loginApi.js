import request from "@/utils/request";


//登录
export async function login(params) {
    return request.post(`/sys/login?loginName=${params.loginName}&password=${params.password}`)
        .then((res) => res.data);
}
