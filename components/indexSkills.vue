<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">技術・知識</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Skills</v-card-subtitle>
      </v-col>
    </v-row>
    <v-tabs v-model="tab" show-arrows icons-and-text>
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
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(skills, i) in skillSet" :key="i" :value="i">
        <v-card
          v-for="(skill, j) in skills"
          :key="j"
          class="mx-auto"
          elevation="1"
        >
          <v-layout d-flex align-center class="py-2">
            <v-avatar class="ma-5">
              <v-icon size="50" :color="skill.color">
                {{ `mdi-` + skill.icon }}
              </v-icon>
            </v-avatar>
            <div>
              <v-card-title class="my-0 py-0">{{ skill.name }}</v-card-title>
              <v-card-text class="my-0 py-0">
                {{ skill.discription }}
                {{ skill.discription }}
              </v-card-text>
            </div>
          </v-layout>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      toggle: [],
      skillSet: [
        [
          {
            name: 'Docker',
            icon: 'docker',
            color: 'primary',
            rate: 2,
            discription:
              'this is Docker discription. Simple and No error great container env',
          },
          {
            name: 'AWS',
            icon: 'aws',
            color: 'yellow',
            rate: 2,
            discription:
              'this is AWS discription. I aften use EC2 server as static hosting servies',
          },
          {
            name: 'Heroku',
            icon: 'abjad-hebrew',
            color: 'purple',
            rate: 1,
            discription:
              'this is Heroku discription. I dont know him this is Heroku discription. I dont know him',
          },
        ],
        [
          {
            name: 'JavaScript',
            icon: 'nodejs',
            color: 'yellow',
            rate: 3,
            discription:
              'this is Docker discription. Simple and No error great container env',
            flamework: [
              {
                name: 'Vue',
                icon: 'vuejs',
                color: 'teal',
                rate: '3',
                discription:
                  'this is discription. this is discription.this is discription.this is discription.',
              },
              {
                name: 'Nuxt',
                icon: 'nuxt',
                color: 'teal',
                rate: '3',
                discription:
                  'this is discription. this is discription.this is discription.this is discription.',
              },
              {
                name: 'Jquery',
                icon: 'jquery',
                color: 'yellow',
                rate: '3',
                discription:
                  'this is discription. this is discription.this is discription.this is discription.',
              },
            ],
          },
        ],
        [
          {
            name: 'PHP',
            icon: 'language-php',
            color: 'deep-purple lighten-1',
            rate: 3,
            discription:
              'this is Docker discription. Simple and No error great container env',
            flamework: [
              {
                name: 'Laravel',
                icon: 'laravel',
                color: 'red lighten-2',
                rate: '3',
                discription:
                  'this is discription. this is discription.this is discription.this is discription.',
              },
              {
                name: 'Wordpress',
                icon: 'wordpress',
                color: 'primary',
                rate: '3',
                discription:
                  'this is discription. this is discription.this is discription.this is discription.',
              },
            ],
          },
          {
            name: 'Python',
            icon: 'language-python',
            color: 'primary',
            rate: 3,
            discription:
              'this is Docker discription. Simple and No error great container env',
            flamework: [
              {
                name: 'Jupyter Lab',
                icon: 'dev-to',
                color: 'red lighten-2',
                rate: '3',
                discription:
                  'this is discription. this is discription.this is discription.this is discription.',
              },
            ],
          },
        ],
      ],
    }
  },
}
</script>
<style>
.skillArea {
  height: 600px;
}
</style>
