import request from "@/utils/request";

//查询所有菜单
export async function getAllMenu(params) {
    return request
        .get('/sysMenu/getAllMenu', {
            params
        })
        .then((res) => res.data);
}

//新增菜单
export async function addMenu(params) {
    return request.post('/sysMenu', params).then((res) => res.data);
}

//修改菜单
export async function updateMenu(params) {
    return request.put('/sysMenu', params).then((res) => res.data);
}

// 单个删除数据
export function deleteMenu(id) {
    return request({
        url: `/sysMenu/${id}`,
        method: 'delete',
    });
}