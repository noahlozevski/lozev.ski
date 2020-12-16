import Vue from "vue"
import VueRouter from "vue-router"
import NotFound from "../views/404.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "../views/home.vue"),
  },
  {
    path: "*",
    name: "404",
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
