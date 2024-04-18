<template>
  <div>

    <!--查询条件区域-->
    <el-card style="width: 100%;">
      <template #header>
        <div style="display: flex; justify-content: left; align-items: center;height: 30px">
          <el-form :inline="true" :model="searchData" style="margin-top: 17px;padding: 0px; height: 40px">
            <el-form-item label="名称">
              <el-input v-model="searchData.name" placeholder="请输入名称"/>
            </el-form-item>
          </el-form>

          <el-button type="success" size="default" @click="searchDataList">查询</el-button>
          <el-button type="info" size="default" @click="clearSearch">重置</el-button>
        </div>
      </template>
    </el-card>

    <!--表格头显示-->
    <el-card style="width: 100%; margin-top: -40px">
      <template #header>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span>菜单列表</span>
          <div>
            <el-button type="primary" @click="addNewMenu">新增</el-button>
            <el-button type="info" @click="searchDataList">刷新</el-button>
          </div>
        </div>
      </template>

      <!--表格-->
      <el-table
          :data="tableDate"
          style="width: 100%; margin-bottom: 20px"
          row-key="id"
          border
          @selection-change="handleSelectionChange"
          show-header
          highlight-current-row="true"
          default-expand-all="true"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      >
        <el-table-column type="selection" width="45"/>
        <el-table-column prop="name" label="名称" align="center"/>
        <el-table-column prop="path" label="路径" align="center" sortable/>
        <el-table-column prop="description" label="描述" align="center" sortable/>
        <el-table-column prop="sort" label="排序" align="center" sortable/>
        <el-table-column prop="icon" label="图标" align="center" sortable/>
        <el-table-column prop="address" label="操作" align="center" width="200px" sortable>
          <template #default="scope">
            <div style="display: flex; justify-content: right; padding-right: 25px">
              <!--新增按钮-->
              <el-tooltip
                  class="box-item"
                  effect="dark"
                  content="新增下级菜单"
                  placement="top-start"
              >
                <el-button
                    size="small"
                    type="primary"
                    title="新增下级菜单"
                    v-if="scope.row.parentId===''||scope.row.parentId===null"
                    @click="addChild(scope.$index, scope.row)"
                >
                  <el-icon style="vertical-align: middle">
                    <Plus/>
                  </el-icon>
                </el-button>
              </el-tooltip>


              <!--编辑按钮-->
              <el-tooltip
                  class="box-item"
                  effect="dark"
                  content="编辑"
                  placement="top-start"
              >
                <el-button
                    type="primary"
                    color="#626aef"
                    size="small"
                    title="编辑"
                    @click="handleEdit(scope.$index, scope.row)"
                >
                  <el-icon style="vertical-align: middle">
                    <Edit/>
                  </el-icon>
                </el-button>
              </el-tooltip>


              <!--删除按钮-->
              <el-tooltip
                  class="box-item"
                  effect="dark"
                  content="删除"
                  placement="top-start"
              >
                <el-button
                    size="small"
                    type="danger"
                    title="删除"
                    @click="deleteMenu(scope.$index, scope.row.id)"
                >
                  <el-icon style="vertical-align: middle">
                    <Delete/>
                  </el-icon>
                </el-button>
              </el-tooltip>

            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>

  <el-dialog
      v-model="dialogVisible"
      title="菜单新增"
      width="45%"
      :before-close="close"
  >
    <el-form
        style="max-width: 600px; padding-left: 40px"
        size="default"
        :model="sysMenu"
        :rules="rules"
        ref="formRef"
        :inline="true"
        label-width="auto"
    >
      <el-form-item label="用户名" prop="name">
        <el-input
            v-model="sysMenu.name"
            autocomplete="off"
            placeholder="请输入菜单名称"
            style="width: 200px"/>
      </el-form-item>
      <el-form-item label="路径" prop="path">
        <el-input
            v-model="sysMenu.path"
            autocomplete="off"
            placeholder="请输入路径"
            style="width: 200px"/>
      </el-form-item>
      <el-form-item label="图标" prop="icon">
        <el-input
            v-model="sysMenu.icon"
            autocomplete="off"
            placeholder="请选择图标"
            style="width: 200px"/>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input
            v-model="sysMenu.description"
            autocomplete="off"
            placeholder="请输入路径描述"
            style="width: 200px"/>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input
            v-model="sysMenu.sort"
            autocomplete="off"
            placeholder="请输入排序"
            style="width: 200px"/>
      </el-form-item>
      <el-form-item label="父级菜单" prop="parentId">
        <el-input
            v-model="sysMenu.parentId"
            autocomplete="off"
            disabled
            style="width: 200px"/>
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="新增菜单">
        <el-button @click="modelCancel">取消</el-button>
        <el-button type="primary" @click="addMenu">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import {defineComponent, onMounted, reactive, ref, toRefs} from 'vue'
import {getAllMenu, addMenu, updateMenu, deleteMenu} from "@/views/menu/api/menuIndexApi";
import {Edit, Plus, Delete} from "@element-plus/icons";
import {ElMessage} from 'element-plus'

export default defineComponent({
  name: "menuIndex",

  components: {
    Edit,
    Plus,
    Delete,
  },
  setup() {
    //多选
    const selectedRows = ref([]);
    //弹框显示
    const dialogVisible = ref(false)
    //表单验证用
    const formRef = ref(null);

    const rules = {
      name: [{required: true, message: '此项为必填'}],
      path: [{required: true, message: '此项为必填'}],
      sort: [{required: true, message: '此项为必填'}],
      description: [{required: true, message: '此项为必填'}],
    };

    const state = reactive({
      searchData: {},
      loading: true,
      sysMenu: {},
      tableDate: [
        /*{
          id: 1,
          path: '/123',
          name: '1',
          description: '描述1',
          parentId: ''
        },
        {
          id: 2,
          path: '/2',
          name: '2',
          description: '描述2',
          parentId: ''
        },
        {
          id: 3,
          path: '/3',
          name: '3',
          description: '描述3',
          parentId: '',
          children: [
            {
              id: 31,
              path: '/4',
              name: '4',
              description: '描述4',
              parentId: '111'
            },
            {
              id: 32,
              path: '/5',
              name: '5',
              description: '描述5',
              parentId: '222'
            },
          ],
        },
        {
          id: 6,
          path: '/6',
          name: '6',
          description: '描述6',
          parentId: ''
        },*/
      ]
    })

    const methods = {

      /**
       * 获取分页数据
       */
      searchDataList: () => {
        state.loading = true;
        getAllMenu({
          ...state.searchData,
        }).then((data) => {
          console.log(data);
          console.log(data.data);
          console.log("333", state.tableDate)
          state.tableDate = data.data || [];
          state.loading = false;
        })
      },

      /**
       * 弹框点击确定保存
       */
      addMenu: () => {
        //获取登录的表单对象
        formRef.value.validate((valid) => {
          if (valid) {
            //调新增接口
            console.log(state.sysMenu.name, state.sysMenu.path);
            const afterApi = state.sysMenu.id
                ? updateMenu(state.sysMenu)
                : addMenu(state.sysMenu);

            afterApi.then((response) => {
              console.log("11111111111", response.data)
              if (response.code === 1) {
                console.log("222222222", response.code)
                state.sysMenu = {};
                dialogVisible.value = false;
                formRef.value.resetFields();
                methods.searchDataList();
                ElMessage({message: '操作成功', type: 'success',})
              }
            });
          }
        })
      },

      /**
       * 删除
       */
      deleteMenu: (index, id) => {
        console.log("index" + index)
        console.log("row" + id)
        //调接口
        if (id) {
          state.loading = true;
          deleteMenu(id).then(() => {
            methods.searchDataList();
            ElMessage({message: '操作成功', type: 'success',})
          });
        }
      },

      /**
       * 新增按钮
       */
      addNewMenu: () => {
        dialogVisible.value = true;
        state.sysMenu = {};
      },

      /**
       * 新增下级菜单
       */
      addChild: (index, row) => {

        console.log("index" + index)
        console.log("row" + row)

        if (row.id) {
          dialogVisible.value = true;
          state.sysMenu.parentId = row.id;
          state.sysMenu.parentNmme = row.name;
        }
      },

      /**
       * 编辑
       */
      handleEdit: (index, row) => {

        console.log("index" + index)
        console.log("row" + row)

        state.sysMenu = row;
        if (row.id) {
          dialogVisible.value = true;
        }
      },

      handleSelectionChange: (val) => {
        selectedRows.value = val;
        console.log(selectedRows.value);
      },

      /**
       * 弹框点击❌关闭
       */
      close: () => {
        dialogVisible.value = false;
        //清空表单验证
        formRef.value.resetFields();
      },

      /**
       * 弹框点击取消关闭model
       */
      modelCancel: () => {
        dialogVisible.value = false;
        formRef.value.resetFields();
      },

      /**
       * 模糊查询 重置
       */
      clearSearch: () => {
        state.searchData = {};
        methods.searchDataList();
      },
    }

    onMounted(() => {
      methods.searchDataList();
      // window.addEventListener('resize', methods.handleResize);
    });

    return {
      ...toRefs(state),
      ...methods,
      dialogVisible,
      rules,
      formRef,
    }
  }
})
</script>

<style lang="less" scoped>

</style>