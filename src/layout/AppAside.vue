<template>
  <el-aside>
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
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item style="padding-left: 70px" index="./menuIndex"><span>菜单管理</span></el-menu-item>
        <el-menu-item style="padding-left: 70px" index="./role"><span>角色管理</span></el-menu-item>
        <el-menu-item style="padding-left: 70px" index="./vipSign"><span>资源管理</span></el-menu-item>
        <!--          <el-menu-item style="margin-left: 30px" index="1-2">item two</el-menu-item>-->
        <!--          <el-menu-item style="margin-left: 30px" index="1-3">item two</el-menu-item>-->
      </el-sub-menu>

      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>菜单二</span>
        </template>
        <el-menu-item style="margin-left: 30px" index="1-1" @click="vipSign"><span>会员管理</span></el-menu-item>
      </el-sub-menu>

    </el-menu>
  </el-aside>
</template>

<script setup></script>

<style lang="scss" scoped></style>