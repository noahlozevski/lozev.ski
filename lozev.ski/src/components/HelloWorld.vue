<template>
  <v-container>
    <span class="cube" style="--i: 0">noah</span>
    <!-- <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.cube {
  text-transform: uppercase;
  font-family: verdana;
  font-size: 12em;
  font-weight: 700;
  color: #f5f5f5;
  text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191, 1px 5px 1px #919191,
    1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191,
    1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);

  --size: 3rem;
  --offset: calc(var(--size) * -1);
  --duration: 3600ms;
  --delay: calc(var(--i) * -0.0335s);
  --ease: cubic-bezier(0.84, 0, 0.2, 1);

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  width: var(--size);
  height: var(--size);
  background-color: var(--bg-color);
  box-shadow: inset rgba(black, 0.15) -0.5rem 0.5rem 1rem;
  transform-style: preserve-3d;
  transform-origin: 50% 100% var(--offset);
  transition-property: transform, background-color;
  transition-timing-function: ease-out;
  animation: animate var(--duration) var(--delay) var(--ease) alternate infinite,
    color calc(var(--duration) * 2) var(--delay) var(--ease) infinite;
}

.cube:nth-child(odd) {
  --bg-color: hsl(0, 54%, 61%);
}
.cube:nth-child(even) {
  --bg-color: hsl(59, 94%, 57%);
}
.cube:nth-child(3n) {
  --bg-color: hsl(230, 92%, 61%);
}

.cube::before,
.cube::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: inherit;
  box-shadow: inherit;
  transform-origin: 100% 100%;
}

.cube::before {
  transform: translateZ(var(--offset)) rotateY(90deg);
  filter: brightness(120%);
}

.cube::after {
  transform: translateZ(var(--offset)) rotateX(-90deg);
  filter: brightness(80%);
}

@keyframes animate {
  0% {
    transform: scaleX(4);
  }
  20% {
    transform: scaleX(0.5) scaleY(0.6) scaleZ(0.5);
  }
  40% {
    transform: scaleX(1) scaleY(0.8) scaleZ(4);
  }
  60% {
    transform: scaleX(4) scaleY(0.6) scaleZ(4);
  }
  80% {
    transform: scaleX(4) scaleZ(1) translateY(calc(var(--size) * 2));
  }
  100% {
    transform: scaleX(1) scaleY(0.5) scaleZ(1) translateY(calc(var(--size) * -2));
  }
}

@keyframes color {
  42% {
    background-color: var(--bg-color);
  }
  48%,
  64% {
    background-color: hsl(0, 0%, 100%);
  }
  66% {
    background-color: var(--bg-color);
  }
}
</style>
