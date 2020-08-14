<template>
  <div class="container">
    内容
  </div>
</template>

<script>
// @ is an alias to /src
import { AppService } from '@/api';
import { mapState } from "vuex";
export default {
  name: "index",
  created() {
    // this.getShop();
  },
  computed: {
    ...mapState("AppStore", ["show"])
  },
  methods: {
    async getShop() {
      let params ={};
      // AppService.getShop(params).then(res=>{})
      await AppService.getShop(params)
    }
  },
};
</script>

<style lang="less" scoped></style>
