<template>
  <div id="app">
    <el-container>
      <!-- 公共头部 -->
      <el-header v-if="!isAppHeader">
        <appHeader />
      </el-header>

      <!-- 主体 -->
      <el-container>
        <!-- 公共侧边栏 -->
        <el-aside v-if="!isAppAside" style="width: 200px;">
          <appAside />
        </el-aside>
        <!-- 内容 -->
        <el-main>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive && isRouterAlive" />
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive && isRouterAlive" />
        </el-main>
      </el-container>

      <!-- 公共底部 -->
      <el-footer v-if="!isAppFooter">
        <appFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  provide() {
    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      appReloadClick: this.appReloadClick,
    };
  },
  data() {
    return {
      isRouterAlive: true, //控制视图是否显示的变量
    };
  },
  created() {
    this.setAppPageShow({ isAppHeader: false, isAppFooter: false, isAppAside: false })
  },
  methods: {
    ...mapMutations("AppStores", ["setAppPageShow"]),
    appReloadClick() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function() {
        this.isRouterAlive = true; //再打开
      });
    },
  },
  computed: {
    ...mapState("AppStores",["isAppHeader","isAppFooter","isAppAside"])
  },
  components: {
    appHeader: () => import("@/components/app-header"),
    appFooter: () => import("@/components/app-footer"),
    appAside: () => import("@/components/app-aside")
  }
};
</script>

<style lang="less">
@import "./assets/style/default.less";
</style>
