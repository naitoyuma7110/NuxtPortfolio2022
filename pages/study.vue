<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12">
        <v-card-title class="pb-0 text-h5">プログラミング</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Programing</v-card-subtitle>
      </v-col>
    </v-row>
    <v-card v-for="work in contents" :key="work.id">
      <!-- ここで指定したwork.idのPathは _idフォルダに動的に紐づけられる -->
      <v-img width="30%" :src="work.thumbnail.url" :alt="work.title" />
      <v-card-title class="works__name">{{ work.title }}</v-card-title>
      <nuxt-link :to="`/works/${work.id}/`" class="works__inner">
        リンク先へ
      </nuxt-link>
    </v-card>
    <v-timeline dense>
      <v-timeline-item
        v-for="(card, i) in cards"
        :key="i"
        :color="card.color"
        :right="$vuetify.breakpoint.name == 'xs'"
        small
      >
        <template>
          <span :class="`headline font-weight-bold ${card.color}--text`"></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${card.color}--text`">
            Lorem ipsum
          </h2>
          <v-row>
            <v-col>
              <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="250"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>

                <v-card-title>first step</v-card-title>

                <v-card-text>
                  <div>
                    Small plates, salads & sandwiches - an intimate setting with
                    12 indoor seats plus patio seating.
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Tonight's availability</v-card-title>

                <v-card-text>
                  <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                  >
                    <v-chip>5:30PM</v-chip>

                    <v-chip>7:30PM</v-chip>

                    <v-chip>8:00PM</v-chip>

                    <v-chip>9:00PM</v-chip>
                  </v-chip-group>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="deep-purple lighten-2" text @click="reserve">
                    Reserve
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar size="50">
            <v-img :src="require('~/assets/img/man.PNG')" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>Current</span>
        </template>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          color: 'cyan',
          year: '1960',
        },
        {
          color: 'green',
          year: '1970',
        },
        {
          color: 'pink',
          year: '1980',
        },
        {
          color: 'amber',
          year: '1990',
        },
        {
          color: 'orange',
          year: '2000',
        },
      ],
    }
  },
  async asyncData({ $microcms }) {
    const works = await $microcms.get({
      endpoint: 'works',
    })
    return works
  },
}
</script>
