<template lang="pug">
  v-app
    v-overlay.overlay-ui(v-if="showUpdateUI" style="z-index: 99999;")
      .update-ui.text-center
        h3.top New page update available!
        h6.subtitle Would you like to update?
        button.button.animate__animated(@click="updateApp" :class="{ animate__tada: mouseOver }" @mouseover="mouseOver = true" @mouseleave="mouseOver = false") Update!
    v-navigation-drawer.drawer(app right temporary v-model="drawerStatus" @input="test" v-if="$vuetify.breakpoint.smAndDown")
      .px-4.py-1
        button.ml-auto.hamburger.hamburger--collapse(@click="navigationDrawer()" type="button")
          span.hamburger-box
            span.hamburger-inner
        .nav.mt-10
          .item
            .number 01.
            a.type.hvr-underline-from-center(href="#" @click="navigationDrawer('#about')") About
          .item
            .number 02.
            a.type.hvr-underline-from-center(href="#" @click="navigationDrawer('#experience')") Experience
          .item
            .number 03.
            a.type.hvr-underline-from-center(href="#" @click="navigationDrawer('#projects')") Projects
          .item
            .number 04.
            a.type.hvr-underline-from-center(href="#" @click="navigationDrawer('#contact')") Contact
          .item
            .resume-button
              a.my-auto(href="/resume.pdf" target="_blank") Resume
    v-app-bar.bar.w-100(app :hide-on-scroll="$vuetify.breakpoint.mdAndUp" elevate-on-scroll :prominent="$vuetify.breakpoint.mdAndUp" :shrink-on-scroll="$vuetify.breakpoint.mdAndUp")
      .ml-2.ml-md-8.logo.mr-auto(:style="$vuetify.breakpoint.mdAndUp ? 'font-size: 50px' : 'font-size: 35px'")
        p.my-auto.text-glow.unselectable(id="logo-app-bar" @click="goHome") { nl }
      template(v-if="loaded")
        .item.d-none.d-md-block.slide-in-top(:style="'--slide-delay: 0.1s'")
          .number 01.
          a.type.hvr-underline-from-center(href="#" @click="$vuetify.goTo('#about', scrollOptions)") About
        .item.d-none.d-md-block.slide-in-top(:style="'--slide-delay: 0.2s'")
          .number 02.
          a.type.hvr-underline-from-center(href="#"  @click="$vuetify.goTo('#experience', scrollOptions)") Experience
        .item.d-none.d-md-block.slide-in-top(:style="'--slide-delay: 0.3s'")
          .number 03.
          a.type.hvr-underline-from-center(href="#"  @click="$vuetify.goTo('#projects', scrollOptions)") Projects
        .item.d-none.d-md-block.slide-in-top(:style="'--slide-delay: 0.4s'")
          .number 04.
          a.type.hvr-underline-from-center(href="#" @click="$vuetify.goTo('#contact', scrollOptions)") Contact
        .item.d-none.d-md-block.mr-8.slide-in-top(:style="'--slide-delay: 0.5s'")
          .resume-button
            a(href="/resume.pdf" target="_blank") Resume
      button.d-md-none.ml-auto.hamburger.hamburger--collapse(@click="navigationDrawer()" type="button")
        span.hamburger-box
          span.hamburger-inner
    v-main.pb-0(background="#0a192fd9")
      router-view(@loaded="loadedPage" @scroll="e=>$vuetify.goTo(e,scrollOptions)")
    v-footer.footer(app padless :absolute="$vuetify.breakpoint.smAndDown")
      .container.d-md-block.d-none
        .left-side.mx-lg-10.mx-md-6
          .items
            .item
              a(href="https://github.com/noahlozevski" target="_blank" rel="noopener")
                svg.icon(xmlns="http://www.w3.org/2000/svg", role="img", viewBox="0 0 438.549 438.549")
                  title GitHub
                  path(d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z")
            .item.linkedin
              a(href="https://www.linkedin.com/in/nlozevski/" target="_blank" rel="noopener")
                svg.icon(xmlns="http://www.w3.org/2000/svg", role="img", viewBox="0 0 430.117 430.117")
                  title LinkedIn
                  path(d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z")
            .item.indeed
              a(href="https://my.indeed.com/p/noahl-im8w8tp" target="_blank" rel="noopener")
                svg.icon(xmlns="http://www.w3.org/2000/svg", xlink="http://www.w3.org/1999/xlink", version="1.1", x="0px", y="0px", viewBox="0 0 512 512", style="enable-background:new 0 0 512 512;", space="preserve")
                  title Indeed
                  g
                    path(d="M316.2,219.9c-51.1,26.2-108.4-22.7-90.6-77.3c17.9-54.7,93-60.3,118.8-8.8C360.4,165.3,347.9,204,316.2,219.9L316.2,219.9   z M247.5,12.2C300.2-7,360.4-6,405.5,33.2c9.5,7.8,17,17.8,21.8,29.2c4.5,14.7-16-1.5-18.8-3.6c-14.2-9.7-29.6-17.6-45.9-23.4   c-88.8-27.1-172.8,22.3-224.7,99.3c-21.2,33.9-37.3,70.8-48,109.3c-1,4.7-2.5,9.3-4.5,13.8c-2.3,4.3-1.1-11.8-1.1-12.2   c1.9-16.1,5-32.1,9.2-47.8C117.6,113.9,170.9,44.1,247.5,12.2L247.5,12.2z M248.3,460v-187c5.3,0.6,10.3,0.8,15.7,0.8   c24.3,0.1,48-6.6,68.8-19.1V460c0,17.6-3.3,30.5-11.2,39c-7.9,8.7-19.1,13.4-30.9,13c-11.6,0.4-22.7-4.3-30.5-13   C252.2,490.4,248.2,477.4,248.3,460L248.3,460z")
            .item.upwork
              a(href="https://www.upwork.com/freelancers/~018b9263e67b5c6ad0" target="_blank" rel="noopener")
                svg.icon(xmlns="http://www.w3.org/2000/svg", xlink="http://www.w3.org/1999/xlink", style="enable-background:new 0 0 56.7 56.7;", version="1.1", viewBox="0 0 56.7 56.7", space="preserve")
                  path(d="M42.4,17.7c-5.3,0-9.3,3.5-10.9,9c-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0,2.9-2.4,5.3-5.3,5.3c-2.9,0-5.3-2.4-5.3-5.3V14.7  H4.3v14.7c0,6.1,4.9,11,10.9,11c6,0,10.9-4.9,10.9-11v-2.5c1.1,2.2,2.5,4.6,4,6.7l-3.5,16.3h5.7L34.7,38c2.2,1.4,4.7,2.2,7.7,2.2  c6.1,0,11.1-5,11.1-11.4C53.5,22.7,48.5,17.7,42.4,17.7z M42.4,34.6c-2.2,0-4.5-1-6.3-2.5l0.6-2.2v-0.1c0.4-2.4,1.7-6.4,5.8-6.4  c3.1,0,5.6,2.5,5.6,5.6C48,32.1,45.3,34.6,42.4,34.6z")
            .item.codepen
              a(href="https://codepen.io/lozevski" target="_blank" rel="noopener")
                svg.icon(xmlns="http://www.w3.org/2000/svg", role="img", viewBox="0 0 31.665 31.665")
                  title Codepen
                  path(d="M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444 c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086 v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215 l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215 V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z")
        .right-side.mx-lg-10.mx-md-6
          .items
            .email
              a(href="mailto:noah@lozev.ski?subject=Lets Chat! 🤟&body=Hi Noah, I'd like to hire you!") noah@lozev.ski
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loaded: false,
      drawerStatus: false,
      showUpdateUI: false,
      scrollOptions: {
        duration: 750,
        offset: 0,
        easing: "easeInOutCubic",
      },
      mouseOver: false,
    }
  },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpdateUI = true
        console.log("new update is available!")
      })
    }
  },
  methods: {
    async sendUserAgentInfo() {
      try {
        let user = {
          user_agent: await window.navigator.userAgent,
          appName: await window.navigator.appName,
          appCodeName: await window.navigator.appCodeName,
          appVersion: await window.navigator.appVersion,
          onLine: await window.navigator.onLine,
          connection: await window.navigator.connection,
          cookieEnabled: await window.navigator.cookieEnabled,
          doNotTrack: await window.navigator.doNotTrack,
          language: await window.navigator.langauges,
          serviceWorker: await window.navigator.serviceWorker,
          userActivation: await window.navigator.userActivation,
          product: await window.navigator.product,
          platform: await window.navigator.platform,
          userAgentData: await window.navigator.userAgentData,
          vendor: await window.navigator.vendor,
          vendorSub: await window.navigator.vendorSub,
          time: new Date().toUTCString(),
          time_ms: new Date().getTime(),
        }

        this.$sendMessage(JSON.stringify(user, null, 2), "user-agent-info")
      } catch (e) {
        e
      }
    },
    test(input) {
      this.drawerStatus = input
      const els = document.getElementsByClassName("hamburger")

      for (let el of els) {
        if (this.drawerStatus) el.classList.add("is-active")
        else el.classList.remove("is-active")
      }
    },
    async updateApp() {
      this.showUpdateUI = false
      await this.$workbox.messageSW({ type: "SKIP_WAITING" })
    },

    navigationDrawer(status = null) {
      const els = document.getElementsByClassName("hamburger")

      for (let el of els) {
        if (status) el.classList.add("is-active")
        else el.classList.remove("is-active")
      }
      this.drawerStatus = !this.drawerStatus
      if (status !== null) {
        this.$vuetify.goTo(status, this.scrollOptions)
      }
    },
    loadedPage() {
      this.sendUserAgentInfo()
      console.log("hey there :)")
      console.info("thanks for visiting my site")
      this.loaded = true
    },
    goHome() {
      if (this.$route.name === "home") this.$vuetify.goTo("#home", this.scrollOptions)
      else this.$router.push({ name: "home" })
    },
  },
}
</script>

<style lang="sass">
$dark-blue: #0a192fd9
$lighter-blue: rgb(23, 42, 69)
$neon-green: rgb(100, 255, 218)
$navy: #0a192f
$light-navy: #172a45
$lightest-navy: #303C55
$slate: #8892b0
$light-slate: #a8b2d1
$lightest-slate: #ccd6f6
$white: #e6f1ff
$green: #64ffda
.hide-all-scrollbars
  &::-webkit-scrollbar
    visibility: hidden
    display: none

@-webkit-keyframes AnimationName
  0%
    background-position: 15% 0%
  50%
    background-position: 86% 100%
  100%
    background-position: 15% 0%
@-moz-keyframes AnimationName
  0%
    background-position: 15% 0%
  50%
    background-position: 86% 100%
  100%
    background-position: 15% 0%

@keyframes AnimationName
  0%
    background-position: 15% 0%
  50%
    background-position: 86% 100%
  100%
    background-position: 15% 0%

body, .v-main
  background-color: $dark-blue !important
  // transition: all 1s ease-in-out !important

.v-app-bar
  backdrop-filter: blur(10px)
  // background-color: #0a192fd9 !important
  background-color: #0a192fd9 !important
.v-navigation-drawer
  backdrop-filter: blur(20px)
  background-color: #0a192fd9 !important

.v-navigation-drawer__content
  // background-color: $dark-blue
  background-color: transparent
.v-toolbar__content
  background-color: transparent
  align-items: center !important
  // backdrop-filter: blur(10px)
.v-overlay
  transition: all .2s ease-in-out !important
.v-overlay--active
  // -webkit-backdrop-filter: blur(20px)
  backdrop-filter: blur(5px)
//   animation: overlay-anim 1s ease-in-out 1

// @keyframes overlay-anim
//   0%
//     backdrop-filter: none
//   100%
//     backdrop-filter: blur(5px)

  // -webkit-filter: blur(20px)
.unselectable
  -webkit-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
  &:hover
    cursor: pointer
.slide-in-top
  -webkit-animation: slide-in-top 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) var(--slide-delay) both
  animation: slide-in-top 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) var(--slide-delay) both


@-webkit-keyframes slide-in-top
  0%
    -webkit-transform: translateY(-1000px)
    transform: translateY(-1000px)
    opacity: 0

  100%
    -webkit-transform: translateY(0)
    transform: translateY(0)
    opacity: 1

@keyframes slide-in-top
  0%
    -webkit-transform: translateY(-1000px)
    transform: translateY(-1000px)
    opacity: 0

  100%
    -webkit-transform: translateY(0)
    transform: translateY(0)
    opacity: 1
.overlay-ui
  backdrop-filter: blur(10px)
  .update-ui
    color: $green
    font-size: clamp(10px, 8vw, 50px)
    transition: all 1s ease-in-out
    font-family: 'gotham'
    margin: 100px 0
    h3.top
      // font-size: clamp(14px,5vw,16px)
      color: $lightest-slate
      margin-top: 50px
    h6
      color: $slate
      margin-top: 10px
    button
      border: 2px solid $green
      border-radius: 10px
      padding: 10px 30px
      margin: 50px 0 0 0
      &:hover
        background-color: rgba(100, 255, 218,0.2)

.v-footer
  background: transparent !important
.footer
  .container
    // width: 100%
    height: 0px
    padding: 0
    left: 0
    right: 0
    .left-side
      height: 350px
      position: absolute
      left: 0
      bottom: 0
    .linkedin
      margin: 25px auto 30px auto
    .indeed
      height: 22px !important
      width: 22px !important
      margin: 25px auto 20px auto !important
    .upwork
      margin: 20px auto 20px auto !important
      height: 25px !important
      width: 25px !important
    .codepen
      margin: 20px auto 20px auto !important
    .email
      writing-mode: vertical-rl
      transform: translateY(4px)
      transition: .25s transform ease-in-out
      // margin-bottom: 18px
      margin: 0 auto 18px auto
      font-size: 12px
      a
        text-decoration: none
        color: $light-slate
        transition: .35s color ease-in-out
        &:hover
          color: $green
      &:hover
        transform: translateY(0px)

    .item
      height: 18px
      width: 18px
      color: $light-slate !important
      transform: translateY(4px)
      transition: .25s transform ease-in-out
      margin: 25px auto 25px auto
      &:hover
        transform: translateY(0px)
      a
        color: $light-slate !important
        // color: $lightest-slate !important
        svg
          path
            transition: fill .35s ease-in-out
            fill: currentcolor
      a:hover
        color: $green !important
        svg
          path
            transition: fill .35s ease-in-out
            fill: currentcolor

    .items:after
      content: ""
      display: block
      width: 1px
      height: 107px
      transform: translateY(10px)
      bottom: 0
      margin: 0px auto
      overflow: hidden
      background: linear-gradient(328deg, #64ffda, #a8b2d1)
      background-size: 400% 400%
      -webkit-animation: AnimationName 2s ease infinite
      -moz-animation: AnimationName 2s ease infinite
      animation: AnimationName 2s ease infinite
    .right-side
      height: 230px
      position: absolute
      right: 0
      bottom: 0
      .items
        bottom: 0
.text-glow
  // -webkit-text-shadow: 0 0 7px rgba(255, 255, 255, 0.8)
  // text-shadow: 0 0 7px rgba(255, 255, 255, 0.8)
  animation: textPulse 3s ease-in-out 0s infinite normal !important
@keyframes textPulse
  0%
    -webkit-text-shadow: 0 0 1px $green
    text-shadow: 0 0 1px $green

  50%
    -webkit-text-shadow: 0 0 3px $green, 0 0 5px $green
    text-shadow: 0 0 3px $green, 0 0 5px $green

  100%
    -webkit-text-shadow: 0 0 2px $green
    text-shadow: 0 0 2px $green

.bar
  .logo
    // height: 100%

    line-height: 28px
    color: $green
    // color: $lightest-slate
    p
      // transform: translateY(50%)
  .item
    margin-right: 20px
    margin-left: 20px
    text-align: center
    font-size: 14px
    .number
      display: inline
      margin-right: 5px
      color: rgb(100, 255, 218)

    a.type
      display: inline
      color: $light-slate
      text-decoration: none
      transition: all .25s ease-in-out
      &:hover
        color: $green
    .resume-button
      border-radius: 5px
      border: 1.5px solid $green
      width: 80px
      height: 40px
      padding: auto
      transition: all .25s ease-in-out
      a
        line-height: 37px
        height: 31px
        display: block
        text-decoration: none
        color: $green
      &:hover
        background-color: rgb(100, 255, 218,0.2)


.drawer
  .nav
    display: flex
    flex-direction: column
    align-items: center
    max-height: 500px
    font-size: 16px
    .item
      margin-top: 20px
      margin-bottom: 20px
      text-align: center
      .number
        margin-bottom: 5px
        color: $neon-green
      a.type
        color: $light-slate
        font-size: 20px
        text-decoration: none
        transition: all .25s ease-in-out
        &:hover
          color: $neon-green
      .resume-button
        border-radius: 5px
        border: 1.5px solid $neon-green
        width: 155px
        height: 55px
        padding: auto
        transition: all .25s ease-in-out
        a
          line-height: 51px
          height: 51px
          display: block
          text-decoration: none
          color: $neon-green
        &:hover
          background-color: rgb(100, 255, 218,0.2)

.hamburger
  display: block !important
  .hamburger-inner,::before,::after
      background-color: $green !important

.hvr-underline-from-center
  /* display: inline-block;
  vertical-align: middle
  -webkit-transform: perspective(1px) translateZ(0)
  transform: perspective(1px) translateZ(0)
  box-shadow: 0 0 1px rgba(0, 0, 0, 0)
  position: relative
  overflow: hidden

  &:before
    content: ""
    position: absolute
    z-index: -1
    left: 51%
    right: 51%
    bottom: -6px
    background: rgb(100, 255, 218)
    height: 2px
    -webkit-transition-property: left, right
    transition-property: left, right
    -webkit-transition-duration: 0.1s
    transition-duration: 0.1s
    -webkit-transition-timing-function: ease-out
    transition-timing-function: ease-out
    border-radius: 1px

  &:hover:before, &:focus:before, &:active:before
    left: 0
    right: 0
// .routerAnimation-enter-active,
// .routerAnimation-leave-active
//   transition-duration: 0.3s
//   transition-property: opacity
//   transition-timing-function: ease
//   overflow: hidden

// .routerAnimation-enter,
// .routerAnimation-leave-active
//   opacity: 0
// html, body
//   width: auto!important
//   overflow-x: hidden!important


// .bg
//   width: 100%
//   height:100%
//   background: url('https://www.pngkey.com/png/full/15-150952_transparent-pattern-sacred-geometry-svg-pattern.png') repeat
//   position: fixed
//   top: 0
//   left: 0
</style>
