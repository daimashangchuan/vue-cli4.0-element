/**
 * axios的全局设置
 */
import axios from "axios";
import qs from "qs";

axios.defaults.baseURL = "";
axios.defaults.timeout = 10000;
axios.defaults.transformRequest = [
  function(params) {
    return qs.stringify(params, { arrayFormat: "brackets", allowDots: true });
  }
];
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

axios.interceptors.request.use(
  request => {
    
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    
    return response.data.result;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
