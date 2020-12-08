<template lang="pug">
  div.fill-height
    v-container.entrance-page(fluid fill-height)
      v-row(no-gutters v-if="!showPage")
        v-col
          typing-text(:message="message", :delay=".75" :length="3" :offset=".5" @trigger="trigger" :isMobile="isMobile" id="entrance_text" )
      template(v-if="showPage")
        v-row.header(:style="$vuetify.breakpoint.mdAndUp ? 'text-align: left':'text-align: center'")
          v-col.col-md-4.col-sm-12(cols='12')
            .d-flex
              h1.ml-md-11.mx-sm-auto.mx-auto.fullname Noah Lozevski
          v-col.col-md-2.col-sm-12.d-md-none
            hr.mx-10

            //- .gradient-border Noah lozevkis
            //- nameplate
            //- ul.pl-6.pre-loader(:style="`--delay: ${slideOffset}s`")
            //-   li(v-for="c in 'Noah Lozevski'" :class="selectedTab !== null ? 'animate-start' : ''") {{c}}
          v-col.col-md-2.col-sm-12(cols='12')
            h1.tabs.text-center.hvr-underline-reveal(@click="selectTab(0)"
                                :style="`--delay: ${2*slideOffset}s;`"
                                :class="selectedTab == 0 ? 'text-glow': ''") about
          v-col.col-md-2.col-sm-12( cols='12')
            h1.tabs.text-center.hvr-underline-reveal(@click="selectTab(1)"
                                :style="`--delay: ${3*slideOffset}s;`"
                                :class="selectedTab == 1 ? 'text-glow': ''") projects
          v-col.col-md-2.col-sm-12( cols='12')
            h1.tabs.text-center.hvr-underline-reveal(@click="selectTab(2)"
                                :style="`--delay: ${4*slideOffset}s;`"
                                :class="selectedTab == 2 ? 'text-glow': ''") resume
          v-col.col-md-2.col-sm-12( cols='12')
            h1.tabs.text-center.hvr-underline-reveal(@click="selectTab(3)"
                                :style="`--delay: ${5*slideOffset}s;`"
                                :class="selectedTab == 3 ? 'text-glow': ''") contact
          //- v-col.col-md-2.col-sm-12.slide-in-blurred-bl(v-for="(tab,i) in tabs" cols='12' :style="`--delay: ${(i+1)*slideOffset + slideOffset}s;`")
          //-   h1.tabs.text-center(:key="`text-${i}`" @click="selectTab(i)" :style="`--delay: ${(i+1)*slideOffset + slideOffset}s;`" :class="selectedTab == `${i}` ? 'text-glow': ''") {{tab}}
            
          v-col.col-md-2.col-sm-12.d-md-none
            hr.divider.mx-10
        v-row.items
          about.item.i0.about.magictime(v-if="selectedTab==0")
          projects.item.i1.projects.magictime(v-if="selectedTab==1")
          resume.item.i2.resume.magictime(v-if="selectedTab==2")
          contact.item.i3.contact.magictime(v-if="selectedTab==3")
          //- div.some
          
        
        
        //- v-row.items
        //-   v-col.offset-lg-3.col-lg-6.offset-md-2.col-sm-10.col-md-8.offset-sm-1(cols='10' offset='1')
        //-     v-card.my-10.card(elevation="50" outlined shaped v-for="(item,i) in items"  :key="`item-${i}`" :style="`--delay: ${(i+1)*0.5 + 0.5}s;`")
              //- //- v-card.my-10.roll-in-blurred-left(elevation="50" outlined shaped v-for="(item,i) in items"  :key="`item-${i}`" :style="`--delay: ${(i+1)*0.5 + 0.5}s;`")
              //- //- v-flex(center)
              //- v-parallax(:src="item.img" :height="item.height" :width="item.width")
              //- v-card-title {{ item.title }}
              //- v-card-text {{ item.text }}
        
        
        
            //- template(v-for="item in items")
            //- transition-group(name="list-complete" tag="ul")
            //-   li( )
                  //- v-switch(v-model="$vuetify.theme.dark"
                  //-         hint="This toggles the global state of the Vuetify theme"
                  //-         inset
                  //-         label="Vuetify Theme Dark"
                  //-         persistent-hint)
</template>
<script>
import TypingText from "@/components/typingText"
import _ from "lodash"
import Nameplate from "@/components/nameplate"
import About from "@/components/about"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Contact from "@/components/contact"

export default {
  components: { TypingText, Nameplate, Contact, About, Projects, Resume },
  data() {
    return {
      state: 0,
      isMobile: false,
      tabs: ["home", "projects", "resume", "contact"],
      slideOff: 0.25,
      selectedTab: null,
      items: [
        {
          img: "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2-1400x600.jpg",
          height: "300",
          // width: "200px",
          title: "What a cool fucking guy",
          text: "Noahs the fucking man",
        },
        {
          img: "https://cdn-media-1.freecodecamp.org/images/0*ngXgBNNdx6iiWP8q.png",
          height: "300",
          // width: "200px",
          title: "Howd he get so cool?",
          text: "He probably gets hella girls",
        },
        {
          img:
            "https://itchronicles.com/wp-content/uploads/2018/10/bigstock-Programming-Web-Banner-Best-P-258081862.jpg",
          title: "Have you met him before?",
          height: "500",
          // width: "200px",
          text: "People say hes quite the attractive fellow",
        },
        {
          img: "https://miro.medium.com/max/1260/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg",
          height: "350",
          // width: "200px",
          title: "Wish I could be him",
          text: "The best people are named Noah",
        },
        // {
        //   img: "http://www.rleonardi.com/image/illustration-portfolio.png",
        //   height: "200",
        //   // width: "200px",
        //   title: "What a cool fucking guy",
        //   text: "Noahs the best man",
        // },
      ],
    }
  },
  computed: {
    message() {
      return this.isMobile
        ? ["hi!", "my name is$", "noah lozevski", "welcome$", "to my site."]
        : ["hi!", "my name is$", "noah lozevski.", "welcome to$", "my site."]
    },
    showPage() {
      return !!this.$route.query?.home
    },
    slideOffset() {
      return this.selectedTab !== null ? 0 : this.slideOff
    },
  },
  mounted() {
    this.isMobile = window.innerWidth <= 600
    this.selectedTab = this.$route.query?.tab || 0
    // setTimeout(() => {
    // }, this.slideOffset * 6 * 1000)
  },
  methods: {
    selectTab(i) {
      if (this.$route.query?.tab != `${i}`) {
        this.$router.replace({ name: this.$route.name, query: { home: true, tab: `${i}` } })
      }
      const selector = document.querySelector(`.i${this.selectedTab}`)

      this.selectedTab = i
      // selector.classList.add("perspectiveRight") // make page fall out
      // selector.classList.remove("perspectiveRightReturn")
      // setTimeout(() => {
      //   const selectorr = document.querySelector(`.i${i}`)

      //   selectorr.classList.remove("perspectiveRight")
      //   selectorr.classList.add("perspectiveRightReturn") // make page fall out
      //   this.selectedTab = i
      //   // this.sel
      // }, 1100)
      // document.getElementsByClassName("entrance-page")[0].className += " run-animation"
      // this.items = _.shuffle(this.items)

      console.log(i)
    },
    trigger() {
      document.getElementById("entrance_text").className += "flicker-in-2"
      setTimeout(() => {
        this.$router.replace({ name: this.$route.name, query: { home: true } })
        document.getElementById("entrance_text").className = ""
        setTimeout(() => {
          this.selectedTab = this.$route.query?.tab || 0
        }, this.slideOffset * 6 * 1000)
      }, 3.1 * 1000)
    },
  },
}
</script>
<style lang="sass" scoped>
.magictime.bombRightOut
    -webkit-animation-duration: 1s
    animation-duration: 1s
.card
  animation: opacityanim .5s ease-in-out var(--delay) both
@keyframes opacityanim
  0%
    opacity: 0
  100%
    opacity: 1

.roll-in-blurred-left
  -webkit-animation: roll-in-blurred-left 0.65s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both
  animation: roll-in-blurred-left 0.65s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both

/* ----------------------------------------------
 * Generated by Animista on 2020-11-24 23:15:20
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ----------------------------------------------

/**
 * ----------------------------------------
 * animation roll-in-blurred-left
 * ----------------------------------------
@-webkit-keyframes roll-in-blurred-left
  0%
    -webkit-transform: translateX(-1000px) rotate(-720deg)
    transform: translateX(-1000px) rotate(-720deg)
    -webkit-filter: blur(50px)
    filter: blur(50px)
    opacity: 0

  100%
    -webkit-transform: translateX(0) rotate(0deg)
    transform: translateX(0) rotate(0deg)
    -webkit-filter: blur(0)
    filter: blur(0)
    opacity: 1

@keyframes roll-in-blurred-left
  0%
    -webkit-transform: translateX(-1000px) rotate(-720deg)
    transform: translateX(-1000px) rotate(-720deg)
    -webkit-filter: blur(50px)
    filter: blur(50px)
    opacity: 0

  100%
    -webkit-transform: translateX(0) rotate(0deg)
    transform: translateX(0) rotate(0deg)
    -webkit-filter: blur(0)
    filter: blur(0)
    opacity: 1
.card-animation
  -webkit-animation: all 1s ease
  animation: all 1s ease

ul.pre-loader
  // position: absolute
  // top: 50%
  // left: 50%
  // transform: translate(-50%, -50%)
  // margin: 0
  // padding: 0
  -webkit-animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both
  animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both


// .items
//   li
//     list-style: none

.list-complete-item
  transition: all 1s

.list-complete-enter, .list-complete-leave-to
  /* .list-complete-leave-active below version 2.1.8 */
  opacity: 0
  transform: translateX(30px)

.list-complete-leave-active
  position: absolute

ul.pre-loader li
  list-style: none
  color: #484848
  display: inline
  // font-size: 5em
  font-size: 2.25em
  // letter-spacing: 15px

.animate-start
  -webkit-animation: pre-load 3s ease-in-out 2s infinite
  animation: pre-load 3s ease-in-out 2s infinite

  // animation: pre-load 3s ease-in-out infinite,
.flip-list-move
  transition: transform 1s

@keyframes pre-load
  0%
    color: #ddbf3b
    text-shadow: 0 0 3px #ddbf3b, 0 0 10px #ddbf3b

  20%
    color: white
    text-shadow: none

  40%
    color: #ddbf3b
    text-shadow: 0 0 3px #ddbf3b, 0 0 10px #ddbf3b

  60%
    color: white
    text-shadow: none

  80%
    color: #ddbf3b
    text-shadow: 0 0 3px #ddbf3b, 0 0 10px #ddbf3b

  100%
    color: white
    text-shadow: none

ul
  li:nth-child(1)
    animation-delay: .1s

  &.pre-loader li
    &:nth-child(2)
      animation-delay: .15s

    &:nth-child(3)
      animation-delay: .2s

    &:nth-child(4)
      animation-delay: .25s

    &:nth-child(5)
      animation-delay: .3s

    &:nth-child(6)
      animation-delay: .35s

    &:nth-child(7)
      animation-delay: .4s

    &:nth-child(8)
      animation-delay: .45s

    &:nth-child(9)
      animation-delay: .5s

    &:nth-child(10)
      animation-delay: .55s

    &:nth-child(11)
      animation-delay: .6s
    &:nth-child(12)
      animation-delay: .65s
    &:nth-child(13)
      animation-delay: .7s

.entrance-page
  // height: 50%
  padding: 2px
  border: solid
  // border-width: var(--border-thickness)
  border-color: white

.text-glow
  animation: textPulse 2s ease-in-out 0s infinite normal !important

@keyframes textPulse
  0%
    -webkit-text-shadow: 0 0 5px rgba(255, 255, 255, 0.75)
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.75)

  50%
    -webkit-text-shadow: 0 0 7px rgba(255, 255, 255, 0.8), 0 0 11px rgba(255, 255, 255, 0.8)
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.8), 0 0 11px rgba(255, 255, 255, 0.8)

  100%
    -webkit-text-shadow: 0 0 5px rgba(255, 255, 255, 0.75)
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.75)


@media only screen and (max-width: 600px)
  .entrance-page
    border-width: 0px

@media only screen and (min-width: 601px)
  .entrance-page
    border-width: 0px


.slide-in-blurred-bl
  -webkit-animation: slide-in-blurred-bl 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both
  animation: slide-in-blurred-bl 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both

@-webkit-keyframes slide-in-blurred-bl
  0%
    -webkit-transform: translate(-1000px, 1000px) skew(-80deg, -10deg)
    transform: translate(-1000px, 1000px) skew(-80deg, -10deg)
    -webkit-transform-origin: 100% 100%
    transform-origin: 100% 100%
    -webkit-filter: blur(40px)
    filter: blur(40px)
    opacity: 0

  100%
    -webkit-transform: translate(0, 0) skew(0deg, 0deg)
    transform: translate(0, 0) skew(0deg, 0deg)
    -webkit-transform-origin: 50% 50%
    transform-origin: 50% 50%
    -webkit-filter: blur(0)
    filter: blur(0)
    opacity: 1

@keyframes slide-in-blurred-bl
  0%
    -webkit-transform: translate(-1000px, 1000px) skew(-80deg, -10deg)
    transform: translate(-1000px, 1000px) skew(-80deg, -10deg)
    -webkit-transform-origin: 100% 100%
    transform-origin: 100% 100%
    -webkit-filter: blur(40px)
    filter: blur(40px)
    opacity: 0

  100%
    -webkit-transform: translate(0, 0) skew(0deg, 0deg)
    transform: translate(0, 0) skew(0deg, 0deg)
    -webkit-transform-origin: 50% 50%
    transform-origin: 50% 50%
    -webkit-filter: blur(0)
    filter: blur(0)
    opacity: 1

.slide-in-blurred-bottom
  -webkit-animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both
  animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay) both

@-webkit-keyframes slide-in-blurred-bottom
  0%
    -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2)
    transform: translateY(1000px) scaleY(2.5) scaleX(0.2)
    -webkit-transform-origin: 50% 100%
    transform-origin: 50% 100%
    -webkit-filter: blur(40px)
    filter: blur(40px)
    opacity: 0

  100%
    -webkit-transform: translateY(0) scaleY(1) scaleX(1)
    transform: translateY(0) scaleY(1) scaleX(1)
    -webkit-transform-origin: 50% 50%
    transform-origin: 50% 50%
    -webkit-filter: blur(0)
    filter: blur(0)
    opacity: 1

@keyframes slide-in-blurred-bottom
  0%
    -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2)
    transform: translateY(1000px) scaleY(2.5) scaleX(0.2)
    -webkit-transform-origin: 50% 100%
    transform-origin: 50% 100%
    -webkit-filter: blur(40px)
    filter: blur(40px)
    opacity: 0

  100%
    -webkit-transform: translateY(0) scaleY(1) scaleX(1)
    transform: translateY(0) scaleY(1) scaleX(1)
    -webkit-transform-origin: 50% 50%
    transform-origin: 50% 50%
    -webkit-filter: blur(0)
    filter: blur(0)
    opacity: 1
.flicker-in-2
  -webkit-animation: flicker-in-2 3s linear reverse both
  animation: flicker-in-2 3s linear reverse both

@-webkit-keyframes flicker-in-2
  0%
    opacity: 0

  10%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  10.1%
    opacity: 1
    -webkit-text-shadow: none
    text-shadow: none

  10.2%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  20%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  20.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.25)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.25)

  20.6%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  30%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  30.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)

  30.5%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)

  30.6%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  45%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  45.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)

  50%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)

  55%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)

  55.1%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  57%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  57.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3)

  60%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3)

  60.1%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  65%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  65.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3), 0 0 7px rgba(255, 255, 255, 0.1)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3), 0 0 7px rgba(255, 255, 255, 0.1)

  75%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3), 0 0 7px rgba(255, 255, 255, 0.1)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3), 0 0 7px rgba(255, 255, 255, 0.1)

  75.1%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  77%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  77.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 9px rgba(255, 255, 255, 0.2), 0 0 7px rgba(255, 255, 255, 0.1)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 9px rgba(255, 255, 255, 0.2), 0 0 7px rgba(255, 255, 255, 0.1)

  85%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 9px rgba(255, 255, 255, 0.2), 0 0 7px rgba(255, 255, 255, 0.1)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 9px rgba(255, 255, 255, 0.2), 0 0 7px rgba(255, 255, 255, 0.1)

  85.1%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  86%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  86.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.45), 0 0 9px rgba(255, 255, 255, 0.25), 0 0 7px rgba(255, 255, 255, 0.1)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.45), 0 0 9px rgba(255, 255, 255, 0.25), 0 0 7px rgba(255, 255, 255, 0.1)

  100%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.45), 0 0 9px rgba(255, 255, 255, 0.25), 0 0 7px rgba(255, 255, 255, 0.1)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.45), 0 0 9px rgba(255, 255, 255, 0.25), 0 0 7px rgba(255, 255, 255, 0.1)

@keyframes flicker-in-2
  0%
    opacity: 0

  10%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  10.1%
    opacity: 1
    -webkit-text-shadow: none
    text-shadow: none

  10.2%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  20%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  20.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.25)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.25)

  20.6%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  30%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  30.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)

  30.5%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)

  30.6%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  45%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  45.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)

  50%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)

  55%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.45), 0 0 5px rgba(255, 255, 255, 0.25)

  55.1%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  57%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  57.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3)

  60%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3)

  60.1%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  65%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  65.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3), 0 0 7px rgba(255, 255, 255, 0.1)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3), 0 0 7px rgba(255, 255, 255, 0.1)

  75%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3), 0 0 7px rgba(255, 255, 255, 0.1)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.55), 0 0 5px rgba(255, 255, 255, 0.3), 0 0 7px rgba(255, 255, 255, 0.1)

  75.1%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  77%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  77.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 9px rgba(255, 255, 255, 0.2), 0 0 7px rgba(255, 255, 255, 0.1)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 9px rgba(255, 255, 255, 0.2), 0 0 7px rgba(255, 255, 255, 0.1)

  85%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 9px rgba(255, 255, 255, 0.2), 0 0 7px rgba(255, 255, 255, 0.1)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 9px rgba(255, 255, 255, 0.2), 0 0 7px rgba(255, 255, 255, 0.1)

  85.1%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  86%
    opacity: 0
    -webkit-text-shadow: none
    text-shadow: none

  86.1%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.45), 0 0 9px rgba(255, 255, 255, 0.25), 0 0 7px rgba(255, 255, 255, 0.1)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.45), 0 0 9px rgba(255, 255, 255, 0.25), 0 0 7px rgba(255, 255, 255, 0.1)

  100%
    opacity: 1
    -webkit-text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.45), 0 0 9px rgba(255, 255, 255, 0.25), 0 0 7px rgba(255, 255, 255, 0.1)
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.45), 0 0 9px rgba(255, 255, 255, 0.25), 0 0 7px rgba(255, 255, 255, 0.1)
</style>
