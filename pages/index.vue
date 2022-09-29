<template>
  <v-card rounded>
    <v-img
      height="16rem"
      lazy-src
      src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
      class="card-back-image rounded-0"
    >
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-toolbar-title class="text-h5 white--text">About me</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-layout class="card-front-items" d-flex flex-column align-center>
        <v-avatar class="myimg_border" size="170" color="white">
          <img class="avater-img" alt="user" src="/img/myimg.jpg" />
        </v-avatar>
        <p class="text-h4">Naito Yuma</p>
      </v-layout>
    </v-img>

    <v-card-text>
      <v-btn depressed rounded fab small>
        <v-icon color="blue">mdi-facebook</v-icon>
      </v-btn>
      <v-btn depressed rounded fab small>
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn depressed rounded fab small>
        <v-icon>mdi-account-arrow-right</v-icon>
      </v-btn>
    </v-card-text>
    <v-row>
      <v-col cols="12" sm="7">
        <v-card-title class="text--primary pb-0">
          理学療法士/プログラマー
        </v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="pt-0"
          >Pyhisical Therapist / Programer
        </v-card-subtitle>
        <v-card-text>
          <div class="mb-2">
            私の夢は医療・介護業界を日々、自己を高め社会に貢献しようと努める人達が、
            長所や専門性を発揮できる場所にすることです。
          </div>
        </v-card-text>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card-title class="text--primary pb-0">プロフィール</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="pt-0">Profile</v-card-subtitle>
        <v-card-text>
          <div class="mb-2">出身地: 静岡</div>
          <div class="mb-2">年齢: 30</div>
          <div class="mb-2">仕事: プログラマー(フロントエンド)</div>
          <div class="mb-2">デッドリフト:140kg(5rep)</div>
          <div class="mb-2"></div>
        </v-card-text>
      </v-col>
    </v-row>
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
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">資格・実績</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Lisence・achievement</v-card-subtitle>
      </v-col>
    </v-row>
    <v-list>
      <v-layout v-for="file in files" :key="file.title" d-flex flex-column>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-text="file.title"></v-list-item-title>
            <v-list-item-subtitle
              class="mb-2"
              v-text="file.subtitle"
            ></v-list-item-subtitle>
            <p>
              {{ file.body }}
            </p>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="blue lighten-1">mdi-link</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-layout>
    </v-list>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">技術・知識</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Skills</v-card-subtitle>
      </v-col>
    </v-row>

    <SkillsTab></SkillsTab>

    <v-col cols="12" sm="5">
      <v-card-title class="pb-0">Dream</v-card-title>
      <v-divider class="mx-5"></v-divider>
      <v-card-subtitle class="py-0">I have a dream</v-card-subtitle>
    </v-col>
  </v-card>
</template>

<script>
import SkillsTab from '../components/skillsTab.vue'
export default {
  name: 'IndexPage',
  components: { SkillsTab },
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
          body: '加速度センサーを利用したJavascriptアプリを作成した。業界や職種、仕事の内容を俯瞰的に考えるようになる。',
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
      files: [
        {
          title: '理学療法の学会の賞',
          subtitle: '抄録とスライド発表',
          body: 'この辺の実績が転職に一番役に立った',
        },
        {
          title: '基本情報技術者資格',
          subtitle: 'IT全般',
          body: '就活で使いたかったので1発で合格したかった。仕事しながら勉強するのがマジでしんどかった。',
        },
        {
          subtitle: 'オブジェクト指向の基礎知識',
          title: 'Java Silver',
          body: '難しかったが何回でも受けられるのでプレッシャーは少なかった。退職後だったので時間もあった。',
        },
        {
          title: '統計検定3級',
          subtitle: 'データを解釈する技術',
          body: '今仕事で使うことはないがデータ解析の知識はプログムと非常に関係性が高い。2級からが難しくて3級は算数だった',
        },
      ],
    }
  },
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
.card-back-image {
  overflow: visible;
  margin-bottom: 6rem;
}

.card-front-items {
  bottom: -8rem;
  transform: translateY(40%);
}

.card-front-items .avater-img {
  width: auto;
}
.myimg_border {
  border: 0.2rem solid white;
}
</style>
