<template>
  <div>
    <v-row class="mb-4">
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">勉強ノート</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Sutudy Article</v-card-subtitle>
      </v-col>
    </v-row>
    <div
      :class="$vuetify.breakpoint.name == 'xs' ? 'pa-2 mx-0 ' : 'pa-5'"
      elevation="3"
    >
      <v-card-subtitle class="px-1">
        <time v-if="article.createdAt" :datetime="article.createdAt">
          {{ $dateFns.format(new Date(article.createdAt), 'yyyy/MM/dd') }}
        </time>
      </v-card-subtitle>
      <v-card-title class="px-1">{{
        article.title ? article.title : 'notitle'
      }}</v-card-title>
      <NuxtContent :document="article" />
    </div>
  </div>
</template>

<script>
import Prism from '@/plugins/prism'
export default {
  // params.slugは.mdのslug(ファイル名)
  async asyncData({ $content, params }) {
    // const article = await $content('/articles/blog/', params.slug).fetch()
    const article = await $content(`articles/${params.slug}`).fetch()
    return {
      article,
    }
  },
  mounted() {
    Prism.highlightAll()
    this.renderMathJax()
    this.$vuetify.theme.dark = false
  },
  methods: {
    renderMathJax() {
      if (window.MathJax) {
        window.MathJax.Hub.Config({
          TeX: { equationNumbers: { autoNumber: 'AMS' } },
          tex2jax: {
            inlineMath: [
              ['$', '$'],
              ['\\(', '\\)'],
            ],
            processEscapes: true,
          },
          'HTML-CSS': { matchFontHeight: false },
          displayAlign: 'center',
          displayIndent: '2em',
        })
        window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub])
      }
    },
  },
}
</script>

<style scorped>
.v-application code {
  all: unset !important;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  background: none;
}

h1,
h2 {
  border-bottom: 1px solid #ccc;
  margin: 2rem 0;
}
h3 {
  margin: 1rem 0;
}
ul {
  margin: 1rem 0;
}

v-card {
  max-width: 1vw;
}
img {
  width: 100%;
  height: auto;
}
</style>
