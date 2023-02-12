<template>
  <div>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar dark collapse-on-scroll app :src="path"> -->
    <v-app-bar color="black" collapse-on-scroll app>
      <v-btn class="my-0 mr-3" fab x-small color="black" @click.stop="drawer = !drawer">
        <v-icon color="white" large> mdi-menu-down </v-icon>
      </v-btn>
      <v-toolbar-title color="white" class="nav-title" v-text="activeTitle"></v-toolbar-title>
      <v-spacer />
      <v-toolbar-title>
        <v-btn v-for="(item, i) in items" :key="i" dark color="blue-grey darken-4" rounded class="mx-1" small
          :to="item.to">
          <v-icon color="mr-2">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-title>
    </v-app-bar>
  </div>
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
          icon: 'mdi-sticker-text',
          title: '勉強ノート',
          to: '/post'
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
  font-size: 14px;
}

.nav-icon {
  text-shadow: 1px 2px 1px black;
}

.test {
  border: 1px solid white
}
</style>
