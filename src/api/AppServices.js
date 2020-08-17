/**
 * 接口
 */
import axios from "./axios";

export default {
  async getShop(params) {
    return axios.post(`/Api/getShopRecommendListForIndex`, params);
  },
}


