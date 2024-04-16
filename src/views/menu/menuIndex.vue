<template>
  <div>

    <!--查询条件区域-->
    <el-card style="width: 100%;">
      <template #header>
        <div style="display: flex; justify-content: left; align-items: center;height: 30px">
          <el-form :inline="true" :model="searchData" style="margin-top: 17px">
            <el-form-item label="名称">
              <el-input v-model="searchData.name" placeholder="请输入菜单名称" clearable/>
            </el-form-item>
          </el-form>

          <el-button type="success" size="default" @click="searchData">查询</el-button>
          <el-button type="info" size="default" @click="clearSearch">重置</el-button>
        </div>
      </template>
    </el-card>

    <!--表格头显示-->
    <el-card style="width: 100%; margin-top: -40px">
      <template #header>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span>查询列表</span>
          <div>
            <el-button type="primary">导出</el-button>
            <el-button type="button">刷新</el-button>
          </div>
        </div>
      </template>

      <!--表格-->
      <el-table
          :data="tableDate"
          style="width: 100%; margin-bottom: 20px"
          row-key="id"
          border
          default-expand-all
      >
        <el-table-column prop="date" label="Date" sortable/>
        <el-table-column prop="name" label="Name" sortable/>
        <el-table-column prop="address" label="Address" sortable/>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import {defineComponent, reactive, toRefs} from 'vue'
import {getAllMenu} from "@/views/menu/api/menuIndexApi";

export default defineComponent({
  name: "menuIndex",
  setup() {
    const state = reactive({
      searchData: {},
      loading: false,
      tableDate: [
        {
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu',
              address: 'No. 189, Grove St, Los Angeles',
            },
            {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu',
              address: 'No. 189, Grove St, Los Angeles',
            },
          ],
        },
        {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
    })

    const methods = {

      /**
       * 获取分页数据
       */
      searchData: () => {
        state.loading = true;
        getAllMenu({
          ...state.searchData,
        }).then((data) => {
          console.log(data);
          state.loading = false;
          state.tableData = data?.tableDate || [];
        });
      },
    }

    return {
      ...toRefs(state),
      ...methods,
    }
  }
})
</script>

<style scoped>

</style>