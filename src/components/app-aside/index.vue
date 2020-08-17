<template>
  <div class="appAside" :style="{ height: appHeight }">
    <el-menu default-active="1-1" @open="handleOpen" @close="handleClose" :unique-opened="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项1</el-menu-item>
          <el-menu-item index="1-4">选项2</el-menu-item>
          <el-menu-item index="1-5">选项1</el-menu-item>
          <el-menu-item index="1-6">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项1</el-menu-item>
          <el-menu-item index="2-4">选项2</el-menu-item>
          <el-menu-item index="2-5">选项1</el-menu-item>
          <el-menu-item index="2-6">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项1</el-menu-item>
          <el-menu-item index="1-4">选项2</el-menu-item>
          <el-menu-item index="1-5">选项1</el-menu-item>
          <el-menu-item index="1-6">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项1</el-menu-item>
          <el-menu-item index="2-4">选项2</el-menu-item>
          <el-menu-item index="2-5">选项1</el-menu-item>
          <el-menu-item index="2-6">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "appAside",
  data() {
    return {
      appHeight: 0,
    };
  },
  created() {
    this.appHeight = this.clientHeight - 120 + "px";
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
