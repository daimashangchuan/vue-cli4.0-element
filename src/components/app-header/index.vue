<template>
  <div class="app-Header">
    <div class="head-weather">
      <span> {{ weatherData.currentCity }} </span>
      <span> {{ weatherData.date }} </span>
      <span> {{ weatherData.temperature }} </span>
      <img :src="weatherData.dayPictureUrl" alt="dayPictureUrl">
      <img :src="weatherData.nightPictureUrl" alt="nightPictureUrl">
      <span> {{ weatherData.weather }}--{{ weatherData.wind }} </span>
    </div>
    <div class="head-user">
      <p>
        <img src="@/assets/images/logo.gif" alt="logo">
        <span>admin</span>
      </p>
      <i @click="quitClick" style="font-size: 25px; color: #545c64;" class="el-icon-circle-close"></i>
    </div>
  </div>
</template>

<script>
import { AppService } from "@/api";
export default {
  name: "appHeader",
  data() {
    return {
      weatherData: {
        currentCity: "北京",
        date: "周三 08月19日 (实时：23℃)",
        dayPictureUrl: "http://api.map.baidu.com/images/weather/day/duoyun.png",
        nightPictureUrl: "http://api.map.baidu.com/images/weather/night/duoyun.png",
        temperature: "26 ~ 18℃",
        weather: "多云",
        wind: "北风微风",
      }
    }
  },
  mounted() {
    this.getWeather();
  },
  computed: {},
  methods: {
    // 回到首页
    goHomePage() {
      this.$router.replace({ path: '/' })
    },
    // 获取天气数据
    async getWeather() {
      this.weatherData = await AppService.getWeather("北京大兴区");
      console.log(this.weatherData);
    },
    // 退出登录
    quitClick() {
      this.$confirm('此操作将退出系统, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({ type: 'success', message: '退出成功!'});
         this.$router.replace({ path: '/login' })
      }).catch(() => { console.log("取消") });
    }
  },
};
</script>

<style lang="less" scoped>
.app-Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  .head-weather {
    display: flex;
    justify-content: center;
    align-items: center;
    span, img {
      margin-right: 15px;
    }
    span {
      font-size: 14px;
    }
    img {
      width: 20px;
      height: auto;
    }
  }
  .head-user {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 40px;
    }
    img {
      margin-right: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>



