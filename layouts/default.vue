<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark collapse-on-scroll app :src="path">
      <!-- <v-app-bar-nav-icon
        color="white"
        class="nav-icon"
        @click.stop="drawer = !drawer"
      /> -->
      <v-btn
        class="mr-3 ml-0"
        small
        fab
        color="black"
        @click.stop="drawer = !drawer"
      >
        <v-icon color="white" x-large> mdi-menu-down </v-icon>
      </v-btn>
      <v-toolbar-title color="white" class="nav-title" v-text="activeTitle" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
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
  </v-app>
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
          to: '/',
        },
        {
          icon: 'mdi-pen',
          title: 'プログラミング',
          to: '/study',
        },
        {
          icon: 'mdi-card-text-outline',
          title: '勉強ノート',
          to: '/post',
        },
        {
          icon: 'mdi-card-text-outline',
          title: 'Test',
          to: '/test',
        },
      ],
      miniVariant: false,
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
    },
  },
  mounted() {},
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
