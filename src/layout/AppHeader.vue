<template>
  <el-header>
    <!--    图标      -->
    <el-icon>
      <Expand/>
      <Fold/>
    </el-icon>

    <!--     面包削     -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
      >
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>

    <!--     下拉菜单     -->
    <el-dropdown>
      <span class="el-dropdown-link">
        <!--头像-->
        <el-avatar :size="32" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"/>
        <el-icon class="el-icon--right">
          <arrow-down/>
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>姓名</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script>
import {Expand, Fold} from "@element-plus/icons";
import {defineComponent} from "vue";

export default defineComponent({
  name: "AppHeader",
  components: {
    Expand,
    Fold,
  },

})
</script>

<style scoped>
.el-header {
  display: flex;
  /*垂直居中*/
  align-items: center;
  background-color: #e9e9eb;

  .el-icon {
    margin-right: 17px;
  }
}

.el-dropdown {
  margin-left: auto;
  color: white;
}
</style>