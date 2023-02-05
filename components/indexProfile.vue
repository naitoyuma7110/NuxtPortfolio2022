<template>
  <div>
    <v-img height="16rem" lazy-src :src="path" class="rounded-0">
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-toolbar-title class="text-h5 white--text">About</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <div class="text-center avatar-position">
        <v-avatar size="12rem">
          <v-img alt="user" size="12rem" src="/img/myimg.jpg" />
        </v-avatar>
        <h2 class="text-h5 ma-1">内藤祐馬</h2>
        <p class="grey--text">Naito Yuma</p>
      </div>
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
          <v-btn class="mb-1 mr-1" depressed rounded small @click="externalLink('https://www.facebook.com/naitoyuma/')">
            <v-icon color="blue" left>mdi-facebook</v-icon>
            FaceBook
          </v-btn>
          <v-btn class="mb-1 mr-1" depressed rounded small @click="externalLink('https://github.com/naitoyuma3230')">
            <v-icon left>mdi-github</v-icon>
            GitHub
          </v-btn>
          <v-btn class="mb-1 mr-1" depressed rounded small
            @click="externalLink('https://www.wantedly.com/id/naito_yuma')">
            <v-icon left>mdi-account-arrow-right</v-icon>
            Wantedly
          </v-btn>
          <v-btn class="mb-1 mr-1" depressed rounded small
            @click="externalLink('https://findy-code.io/share_profiles/2C29oSrNNElKH')">
            <v-icon left>mdi-account-arrow-right</v-icon>
            Findy
          </v-btn>
          <v-btn depressed rounded small class="mb-1 mr-1"
            @click="externalLink('https://portfolio.forkwell.com/@naitoyuma3230')">
            <v-icon left>mdi-account-arrow-right</v-icon>
            Forkwell
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
  overflow: visible;
  margin-bottom: 6rem;
}

.card-front-items .avater-img {
  width: auto;
}

.myimg_border {
  border: 0.2rem solid white;
}
