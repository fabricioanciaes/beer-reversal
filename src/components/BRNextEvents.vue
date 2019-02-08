<template>
<div>
  <v-container align-center justify-center fill-height grid-list-md>
    <h2 class="display-1 mt-4">Próximos Eventos</h2>
  </v-container>
  <v-container align-center justify-center fill-height grid-list-md>
      <v-layout align-center justify-center fill-height row wrap>
        <BREvent v-for="(event, index) in nextEvents" :event="event" :key="index"></BREvent>
      </v-layout>
  </v-container>
</div>
</template>

<script>

import BREvent from './BREvent.vue';

export default {
  name: 'BRNextEvents',
  components: {
    BREvent,
  },
  props: {
    events: Array,
    maxEvents: Number,
  },
  data() {
    return {
      nextEvents: [],
    };
  },
  methods: {
    parseDate(date) {
      const dateArr = date.split('/');
      return new Date(dateArr[2], (dateArr[1] - 1), dateArr[0]);
    },
    eventFilter() {
      const now = Date.now();

      const datefiedArray = this.events.map((event) => {
        const eventAppend = Object.assign(event);
        eventAppend.timestamp = this.parseDate(event.Data).getTime();
        return eventAppend;
      });

      datefiedArray.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

      const filteredEvents = datefiedArray.filter(event => event.timestamp >= now);

      this.nextEvents = filteredEvents.slice(0, this.maxEvents);
    },
  },
  mounted() {
    this.eventFilter();
  },
};
</script>

<style lang="scss" scoped>

</style>
