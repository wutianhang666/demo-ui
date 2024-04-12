<template>

  <el-row class="top">

  </el-row>

  <el-row class="tac">
    <el-col class="main-left" :span="4">
      <!--      <h5 class="mb-2">Default colors</h5>-->
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location/>
            </el-icon>
            <span>菜单一</span>
          </template>
          <el-menu-item style="margin-left: 30px" index="1-1">item one</el-menu-item>
          <el-menu-item style="margin-left: 30px" index="1-2">item two</el-menu-item>
          <el-menu-item style="margin-left: 30px" index="1-3">item two</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="2">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <span>Navigator Two</span>
        </el-menu-item>

        <el-menu-item index="3">
          <el-icon>
            <document/>
          </el-icon>
          <span>Navigator Three</span>
        </el-menu-item>

        <el-menu-item index="4">
          <el-icon>
            <setting/>
          </el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>

    <el-col class="main-right" :span="19"></el-col>
  </el-row>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: "home",
  setup() {

    const state = reactive({
      use: {},

    });

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
    }

    return {
      ...toRefs(state),
      ...methods,
    };
  }
}
</script>

<style scoped>

.top {
  height: 50px;
  border: 1px red solid;
}

.tac {
  height: 700px;
  border: 1px red solid;
}

.main-left {
  height: 700px;
  border: 1px green solid;
}

.main-right {
  height: 700px;
  border: 1px turquoise solid;
}

</style>