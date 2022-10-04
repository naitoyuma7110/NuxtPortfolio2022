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
          title: 'I AM A CAT',
          subtitle: 'As yet I have no name.',
          body: 'Teachers have it easy. If you are born a human, it’s best to become a teacher',
        },
        {
          title: 'I AM A CAT',
          subtitle: 'As yet I have no name.',
          body: 'Teachers have it easy. If you are born a human, it’s best to become a teacher',
        },
        {
          title: 'I AM A CAT',
          subtitle: 'As yet I have no name.',
          body: 'Teachers have it easy. If you are born a human, it’s best to become a teacher',
        },
        {
          title: 'I AM A CAT',
          subtitle: 'As yet I have no name.',
          body: 'Teachers have it easy. If you are born a human, it’s best to become a teacher',
        },
      ],
    }
  },
}
</script>
