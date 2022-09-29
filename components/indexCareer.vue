<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">経歴</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">History</v-card-subtitle>
      </v-col>
    </v-row>
    <v-card-text>
      <v-timeline :dense="$vuetify.breakpoint.name == 'xs'">
        <v-timeline-item
          v-for="(item, i) in history"
          :key="i"
          :color="history.color"
          :right="$vuetify.breakpoint.name == 'xs'"
          small
        >
          <template>
            <span
              :class="`headline font-weight-bold ${item.color}--text`"
              v-text="item.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${item.color}--text`">
              {{ item.title }}
            </h2>
            <div>
              {{ item.body }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </div>
</template>

<script>
export default {
  data() {
    return {
      history: [
        {
          color: 'green',
          year: '2010',
          title: '理学療法の大学',
          body: 'みんなで人体構造と治療の勉強をした。当時の自分に10年後に転職するから備えろ、と伝えたい',
        },
        {
          color: 'green',
          year: '2014',
          title: 'リハビリテーション病院',
          body: 'みんなで病院業務をして、プライベートでは論文を読んだり学会で発表したりした。',
        },
        {
          color: 'amber',
          year: '2018',
          body: '加速度センサーを利用したJavascriptアプリを作成した。転職を考え始める。',
        },
        {
          color: 'orange',
          year: '2019',
          body: '転職のためのIT資格取得、プログラムの勉強を本格的に始める。',
        },
        {
          color: 'orange',
          year: '2021',
          body: 'プログラマーに転職して東京に来た',
        },
      ],
    }
  },
}
</script>
