<template>
  <div :id="chartsId" class="echarts-container">

  </div>
</template>


<script>
import {onMounted, reactive, toRefs} from 'vue'
import * as echarts from 'echarts';

export default {
  name: "echarts3",
  props: {
    chartsId: {
      type: String,
      default: '',
    },
  },
  setup(props) {

    const state = reactive({
      count: 1,
    })

    const renderChart = () => {

      const myChart = echarts.init(document.getElementById(props.chartsId))
      //父组件给子组件传的值
      console.log("props.chartsId", props.chartsId)

      const option = {
        title: {
          text: '收入周报',
          left: 'center'
        },
        //设置图表中显示数据项的详细信息
        tooltip: {
          show: true,
          trigger: 'axis',
          // axisPointer: {
          //   type: 'shadow'
          // }
        },
        //设置报上上方的标志位
        legend: {
          right: '20',
          top: 10,
          textStyle: {
            color: 'black',
            fontSize: '12px',
            fontWeight: 400,
          }
        },
        xAxis: {
          data: ['1号', '2号', '3号', '4号', '5号', '6号'],
          type: 'category',//类别型
          axisLabel: {
            color: 'black',
            textStyle: {
              fontSize: 12,
            },
          },
        },
        yAxis: {
          type: 'value',//数值型
          axisLabel: {
            color: 'black',
            textStyle: {
              fontSize: 12,
            },
          },
        },
        //整体位置设置
        grid: {
          left: '5%',
          right: '5%',
          bottom: '4%',
          containLabel: true,//包含标签
        },
        series: [
          {
            name: '洗车',
            type: 'bar',//bar代表柱状图
            data: [5, 20, 36, 10, 10, 20],
            label: {
              show: true,
              //每个系列的标签显示，如果值为0，则不显示标签
              formatter: function (val) {
                if (val.value === 0) {
                  return '';
                }
              },
            },
          },
          {
            name: '装饰',
            type: 'bar',
            data: [50, 20, 36, 70, 19, 70],
            label: {
              show: true,
              formatter: function (val) {
                if (val.value === 0) {
                  return '';
                }
              },
            },
          }
        ]
      }

      myChart.setOption(option);
    }

    onMounted(() => {
      renderChart() // 生命周期挂载函数渲染图表
    })

    return {
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>
.echarts-container {
  width: 99%;
  height: 40vh;
}

</style>