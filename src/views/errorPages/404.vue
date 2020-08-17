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
// @ is an alias to /src
export default {
  name: "index",
  data() {
    return {
      
    }
  },
  created() {},
  computed: {},
  methods: {},
  components: {}
};
</script>

<style lang="less" scoped>

</style>
