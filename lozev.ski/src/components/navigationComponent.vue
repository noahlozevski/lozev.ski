<template lang="pug">
  v-navigation-drawer(app right absolute temporary v-model="openStatus")
    div testing
    div double testing
    
    
</template>

<script>
export default {
  props: { value: { type: Boolean, default: false, required: true } },
  data() {
    return {
      openStatus: this.value,
    }
  },
  watchers: {
    openStatus(val) {
      this.$emit("value", val)
    },
    value(val) {
      this.openStatus = val
    },
  },
}
</script>

<style lang="sass" scoped></style>
