<template>
  <div>
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

      <v-tab>
        フィジカル
        <v-icon>mdi-arm-flex-outline </v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(skills, i) in skillSet" :key="i" :value="i">
        <v-card-text>
          <v-btn-toggle v-model="toggle[i]" group mandatory>
            <v-row>
              <v-col
                v-for="(skill, k) in skills"
                :key="k"
                cols="auto"
                class="px-1 mx-1 text-center"
              >
                <v-btn
                  :outlined="!(toggle[i] == k)"
                  :color="skill.color"
                  depressed
                  rounded
                  fab
                  small
                >
                  <v-icon>{{ `mdi-` + skill.icon }}</v-icon>
                </v-btn>
                <div
                  :class="
                    !(toggle[i] == k) ? `text--disabled` : `` + `text-center`
                  "
                >
                  {{ skill.name }}
                </div>
              </v-col>
            </v-row>
          </v-btn-toggle>
        </v-card-text>

        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <v-card
                v-for="(skill, k) in skills"
                :key="k"
                v-show="toggle[i] == k"
                outlined
              >
                <v-card-title class="text-h5">
                  {{ skill.name }}
                </v-card-title>
                <v-card-text> {{ skill.discription }}</v-card-text>
                <v-card-text>
                  <v-row>
                    <v-col
                      v-for="(item, j) in skill.flamework"
                      :key="j"
                      cols="auto"
                      class="px-1 mx-1 text-center"
                    >
                      <v-icon>{{ `mdi-` + item.icon }}</v-icon>
                      <div>
                        {{ item.name }}
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="d-flex justify-end mx-5">
                  <v-rating
                    :value="skill.rate"
                    background-color="gray"
                    color="amber"
                    small
                    dense
                    readonly
                  ></v-rating>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <SkillChart></SkillChart>
            </v-col>
          </v-row>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import SkillChart from './skillChart.vue'
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
            name: 'Azure',
            icon: 'microsoft-azure',
            color: 'primary',
            rate: 1,
            discription:
              'this is Azure discription. I use faceAI-API. It anlysis face image to read that feel',
          },
          {
            name: 'XAMP',
            icon: 'application-edit-outline',
            color: 'orange',
            rate: 2,
            discription:
              'this is XAMP discription. XAMP and Wordpress are best friend',
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
                name: 'Vue/Nuxt',
                icon: 'vuejs',
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
  components: { SkillChart },
}
</script>
<style>
.skillArea {
  height: 600px;
}
</style>
