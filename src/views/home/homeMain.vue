<template>
  <div style="
    width: 99.9%;
    height: 83vh;
    border: 1px red solid;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;"
  >
    <div style="width: 49%; height: 41vh; border: 1px yellowgreen solid">

    </div>
    <div style="width: 49%; height: 41vh; border: 1px yellowgreen solid">

    </div>
    <div style="width: 49%; height: 41vh; border: 1px yellowgreen solid">

    </div>
    <div style="width: 49%; height: 41vh; border: 1px yellowgreen solid">

    </div>
  </div>

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