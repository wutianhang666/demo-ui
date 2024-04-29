<template>
  <el-header>
    <!--    图标      -->
    <el-icon @click="flag = !flag">
      <Expand v-show="flag"/>
      <Fold v-show="!flag"/>
    </el-icon>

    <!--     面包削     -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
          v-for="(item, index) in $route.matched"
          :key="index"
          :to="{path: '/sys/home'}"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>

    <!--     下拉菜单     -->
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <!--头像-->
        <el-avatar :size="32" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"/>
        <el-icon class="el-icon--right">
          <arrow-down/>
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script>
import {Expand, Fold} from "@element-plus/icons";
import {defineComponent, reactive, ref, toRefs} from "vue";
import {isCollapse} from "./isCollapse.js";

export default defineComponent({
  name: "AppHeader",
  components: {
    Expand,
    Fold,
  },

  setup() {

    const flag = ref(isCollapse.valueOf());

    const state = reactive({
      count: 1,
    });

    const methods = {
      handleCommand: (command) => {
        alert(command)
      },
    }
    return {
      ...toRefs(state),
      flag,
      methods,
    }
  }
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