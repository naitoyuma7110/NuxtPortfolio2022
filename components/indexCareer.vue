<template>
  <div>
    <Title>
      <template v-slot:title>
        経歴
      </template>
      <template v-slot:subtitle>
        History
      </template>
    </Title>

    <div :class="!$vuetify.breakpoint.mdAndUp && 'position-left'">
      <v-timeline :dense="!$vuetify.breakpoint.mdAndUp">
        <v-timeline-item v-for="(item, i) in history" :key="i" :color="item.color" :right="!$vuetify.breakpoint.mdAndUp"
          small>
          <v-alert dense border="left" :color="`${item.color} darken-4`">
            <template>
              <span class="headline font-weight-bold" v-text="item.year"></span>
            </template>
            <div class="py-4">
              <h3 :class="`text-h6 subtitle-2 mb-4 `">
                {{ item.title }}
              </h3>
              <div class="grey--text text--lighten-2">
                {{ item.body }}
              </div>
            </div>
          </v-alert>
        </v-timeline-item>

        <v-timeline-item :right="$vuetify.breakpoint.mdAndUp" small color="cyan">
          <template>
            <span class="headline"></span>
          </template>
          <div class="alert-pointer" @click="externalLink('https://speakerdeck.com/naitoyuma3230')">
            <v-alert color="cyan darken-4" border="left" elevation="2" icon="mdi-share-all">
              アウトプット用のスライド
            </v-alert>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      history: [
        {
          color: 'teal',
          year: '2013',
          title: 'リハビリ病院勤務',
          body: '大学の理学療法学科を卒業した後、回復期リハビリテーション病院に7年勤務し学会やフォーラムで何回か治療経験に基づく発表を行いました。',
        },
        {
          color: 'cyan',
          year: '2020',
          title: 'ITの勉強と転職活動',
          body: '治療効果の測定のためプログラムを書いたのをきっかけにIT技術に興味を持ち転職する事にしました。主に本とネットでプログラムの勉強をしました。',
        },
        {
          color: 'blue',
          year: '2021',
          title: '転職のため上京',
          body: 'ご縁を頂き東証プライム上場のIT企業にプログラマーとして就職しました。医療、介護に関するシステム開発をしている会社で、私はフロントエンドでJavascriptのフレームワークであるjQueryやVueを使用しています。個人的にはLaravelやPythonを使用したWebアプリの作成などしています。',
        },
        {
          color: 'indigo',
          year: '2022',
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
<style>
.alert-pointer {
  cursor: pointer;
}

.position-left .v-timeline-item__divider {
  min-width: 48px;
}

.position-left .v-timeline--dense .v-timeline-item__body {
  max-width: calc(100% - 48px);
}

.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before {
  left: calc(32px - 10px)
}
</style>
