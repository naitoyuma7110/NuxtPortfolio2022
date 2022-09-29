<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">資格・実績</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Paformance</v-card-subtitle>
      </v-col>
    </v-row>
    <v-list>
      <v-layout v-for="file in files" :key="file.title" d-flex flex-column>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-text="file.title"></v-list-item-title>
            <v-list-item-subtitle
              class="mb-2"
              v-text="file.subtitle"
            ></v-list-item-subtitle>
            <p>
              {{ file.body }}
            </p>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="blue lighten-1">mdi-link</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-layout>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [
        {
          title: '理学療法の学会の賞',
          subtitle: '抄録とスライド発表',
          body: 'この辺の実績が転職に一番役に立った',
        },
        {
          title: '基本情報技術者資格',
          subtitle: 'IT全般',
          body: '就活で使いたかったので1発で合格したかった。仕事しながら勉強するのがマジでしんどかった。',
        },
        {
          subtitle: 'オブジェクト指向の基礎知識',
          title: 'Java Silver',
          body: '難しかったが何回でも受けられるのでプレッシャーは少なかった。退職後だったので時間もあった。',
        },
        {
          title: '統計検定3級',
          subtitle: 'データを解釈する技術',
          body: '今仕事で使うことはないがデータ解析の知識はプログムと非常に関係性が高い。2級からが難しくて3級は算数だった',
        },
      ],
    }
  },
}
</script>
