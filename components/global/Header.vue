<template>
  <div>
    <v-navigation-drawer v-model="drawer" class="blue-grey darken-4" :clipped="clipped" app>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img :src="path"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="text--white text-color-white">Naito Yuma</v-list-item-title>

        <v-btn icon @click="drawer = !drawer">
          <v-icon color="white">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" router exact link>
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text--white text-color-white">{{ item.title }}</v-list-item-title>
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
        <v-btn v-for="(item, i) in items" :key="i" :fab="$vuetify.breakpoint.name == 'xs'" dark
          color="blue-grey darken-4" rounded class="mx-1" small :to="item.to">
          <v-icon color="mr-2" small>{{ item.icon }}</v-icon>
          <div v-if="!($vuetify.breakpoint.name == 'xs')">
            {{ item.title }}
          </div>
        </v-btn>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
import myImg from '~/assets/img/myimg.JPG'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      isDarkMode: false,
      path: myImg,
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

.text-color-white {
  color: white;
}
</style>
