<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">資格・実績</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Paformance</v-card-subtitle>
      </v-col>
    </v-row>
    <v-card v-for="file in files" :key="file.title" color="dark" class="mb-3">
      <v-alert border="bottom" color="blue-grey" colored-border elevation="4">
        <v-list-title class="mb-5 text-h7">
          {{ file.title }}
        </v-list-title>
        <v-list-item-subtitle
          class="mb-5 grey--text text--lighten-1"
          v-text="file.subtitle"
        ></v-list-item-subtitle>
        <v-list-item-body class="grey--text text--lighten-1">
          {{ file.body }}
        </v-list-item-body>
      </v-alert>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [
        {
          title: '理学療法士資格',
          subtitle: '2012',
          link: null,
          body: '理学療法士は病気やケガにより身体機能が低下した方がもとの生活に復帰できるよう訓練を行う仕事です。',
        },
        {
          title: '静岡県理学療法学術大会優秀賞',
          subtitle: '2015',
          link: null,
          body: '学会では日々の臨床で得た治療データを提示し、抄録に沿ったプレゼン形式で意見を述べます。私が優秀賞をとれたり色々な場所で発表ができたのは職場の先輩や仲間の協力のおかげです。私は日々現場で努力する彼らのために仕事がしたいと思っています。',
        },
        {
          title: '基本情報技術者',
          subtitle: '2020',
          body: '転職にあたりITに関する基本的な知識を勉強するために取得しました。データ構造とアルゴリズムが少し難しかったです。',
        },
        {
          title: '統計検定3級',
          subtitle: '2022',
          body: 'プログラムで処理した情報に解釈を与えるために、統計学の知識が必要だと思い取得しました。Python言語はデータ処理のためのライブラリが充実しているため並行して学びました。',
        },
      ],
    }
  },
}
</script>
<style>
p {
  line-height: 1.5;
}
</style>
