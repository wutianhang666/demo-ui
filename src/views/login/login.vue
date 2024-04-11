<template>
  <div>
    <el-form
        style="max-width: 400px;"
        status-icon
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
        <el-button type="success" size="small" @click="login">登录</el-button>
        <el-button type="info" size="small" @click="cle">清空</el-button>
      </div>

    </el-form>
  </div>

</template>

<script>
import {defineComponent, reactive, ref, toRefs} from "vue";

export default defineComponent({

  setup() {
    const formRef = ref(null);

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
        formRef.value.validate((isValid, invalidFields) => {
          console.log(isValid)
          if (isValid) {
            // 表单所有元素验证通过，可以提交了
            console.log(state.use.name, state.use.password);
          } else {
            console.log(invalidFields)
            console.log('验证不通过,不能提交,请检查')
          }
        })
      },

      cle: () => {
        state.use.name = '';
        state.use.passward = '';
      },
    }

    return {
      ...toRefs(state),
      ...methods,
      rules,
      formRef,
    };
  }
})

</script>

<style>
.demo-ruleForm {
  justify-content: center;
  margin: 15% auto;
//border: 1px red solid;

}
</style>
