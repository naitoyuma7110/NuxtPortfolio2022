<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// import imgPath from '~/assets/img/leon.jpeg'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      isDarkMode: false,
      drawer: false,
      clipped: true,
      fixed: true,
      items: [
        {
          icon: 'mdi-card-account-details-outline',
          title: 'プロフィール',
          to: '/'
        },
        {
          icon: 'mdi-pen',
          title: 'プログラミング',
          to: '/study'
        },
        {
          icon: 'mdi-card-text-outline',
          title: '勉強ノート',
          to: '/post'
        },
        {
          icon: 'mdi-card-text-outline',
          title: 'Test',
          to: '/test'
        }
      ],
      miniVariant: false
    }
  },
  computed: {
    activeTitle() {
      let activeTitle = ''
      this.items.forEach((item) => {
        if (item.to === this.$route.path) {
          activeTitle = item.title
        }
      })
      return activeTitle
    }
  },
  mounted() { }
}
</script>
<style>
.nav-title {
  text-shadow: 0.5px 0.5px 0.1px black;
}

.nav-icon {
  text-shadow: 1px 2px 1px black;
}
</style>
