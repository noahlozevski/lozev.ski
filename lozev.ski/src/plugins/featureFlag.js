const CONFIG = {
  coolAssName: false,
}

export default {
  install(Vue, options) {
    if (process.env.NODE_ENV !== "production") console.info(`currently enabled features: `, CONFIG)
    Vue.prototype.$isEnabled = flag => !!CONFIG[flag]
  },
}
