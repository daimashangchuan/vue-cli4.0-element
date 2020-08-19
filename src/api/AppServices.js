/**
 * 接口
 */
import axios from "./axios";
import jsonp from "jsonp"

export default {
  /**
   * 获取百度天气信息
   * @param {*} city 城市名称 
   */
  async getWeather(city) {
    return new Promise((resolve, reject) => {
      const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=7OV0Snj8SZ0MZm8uP7N8ssmg`;
      jsonp(url, {}, (err, response) => {
        if (!err && response.status === "success") {
          const currentCity = response.results[0].currentCity;
          const weatherData = response.results[0].weather_data[0];
          weatherData.currentCity = currentCity;
          resolve(weatherData);
        } else {
          if (response.error === -3) {
            message.success("获取天气地址错误，请更换地址");
          }
          reject(response.message);
        }
      });
    });
  },
  async getShop(params) {
    return axios.post(`/Api/getShopRecommendListForIndex`, params);
  },
};
