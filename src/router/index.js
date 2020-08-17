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
  console.log("全局的路由守卫","to：",to, "from：",from); 
  next();
});


export default router;
