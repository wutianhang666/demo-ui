import request from "@/utils/request";

//查询所有菜单
export async function getAllMenu(params) {
    return request
        .get('/sysMenu/getAllMenu', {
            params
        })
        .then((res) => res.data);
}