<template>
  <h2>菜单列表</h2>
  <div>

  </div>
</template>

<script>
import {defineComponent, reactive, toRefs} from 'vue'
// import {getAllMenu} from "@/views/menu/api/menuIndexApi";

export default defineComponent({
  name: "menuIndex",
  setup() {
    const state = reactive({
      count: 1,
    })

    return {
      ...toRefs(state),
    }
  }
})
</script>

<style scoped>

</style>