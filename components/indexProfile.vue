<template>
  <div>
    <v-img height="14rem" lazy-src :src="path" class="rounded-0 card-back-image">
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-toolbar-title class="text-h5 white--text">About</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-layout class="card-front-items" d-flex flex-column align-center>
        <v-avatar size="11rem" class="avator-border">
          <v-img alt="user" src="/img/myimg.jpg" />
        </v-avatar>
        <h2 class="text-h5 ma-1">内藤祐馬</h2>
        <p class="grey--text">Naito Yuma</p>
      </v-layout>
    </v-img>

    <v-row>
      <v-col cols="12" sm="7">
        <v-card-title class="text--primary pb-0">
          理学療法士/プログラマー
        </v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="pt-0 grey--text">Pyhisical Therapist / Programer
        </v-card-subtitle>
        <v-card-text class="mb-1 grey--text text--lighten-2">
          医療業界が抱える問題を解決する手段としてIT技術に興味を持ち転職しました。
          前職の経験とプログラムの技術を利用して医療現場の専門家に貢献する仕事がしたいと思っています。
        </v-card-text>
        <v-layout d-flex wrap class="pl-3">
          <v-btn depressed rounded color="white" class="grey--text text--darken-3 font-weight-bold mb-1 mr-2 pl-1"
            @click="externalLink('https://github.com/naitoyuma3230')">
            <v-avatar size="1.8rem" class="mr-1">
              <v-img src="https://logo.clearbit.com/github.com"></v-img>
            </v-avatar>
            GITHUB
          </v-btn>
          <v-btn depressed rounded color="white" class="cyan--text text--darken-2 font-weight-bold mb-1 mr-2 pl-1"
            @click="externalLink('https://www.wantedly.com/id/naito_yuma')">
            <v-avatar size="2.2rem" class="mr-1">
              <v-img src="https://logo.clearbit.com/wantedly.com"></v-img>
            </v-avatar>
            Wantedly
          </v-btn>
        </v-layout>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">プロフィール</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="pt-0 grey--text">Profile</v-card-subtitle>
        <v-card-text class="grey--text text--lighten-2">
          <div class="mb-2">出身地: 静岡</div>
          <div class="mb-2">年齢: 30</div>
          <div class="mb-2">仕事: プログラマー(フロントエンド)</div>
          <div class="mb-2">デッドリフト:140kg(5rep)</div>
          <div class="mb-2"></div>
        </v-card-text>
      </v-col>
    </v-row>
    <v-alert dense dark color="blue-grey" class="ma-2 pa-4">
      <v-row align="center">
        <v-col class="grow">
          <!-- <v-card-text class="mb-1 pb-1 "> -->
          現在、転職活動に各種サービスを利用しています
          <!-- </v-card-text> -->
          <div class="d-flex wrap mt-2">
            <v-btn depressed color="white" class="blue--text text--darken-3 font-weight-bold mb-1 mr-2 pl-1"
              @click="externalLink('https://findy-code.io/share_profiles/2C29oSrNNElKH')">
              <v-avatar size="2.2rem" class="mr-1">
                <v-img src="https://logo.clearbit.com/findy-code.io"></v-img>
              </v-avatar>
              Findy
            </v-btn>
            <v-btn depressed color="white" class="light-blue--text text--darken-3 font-weight-bold mb-1 mr-2 pl-1"
              @click="externalLink('https://portfolio.forkwell.com/@naitoyuma3230')">
              <v-avatar size="1.8rem" class="mr-1">
                <v-img src="https://logo.clearbit.com/forkwell.com"></v-img>
              </v-avatar>
              Forkwell
            </v-btn>
            <v-btn depressed color="white" class="teal--text font-weight-bold mb-1 mr-2 pl-1"
              @click="externalLink('https://paiza.jp/users/basic_profile')">
              <v-avatar size="1.8rem" class="mr-1">
                <v-img src="https://logo.clearbit.com/paiza.jp"></v-img>
              </v-avatar>
              Paiza
            </v-btn>
            <v-btn depressed color="white" class="teal--text font-weight-bold mb-1 mr-2 pl-1"
              @click="externalLink('https://lapras.com/person')">
              <v-avatar size="1.8rem" class="mr-1">
                <v-img src="https://logo.clearbit.com/lapras.com"></v-img>
              </v-avatar>
              LAPRAS
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script>
import imgPath from '~/assets/img/gotfathe.jpg'
export default {
  data() {
    return {
      path: imgPath,
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
.card-back-image {
  position: relative;
  overflow: visible;
  margin-bottom: 9rem;
}

.card-front-items {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 5%);
}

.avator-border {
  border: white 2px solid;
}
</style>
