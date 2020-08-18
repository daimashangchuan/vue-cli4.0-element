<template>
  <div class="app-Header">
    <h1 @click="goHomePage">首页</h1>
  </div>
</template>

<script>
export default {
  name: "appHeader",
  data() {
    return {}
  },
  created() {},
  computed: {},
  methods: {
    goHomePage() {
      this.$router.replace({ path: '/' })
    }
  },
};
</script>

<style lang="less" scoped>

</style>
