/**
 *  公用的工具方法
 */
import Cookies from 'js-cookie';
import { encode, decode } from "./util";

/**
 * sessionStorage   添加    获取    删除
 */
export const SessionUtil = {
  install(Vue) {
    Vue.prototype.SessionUtil = {
      set(key, value) {
        return sessionStorage.setItem(key, encode(JSON.stringify(value)) || "");
      },
      get(key) {
        return JSON.parse(decode(sessionStorage.getItem(key)));
      },
      del(key) {
        return sessionStorage.removeItem(key);
      }
    };
  }
};

/**
 * localStorage  添加   获取    删除
 */
export const LocalUtil = {
  install(Vue) {
    Vue.prototype.LocalUtil = {
      set(key, value) {
        return localStorage.setItem(key, encode(JSON.stringify(value)) || "");
      },
      get(key) {
        return JSON.parse(decode(localStorage.getItem(key)));
      },
      del(key) {
        return localStorage.removeItem(key);
      }
    };
  }
};

/**
 *  cookie  添加   获取    删除
 */
export const CookieUtil = {
  install(Vue) {
    Vue.prototype.CookieUtil = {
      //  options   expires有效时间   path 对path路径有效
      set(key, value, options) {
        return Cookies.set(key, encode(JSON.stringify(value)), options);
      },
      // key 为空 获取全部的 cookie
      get(key) {
        return JSON.parse(decode(Cookies.get(key)));
      },
      //  options   expires有效时间   path 对path路径无效
      del(key, options) {
        return Cookies.remove(key, options);
      }
    };
  }
};
