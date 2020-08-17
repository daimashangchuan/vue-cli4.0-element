import Vue from "vue";
import VueRouter from "vue-router";

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

export default router;
