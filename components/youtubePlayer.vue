<template>
  <div>
    <section class="movie-container">
      <youtube
        ref="youtube"
        :video-id="videoId"
        :player-vars="{ autoplay: 1, mute: mute }"
        @playing="playing"
        @paused="paused"
        @ended="ended"
      />
      <div class="youtube-filter">
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <v-toolbar-title class="text-h5 white--text"
            >About me</v-toolbar-title
          >
          <v-spacer></v-spacer>
        </v-app-bar>
        <v-icon
          color="white"
          class="ma-5 music-btn"
          size="40"
          @click="musicSwitch"
          >mdi-music-circle-outline</v-icon
        >
      </div>
    </section>
    <div class="profile-img">
      <v-layout class="card-front-items" d-flex flex-column align-center>
        <v-avatar class="myimg_border" size="170" color="white">
          <img class="avater-img" alt="user" src="/img/myimg.jpg" />
        </v-avatar>
        <h3 class="text-h4 mb-0">内藤祐馬</h3>
        <small>Naito Yuma</small>
      </v-layout>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
  components: {},
  data() {
    return {
      videoId: 'xfG6L9I7N8I',
      mute: true,
    }
  },

  methods: {
    playVideo() {
      this.player.playVideo()
    },
    // 再生スタートした際に発火
    playing() {
      console.log('we are watching!!!')
    },
    // 一時停止した際に発火
    paused() {
      console.log('paused')
    },
    // 再生終了した際に発火
    ended() {
      this.player.playVideo()
    },
    musicSwitch() {
      this.mute = !this.mute
    },
  },
}
</script>

<style>
iframe {
  width: 100%;
  height: 70vw;
}

.movie-container {
  background: #ddd;
  height: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.youtube-filter {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.profile-img {
  margin-top: -11rem;
  margin-bottom: 4rem;
}

.music-btn {
  cursor: pointer;
}

</style>
