<template>
  <div>
    <v-tabs show-arrows v-model="tab" icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab>
        開発環境/ツール
        <v-icon>mdi-hammer-wrench</v-icon>
      </v-tab>

      <v-tab>
        フロントエンド
        <v-icon>mdi-application-brackets-outline</v-icon>
      </v-tab>

      <v-tab>
        バックエンド
        <v-icon>mdi-server </v-icon>
      </v-tab>

      <v-tab>
        フィジカル
        <v-icon>mdi-arm-flex-outline </v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :value="0">
        <v-card-text>
          <v-row>
            <v-col cols="3" v-for="(dev, i) in skillSet.devs" :key="i">
              <v-btn rounded depressed fab small color="primary" dark>
                <v-icon>{{ `mdi-` + dev.icon }}</v-icon>
              </v-btn>
              <div>{{ dev.name }}</div>
            </v-col>
          </v-row>
          <v-spacer></v-spacer>
        </v-card-text>

        <div>
          <v-scroll-x-transition apper hide-on-leave
            >HELLO
          </v-scroll-x-transition>
        </div>
      </v-tab-item>

      <v-tab-item :value="1">
        <v-card-text>
          <v-btn rounded fab small color="primary" dark>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-text>

        <div>
          <v-scroll-x-transition apper hide-on-leave
            >World
          </v-scroll-x-transition>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      skillSet: {
        devs: [
          {
            name: 'Docker',
            icon: 'docker',
          },
          {
            name: 'AWS',
            icon: 'aws',
          },
          {
            name: 'Azure',
            icon: 'microsoft-azure',
          },
          {
            name: 'XAMP',
            icon: 'application-edit-outline',
          },
          {
            name: 'VScode',
            icon: 'application-edit-outline',
          },
        ],
      },
    }
  },
}
</script>
