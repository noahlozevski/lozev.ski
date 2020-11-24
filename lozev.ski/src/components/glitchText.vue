<template>
  <div class="wrapper">
    <h1 class="glitch" @click="enterPage()">Enter</h1>
  </div>
</template>

<script>
export default {
  methods: {
    enterPage() {
      this.$router.push("/about")
    },
  },
}
</script>

<style lang="sass" scoped>
.wrapper
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center


  h1.glitch
    color: white
    font-family: sans-serif
    font-weight: 800
    position: relative
    font-size: 20vh
    padding: 30px
    cursor: pointer

  h1.glitch::before, h1.glitch::after
    padding: 30px
    color: white
    content: "Enter"
    position: absolute
    width: 100%
    height: 100%
    background: black
    overflow: hidden
    top: 0

  h1.glitch::before
    left: 3px
    text-shadow: -2px 0 red
    animation-name: glitch-animation-1
    animation-duration: 2s
    animation-timing-function: linear
    animation-delay: 0s
    animation-iteration-count: infinite
    animation-direction: reverse-alternate

  h1.glitch::after
    left: -3px
    text-shadow: -2px 0 blue
    animation-name: glitch-animation-2
    animation-duration: 2s
    animation-timing-function: linear
    animation-delay: 0s
    animation-iteration-count: infinite
    animation-direction: reverse-alternate

@keyframes glitch-animation-1
  $steps: 20
  @for $i from 0 through $steps
    #{percentage($i*(1/$steps))}
      clip: rect(random(20)+vh, 350px, random(20)+vh, 30px)

@keyframes glitch-animation-2
  $steps: 20
  @for $i from 0 through $steps
    #{percentage($i*(1/$steps))}
      clip: rect(random(20)+vh, 350px, random(20)+vh, 30px)
</style>
