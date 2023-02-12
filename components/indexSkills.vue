<template>
  <div>
    <Title>
      <template v-slot:title>
        技術
      </template>
      <template v-slot:subtitle>
        Skills
      </template>
    </Title>

    <!-- <v-btn-toggle v-model="toggle_exclusive"> -->
    <v-btn-toggle v-model="tab">
      <v-btn v-for="(item, i) in skillCategory" :key="i" text @click="tab = i">
        <v-icon class="d-none d-sm-flex">{{ item.icon }}</v-icon>
        {{ item.name }}
      </v-btn>
    </v-btn-toggle>
    <v-tabs-items v-model="tab" class="bg-black">
      <v-tab-item v-for="(skills, i) in skillSet" :key="i" class="py-0" :value="i">
        <v-card v-for="(skill, j) in skills" :key="j" class="mx-auto py-1 mb-4 px-0 grey darken-4">
          <div class="py-2 mb-2">
            <div class="d-flex ma-2">
              <v-avatar>
                <v-icon size="50" :color="skill.color">
                  {{ `mdi-` + skill.icon }}
                </v-icon>
              </v-avatar>
              <v-card-title class="my-0 py-0">{{ skill.name }}</v-card-title>
            </div>
            <div>
              <v-card-text class="my-0 py-0 grey--text text--lighten-2">
                {{ skill.discription }}
              </v-card-text>
            </div>
          </div>
          <v-alert v-for="(item, k) in skill.flamework" :key="k" border="left" colored-border
            :color="item.color + ' darken-2'" :icon="`mdi-` + item.icon" dense prominent class="my-1 ml-2 pl-1 pr-0"
            elevation="2">
            <v-list-item class="mb-2 px-0">
              <div>
                <p :class="`text-body-1 text-${item.color}`">{{ item.name }}</p>
                <div jsutify="start" cols="10" class="grey--text text--lighten-2 text-subtitle-2">
                  {{ item.discription }}
                </div>
              </div>
            </v-list-item>
          </v-alert>
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
          name: 'バックエンド',
          icon: 'mdi-application-brackets-outline',
        },
        {
          name: '開発/ツール',
          icon: 'mdi-hammer-wrench',
        },
      ],
      skillSet: [
        [
          {
            name: 'JavaScript',
            icon: 'nodejs',
            color: 'yellow',
            discription:
              '業務では主にWebアプリの画面UIを作成し、APIを介しサーバーサイドとデータのやり取りを行っています。自社製品が医療介護系のシステムという事もあり、前職の経験から現場のユーザーが使いやすいUI設計を心がけています。',
            flamework: [
              {
                name: 'Jquery',
                icon: 'jquery',
                color: 'yellow',
                discription:
                  '単純なDOM操作やjQuery-uiを使用した画面作成で使用しています。色々なライブラリを使いますが最近はVueへ移行する流れがあります。',
              },
              {
                name: 'Vue',
                icon: 'vuejs',
                color: 'teal',
                discription:
                  'デザインとスクリプトをコンポーネント単位で管理する事でチーム開発しやすくデータも整理しやすいです。個人ではVuetifyを使用しますが、業務ではStylusでデザインを作成します。',
              },
            ],
          },
          {
            name: 'Google関連の技術',
            icon: 'google',
            color: 'red',
            discription: '',
            flamework: [
              {
                name: 'SEO',
                icon: 'text-box-search-outline ',
                color: 'cyan',
                discription:
                  'Google検索の結果上位を維持するために、HTML構造の最適化、メタタグ、サイトマップ設置など対策を行い、Search Consoleで検索スコアを分析します。',
              },
              {
                name: 'Analytics',
                icon: 'chart-areaspline ',
                color: 'green',
                discription:
                  'ホームページやLPを公開した後、そのサイトへのアクセス情報をGoogle Anlyticsを使用して分析します。対象となる顧客、その関心と事業の狙いが一致しているかなどの判断になります。',
              },
            ],
          },
          {
            name: 'CSS',
            icon: 'language-css3',
            color: 'blue',
            discription:
              '会社のシステム関連のUIデザインはXDを使用して作成する事がありますが、ホームページやLPはデザイナーのカンプを元に作成する事が多いです。',
            flamework: [
              {
                name: 'Stylus',
                icon: 'sass',
                color: 'pink',
                discription:
                  '素のcssから移行しようとなった際、簡潔に記載できるStylusを導入する事になりました。命名規則や設計にもルールが必要という事でBEMを導入しています。',
              },
              {
                name: 'Bootstrap',
                icon: 'bootstrap',
                color: 'red',
                discription:
                  '手軽にデザインしたい時に便利ですが、細かな調節をするならStylusを使います。',
              },
            ],
          },
        ],
        [
          {
            name: 'PHP',
            icon: 'language-php',
            color: 'deep-purple lighten-1',
            discription:
              '業務ではバックエンドの開発には関わりませんが、WordPressのテーマ作成や個人でアプリを作る際にPHPを使用します。',
            flamework: [
              {
                name: 'Laravel',
                icon: 'laravel',
                color: 'red lighten-2',
                discription:
                  'CURD機能や認証機能を手軽に実装できるため、個人でアプリを作成する際に使います。MVCモデルというシステムアーキテクチャに従います。',
              },
              {
                name: 'Wordpress',
                icon: 'wordpress',
                color: 'primary',
                discription:
                  'ホームページに簡単な記事投稿やブログ機能を設置する時に使用しています。今後は店舗の予約システムなど少し複雑なものも作ってみたい。',
              },
            ],
          },
          {
            name: 'Python',
            icon: 'language-python',
            color: 'primary',
            discription:
              'データ処理や分析に長けた言語で、上述した統計学の勉強はPythonを使用して行いました。私が今後目指すキャリアと一致しているため、数学や統計学から機械学習へとステップアップしていきたいです。',
            flamework: [
              {
                name: 'Anaconda',
                icon: 'dev-to',
                color: 'red lighten-2',
                discription:
                  'Anacondaにはデータ分析に必要なNumpy,pandasなどのライブラリが全て揃っています。またJupyterLabを使用してデータ処理の過程を記録し.md形式に変換して勉強ノートにまとめています。',
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
              '私は普段WindowsのPCを使用するのですが、色々な言語やフレームワークを試すとき、Dockerを使用する事で各々の言語に最適化された環境を瞬時に構築できます。複雑な設定は詳しくないですが、色々やってておかしくなったらコンテナを壊してまた作り直せるのは本当に素晴らしい。',
          },
          {
            name: 'Heroku',
            icon: 'abjad-hebrew',
            color: 'purple',
            discription:
              'デプロイ環境としてよく使います。これ以外にもAzure製のAPIを使うときはAzure,静的なホスティングサービスはNetlifyを使います。インフラ関係に詳しくなくてもGUIで全部設定できるのがいいです。',
          },
          {
            name: 'AWS',
            icon: 'aws',
            color: 'yellow',
            discription:
              '統合開発環境にCloud9を使用しMysqlやEC2と接続して開発環境をそのままデプロイするみたいな事を無料期間中にやったりしましたが、今ではさっぱりわかりせん。',
          },
        ],
      ],
    }
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
  background-color: black;
}
</style>
