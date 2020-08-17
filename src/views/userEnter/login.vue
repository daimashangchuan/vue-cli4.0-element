<template>
  <div class="login" @click="getUserToken">
    登录
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  name: "login",
  data() {
    return {}
  },
  mounted() {
    this.setUserToken("111");
  },
  computed: {},
  methods: {
    ...mapActions("AppStores", ["setUserToken" ]),
    getUserToken() {
      console.log("www")
      console.log(this.setUserToken)
      
      this.$router.push("/")
    }
  },
};
</script>

<style lang="less" scoped>

</style>
