<template>
  <div class="home">
    <VHero bg="#121314" text="#fff" :src="this.header.img">
      <h1 class="display-3"></h1>
      <p class="subheading"></p>
    </VHero>
    <BRNextEvents></BRNextEvents>
    <BRSection color="grey darken-4">
      <v-flex xs12 sm6 lg4 xl3>
        <v-img src="" contain></v-img>
      </v-flex>
      <v-flex xs12 sm6 xl3>
        <h2 class="display-2 mb-4"></h2>
        <p class="subheading"></p>
      </v-flex>
    </BRSection>
    <BRSection color="black">
      <v-flex xs12 sm6 xl3>
        <h2 class="display-2 mb-4"></h2>
        <p class="subheading"></p>
      </v-flex>
      <v-flex xs12 sm6 lg4 xl3>
        <v-img src="" contain></v-img>
      </v-flex>
    </BRSection>
  </div>
</template>

<script>
import VHero from '../components/VHero.vue';
import BRNextEvents from '../components/BRNextEvents.vue';
import BRSection from '../components/BRSection.vue';
import {globalStore} from '../main.js';

export default {
  components: {
    VHero,
    BRNextEvents,
    BRSection
  },
  data(){
    return {
      header: {
        img: '',
      },
    }
  },
  mounted() {
    this.header.img = globalStore.response.models.Home.elements[0].img
  }
};
</script>
