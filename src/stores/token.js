import { defineStore } from "pinia"
import {computed, ref} from "vue";
import {ElMessage} from "element-plus";

export const useTokenStore = defineStore('mytoken', () => {
    //ref相当于 state
    const tokenJson = ref("");
    //computed相当于getter
    //处理token转化为token对象
    const token = computed(() => {
        try {
            return JSON.parse(tokenJson.value || window.localStorage.setItem("Token") || "{}");
        }catch (err){
            ElMessage.error("json字符串格式不对，转化对象时失败...");
            window.localStorage.setItem("Token", "")
            throw err
        }
    })

    //function相当于actions
    function saveToken(data){
        tokenJson.value = data;
        //token保存浏览器
        window.localStorage.setItem("Token",data);
    }

    return {token, saveToken}
})