<template>
  <v-flex xs-12>
    <v-card elevation="18" hover tile dark>
      <v-card-title primary-title>
        <div>
          <h2 class="headline pb-3" >{{this.event.Titulo}}</h2>
          <p class="subheading mb-1">
            <v-icon size="20">place</v-icon>
            {{this.event.Local}}
          </p>
          <p class="mb-1"><v-icon size="20">calendar_today</v-icon> {{this.event.Data}}</p>
          <h4><v-icon size="20">alarm</v-icon> {{this.event.Horario}}</h4>
        </div>
      </v-card-title>
      <v-divider light></v-divider>
      <v-card-actions>
        <a :href="this.event.URLInscricao" class="no-decoration" v-if="this.event.URLInscricao">
          <v-btn flat color="orange">Mais Informações</v-btn>
        </a>
        <a :href="this.event.URLStream" class="no-decoration" v-if="this.event.URLStream">
          <v-btn flat color="orange">Stream</v-btn>
        </a>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'BREvent',
  props: {
    event: Object,
  },
};
</script>
