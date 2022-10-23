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
          :color="item.color"
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
            <h3 :class="`text-h6 subtitle-2 mb-4 ${item.color}--text`">
              {{ item.title }}
            </h3>
            <div class="grey--text">
              {{ item.body }}
            </div>
            <v-btn
              v-if="item.link"
              icon
              class="ml-5"
              @click="externalLink(item.link)"
            >
              <v-icon color="blue lighten-1 left">mdi-link</v-icon>
              sample
            </v-btn>
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
          color: 'deep-orange',
          year: '2010',
          link: 'https://docs.google.com/presentation/d/17vu2753vPS4-_fN7HMctV1U8ebKgzi66/edit?usp=sharing&ouid=108098578287300322924&rtpof=true&sd=true',
          title: '理学療法士',
          body: '回復期リハビリテーション病院に7年勤務し、学会やフォーラムで何回か治療経験に基ずく発表を行いました。',
        },
        {
          color: 'amber',
          year: '2020',
          link: 'https://docs.google.com/presentation/d/1IqhsWxXTzqxGCBppxXXvWQxOXAIJbcCP/edit?usp=sharing&ouid=108098578287300322924&rtpof=true&sd=true',
          title: 'プログラムの勉強',
          body: '治療効果の検証のため、スマホの加速度センサーから重心動揺を取得するプログラムを作成しました。それをきっかけに転職する事にしました。',
        },
        {
          color: 'blue',
          year: '2021',
          link: null,
          title: 'プログラマーに転職 ',
          body: 'ご縁を頂き東証プライム上場企業にプログラマーとして就職しました。フロントエンドではJavascriptのフレームワークであるjQueryやVueを使用しています。個人的にはLaravelやPythonを使用したWebアプリの作成などしています。',
        },
        {
          color: 'indigo',
          year: '2022',
          link: null,
          title: 'この先やってみたい事',
          body: '前職では物理的なデータに基づく運動解析などに興味があり、現在も数学、統計学、物理学の勉強を続けています。今後はそうした経験とIT技術を掛け合わせた仕事がしたいと考えています。',
        },
      ],
    }
  },
  methods: {
    externalLink(url) {
      window.open(url, '_blank')
    },
  },
}
</script>
