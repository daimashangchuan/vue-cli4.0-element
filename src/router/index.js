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
    component: () => import("../views/index.vue")
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
  // mode: "history",
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});


const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


//全局守卫
router.beforeEach((to, from, next)=> {
  //  获取当前用户是否再登录状态
  // console.log("全局的路由守卫","to：",to, "from：",from); 
  next();
});


export default router;
