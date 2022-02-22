<template>
  <BaseNavbar class="mb-5" />
  <Transition mode="out">
    <router-view />
  </Transition>
  <BaseFooter />
</template>

<script>
import BaseNavbar from "@/components/base/BaseNavbar.vue";
import BaseFooter from "@/components/base/BaseFooter.vue";

export default {
  components: {
    BaseNavbar,
    BaseFooter,
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.text-primary-alt {
  color: #ff4a57 !important;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
