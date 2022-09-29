<template>
  <v-card rounded>
    <IndexProfile></IndexProfile>

    <IndexCareer></IndexCareer>

    <IndexPerformance></IndexPerformance>

    <IndexSkills></IndexSkills>
  </v-card>
</template>

<script>
import IndexProfile from '~/components/indexProfile.vue'
import IndexSkills from '~/components/indexSkills.vue'
import IndexCareer from '~/components/indexCareer.vue'
import IndexPerformance from '~/components/indexPerformance.vue'
export default {
  name: 'IndexPage',
  components: { IndexSkills, IndexCareer, IndexProfile, IndexPerformance },
  data() {
    return {}
  },
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
