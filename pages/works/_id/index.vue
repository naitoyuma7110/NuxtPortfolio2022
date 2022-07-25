<template>
  <div>
    <v-card>
      <!-- ここで指定したwork.idのPathは _idフォルダに動的に紐づけられる -->
      <v-img width="30%" :src="work.thumbnail.url" :alt="work.title" />
      <v-card-title class="works__name">{{ work.title }}</v-card-title>
      <v-btn :href="work.url">リンク先へ</v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
  async asyncData({ $microcms, params }) {
    const work = await $microcms.get({
      endpoint: `works/${params.id}`,
    })
    return {
      work,
    }
  },
}
