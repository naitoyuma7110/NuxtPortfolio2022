<template>
  <div>
    <v-row class="py-5">
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">学習ロードマップ</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Load Map</v-card-subtitle>
      </v-col>
    </v-row>

    <v-stepper v-model="stepId" vertical flat>
      <div v-for="(works, i) in categrisedWorks" :key="i">
        <v-stepper-step class="title-pointer" :step="i + 1">
          <div class="mb-2" @click="stepId = i + 1">
            {{ stepInfo[i].title }}
          </div>
          <small>{{ stepInfo[i].discription }}</small>
        </v-stepper-step>

        <v-stepper-content :step="i + 1">
          <v-row class="mx-0 pa-0">
            <v-col
              v-for="work in works"
              :key="work.id"
              cols="12"
              sm="6"
              class="pa-1 my-1"
              lg="4"
            >
              <v-card class="mx-auto" elevation="1">
                <div
                  v-if="$vuetify.breakpoint.name == 'xs'"
                  class="pa-2 text-center"
                >
                  {{ work.title }}
                </div>
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
                      v-if="$vuetify.breakpoint.name == 'xs'"
                      size="3.5rem"
                      class="ms-4"
                    >
                      <v-img
                        rounded
                        :src="work.thumbnail.url"
                        class="programing-icon"
                      ></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="8" sm="12">
                    <div v-if="$vuetify.breakpoint.name != 'xs'" class="px-2">
                      {{ work.title }}
                    </div>
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
                    x-small
                    outlined
                    fab
                    rounded
                    color="primary"
                    @click="externalLink(work.url)"
                  >
                    <v-icon> mdi-github </v-icon>
                  </v-btn>
                  <v-btn
                    x-small
                    outlined
                    fab
                    rounded
                    color="primary"
                    @click="externalLink(work.url)"
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
  data() {
    return {
      stepId: 1,
      stepInfo: [
        {
          title: 'HTML,CSSによるWebサイトの外観',
          discription: 'How to make static web site',
        },
        {
          title: 'クライアントサイドのプログラミング言語JavaScript',
          discription: 'It is based my fronend work',
        },
        {
          title: 'CSSフレームワーク使用した効率的なデザイン',
          discription: 'complement the design',
        },
        {
          title: 'JSフレームワークによるSPA',
          discription: 'Technology in browser languages',
        },
        {
          title: 'サーバー言語によるAPI作成,既存のAPIサービスの利用',
          discription: 'Backend and API servies',
        },
        {
          title: 'クライアントサイドのルーティング,データフロー管理',
          discription: 'Nuxt Includes Vue-X,Vue-roouter',
        },
      ],
    }
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
  methods: {
    externalLink(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style>
.programing-icon {
  border: 1px solid #ccc;
}
.title-pointer {
  cursor: pointer;
}

</style>
