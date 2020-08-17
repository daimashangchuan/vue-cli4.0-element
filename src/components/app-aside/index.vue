<template>
  <div class="appAside" :style="{ height: appHeight }">
    <el-menu :default-active="defaultActive" @open="handleOpen" @close="handleClose" :unique-opened="true">
      <div v-for="(menu,index) in menuData" :key="index">
        <el-menu-item v-if="!menu.childs" :index="menu.value" :disabled='menu.disabled'>
          <i :class="el-icon-document"></i>
          <span slot="title">{{ menu.title }}</span>
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
    setAsideHeight() {
      this.appHeight = this.clientHeight - 120 + "px";
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
