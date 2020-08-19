<template>
  <div id="app">
    <!-- 公共侧边栏 -->
    <el-container>
      <el-aside v-if="isAppAside" style="width: 200px;">
        <appAside />
      </el-aside>
      <el-container>
        <!-- 公共头部 -->
        <el-header v-if="isAppHeader">
          <appHeader />
        </el-header>
        <!-- 内容 -->
        <el-main>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive && isRouterAlive" />
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive && isRouterAlive" />
        </el-main>
        <!-- 公共底部 -->
        <el-footer v-if="isAppFooter">
          <appFooter />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  methods: {
    appReloadClick() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function() {
        this.isRouterAlive = true; //再打开
      });
    },
  },
  computed: {
    ...mapState("AppStores", ["isAppHeader", "isAppFooter", "isAppAside", "isAppTabs"])
  },
  components: {
    appHeader: () => import("@/components/app-header"),
    appFooter: () => import("@/components/app-footer"),
    appAside: () => import("@/components/app-aside"),
  }
};
</script>

<style scoped lang="less">
@import "./assets/style/default.less";
</style>
