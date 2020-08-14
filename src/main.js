import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入全局的ele组件
import "./plugins/elements"

// 添加全局的样式变量
import "./assets/style/reset.css";
// 挂载公共的方法
import { SessionUtil, LocalUtil, CookieUtil } from "./utils/caches";
Vue.use(SessionUtil).use(LocalUtil).use(CookieUtil);
// 全局过滤器 filter 
import initFilters from './fliters';
initFilters(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
