<template>

  <h2>会员登记页面</h2>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: "vipSign",
  setup() {

    const state = reactive({
      use: {},

    });

    const methods = {

      // vipSign: () => {
      //   router.push({
      //     path: './home'
      //   });
      //
      // },
    }

    return {
      ...toRefs(state),
      ...methods,
    };
  }
}
</script>

<style scoped>

.top {
  height: 50px;
  border: 1px red solid;
}

.tac {
  height: 700px;
  border: 1px red solid;
}

.main-left {
  height: 700px;
  border: 1px green solid;
}

.main-right {
  height: 700px;
  border: 1px turquoise solid;
}

</style>