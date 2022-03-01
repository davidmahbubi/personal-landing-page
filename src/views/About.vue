<template></template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    store.dispatch('askForGuestName');
    return {
      guestName: store.getters['getGuestName'],
    };
  },
};
</script>
