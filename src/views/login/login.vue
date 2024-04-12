<template>
  <div style="width: 30%; height: 10%; border: 1px lavender solid; margin: 150px auto">
    <el-form
        style="max-width: 300px;"
        status-icon
        :model="use"
        :rules="rules"
        ref="formRef"
        label-width="auto"
        class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input
            v-model="use.name"
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
        <el-button type="success" size="small" @click="login()">登录</el-button>
        <el-button type="info" size="small" @click="cle">清空</el-button>
      </div>

    </el-form>
  </div>
</template>

<script>
import {defineComponent, reactive, ref, toRefs} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'login',

  setup() {
    //表单验证用
    const formRef = ref(null);

    const router = useRouter();

    const state = reactive({
      use: {}
    });

    const rules = {
      name: [{required: true, message: '此项为必填'}],
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
            console.log(state.use.name, state.use.password);
            //登录成功，跳转页面
            router.push({
              path: './home'
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
.demo-ruleForm {
  justify-content: center;
  margin: 15% auto;
  /*border: 1px red solid;*/

}
</style>
