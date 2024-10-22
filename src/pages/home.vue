<script>
import Hero from "../components/hero.vue";
import Features from "../components/features.vue";
import Reviews from "../components/reviews.vue";
import Contact from "../components/contact.vue";
import Ourwork from "../components/ourwork.vue";

export default {
  name: "home",
  components: {Hero, Ourwork, Contact, Reviews, Features}
}
</script>

<template>
  <div>
    <hero />
    <features />
    <ourwork />
    <reviews />
    <contact />
  </div>
</template>

<style scoped>

</style>