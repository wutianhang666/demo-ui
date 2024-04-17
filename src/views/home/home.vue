<template>

  <div class="common-layout">
    <el-container>
      <!--菜单-->
      <AppAside/>

      <el-container class="heade-and-main">
        <!--头部-->
        <AppHeader/>

        <!--内容部分-->
        <el-main style="height: 705px; background-color: #f4f4f5; overflo:hidden">
          <!--          <el-scrollbar>-->
          <RouterView/>
          <!--          </el-scrollbar>-->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {defineComponent, reactive, toRefs} from "vue";
import {useRouter} from "vue-router";
import AppAside from "@/layout/AppAside.vue";
import AppHeader from "@/layout/AppHeader.vue";

export default defineComponent({
  name: "home",
  components: {
    AppHeader,
    AppAside,
  },

  setup() {
    const router = useRouter();

    const state = reactive({
      use: {},

    });

    const methods = {

      vipSign: () => {
        router.push({
          path: './vipSign'
        });
      },
    }

    return {
      ...toRefs(state),
      ...methods,
      router,
    };
  }
})
</script>

<style lang="less" scoped>
@import "../../index.less";

.el-aside {
  //width: 200px;
  height: 97vh;
  //background-color: #dedfe0;
  background-color: @Color;
}


.heade-and-main {
  flex-direction: column;
  height: 97vh;
}

.el-menu-vertical-demo {
  background-color: #C8C8C8;
  height: 750px;
}

.el-menu {
  background-color: #C8C8C8;
}

</style>