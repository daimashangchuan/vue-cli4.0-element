<template>
  <div class="container">
    <el-container>
      <!-- 公共头部 -->
      <el-header>
        <appHeader />
      </el-header>

      <!-- 主体 -->
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">侧边栏</el-aside>
        <!-- 内容 -->
        <el-main>内容</el-main>
      </el-container>

      <!-- 公共底部 -->
      <el-footer>
        <appFooter />
      </el-footer>
    </el-container>
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
    ...mapState("AppStores", ["userInfo", "userToken"]),
  },
  methods: {
    async getShop() {
      let {result} = await AppService.getShop(this.requestData);
      console.log(result);
    }
  },
  components: {
    appHeader: () => import("../components/app-header"),
    appFooter: () => import("../components/app-footer")
  }
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
