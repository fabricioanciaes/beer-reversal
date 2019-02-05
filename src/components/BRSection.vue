<template>
  <v-container fluid :class="this.color">
    <v-container grid-list-lg>
      <v-layout align-center justify-center fill-height row wrap>
        <slot></slot>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'BRSection',
  props: {
    color: String,
  }
}
</script>
