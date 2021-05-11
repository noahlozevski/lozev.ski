<template lang="pug">
z-illustration.illustration(drag-rotate, v-bind="illustration")
  z-anchor.center-name-anchor(v-bind="anchor")
    component(
      v-for="metadata in computedComponents",
      v-bind="metadata.attrs",
      :is="metadata.component"
    )
    //- z-cylinder(
    //-   :diameter="5",
    //-   :stroke="10",
    //-   color="red",
    //-   :translate="{ x: 0 }",
    //-   :length="50"
    //- )
  //- z-anchor.star-anchor(v-bind="zdogShapes.starAnchor")
    z-group.star-group(v-bind="zdogShapes.starGroup")
      z-shape.star-shape(v-bind="zdogShapes.starShape")
      z-rect.z-rectange(v-bind="zdogShapes.starRectangle")
      z-group.eyes-group(v-bind="zdogShapes.eyesGroup")
        //- pupils
        z-ellipse.eye(v-bind="zdogShapes.leftEye")
        z-ellipse.eye(v-bind="zdogShapes.rightEye")
        //- whites of the eyes
        z-anchor.left-eye-anchor(v-bind="zdogShapes.leftEyeAnchor")
          z-ellipse.left-eye(v-bind="zdogShapes.leftEyeInner")
        z-anchor.right-eye-anchor(v-bind="zdogShapes.rightEyeAnchor")
          z-ellipse.right-eye(v-bind="zdogShapes.rightEyeInner")
      //- mouth
      z-anchor.mouth-anchor(v-bind="zdogShapes.mouthAnchor")
        z-shape.mouth(v-bind="zdogShapes.mouth")
</template>

<script>
import { ZIllustration, ZEllipse, ZRect, ZShape, ZGroup, ZAnchor, ZCylinder } from "vue-zdog"
import _ from "lodash"

const diameter = 25
const frontFace = "#EA0"
const backface = "#636"
const color = "#C25"
const stroke = 20
const unit = 25
const spaceBetweenLetters = 0.5 * unit
const NAngle = Math.PI / 6
const speed = (2.5 * unit) / 1000 // units / second
const calcTiming = units => units / speed

const N = {
  width: unit,
  height: Math.sqrt(3) * unit,
  angle: NAngle,
}
const O = {
  width: 1.2 * unit,
  // height: 1 * NAngle
}

// const transformations = {
//   "N[0].attrs.length": 0,
//   "N[1].attrs.length": 0,
//   "N[2].attrs.length": 0,
// }

// const timeline = [
//   [
//     {
//       duration: 5000,
//       easing: "easeInOutQuart",
//       direction: "alternate",
//       // loop: 1,
//       update: () => {
//         _.forEach(this.transformations, (val, key) => _.set(this.nameKeys, key, val))
//       },
//     },
//   ],
//   [
//     {
//       targets: this.transformations,
//       duration: calcTiming(N.height),
//       "N[0].attrs.length": N.height,
//       easing: "easeInOutQuint",
//     },
//   ],
//   [
//     {
//       targets: this.transformations,
//       duration: calcTiming(N.width * 2),
//       "N[1].attrs.length": N.width * 2,
//       easing: "easeInOutQuint",
//     },
//   ],
//   [
//     {
//       targets: this.transformations,
//       duration: calcTiming(N.height),
//       "N[2].attrs.length": N.height,
//       easing: "easeInOutQuint",
//     },
//   ],
// ]

// const name = {
//   N: [
//     {
//       component: ZCylinder,
//       attrs: {
//         diameter,
//         length: 0,
//         stroke,
//         color,
//         frontFace,
//         backface,
//         translate: { x: -(spaceBetweenLetters * 1.5 + O.width), y: -(N.height / 2), z: 0 },
//       },
//     },
//     {
//       component: ZCylinder,
//       attrs: {
//         diameter,
//         length: 0,
//         stroke,
//         color,
//         frontFace,
//         backface,
//         translate: { x: -(spaceBetweenLetters * 1.5 + O.width), y: N.height / 2, z: 0 },
//         rotate: { z: Math.PI - N.angle },
//       },
//     },
//     {
//       component: ZCylinder,
//       attrs: {
//         diameter,
//         length: 0,
//         stroke,
//         color,
//         frontFace,
//         backface,
//         translate: { x: -(spaceBetweenLetters * 0.5 + O.width), y: -(N.height / 2), z: 0 },
//       },
//     },
//   ],
//   // part 1 of N
// }

export default {
  name: "CoolAssName",
  components: {
    ZIllustration,
    ZEllipse,
    ZRect,
    ZShape,
    ZGroup,
    ZAnchor,
    ZCylinder,
  },

  data () {
    return {
      illustration: {
        scale: 2,
        height: 500,
        // width: 500,
      },
      anchor: {
        translate: { x: 0, y: 0 },
        // rotate: { x: 0 },
      },
      nameKeys: {
        N: [
          {
            component: ZShape,
            attrs: {
              stroke: 0,
              color,
              path: [
                {
                  x: 0,
                  y: 0,
                },
                {
                  x: 0,
                  y: 0,
                },
              ],
              translate: { x: -(spaceBetweenLetters * 1.5 + O.width), y: N.height / 2 },
              key: Math.random() * 10000000,
            },
          },
          {
            component: ZShape,
            attrs: {
              stroke: 0,
              color,
              path: [
                {
                  x: 0,
                  y: 0,
                },
                {
                  x: 0,
                  y: 0,
                },
              ],
              translate: { x: -(spaceBetweenLetters * 1.5 + O.width), y: -N.height / 2 },
              rotate: { x: Math.PI },
              key: Math.random() * 10000000,
            },
          },
          {
            component: ZShape,
            attrs: {
              // diameter,
              // length: 0,
              stroke: 0,
              color,
              // frontFace,
              // backface,
              path: [
                {
                  x: 0,
                  y: 0,
                },
                {
                  x: 0,
                  y: 0,
                },
              ],
              translate: { x: spaceBetweenLetters * 0.5 - O.width, y: N.height / 2 },
              key: Math.random() * 10000000,
            },
          },
        ],
      },
      // anchor: {
      // translate: { x: 0, y:0,  }
      // },

      transformations: {
        "N[0].attrs.stroke": 0,
        "N[1].attrs.stroke": 0,
        "N[2].attrs.stroke": 0,
        "N[0].attrs.path[1].y": 0,
        "N[1].attrs.path[1].x": 0,
        "N[1].attrs.path[1].y": 0,
        "N[2].attrs.path[1].y": 0,
        // "N[2].attrs.length": 100,
      },
    }
  },
  computed: {
    computedComponents () {
      return _.flatten(Object.values(this.nameKeys))
    },
    timeline () {
      return [
        [
          {
            duration: 5000,
            easing: "easeInOutElastic",
            direction: "alternate",
            loop: true,
            update: () => {
              // _.forEach(this.transformations, (val, key) =>
              //   console.log(val, key, this.transformations, _.get(this.nameKeys, key, val))
              // )
              // console.log(this.nameKeys.N[0].attrs.path)
              _.forEach(this.transformations, (val, key) => _.set(this.nameKeys, key, val))
            },
          },
        ],
        [
          {
            targets: this.transformations,
            "N[0].attrs.stroke": stroke,
            duration: 1,
          },
          "-=100",
        ],
        [
          {
            targets: this.transformations,
            duration: calcTiming(N.height),
            "N[0].attrs.path[1].y": -N.height,
          },
        ],
        [
          {
            targets: this.transformations,
            "N[1].attrs.stroke": stroke,
            duration: 1,
          },
          "-=100",
        ],
        [
          {
            targets: this.transformations,
            duration: calcTiming(N.width * 2),
            "N[1].attrs.path[1].x": N.width,
            "N[1].attrs.path[1].y": -N.height,
          },
        ],
        [
          {
            targets: this.transformations,
            "N[2].attrs.stroke": stroke,
            duration: 1,
          },
          "-=100",
        ],
        [
          {
            targets: this.transformations,
            duration: calcTiming(N.height),
            "N[2].attrs.path[1].y": -N.height,
            "N[2].attrs.stroke": stroke,
          },
        ],
        // [
        //   {
        //     targets: this.transformations,
        //     duration: calcTiming(N.height),
        //     "N[2].attrs.length": N.height,
        //     easing: "easeInOutQuint",
        //   },
        // ],
      ]
    },
  },
  mounted () {
    /** trigger animation */
    this.timeline.slice(1).reduce((timeline, step) => {
      return timeline.add(...step)
    }, this.$anime.timeline(...this.timeline[0]))
  },
}
</script>
<style lang="sass" scoped>
.illustration
  width: 100%
  height: 100%
  cursor: move
</style>
