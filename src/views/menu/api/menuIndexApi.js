import request from "@/utils/request";


export async function getAllMenu() {
    return request
        .get('/menu/getAllMenu')
        .then((res) => res.data);
}