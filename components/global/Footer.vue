<template>
  <v-footer color="black">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="(footerItem, i) in items"
        :key="i"
        color="white"
        :to="footerItem.to"
        text
        rounded
        class="my-2"
      >
        {{ footerItem.title }}
      </v-btn>
      <v-col class="black py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Hello,world</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import imgPath from '~/assets/img/gotfather-nav.jpg'
// import imgPath from '~/assets/img/leon.jpeg'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      isDarkMode: false,
      path: imgPath,
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
          icon: 'mdi-application-braces',
          title: 'プログラミング',
          to: '/study'
        },
        {
          icon: 'mdi-pen',
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
  mounted() {}
}
</script>
