<template>
  <div class="container">
    <el-container>
      <!-- 公共头部 -->
      <el-header>头部</el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">侧边栏</el-aside>
        <!-- 内容 -->
        <el-main>内容</el-main>
      </el-container>
      <!-- 公共底部 -->
      <el-footer>底部</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { AppService } from "@/api";
import { mapState } from "vuex";
export default {
  name: "index",
  created() {
    // this.getShop();
  },
  computed: {
    ...mapState("AppStores", ["userInfo", "userToken"]),
  },
  methods: {
    async getShop() {
      let params = {};
      // AppService.getShop(params).then(res=>{})
      await AppService.getShop(params);
    },
  },
};
</script>

<style lang="less" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
</style>
