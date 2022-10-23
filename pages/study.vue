<template>
  <div>
    <v-row class="py-5">
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">勉強と制作物</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Study/Production</v-card-subtitle>
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
                text
                class="mb-1"
              >
                <v-icon
                  size="1.6rem"
                  class="mr-2"
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
      const skillItems = [
        {
          name: 'HTML',
          icon: 'mdi-language-html5',
          color: 'red',
        },
        {
          name: 'CSS',
          icon: 'mdi-language-css3',
          color: 'blue',
        },
        {
          name: 'WordPress',
          icon: 'mdi-wordpress',
          color: 'primary',
        },
        {
          name: 'Stylus',
          icon: 'mdi-sass',
          color: 'pink',
        },
        {
          name: 'Vue',
          icon: 'mdi-vuejs',
          color: 'teal',
        },
        {
          name: 'Nuxt',
          icon: 'mdi-nuxt',
          color: 'teal',
        },
        {
          name: 'MicroCMS',
          icon: 'mdi-alpha-m-box',
          color: 'black',
        },
        {
          name: 'Vuetify',
          icon: 'mdi-vuetify',
          color: 'teal',
        },
        {
          name: 'Netlify',
          icon: 'mdi-abugida-thai',
          color: 'cyan',
        },
        {
          name: 'PHP',
          icon: 'mdi-language-php',
          color: 'deep-purple lighten-1',
        },
        {
          name: 'Laravel',
          icon: 'mdi-laravel',
          color: 'red lighten-2',
        },
        {
          name: 'Docker',
          icon: 'mdi-docker',
          color: 'primary',
        },
        {
          name: 'Heroku',
          icon: 'mdi-abjad-hebrew',
          color: 'purple',
        },
        {
          name: 'JavaScript',
          icon: 'mdi-nodejs',
          color: 'yellow',
        },
        {
          name: 'Python',
          icon: 'mdi-language-python',
          color: 'primary',
        },
        {
          name: 'Anaconda',
          icon: 'mdi-dev-to',
          color: 'red lighten-2',
        },
        {
          name: 'Jquery',
          icon: 'mdi-jquery',
          color: 'yellow',
        },
        {
          name: 'Bootstrap',
          icon: 'mdi-bootstrap',
          color: 'red',
        },
        {
          name: 'jQuery',
          icon: 'mdi-jquery',
          color: 'yellow',
        },
      ]
      for (let i = 0; i < skillItems.length; i++) {
        if (skillItems[i].name === skill) {
          return skillItems[i]
        }
      }
      return 'hello'
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
