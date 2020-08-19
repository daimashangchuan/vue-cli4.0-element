<template>
  <div class="app-Header">
    <h1 @click="goHomePage">首页</h1>
  </div>
</template>

<script>
import {} from "@/api"
export default {
  name: "appHeader",
  data() {
    return {}
  },
  created() {},
  computed: {},
  methods: {
    // 回到首页
    goHomePage() {
      this.$router.replace({ path: '/' })
    },
    // 获取天气数据
    getWeather() {

    }
  },
};
</script>

<style lang="less" scoped>

</style>
