<template>
  <div>
    <div class="text-center d-flex pb-4">
      <v-btn @click="all"> all </v-btn>
      <div>{{ panel }}</div>
      <v-btn @click="none"> none </v-btn>
    </div>

    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel v-for="(works, i) in categrisedWorks" :key="i">
        <v-expansion-panel-header>{{
          stepInfo[i].title
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stepInfo: [
        {
          title: 'Learn HTML,css',
          discription: 'How to make static web site',
        },
        {
          title: 'First prgraming langage is JS',
          discription: 'It based my fronend work',
        },
        {
          title: 'Learn more about design frameworks',
          discription: 'very usefull',
        },
        {
          title: 'Vue of js framework',
          discription: 'very usefull',
        },
        {
          title: 'Backend and API servies',
          discription: 'very usefull',
        },
        {
          title: 'Nuxt makes SSG, SSR anable',
          discription: 'very usefull',
        },
      ],
    }
  },
  methods: {
    externalLink(url) {
      window.open(url, '_blank')
    },
  },
  computed: {
    htmlWorks() {
      const htmlWorks = this.contents.filter((work) => {
        return (
          !work.skills.includes('JavaScript') && work.skills.includes('HTML')
        )
      })
      return htmlWorks
    },
    javascriptWorks() {
      const javascriptWorks = this.contents.filter((work) => {
        return work.skills.includes('JavaScript')
      })
      return javascriptWorks
    },
    bootstrapWorks() {
      const bootstrapWorks = this.contents.filter((work) => {
        return work.skills.includes('Bootstrap')
      })
      return bootstrapWorks
    },
    vueWorks() {
      const vueWorks = this.contents.filter((work) => {
        return work.skills.includes('Vue.js')
      })
      return vueWorks
    },
    apiWorks() {
      const apiWorks = this.contents.filter((work) => {
        return work.api.length && !work.skills.includes('Nuxt.js')
      })
      return apiWorks
    },
    nuxtWorks() {
      const nuxtWorks = this.contents.filter((work) => {
        return work.skills.includes('Nuxt.js')
      })
      return nuxtWorks
    },
    categrisedWorks() {
      return [
        this.htmlWorks,
        this.javascriptWorks,
        this.bootstrapWorks,
        this.vueWorks,
        this.apiWorks,
        this.nuxtWorks,
      ]
    },
  },

  // ライフフック：asyncDataメソッドは、APIなどからデータを取得し、ローカルデータに格納する時に使用
  async asyncData({ $microcms }) {
    const contents = await $microcms.get({
      endpoint: 'works',
      queries: { limit: 20 },
      // 取得するコンテンツにフィルターをかける場合
      // queries: { filters: 'skill[contains]Bootstrap' },
    })
    return contents
  },
}
</script>
