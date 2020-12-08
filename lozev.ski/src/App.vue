<template>
  <div>
    <span class="bg"></span>
    <v-app>
      <!-- <v-navigation-drawer app> </v-navigation-drawer> -->
      <!-- <v-system-bar app> </v-system-bar> -->
      <!-- <v-app-bar app> </v-app-bar> -->

      <!-- Sizes your content based upon application components -->
      <!-- <v-main> -->
      <!-- Provides the application the proper gutter -->
      <!-- <v-container fluid> -->
      <!-- If using vue-router -->
      <transition
        name="routerAnimation"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view />
      </transition>

      <!-- </v-container> -->
      <!-- </v-main> -->

      <!-- <v-footer app> </v-footer> -->
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      prevHeight: 0,
    }
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter(element) {
      const { height } = getComputedStyle(element)

      element.style.height = this.prevHeight

      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter(element) {
      element.style.height = "auto"
    },
  },
}
</script>

<style lang="sass" scoped>
.routerAnimation-enter-active,
.routerAnimation-leave-active
  transition-duration: 0.3s
  transition-property: opacity
  transition-timing-function: ease
  overflow: hidden

.routerAnimation-enter,
.routerAnimation-leave-active
  opacity: 0
html, body
  width: auto!important
  overflow-x: hidden!important


// .bg
//   width: 100%
//   height:100%
//   background: url('https://www.pngkey.com/png/full/15-150952_transparent-pattern-sacred-geometry-svg-pattern.png') repeat
//   position: fixed
//   top: 0
//   left: 0
</style>
