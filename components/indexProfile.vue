<template>
  <div>
    <v-img
      height="16rem"
      lazy-src
      :src="path"
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
        <h3 class="text-h4 mb-0">内藤祐馬</h3>
        <small>Naito Yuma</small>
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
            勉強もかねてプロフィールサイトを作成 実験的に色々使ってみる
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
}
</script>
<style>
.card-back-image {
  overflow: visible;
  margin-bottom: 7rem;
}

.card-front-items {
  bottom: -8rem;
  transform: translateY(40%);
  z-index: 20;
}

.card-front-items .avater-img {
  width: auto;
}
.myimg_border {
  border: 0.2rem solid white;
}
</style>
