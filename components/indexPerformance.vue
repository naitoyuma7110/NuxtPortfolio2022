<template>
  <div>
    <Title>
      <template v-slot:title>
        資格・実績
      </template>
      <template v-slot:subtitle>
        Paformance
      </template>
    </Title>
    <v-card v-for="file in files" :key="file.title" class="mb-5">
      <v-alert border="bottom" dense colored-border :color="file.color + ' lighten-1'">
        <div class="mb-0 text-h6 grey--text text--lighten-3">
          {{ file.title }}
        </div>
        <div class="mb-4 text-subtitle-1 grey--text text--lighten-2" v-text="file.subtitle"></div>
        <div class="grey--text text--lighten-2">
          {{ file.body }}
        </div>
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
          body: '理学療法士は病気やケガにより身体機能が低下した方がもとの生活に復帰できるよう訓練を行う仕事です。',
          color: 'teal',

        },
        {
          title: '静岡県理学療法学術大会優秀賞',
          subtitle: '2015',
          body: '学会では日々の臨床で得た治療データを提示し、抄録に沿ったプレゼン形式で意見を述べます。私が優秀賞をとれたり色々な場所で発表ができたのは職場の先輩や仲間の協力のおかげです。私は日々現場で努力する彼らのために仕事がしたいと思っています。',
          color: 'cyan',
        },
        {
          title: '基本情報技術者',
          subtitle: '2020',
          body: '転職にあたりITに関する基本的な知識を勉強するために取得しました。データ構造とアルゴリズムが少し難しかったです。',
          color: 'blue',
        },
        {
          title: '統計検定3級',
          subtitle: '2022',
          body: 'プログラムで処理した情報に解釈を与えるために、統計学の知識が必要だと思い取得しました。Python言語はデータ処理のためのライブラリが充実しているため並行して学びました。',
          color: 'indigo',
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
