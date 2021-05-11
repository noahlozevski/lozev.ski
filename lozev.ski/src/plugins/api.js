import axios from "axios"

/** pass in axios options for creating root instance
 *
 *  usage: this.$api
 */

const DEFAULT_OPTIONS = {
  baseURL: process.env.VUE_APP_BASE_API_URL,
}

class ApiClient {
  constructor(options) {
    this.api = axios.create({ ...DEFAULT_OPTIONS, ...options })
    if (process.env.NODE_ENV !== "production") {
      console.info("created api client", this, { ...DEFAULT_OPTIONS, ...options })
    }
    this.registerInterceptors()
  }

  registerInterceptors() {
    this.api.interceptors.request.use(
      config => {
        if (process.env.NODE_ENV !== "production") console.log(`api request recieved:  `, config)
        return config
      },
      err => {
        if (process.env.NODE_ENV !== "production") console.log(`api request error: `, err)
        return Promise.reject(err)
      },
      { synchronous: true }
    ) // dont delay request/response
    this.api.interceptors.response.use(
      config => {
        if (process.env.NODE_ENV !== "production") console.log(`api request recieved:  `, config)
        return config
      },
      err => {
        if (process.env.NODE_ENV !== "production") console.log(`api request error: `, err)
        return Promise.reject(err)
      },
      { synchronous: true }
    )
  }

  async sendMail({ email, message }) {
    return this.api.post(`/email`, { email, message })
  }
}

export default {
  install(Vue, options) {
    Vue.prototype.$api = new ApiClient(options)
  },
}
