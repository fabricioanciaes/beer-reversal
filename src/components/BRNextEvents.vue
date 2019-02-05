<template>
<div>
  <v-container align-center justify-center fill-height grid-list-md>
    <h2 class="display-1 mt-4">Lorem ipsum</h2>
  </v-container>
  <v-container align-center justify-center fill-height grid-list-md>
      <v-layout align-center justify-center fill-height row wrap>
        <BREvent></BREvent>
        <BREvent></BREvent>
        <BREvent></BREvent>
      </v-layout>
  </v-container>
  <v-container align-center justify-center fill-height grid-list-md>
    <v-layout align-center justify-center fill-height grid-list-md>
      <v-flex xs12 sm3>
        <router-link to="/eventos" class="no-decoration">
          <v-btn block color="orange" large>Ver mais</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>

import BREvent from './BREvent.vue'
import Vue from 'vue';

export default {
  name: 'BRNextEvents',
  components: {
    BREvent,
  },
}
</script>

<style lang="scss" scoped>

</style>

