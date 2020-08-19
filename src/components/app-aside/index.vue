<template>
  <div class="appAside">
    <el-menu background-color="#545c64" text-color="#fff" 
      active-text-color="#ffd04b" :default-active="defaultActive" 
      @open="handleOpen" @close="handleClose" >

      <div v-for="(menuOne,index) in menuData" :key="index">
        <!-- 多级 -->
        <el-submenu v-if="menuOne.childs" :index="menuOne.name">
          <template slot="title">
            <i :class="menuOne.icon"></i>
            <span>{{ menuOne.title }}</span>
          </template>
          <div v-for="(menuTwo,i) in menuOne.childs" :key="i">
            <!-- 三级 -->
            <el-submenu v-if="menuTwo.childs" :index="menuTwo.name">
              <template slot="title">
                <i :class="menuTwo.icon"></i>
                <span>{{ menuTwo.title }}</span>
              </template>
              <el-menu-item v-for="(menu,e ) in menuTwo.childs" :key="e" @click="goRouterPath(menu)" :index="menu.path" :disabled='menu.disabled'>
                <i :class="menu.icon"></i>
                <span>{{ menu.title }}</span>
              </el-menu-item>
            </el-submenu>

            <!-- 二级 -->
            <el-menu-item v-if="!menuTwo.childs" @click="goRouterPath(menuTwo)" :index="menuTwo.path" :disabled='menuTwo.disabled'>
              <i :class="menuTwo.icon"></i>
              <span>{{ menuTwo.title }}</span>
            </el-menu-item>
          </div>
        </el-submenu>
        <!-- 只有一级 -->
        <el-menu-item v-if="!menuOne.childs" @click="goRouterPath(menuOne)" :index="menuOne.path" :disabled='menuOne.disabled'>
          <i :class="menuOne.icon"></i>
          <span>{{ menuOne.title }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import menuData from "@/data/menu.js";

export default {
  name: "appAside",
  data() {
    return {
      defaultActive: "/message",
      menuData: menuData,
      appHeight: 0,
    };
  },
  created() {
    this.setAsideHeight();
    this.defaultActive = this.$route.path;
  },
  computed: {
    ...mapState("AppStores", ["clientHeight"]),
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 设置侧边栏的 height
    setAsideHeight() {
      this.appHeight = this.clientHeight - 60 + "px";
    },
    // 跳转路由
    goRouterPath(menu) {
      this.$router.push({ path: menu.path });
    }
  },
};
</script>

<style lang="less" scoped>
.appAside {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
.el-menu {
  width: 100%;
}
/*滚动条样式 start*/
.appAside::-webkit-scrollbar {
  width: 4px;
}
.appAside::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}
.appAside::-webkit-scrollbar-track {
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
/*滚动条样式 end*/
</style>
