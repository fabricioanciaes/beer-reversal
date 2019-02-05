<script>
export default {
  name: 'BRNavbar',
  data(){
    return {
      menu: [
        {name: 'Home', path: '/', id:1},
        {name: 'Eventos', path: '/eventos', id:2},
        {name: 'Sobre', path: '/sobre', id:3}
      ],
      drawer: null
    }
  }
};
</script>


<template>
<div>
  <v-navigation-drawer
      v-model="drawer"
      right
      floating
      app
      temporary
    >
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>
      <v-list>
          <router-link :to="link.path" v-for="link in menu" :key="link.id" class="no-decoration">
            <v-list-tile @click="" >
                <v-list-tile-action >
                    {{link.name}}
                </v-list-tile-action>
            </v-list-tile>
          </router-link>
      </v-list>
    </v-navigation-drawer>
  <v-toolbar app>
    <router-link to="/">
    <v-toolbar-title class="headline text-uppercase">
      <span>Vuetify</span>
    </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link v-for="link in menu" :key="link.id" :to="link.path" class="hidden-xs-only no-decoration">
      <v-btn flat>
        <span class="mr-2">{{link.name}}</span>
      </v-btn>
    </router-link>
    <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
  </v-toolbar>
</div>
</template>

