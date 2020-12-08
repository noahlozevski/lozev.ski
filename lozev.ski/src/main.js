import Vue from "vue"
import App from "./defaultLayout.vue"
// import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import "roboto-fontface/css/roboto/roboto-fontface.css"
import "material-design-icons-iconfont/dist/material-design-icons.css"
import "animate.css/animate.css"
import "./styles/_fonts.css"
import router from "./router"
import store from "./store"

/** import main css sheet */
import "./styles/main.sass"

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

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount("#app")
