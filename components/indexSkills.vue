<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">技術</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Skills</v-card-subtitle>
      </v-col>
    </v-row>

    <v-btn-toggle v-model="toggle_exclusive">
      <v-btn v-for="(item, i) in skillCategory" :key="i" @click="tabChoice(i)">
        <v-icon>{{ item.icon }}</v-icon>
        {{ item.name }}
      </v-btn>
    </v-btn-toggle>
    <v-tabs-items v-model="tab" class="bg-black">
      <v-tab-item v-for="(skills, i) in skillSet" :key="i" :value="i">
        <v-card
          v-for="(skill, j) in skills"
          :key="j"
          class="mx-auto"
          elevation="1"
        >
          <div class="py-2">
            <div class="d-flex ma-2">
              <v-avatar>
                <v-icon size="50" :color="skill.color">
                  {{ `mdi-` + skill.icon }}
                </v-icon>
              </v-avatar>
              <v-card-title class="my-0 py-0">{{ skill.name }}</v-card-title>
            </div>
            <div>
              <v-card-text class="my-0 py-0">
                {{ skill.discription }}
              </v-card-text>
            </div>
          </div>

          <v-list-item
            v-for="(item, i) in skill.flamework"
            :key="i"
            class="my-3"
          >
            <v-row>
              <v-col cols="2">
                <div class="d-flex align-center flex-column">
                  <v-icon :color="item.color">{{ `mdi-` + item.icon }}</v-icon>
                  <div>
                    {{ item.name }}
                  </div>
                </div>
              </v-col>
              <v-col jsutify="start" cols="10">
                {{ item.discription }}
              </v-col>
            </v-row>
          </v-list-item>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 0,
      toggle: [],
      skillCategory: [
        {
          name: 'フロント',
          icon: 'mdi-application-brackets-outline',
        },
        {
          name: '開発ツール',
          icon: 'mdi-hammer-wrench',
        },
        {
          name: 'バックエンド',
          icon: 'mdi-application-brackets-outline',
        },
      ],
      skillSet: [
        [
          {
            name: 'JavaScript',
            icon: 'nodejs',
            color: 'yellow',
            discription:
              '業務では主にWebアプリの画面UIを作成し、APIを介しサーバーサイドとデータのやり取りを行っています。自社製品が医療介護系のシステムという事もあり、前職の経験から現場のユーザーが使いやすいUI設計を心がけています',
            flamework: [
              {
                name: 'Jquery',
                icon: 'jquery',
                color: 'yellow',
                rate: '3',
                discription:
                  'this is discription. this is discription.this is discription.this is discription.',
              },
              {
                name: 'Vue',
                icon: 'vuejs',
                color: 'teal',
                rate: '3',
                discription:
                  'this is discription. this is discription.this is discription.this is discription.',
              },
            ],
          },
        ],
        [
          {
            name: 'Docker',
            icon: 'docker',
            color: 'primary',
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
  methods: {
    tabChoice(i) {
      if (this.tab !== i) {
        this.tab = i
      }
    },
  },
}
</script>
<style>
.skilltab.active {
  background: #ccc;
}
.skillArea {
  height: 600px;
}
.bg-black {
  background: black;
}
</style>
