import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store';
import { encode, decode } from "@/utils/util";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    meta: { keepAlive: false },
    component: () => import("../views")
  },{
    path: "/login",
    name: "login",
    meta: { keepAlive: false },
    component: () => import("../views/userEnter/login.vue")
  },{
    path: "/register",
    name: "register",
    meta: { keepAlive: false },
    component: () => import("../views/userEnter/register.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

//全局守卫
router.beforeEach((to, from, next)=> {
  //  获取当前用户是否再登录状态
  const userToken = store.state.AppStores.userToken;
  console.log(userToken)
  //  在 nextRoute 路由里不做跳转
  const nextRoute = ['login', 'register'];
  // 当前没有登录/登录过期，并且不包括跳转的页面
  if(!userToken && nextRoute.indexOf(to.name) == -1) {
    next({ path: "login", query: { callbackPath: encode(window.location.href) } })
  } 
  if(userToken) { 
    if(to.query.callbackPath) { // 从那去的登录，登录之后回到那
      window.open = to.query.callbackPath;
      next();
    } else if(to.name === 'login'){ // 已登录的情况再去登录页，跳转至首页
      next({ path: "/" })
    }
  } else {
    next();
  }
});


export default router;
