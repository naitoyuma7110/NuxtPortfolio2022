<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">プログラミング</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Programing</v-card-subtitle>
      </v-col>
    </v-row>

    <v-stepper v-model="stepId" vertical outlined>
      <div v-for="(works, i) in categrisedWorks" :key="i">
        <v-stepper-step :step="i + 1">
          <a @click="stepId = i + 1">
            {{ stepInfo[i].title }}
            <small>{{ stepInfo[i].discription }}</small>
          </a>
        </v-stepper-step>

        <v-stepper-content :step="i + 1">
          <v-row class="mx-0">
            <v-col cols="12" sm="6" lg="4" v-for="work in works" :key="work.id">
              <v-card class="mx-auto" elevation="1">
                <v-row align="center">
                  <v-col cols="4" sm="12">
                    <v-img
                      v-if="$vuetify.breakpoint.name !== 'xs'"
                      lazy-src
                      position="top"
                      width="auto"
                      height="10rem"
                      :src="work.thumbnail.url"
                    ></v-img>
                    <v-avatar
                      size="6rem"
                      class="ms-4"
                      v-if="$vuetify.breakpoint.name == 'xs'"
                    >
                      <v-img
                        rounded
                        :src="work.thumbnail.url"
                        class="programing-icon"
                      ></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="8" sm="12">
                    <div class="px-2">{{ work.title }}</div>
                    <div class="d-flex flex-wrap pa-2">
                      <v-btn
                        v-for="(item, i) in work.skills"
                        :key="i"
                        x-small
                        rounded
                        depressed
                        outlined
                        class="mb-1"
                      >
                        {{ item }}</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
                <v-card-text class="pa-2">
                  {{ work.discription }}
                </v-card-text>
                <v-card-text class="pa-2">
                  <v-btn
                    @click="externalLink(work.url)"
                    x-small
                    outlined
                    fab
                    rounded
                    color="primary"
                  >
                    <v-icon> mdi-github </v-icon>
                  </v-btn>
                  <v-btn
                    @click="externalLink(work.url)"
                    x-small
                    outlined
                    fab
                    rounded
                    color="primary"
                  >
                    <v-icon> mdi-link-variant </v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-layout class="my-5" justify-end>
            <v-btn outlined class="mx-1" @click="stepId -= 1"> Back </v-btn>
            <v-btn color="primary mx-1" @click="stepId += 1">Next</v-btn>
          </v-layout>
        </v-stepper-content>
      </div>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepId: 1,
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

<style>
.programing-icon {
  border: 1px solid #ccc;
}
</style>
