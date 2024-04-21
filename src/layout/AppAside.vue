<template>
  <el-aside :width="flag? '64px' : '200px'">
    <!--    <h2>一路有洗</h2>-->
    <!--    <el-radio-group v-model="flag" style="margin-bottom: 20px">-->
    <!--      <el-radio-button :value="false">expand</el-radio-button>-->
    <!--      <el-radio-button :value="true">collapse</el-radio-button>-->
    <!--    </el-radio-group>-->
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        active-text-color="#000000"
        background-color="#e9e9eb"
        text-color="#000000"
        :collapse=flag
        :collapse-transition=false
        @open="handleOpen"
        @close="handleClose"
        router
    >

<!--      <el-menu-item index="home">-->
<!--        <el-icon>-->
<!--          <Discount/>-->
<!--        </el-icon>-->
<!--        <span>首页</span>-->
<!--      </el-menu-item>-->

<!--      <el-sub-menu index="1">-->
<!--        <template #title>-->
<!--          <el-icon>-->
<!--            <setting/>-->
<!--          </el-icon>-->
<!--          <span>系统管理</span>-->
<!--        </template>-->
<!--        <el-menu-item style="padding-left: 70px" index="./menuIndex"><span>菜单管理</span></el-menu-item>-->
<!--        <el-menu-item style="padding-left: 70px" index="./role"><span>角色管理</span></el-menu-item>-->
<!--        <el-menu-item style="padding-left: 70px" index="./user"><span>用户管理</span></el-menu-item>-->
<!--      </el-sub-menu>-->
<!--      <el-menu-item index="./vipSign">-->
<!--        <el-icon>-->
<!--          <Edit/>-->
<!--        </el-icon>-->
<!--        <span>会员登记</span>-->
<!--      </el-menu-item>-->

      <template v-for="item in tableDate" :key="item.path">
        <el-sub-menu v-if="item.children.length>0" :index="item.path" >
          <template #title>
            <el-icon><setting/></el-icon>
            <span>{{item.name}}</span>
          </template>

          <el-menu-item :index="item2.path" :key="item2.path" v-for="item2 in item.children" style="padding-left: 70px">
            <span>{{item2.name}}</span>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item v-else :index="item.path">
          <template #title>
            <el-icon><Discount/></el-icon>{{item.name}}
          </template>
        </el-menu-item>
      </template>

    </el-menu>
  </el-aside>
</template>

<script>
import {defineComponent, onMounted, reactive, ref, toRefs} from "vue";
import {Setting, Discount, Edit} from "@element-plus/icons";
import {isCollapse} from "./isCollapse.js";
import {getAllMenu} from "@/layout/AppAside.js";

export default defineComponent({
  components: {
    Setting,
    Discount,
    Edit,
  },

  setup() {
    const flag = ref(isCollapse.valueOf())

    const state = reactive({
      loading: true,
      tableDate: []
    })

    const methods = {

      /**
       * 获取分页数据
       */
      searchDataList: () => {
        getAllMenu().then((data) => {
          console.log(data);
          console.log(data.data);
          console.log("333", state.tableDate)
          state.tableDate = data.data || [];
        })
      },

    }

    onMounted(() => {
      methods.searchDataList();
      // window.addEventListener('resize', methods.handleResize);
    });

    return {
      ...toRefs(state),
      methods,
      flag
    };
  },

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