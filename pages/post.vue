<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">記事一覧</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Articles</v-card-subtitle>
      </v-col>
    </v-row>
    <ul>
      <li v-for="article in blog" :key="article.slug">
        <time :datetime="article.createdAt">
          {{ $dateFns.format(new Date(article.createdAt), 'yyyy/MM/dd') }}
        </time>
        <nuxt-link :to="'/blog/' + article.slug">
          <p>{{ article.title }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    // 記事を全て取得（作成日で降順にソート）
    const blog = await $content('blog').sortBy('createdAt', 'desc').fetch()
    return { blog }
  },
}
</script>
