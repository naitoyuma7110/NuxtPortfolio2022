<template>
  <div>
    <!-- <div>{{ $md.render(marked(json.contents)) }}</div> -->
    <div>{{ $md.render(contents[0].content) }}</div>
  </div>
</template>
<script>
export default {
  // ライフフック：asyncDataメソッドは、APIなどからデータを取得し、ローカルデータに格納する時に使用
  async asyncData({ $microcms }) {
    const contents = await $microcms.get({
      endpoint: 'blogs',
      queries: { limit: 20 },
      // 取得するコンテンツにフィルターをかける場合
      // queries: { filters: 'skill[contains]Bootstrap' },
    })
    return contents
  },
  data() {
    return {}
  },
}
</script>
