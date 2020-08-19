<template>
  <div class="notFount">
    <h2 @click="appReloadClick()">刷新</h2>
    <h2 @click="$router.replace('/')">回到首页</h2>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "notFount",
  inject:['appReloadClick'],
  data() {
    return {}
  },
  created() {
    this.setAppPageShow({ isAppHeader: false, isAppFooter: false, isAppAside: false, isAppTabs: false })
  },
  beforeDestroy() {
    this.setAppPageShow({ isAppHeader: true, isAppFooter: true, isAppAside: true, isAppTabs: true })
  },
  methods: {
    ...mapMutations("AppStores",["setAppPageShow"])
  },
};
</script>

<style lang="less" scoped>
.notFount {
  width: 100%;
  height: 100vh;
  background: url("../../assets/images/not-fount.webp");
  background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h2 {
    margin-top:  25%;
    color: #eeeeee;
  }
}
</style>
