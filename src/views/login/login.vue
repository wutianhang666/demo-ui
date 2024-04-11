<template>
<!--  <el-button>默认按钮</el-button>-->
<!--  <el-button type="primary">主要按钮</el-button>-->
<!--  <el-button type="success">成功按钮</el-button>-->
<!--  <el-button type="info">信息按钮</el-button>-->

  <div>
    <el-form
        style="max-width: 400px;"
        status-icon
        label-width="auto"
        class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input
            v-model="aa"
            autocomplete="off"
            style="width: 300px"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
            v-model="aa"
            type="password"
            autocomplete="off"
            style="width: 300px"/>
      </el-form-item>

    </el-form>
  </div>

</template>

<script>


// import HelloWorld from './components/HelloWorld.vue'

export default {}
</script>

<style>
.demo-ruleForm {
  justify-content: center;
  margin: 15% auto;
  /*border: 1px red solid;*/

}
</style>
