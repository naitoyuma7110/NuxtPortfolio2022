<template>
  <v-row class="px-2 my-5">
    <v-col cols="12" sm="5" class="px-1">
      <v-card-title class="pa-0 text-h5  text--darken-2">
        <slot name="title" />
      </v-card-title>
      <v-divider class="mb-0 grey"></v-divider>
      <v-card-subtitle class="pa-0  text-subtitle-1 text--darken-2">
        <slot name="subtitle" />
      </v-card-subtitle>
    </v-col>
  </v-row>
</template>
