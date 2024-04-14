<template>
  <h2>角色列表</h2>
  <div>

  </div>
</template>

<script>
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  name: "role",
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