<template>
  <v-flex xs-12>
    <v-card elevation="18" hover tile dark>
      <v-card-title primary-title>
        <div>
          <h2 class="headline pb-3" >Lorem ipsum #2</h2>
          <p class="subheading mb-1"><v-icon size="20">place</v-icon>Rua Benjamin Constant 48, Glória - RJ</p>
          <p class="mb-1"><v-icon size="20">calendar_today</v-icon> 06/09/1993</p>
          <h4><v-icon size="20">alarm</v-icon> 14h~22h</h4>
        </div>
      </v-card-title>
      <v-divider light></v-divider>
      <v-card-actions>
        <a href="#" class="no-decoration">
          <v-btn flat color="orange">Mais Informações</v-btn>
        </a>
        <a href="#" class="no-decoration">
          <v-btn flat color="orange">Stream</v-btn>
        </a>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'BREvent'
}
</script>



