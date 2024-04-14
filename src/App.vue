<template id="app">

  <!-- id="app" 和 此标签必须有 -->
  <router-view></router-view>

</template>

<script>

/*import request from "@/utils/request";*/

/*测试跨域请求后端接口*/
/*request({
  method: 'GET',
  // url: 'http://localhost:8001/user',
  url: '/api/user',
}).then((res) => {
  console.log(res)
})*/

export default {
  name: 'App',
}
</script>

<style>
</style>
