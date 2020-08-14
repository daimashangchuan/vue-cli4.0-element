import Vue from "vue";
import Vuex from "vuex";
import AppStores from "./AppStores";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AppStores,
  }
});
