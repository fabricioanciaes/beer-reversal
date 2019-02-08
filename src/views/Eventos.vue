<template>
  <BRNextEvents :events="response.Eventos.elements"></BRNextEvents>
</template>

<script>
import BRNextEvents from '../components/BRNextEvents.vue';

export default {
  name: 'Eventos',
  components: {
    BRNextEvents,
  },
  props: {
    response: Object,
  },
};
</script>
