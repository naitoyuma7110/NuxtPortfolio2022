<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">経歴</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">History</v-card-subtitle>
      </v-col>
    </v-row>
    <v-card-text>
      <v-timeline :dense="$vuetify.breakpoint.name == 'xs'">
        <v-timeline-item
          v-for="(item, i) in history"
          :key="i"
          :color="history.color"
          :right="$vuetify.breakpoint.name == 'xs'"
          small
        >
          <template>
            <span
              :class="`headline font-weight-bold ${item.color}--text`"
              v-text="item.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${item.color}--text`">
              {{ item.title }}
            </h2>
            <div>
              {{ item.body }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </div>
</template>

<script>
export default {
  data() {
    return {
      history: [
        {
          color: 'green',
          year: '2010',
          title: 'BOTCHAN ',
          body: 'Because of an hereditary recklessness, I have been playing always a losing game since my childhood.During my grammar school days, I was once laid up for about a week by jumping from the second story of the school building.',
        },
        {
          color: 'green',
          year: '2014',
          title: 'BOTCHAN ',
          body: 'Because of an hereditary recklessness, I have been playing always a losing game since my childhood.During my grammar school days, I was once laid up for about a week by jumping from the second story of the school building.',
        },
        {
          color: 'amber',
          year: '2018',
          title: 'BOTCHAN ',
          body: 'Because of an hereditary recklessness, I have been playing always a losing game since my childhood.During my grammar school days, I was once laid up for about a week by jumping from the second story of the school building.',
        },
        {
          color: 'orange',
          year: '2019',
          title: 'BOTCHAN ',
          body: 'Because of an hereditary recklessness, I have been playing always a losing game since my childhood.During my grammar school days, I was once laid up for about a week by jumping from the second story of the school building.',
        },
        {
          color: 'orange',
          year: '2021',
          title: 'BOTCHAN ',
          body: 'Because of an hereditary recklessness, I have been playing always a losing game since my childhood.During my grammar school days, I was once laid up for about a week by jumping from the second story of the school building.',
        },
      ],
    }
  },
}
</script>
