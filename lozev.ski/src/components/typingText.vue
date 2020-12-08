<template>
  <div>
    <template v-for="(m, i) in messages">
      <p :id="m.replace(' ', '')" :key="`message-${i}`" class="line-1 hide-text" :style="cssVars[i]">{{ m }}</p>
    </template>
    <p
      v-if="showEnterText"
      href="#"
      class="anim-typewriter-enter enter-text"
      :style="`--enter-width: ${isMobile ? 146 : 407}px`"
    >
      <template v-if="!isMobile">click to </template>
      <span id="enter-word" @click="trigger">enter</span>
    </p>
  </div>
</template>

<script>
import Vue from "vue"
export default {
  props: {
    delay: { type: Number, default: 0, required: false },
    length: { type: Number, default: 10, required: false },
    message: { type: Array, default: [""], required: true },
    offset: { type: Number, default: 0.5, required: false },
    isMobile: { type: Boolean, default: false, required: false },
  },
  data() {
    return {
      hideCursor: this.message.map((m, i) => (i === 0 ? false : m.includes("$") ? true : false)),
      showEnterText: false,
    }
  },
  computed: {
    // isMobile() {
    //   return (
    //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    //     window.innerWidth < 600
    //   )
    // },
    messages() {
      return this.message.map(m => m.replace("$", ""))
    },
    messageTotalLength() {
      return this.messages.reduce((sum, curr) => sum + curr.length, 0)
    },
    messageLengths() {
      return this.messages.map(m => m.length / this.messageTotalLength)
    },
    cssVars() {
      return this.messages.map((m, i) => ({
        "--delay": `${i === 0 ? this.delay : this.message[i - 1].includes("$") ? 0 : this.offset}s`,
        "--text-width": `${m.length * 29 + 1}px`,
        "--steps": m.length,
        "--lengthh": `${this.messageLengths[i] * this.length}s`,
        "--border1": this.hideCursor[i] ? "transparent" : "rgba(255, 255, 255, 0.75)",
        "--border2": this.hideCursor[i] ? "transparent" : "transparent",
      }))
    },
  },
  mounted() {
    this.triggerMessage(0)
  },
  methods: {
    trigger() {
      console.log("clicked")
      // document.getElementsByClassName("enter-text")[0].className += "hide-cursor"
      this.$emit("trigger")
    },
    async triggerMessage(i) {
      let element = document.getElementById(`${this.messages[i].replace(" ", "")}`)

      element.className = "line-1 anim-typewriter"
      this.$set(this.hideCursor, i, false)

      /** hide cursor after animation */
      Promise.resolve()
        .delay((this.messageLengths[i] * this.length + (i === 0 ? this.delay : this.offset)) * 1000)
        .then(() => {
          if (this.message[i].includes("$")) {
            this.$set(this.hideCursor, i, true)
            element.className = "line-1 hide-cursor"
          } else
            return Promise.resolve()
              .delay(this.offset * 1000)
              .then(() => {
                this.$set(this.hideCursor, i, true)
                element.className = "line-1 hide-cursor"
              })
        })
        .then(() => Vue.nextTick())
        .then(() => {
          if (i < this.messages.length - 1) this.triggerMessage(i + 1)
          else {
            this.showEnterText = true
            Promise.resolve()
              .delay(1000)
              .then(() => {
                document.getElementById("enter-word").className += " text-glow"
                Promise.resolve()
                  .delay(1000)
                  .then(() => (document.getElementsByClassName("enter-text")[0].className += " hide-cursor"))
              })
          }
        })
    },
  },
}
</script>

<style scoped>
.line-1 {
  position: relative;
  /* top: 50%; */
  width: var(--text-width);
  margin: 0 auto;
  /* border-right: transparent; */
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  font-size: 3rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  /* transform: translateY(-50%); */
}
#enter-word {
  cursor: pointer;
}
.enter-text {
  position: relative;
  /* top: 50%; */
  width: var(--enter-width);
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  /* border-right: transparent; */
  font-size: 3rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;

  /* text-decoration: none;
  text-shadow: none; */
  /* transition: 200ms;  */
  /* transform: translateY(-50%); */
}
/* .enter-text::after {
  content: "";
  width: 0px;
  height: 1px;
  display: block;
  background: white;
  transition: 200ms;
} */
.text-glow:hover {
  animation-play-state: paused;
  -webkit-text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 15px rgba(255, 255, 255, 0.8) !important;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 15px rgba(255, 255, 255, 0.8) !important;

  /* transition: all 0.2s; */
}
.text-glow {
  -webkit-text-shadow: 0 0 7px rgba(255, 255, 255, 0.75);
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.75);
  transition: all 2s;
  overflow: visible !important;
  animation: textPulse 3s ease-in-out 1s infinite normal;
}
@keyframes textPulse {
  0% {
    -webkit-text-shadow: 0 0 7px rgba(255, 255, 255, 0.75);
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.75);
  }
  50% {
    -webkit-text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 15px rgba(255, 255, 255, 0.8);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 15px rgba(255, 255, 255, 0.8);
  }
  100% {
    -webkit-text-shadow: 0 0 7px rgba(255, 255, 255, 0.75);
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.75);
  }
}

.hide-cursor {
  border-right: transparent !important;
  overflow: visible !important;
}
.hide-text {
  display: none;
}

/* Animation */
.anim-typewriter {
  animation: typewriter var(--lengthh) steps(var(--steps)) var(--delay) 1 normal both,
    blinkTextCursor 350ms steps(var(--steps)) infinite normal;
}

@media only screen and (max-width: 600px) {
  .anim-typewriter-enter {
    animation: typewriterEnter 1s steps(5) 0s 1 normal both, blinkTextCursorEnter 350ms steps(5) infinite normal;
  }
}

@media only screen and (min-width: 601px) {
  .anim-typewriter-enter {
    animation: typewriterEnter 1s steps(15) 0s 1 normal both, blinkTextCursorEnter 350ms steps(15) infinite normal;
  }
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: var(--text-width);
  }
}
@keyframes typewriterEnter {
  from {
    width: 0;
  }
  to {
    width: var(--enter-width);
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: var(--border1);
    /* rgba(255, 255, 255, 0.75); */
  }
  to {
    border-right-color: var(--border2);
  }
}
@keyframes blinkTextCursorEnter {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}

.hvr-underline-from-center {
  /* display: inline-block; */
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: #ffffff;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  border-radius: 2px;
}
.hvr-underline-from-center:hover:before,
.hvr-underline-from-center:focus:before,
.hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}

/* Float Shadow */
.hvr-float-shadow {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-float-shadow:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: "";
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  opacity: 0;
  background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
  /* W3C */
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform, opacity;
  transition-property: transform, opacity;
}
.hvr-float-shadow:hover,
.hvr-float-shadow:focus,
.hvr-float-shadow:active {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  /* move the element up by 5px */
}
.hvr-float-shadow:hover:before,
.hvr-float-shadow:focus:before,
.hvr-float-shadow:active:before {
  opacity: 1;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}
</style>
