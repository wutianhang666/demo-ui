<template>
  <div class="login">
    <el-form
        style="max-width: 300px;"
        status-icon
        size="large"
        :model="use"
        :rules="rules"
        ref="formRef"
        label-width="auto"
    >
      <h2>登录</h2>
      <el-form-item label="用户名" prop="loginName">
        <el-input
            v-model="use.loginName"
            autocomplete="off"
            placeholder="请输入用户名"
            style="width: 300px"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
            v-model="use.password"
            type="password"
            autocomplete="off"
            placeholder="请输入密码"
            style="width: 300px"/>
      </el-form-item>

      <div style="text-align: center; margin-top: 30px">
        <el-button type="success" size="default" @click="login()">登录</el-button>
        <el-button type="info" size="default" @click="cle">清空</el-button>
      </div>

    </el-form>
  </div>
</template>

<script>
import {defineComponent, reactive, ref, toRefs} from "vue";
import {useRouter} from "vue-router";
import {login} from "@/views/login/api/loginApi";
import {ElMessage} from "element-plus";
import {useTokenStore} from "@/stores/token"

export default defineComponent({
  name: 'login',

  setup() {
    const store = useTokenStore();
    //表单验证用
    const formRef = ref(null);

    const router = useRouter();

    const state = reactive({
      use: {}
    });

    const rules = {
      loginName: [{required: true, message: '此项为必填'}],
      password: [{required: true, message: '此项为必填'}],
    };

    const methods = {

      login: () => {
        //获取登录的表单对象
        formRef.value.validate((valid) => {
          // console.log("11"+formRef.value)
          // console.log(valid)
          if (valid) {
            //调登录接口

            login(state.use).then((data) => {
              if (data.code === 1) {
                ElMessage({message: '欢迎登录', type: 'success',})
                //保存token
                store.saveToken(data.data);
                //登录成功，跳转页面
                router.push({
                  path: './sys/home'
                });
              } else {
                ElMessage({message: data.message, type: 'warning'});
              }
            });


            //登录失败，提示
          }
        })
      },

      cle: () => {
        formRef.value.resetFields();
      },
    }

    return {
      ...toRefs(state),
      ...methods,
      rules,
      formRef,
      router
    };
  }
})

</script>

<style>

.login {
  background-color: beige;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-form {
  margin-top: -100px;
  width: 30%;
  background-color: #e9e9eb;
  padding: 30px;
  border-radius: 10px;
}

.el-form-item {
  margin-top: 20px;
}
</style>
