<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">記事一覧</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Articles</v-card-subtitle>
      </v-col>
    </v-row>
    <v-expansion-panels flat>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-layout align-center>
            <div>タグ選択</div>
            <v-chip
              class="ml-2"
              v-if="selectedTag"
              :close="selectedTag == '全ての記事' ? false : true"
              @click:close="selectedTag = '全ての記事'"
              >{{ selectedTag }}</v-chip
            >
          </v-layout>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-chip-group
            active-class="text--accent-4"
            color="primary"
            mandatory
            column
          >
            <v-chip
              filter
              v-for="(tag, i) in articleTags"
              :key="i"
              :value="tag"
              @click="selectedTag = tag.name"
            >
              {{ tag.name + '(' + tag.count + ')' }}
            </v-chip>
          </v-chip-group>
          <v-text-field
            prepend-inner-icon="mdi-map-marker"
            label="キーワード検索"
            dense
            outlined
            clearable
          ></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- :to="'/articles/' + article.dir + article.slug" -->
    <v-scroll-y-reverse-transition group hide-on-leave>
      <v-card
        outlined
        hover
        v-for="article in filteredArticle"
        :key="article.slug"
        @click="toArticles(article.path)"
        class="my-2"
      >
        <!-- to="/dir/ + param の形で記事のslugをparamとして渡す + _paramsファイルへルーティング" -->
        <v-card-subtitle class="py-2">
          <time :datetime="article.createdAt">
            {{ $dateFns.format(new Date(article.createdAt), 'yyyy/MM/dd') }}
          </time>
        </v-card-subtitle>
        <v-card-title class="py-2">
          {{ article.title }}
        </v-card-title>
        <v-card-text>{{ article.description }}</v-card-text>
        <v-card-text>{{ article.slug }}</v-card-text>
      </v-card>
    </v-scroll-y-reverse-transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedTag: '全ての記事',
    date: null,
    trip: {
      name: '',
      location: null,
      start: null,
      end: null,
    },
    sizes: [
      '全ての記事',
      'tag1',
      'tag2',
      'tag3',
      '数学',
      '物理',
      '本',
      '転職',
      '統計学',
      'バイオメカニクス',
      'プログラミング',
      'Python',
      'Java Silver',
    ],
  }),
  methods: {
    toArticles(articleUrl) {
      this.$router.push({
        path: 'articles/',
        query: { url: articleUrl },
      })
    },
  },
  computed: {
    filteredArticle() {
      const articles = []
      this.articles.forEach((article) => {
        if (
          (article.tags && article.tags.includes(this.selectedTag)) ||
          this.selectedTag === '全ての記事'
        ) {
          articles.push(article)
        }
        // console.log(article.tags && article.tags.includes('tag1'))
      })

      return articles
    },
    articleTags() {
      const tags = []
      const tagName = []
      this.articles.forEach((article) => {
        article.tags.forEach((tag) => {
          tagName.push(tag)
        })
      })
      // 重複を許可しないデータ構造Setに入れる
      const set = new Set(tagName)
      // 重複を取り除いた後、Set構造を配列になおす
      const filteredName = [...set]

      tags.push({
        name: '全ての記事',
        count: filteredName.length,
      })
      for (let i = 0; i < filteredName.length; i++) {
        const count = tagName.filter((el) => {
          return el === filteredName[i]
        })
        tags.push({
          name: filteredName[i],
          count: count.length,
        })
      }

      return tags
    },
  },
  async asyncData({ $content }) {
    // 記事を全て取得（作成日で降順にソート）
    const articles = await $content('articles', { deep: true })
      .sortBy('createdAt', 'desc')
      .fetch()
    return { articles }
  },
}
</script>
