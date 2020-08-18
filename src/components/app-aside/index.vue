<template>
  <div class="appAside" :style="{ height: appHeight }">
    <el-menu :default-active="defaultActive" @open="handleOpen" @close="handleClose" :unique-opened="true">
      <div v-for="(menuOne,index) in menuData" :key="index">
        <el-submenu :index="menuOne.path">
          <template slot="title">
            <i :class="menuOne.icon"></i>
            <span slot="title">{{ menuOne.title }}</span>
          </template>
          <el-menu-item @click="goRouterPath(menuOne.path)" v-if="!menuOne.childs" :index="menuOne.path" :disabled='menuOne.disabled'>
            <i :class="menuOne.icon"></i>
            <span slot="title">{{ menuOne.title }}</span>
          </el-menu-item>
        </el-submenu>
        <!-- 一级路由 -->
        <!-- <el-menu-item @click="goRouterPath(menuOne.path)" v-if="!menuOne.childs" :index="menuOne.path" :disabled='menuOne.disabled'>
          <i :class="menuOne.icon"></i>
          <span slot="title">{{ menuOne.title }}</span>
        </el-menu-item> -->
        <!-- 二级路由 -->
        <!-- <template v-if="menuOne.childs">
          <el-submenu v-for="(menuTwo,i) in menuOne" :key="i" :index="menuTwo.path">
            <template slot="title">
              <i :class="menuOne.icon"></i>
              <span slot="title">{{ menuOne.title }}</span>
            </template>
            <el-menu-item @click="goRouterPath(menuTwo.path)" v-if="!menuTwo.childs" :index="menuTwo.path" :disabled='menuTwo.disabled'>
              <i :class="menuTwo.icon"></i>
              <span slot="title">{{ menuTwo.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template> -->
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
      defaultActive: "/auth",
      menuData: menuData,
      appHeight: 0,
    };
  },
  created() {
    this.setAsideHeight()
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
      this.appHeight = this.clientHeight - 120 + "px";
    },
    // 跳转路由
    goRouterPath(path) {
      this.$router.push({ path });
    }
  },
};
</script>

<style lang="less" scoped>
.appAside {
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
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
