<template>
  <v-img :src="this.src" :style="{ backgroundColor: bg, color: text}">
    <v-layout align-center justify-center column fill-height style="min-height:356px">
      <slot></slot>
    </v-layout>
  </v-img>
</template>

<script>
export default {
  name: 'VHero',
  props: {
    src: String,
    bg: String,
    text: String,
  },
  data: () => ({}),
};
</script>

<style>

</style>
