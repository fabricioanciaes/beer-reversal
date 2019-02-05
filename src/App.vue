<template>
  <v-app dark>
    <BRNavbar></BRNavbar>
    <v-content>
      <router-view :response="this.response"/>
    </v-content>
  </v-app>
</template>

<script>
import BRNavbar from './components/BRNavbar.vue';
import Tabletop from 'tabletop';

export default {
  name: 'App',
  components: {
    BRNavbar,
  },
};
</script>

<style lang="scss">
.no-decoration {
  text-decoration:none;
}
</style>


