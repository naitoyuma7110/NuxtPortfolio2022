<template>
  <div>
    <section class="movie-container">
      <youtube ref="youtube" :video-id="videoId" :player-vars="{ autoplay: 1, mute: mute, playsinline: 1 }"
        @playing="playing" @paused="paused" @ended="ended" @ready="ready" />
      <div class="youtube-filter">
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <v-spacer></v-spacer>
        </v-app-bar>
        <v-icon color="white" class="ma-5 music-btn" size="40" @click="musicSwitch">mdi-music-circle-outline</v-icon>
      </div>
    </section>
    <div class="profile-img">
      <v-layout class="card-front-items" d-flex flex-column align-center>
        <v-avatar size="11rem" class="avator-border">
          <v-img alt="user" src="/img/myimg.jpg" />
        </v-avatar>
        <h2 class="text-h5 ma-1">内藤祐馬</h2>
        <p class="grey--text">Naito Yuma</p>
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
    ready() {
      const youtubePlayer = this.$refs.youtube.player
      youtubePlayer.mute()
      youtubePlayer.playVideo()
    },
    musicSwitch() { },
  },
}
</script>

<style>
iframe {
  width: 100%;
  height: 80rem;
}

.movie-container {
  background: #ddd;
  height: 30rem;
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
  margin-bottom: 4rem;
}

.music-btn {
  cursor: pointer;
}
</style>
