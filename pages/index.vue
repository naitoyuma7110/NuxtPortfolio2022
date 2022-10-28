<template>
  <div>
    <IndexProfile></IndexProfile>
    <IndexCareer></IndexCareer>
    <IndexPerformance></IndexPerformance>
    <IndexSkills></IndexSkills>
  </div>
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
  mounted() {
    this.$vuetify.theme.dark = true
  },
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
