import Vue from "vue"
import VueRouter from "vue-router"
import Entrance from "../views/Entrance.vue"
import Home from "../views/home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "entrance",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
