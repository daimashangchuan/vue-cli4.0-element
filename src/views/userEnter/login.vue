<template>
  <div class="login" @click="getUserToken">
    登录
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  name: "login",
  data() {
    return {
      query: this.$route.query
    }
  },
  created() {
    this.setAppPageShow({ isAppHeader: false, isAppFooter: false, isAppAside: false })
  },
  beforeDestroy() {
    this.setAppPageShow({ isAppHeader: true, isAppFooter: true, isAppAside: true })
  },
  computed: {},
  methods: {
    ...mapMutations("AppStores", ["setAppPageShow"]),
    getUserToken() {
      const callbackPath = this.query.callbackPath? this.query.callbackPath: '/';
      // this.$router.replace(callbackPath);
      this.$router.push(callbackPath);
    }
  },

};
</script>

<style lang="less" scoped>

</style>
