import Vue from "vue"
import App from "./defaultLayout.vue"
// import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import "material-design-icons-iconfont/dist/material-design-icons.css"
import "animate.css/animate.css"
import "./styles/_fonts.css"
import router from "./router"
import VueAnime from "vue-animejs"
import ApiClient from "./plugins/api"
import FeatureFlag from "./plugins/featureFlag"

// import store from "./store"

/** import main css sheet */
import "./styles/main.sass"

// import wb from "./registerServiceWorker"

// Vue.prototype.$workbox = wb
// const a = axios.create({
//   /** read base url from env variables */
//   baseURL: `https://rka4k41tt3.execute-api.us-east-2.amazonaws.com/prod`,
// })

// Vue.prototype.$api = a

// Vue.prototype.$sendMessage = async (message, email) => {
//   try {
//     a.post("/email", { message: message || "", email: email || "" }).catch(e => {
//       e
//     })
//   } catch (e) {
//     e
//   }
// }

Vue.use(ApiClient)
Vue.use(FeatureFlag)

function delay(t, v) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t)
  })
}

Promise.prototype.delay = function(t) {
  return this.then(v => {
    return delay(t, v)
  })
}

String.prototype.indexOfEnd = function(string) {
  var io = this.indexOf(string)

  return io == -1 ? -1 : io + string.length
}

Vue.config.productionTip = false
Vue.config.silent = true

Vue.use(VueAnime)

new Vue({
  vuetify,
  router,
  // store,
  render: h => h(App),
}).$mount("#app")
