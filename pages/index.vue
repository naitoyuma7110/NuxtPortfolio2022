<template>
  <v-card>
    <v-img
      height="16rem"
      lazy-src
      src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
      class="card-back-image"
    >
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <!-- <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon> -->

        <v-toolbar-title class="text-h5 white--text">
          About Me
        </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
      <v-layout class="card-front-items" d-flex flex-column align-center>
        <v-avatar size="170">
          <v-img class="avater-img" alt="user" src="myimg.jpg" />
        </v-avatar>
        <p class="text-h4">Naito Yuma</p>
      </v-layout>
    </v-img>

    <v-row>
      <v-col cols="12" sm="7">
        <v-card-title class="text--primary pb-0">
          理学療法士/プログラマー
        </v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="pt-0"
          >Pyhisical Therapist / Programer
        </v-card-subtitle>
        <v-card-text>
          <div class="mb-2">
            this is demo comment. this is demo comment. this is demo comment.
            this is demo commentthis is demo comment. this is demo comment. this
            is demo comment. this is demo comment
          </div>
        </v-card-text>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card-title class="text--primary pb-0">Profile</v-card-title>
        <v-divider class="mx-5"></v-divider>

        <v-card-text>
          <div class="mb-2">Birth Day: 1991/11/18</div>
          <div class="mb-2">Birth Day: 1991/11/18</div>
          <div class="mb-2">Birth Day: 1991/11/18</div>
          <div></div>
        </v-card-text>
      </v-col>
    </v-row>
    <!-- <div class="d-flex justify-center text-h5 ma-5">History</div> -->
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">経歴</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">History</v-card-subtitle>
      </v-col>
    </v-row>

    <v-card-text>
      <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              Lorem ipsum
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut
            </div>
          </div>
        </v-timeline-item>
        <v-timeline-item>
          <template v-slot:icon>
            <v-avatar size="50">
              <v-img src="man.PNG" />
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>Current</span>
          </template>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">資格</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Lisence</v-card-subtitle>
      </v-col>
    </v-row>
    <v-list>
      <v-layout d-flex flex-column v-for="file in files" :key="file.title">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-text="file.title"></v-list-item-title>
            <v-list-item-subtitle
              class="mb-2"
              v-text="file.subtitle"
            ></v-list-item-subtitle>
            <p>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec utLorem ipsum dolor sit amet, no nam
              oblique veritus.
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
    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">技術・知識</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Skills</v-card-subtitle>
      </v-col>
    </v-row>

    <SkillsTab></SkillsTab>

    <v-row>
      <v-col cols="12" sm="5">
        <v-card-title class="pb-0">技術・知識</v-card-title>
        <v-divider class="mx-5"></v-divider>
        <v-card-subtitle class="py-0">Skills</v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import SkillsTab from '../components/skillsTab.vue'
export default {
  name: 'IndexPage',
  data() {
    return {
      years: [
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
      files: [
        {
          subtitle: 'Jan 20, 2014',
          title: 'Vacation itinerary',
        },
        {
          subtitle: 'Jan 10, 2014',
          title: 'Kitchen remodel',
        },
        {
          subtitle: 'Jan 20, 2014',
          title: 'Vacation itinerary',
        },
        {
          subtitle: 'Jan 10, 2014',
          title: 'Kitchen remodel',
        },
      ],
    }
  },
  components: { SkillsTab },
}
</script>
<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>

<style>
.card-back-image {
  overflow: visible;
  margin-bottom: 8rem;
}

.card-front-items {
  bottom: -8rem;
  transform: translateY(40%);
}

.card-front-items .avater-img {
  border: 0.2rem white solid;
}
</style>
