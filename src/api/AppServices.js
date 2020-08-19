/**
 * 接口
 */
import axios from "./axios";

export default {
  // 获取天气数据
  async getWeather(city) {
    return axios.get(`http://wthrcdn.etouch.cn/weather_mini?city=${city}`);
  },
  async getShop(params) {
    return axios.post(`/Api/getShopRecommendListForIndex`, params);
  },
  
}


