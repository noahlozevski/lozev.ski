<template lang="pug">
z-illustration.illustration(drag-rotate, v-bind="illustration")
  z-anchor.star-anchor(v-bind="zdogShapes.starAnchor")
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
import { ZIllustration, ZEllipse, ZRect, ZShape, ZGroup, ZAnchor } from "vue-zdog"
import _ from "lodash"

export default {
  name: "DancingStar",
  components: {
    ZIllustration,
    ZEllipse,
    ZRect,
    ZShape,
    ZGroup,
    ZAnchor,
  },

  data () {
    return {
      illustration: {
        scale: 1,
        height: 250,
      },
      zdogShapes: {
        starAnchor: {
          translate: { y: 75, z: 0 },
          rotate: { z: Math.PI / 10, y: 0 },
        },
        starGroup: {
          translate: { x: -70, y: -170 },
        },
        starShape: {
          path: [
            { x: 0, y: 45 },
            { x: 45, y: 45 },
            { x: 70, y: 0 },
            { x: 95, y: 45 },
            { x: 140, y: 45 },
            { x: 105, y: 80 },
            { x: 120, y: 130 },
            { x: 70, y: 105 },
            { x: 20, y: 130 },
            { x: 35, y: 80 },
            { x: 0, y: 45 },
          ],
          stroke: 40,
          color: "hsl(45, 100%, 58%)",
        },
        starRectangle: {
          width: 40,
          height: 50,
          stroke: 40,
          translate: { x: 70, y: 70 },
          color: "hsl(45, 100%, 58%)",
        },
        eyesGroup: {
          translate: { x: 70, y: 72.5, z: 20 },
        },
        leftEye: {
          diameter: 5,
          stroke: 15,
          translate: { x: -32.5 },
          color: "hsl(0, 0%, 0%)",
        },
        rightEye: {
          diameter: 5,
          stroke: 15,
          translate: { x: 32.5 },
          color: "hsl(0, 0%, 0%)",
        },
        leftEyeAnchor: {
          translate: { x: -32.5, z: 0.5 },
          rotate: { z: 0 },
        },
        leftEyeInner: {
          diameter: 1,
          stroke: 5,
          color: "hsl(0, 100%, 100%)",
          translate: { x: -3.5 },
        },
        rightEyeAnchor: {
          translate: { x: 32.5, z: 0.5 },
          rotate: { z: 0 },
        },
        rightEyeInner: {
          diameter: 1,
          stroke: 5,
          color: "hsl(0, 100%, 100%)",
          translate: { x: -3.5 },
        },
        mouthAnchor: {
          translate: { x: 70, y: 95, z: 20 },
          scale: 1,
        },
        mouth: {
          path: [
            { x: -8, y: 0 },
            { x: 8, y: 0 },
            {
              arc: [
                { x: 4, y: 6 },
                { x: 0, y: 6 },
              ],
            },
            {
              arc: [
                { x: -4, y: 6 },
                { x: -8, y: 0 },
              ],
            },
          ],
          stroke: 10,
          color: "hsl(358, 100%, 65%)",
          scale: 1,
        },
      },
      transformations: {
        "starAnchor.rotate.z": Math.PI / 10,
        "starAnchor.translate.y": 75,
        "starAnchor.rotate.y": 0,
        "mouth.scale": 1,
        "leftEyeAnchor.rotate.z": 0,
        "rightEyeAnchor.rotate.z": 0,
      },
    }
  },
  computed: {
    timeline () {
      const base = {
        targets: this.transformations,
      }

      return [
        [
          {
            duration: 1100,
            easing: "easeInOutQuart",
            direction: "alternate",
            loop: true,
            update: () => {
              _.forEach(this.transformations, (val, key) => _.set(this.zdogShapes, key, val))
            },
          },
        ],
        [
          {
            ...base,
            "starAnchor.rotate.z": -Math.PI / 10,
            easing: "easeInOutQuint",
          },
        ],

        [
          {
            ...base,
            delay: 20,
            // shadow: -50,
          },
          "-=1100",
        ],
        [
          {
            ...base,
            "mouth.scale": 1.5,
            duration: 300,
          },
          "-=800",
        ],
        [
          {
            ...base,
            "leftEyeAnchor.rotate.z": Math.PI / 2,
            "rightEyeAnchor.rotate.z": Math.PI / 2,
            duration: 900,
          },
          "-=1000",
        ],
        [
          {
            ...base,
            "starAnchor.translate.y": 150,
            duration: 900,
          },
          "-=1000",
        ],
        [
          {
            ...base,
            "starAnchor.rotate.y": Math.PI * 2,
            duration: 1500,
          },
          "-=1000",
        ],
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
