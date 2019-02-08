<template>
  <div class="about">
    <v-container>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12 sm10 md8>
          <h1 class="display-3">{{response.Sobre.elements[0].Titulo}}</h1>
          <vue-markdown>{{response.Sobre.elements[0].Texto}}</vue-markdown>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Sobre',
  components: {
    VueMarkdown,
  },
  props: {
    response: Object,
  },
};
</script>
