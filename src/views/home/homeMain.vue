<template>
  <div style="
    width: 99.9%;
    height: 885px;
    border: 1px red solid;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;">
    <div class="main">
      <echart-one :chartsId="chartOneId"/>
    </div>
    <div class="main">
      <echart-two :chartsId="chartTwoId"/>
    </div>
    <div class="main">
      <echart-three :chartsId="chartThreeId"/>
    </div>
    <div class="main">
      <echart-four :chartsId="chartFourId"/>
    </div>
  </div>
</template>

<script>
import {defineComponent, reactive, toRefs} from 'vue'
import echarts1 from "./echarts1";
import echarts2 from "./echarts2";
import echarts3 from "./echarts3";
import echarts4 from "./echarts4";

export default defineComponent({
  name: "homeMain",

  components: {
    'echart-one': echarts1,
    'echart-two': echarts2,
    'echart-three': echarts3,
    'echart-four': echarts4,
  },

  setup() {
    const state = reactive({
      count: 1,
      chartOneId: 'chartOne',
      chartTwoId: 'chartTwo',
      chartThreeId: 'chartThree',
      chartFourId: 'chartFour',
    })

    return {
      ...toRefs(state),
    }
  }
})
</script>

<style scoped>
.main {
  width: 49%;
  height: 440px;
  /*border: 1px yellowgreen solid;*/
}
</style>