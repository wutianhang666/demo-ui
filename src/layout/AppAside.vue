<template>
  <el-aside>
    <h2>一路有洗</h2>
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        active-text-color="#ffd04b"
        background-color="#e9e9eb"
        text-color="#000000"
        @open="handleOpen"
        @close="handleClose"
        router
    >
      <el-menu-item index="home">
        <el-icon>
          <Discount/>
        </el-icon>
        <span>首页</span>
      </el-menu-item>

      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <setting/>
          </el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item style="padding-left: 70px" index="./menuIndex"><span>菜单管理</span></el-menu-item>
        <el-menu-item style="padding-left: 70px" index="./role"><span>角色管理</span></el-menu-item>
        <el-menu-item style="padding-left: 70px" index="./user"><span>用户管理</span></el-menu-item>
      </el-sub-menu>

      <!--      <el-sub-menu index="2">-->
      <!--        <template #title>-->
      <!--          <el-icon><Edit /></el-icon>-->
      <!--          <span>会员登记</span>-->
      <!--        </template>-->
      <!--        <el-menu-item style="margin-left: 30px" index="./vipSign"><span>会员登记</span></el-menu-item>-->
      <!--      </el-sub-menu>-->

      <el-menu-item index="./vipSign">
        <el-icon>
          <Edit/>
        </el-icon>
        <span>会员登记</span>
      </el-menu-item>

    </el-menu>
  </el-aside>
</template>

<script>
import {defineComponent} from "vue";
import {Setting, Discount, Edit} from "@element-plus/icons";

export default defineComponent({
  components: {
    Setting,
    Discount,
    Edit,
  }

})
</script>

<style scoped>
h2 {
  color: darkseagreen;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>