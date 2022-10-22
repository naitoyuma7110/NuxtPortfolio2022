<template>
  <div>
    <v-row class="py-5">
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">プログラムの勉強</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">pleasure</v-card-subtitle>
      </v-col>
    </v-row>

    <div>
      <v-row class="mx-0 pa-0">
        <v-col
          v-for="(work, i) in contents"
          :key="i"
          cols="12"
          sm="6"
          class="pa-1 my-1"
          lg="4"
        >
          <v-card class="mx-auto" rounded outlined elevation="1">
            <v-img
              lazy-src
              position="center"
              width="auto"
              height="12rem"
              :src="work.thumbnail.url"
            ></v-img>
            <div class="pa-2 text-center">
              {{ work.title }}
            </div>
            <div class="flex-wrap pa-2 card-skills">
              <v-btn
                v-for="(item, k) in work.skills"
                :key="k"
                small
                rounded
                depressed
                outlined
                class="mb-1"
              >
                <v-icon
                  size="1.8rem"
                  class="mr-1"
                  :color="getSkillIcon(item).color"
                  left
                  >{{ getSkillIcon(item).icon }}</v-icon
                >
                {{ item }}</v-btn
              >
            </div>
            <v-card-text class="pa-2 card-text">
              {{ work.discription }}
            </v-card-text>
            <v-card-text class="pa-2">
              <v-btn small text color="dark" @click="externalLink(work.url)">
                <v-icon size="1.8rem" left> mdi-github </v-icon>
                view code
              </v-btn>
              <v-btn small text color="primary" @click="externalLink(work.url)">
                <v-icon size="1.8rem" left> mdi-link-variant </v-icon>
                view site
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
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
    }
  },
  computed: {},
  mounted() {
    this.$vuetify.theme.dark = false
  },
  methods: {
    externalLink(url) {
      window.open(url, '_blank')
    },
    getSkillIcon(skill) {
      const icons = {
        html: {
          icon: 'mdi-language-html5',
          color: 'red',
        },
        css: {
          icon: 'mdi-language-html5',
          color: 'blue',
        },
      }
      switch (skill) {
        case 'HTML':
          return icons.html
        default:
          return 'HELLO'
      }
    },
  },
}
</script>

<style scoped>
.card-text {
  height: 8rem;
  overflow: hidden;
}

.card-skills {
  height: 4.5rem;
}
</style>
