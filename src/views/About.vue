<template>
  <div class="about">
    <div class="container">
      <h1 class="mb-4">Know More About Me, {{ guestName }}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere,
        excepturi harum repudiandae doloribus quae consequuntur totam delectus
        mollitia cum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facilis, incidunt asperiores?
      </p>
      <div class="row">
        <div class="col left-side-card"></div>
        <div class="col right-side-car"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      guestName: store.getters["getGuestName"],
    };
  },
};
</script>

<style scoped>
.left-side-card {
  border-left: 1px solid black;
}
</style>
