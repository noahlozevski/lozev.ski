<template lang="pug">
  .container
      v-row
        v-col
          v-card()
            //- v-card-img(:src="item.img" :height="item.height" :width="item.width")
            v-card-title the title
            v-card-subtitle the subtitle
            v-card-text the text
            v-card-actions
              v-btn(color="deep-purple lighten-2", text, @click="$vuetify.theme.dark = !$vuetify.theme.dark") Reserve
    
            //- v-card-text
            //- v-chip-group(v-model="selection", active-class="deep-purple accent-4 white--text", column)
            //-   v-chip 5:30PM
            //-   v-chip 7:30PM
            //-   v-chip 8:00PM
            //-   v-chip 9:00PM
              
          mixtape
          p fdsafdsaf
        v-col
          p fdsafdsaf
          house
</template>
<script>
import Mixtape from "@/components/mixtape"
import House from "@/components/house"
export default {
  components: { Mixtape, House },
}
</script>
<style lang="sass" scoped>
.about-page
  height: 100%
</style>
