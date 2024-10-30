<script>
import Hero from "../components/hero.vue";
import Features from "../components/features.vue";
import Reviews from "../components/reviews.vue";
import Contact from "../components/contact.vue";
import Ourwork from "../components/ourwork.vue";
import Simulator from "../components/simulator.vue";

export default {
  name: "home",
  components: {Simulator, Hero, Ourwork, Contact, Reviews, Features}
}
</script>

<template>
  <div>
    <hero />
    <ourwork />
    <features />
    <simulator/>
    <reviews />
    <contact />
  </div>
</template>

<style scoped>

</style>