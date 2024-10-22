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
    <section id="hero">
      <hero />
    </section>
    <section id="ourwork">
      <ourwork />
    </section>
    <section id="services">
      <features />
    </section>
    <section id="reviews">
      <reviews />
    </section>
    <section id="contact">
      <contact />
    </section>
  </div>
</template>

<style scoped>
.section-padding {
  padding-top: 60px; /* Adjust this value based on your header height */
}
</style>