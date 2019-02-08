<template>
  <v-app dark>
    <BRNavbar></BRNavbar>
    <v-content v-if="!this.loaded">
      <h2>Carregando...</h2>
    </v-content>
    <v-content v-if="this.loaded">
      <router-view :response="this.response"/>
    </v-content>
  </v-app>
</template>

<script>
import Tabletop from 'tabletop';
import BRNavbar from './components/BRNavbar.vue';

export default {
  name: 'App',
  components: {
    BRNavbar,
  },
  data() {
    return {
      response: '',
      loaded: false,
    };
  },
  mounted() {
    const self = this;


    Tabletop.init({
      key: '169imA-s-IP57blAcVE0hvLJmoKv3jGNTgPHD3wvC7WI',
      simpleSheet: false,
      callback(table) {
        console.log(self);

        self.response = table;
        self.loaded = true;
      },
    });
  },
};
</script>

<style lang="scss">
.no-decoration {
  text-decoration:none;
}
</style>
