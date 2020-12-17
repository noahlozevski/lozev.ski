import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "about" */ "../views/404.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
