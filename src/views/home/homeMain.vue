<template>
  <h2>home主页面</h2>

</template>

<script>
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  name: "homeMain",

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