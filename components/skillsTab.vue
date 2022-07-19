<template>
  <div>
    <v-card-text>
      <v-tabs v-model="tab" icons-and-text>
        <v-tabs-slider></v-tabs-slider>

        <v-tab>
          Recents
          <v-icon>mdi-phone</v-icon>
        </v-tab>

        <v-tab>
          Favorites
          <v-icon>mdi-heart</v-icon>
        </v-tab>

        <v-tab>
          Nearby
          <v-icon>mdi-account-box</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item :value="'tab-' + 1">
          <v-card-text>
            <v-btn class="ma-1" rounded color="primary" dark> HELLO </v-btn>
            <v-btn
              class="m-1 justify-self-end"
              fab
              outlined
              small
              color="primary"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </v-card-text>

          <div>
            <v-scroll-x-transition apper hide-on-leave
              >HELLO
            </v-scroll-x-transition>
          </div>
        </v-tab-item>

        <v-tab-item :value="'tab-' + 2">
          <v-card-text>
            <v-btn class="ma-1" rounded color="primary" dark> World </v-btn>
            <v-btn
              class="m-1 justify-self-end"
              fab
              outlined
              small
              color="primary"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </v-card-text>

          <div>
            <v-scroll-x-transition apper hide-on-leave
              >World
            </v-scroll-x-transition>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-card-text>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      skillSet: {
        DevEnvironment: ['Docker'],
      },
    }
  },
}
</script>
