<template>
  <div class="home">
    <VHero bg="#121314" text="#fff" :src="response.Home.elements[0].img">
      <h1 class="display-3">{{response.Home.elements[0].Titulo}}</h1>
      <p class="subheading">{{response.Home.elements[0].Texto}}</p>
    </VHero>
    <BRNextEvents :events="response.Eventos.elements" maxEvents="3"></BRNextEvents>
    <v-container align-center justify-center fill-height grid-list-md>
      <v-layout align-center justify-center fill-height grid-list-md>
        <v-flex xs12 sm3>
          <router-link to="/eventos" class="no-decoration">
            <v-btn block color="orange" large>Ver mais</v-btn>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
    <BRSection color="grey darken-4">
      <v-flex xs12 sm6 lg4 xl3>
        <v-img :src="response.Home.elements[1].img" contain></v-img>
      </v-flex>
      <v-flex xs12 sm6 xl3>
        <h2 class="display-2 mb-4">{{response.Home.elements[1].Titulo}}</h2>
        <p class="subheading">{{response.Home.elements[1].Texto}}</p>
      </v-flex>
    </BRSection>
    <BRSection color="black">
      <v-flex xs12 sm6 xl3>
        <h2 class="display-2 mb-4">{{response.Home.elements[2].Titulo}}</h2>
        <p class="subheading">{{response.Home.elements[2].Texto}}</p>
      </v-flex>
      <v-flex xs12 sm6 lg4 xl3>
        <v-img :src="response.Home.elements[2].img" contain></v-img>
      </v-flex>
    </BRSection>
  </div>
</template>

<script>
import VHero from '../components/VHero.vue';
import BRNextEvents from '../components/BRNextEvents.vue';
import BRSection from '../components/BRSection.vue';

export default {
  components: {
    VHero,
    BRNextEvents,
    BRSection,
  },
  props: {
    response: Object,
    loading: Boolean,
  },
  data() {
    return {
      header: {

      },
    };
  },
  mounted() {

  },
};
</script>
