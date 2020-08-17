<template>
  <div class="container">
    {{ requestData }}
  </div>
</template>

<script>
import { AppService } from "@/api";
import { mapState } from "vuex";
export default {
  name: "index",
  inject:['appReloadClick'],
  data() {
    return {
      requestData: {
        longitude: 117.233055,
        latitude: 39.109994,
        page: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.getShop();
  },
  computed: {
    ...mapState("AppStores", ["clientHeight"]),
  },
  methods: {
    async getShop() {
      let {result} = await AppService.getShop(this.requestData);
      console.log(result);
    }
  },
};
</script>

<style lang='less' scoped>
.container {
  height: 100000px;
}
</style>


