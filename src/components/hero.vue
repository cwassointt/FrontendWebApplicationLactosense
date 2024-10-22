<script>
import Button from 'primevue/button';

export default {
  name: "hero",
  components: {
    Button
  }
}
</script>

<template>
  <section id="hero" class="hero flex align-items-center justify-content-center text-center">
    <div class="background-image"></div>
    <div class="content p-4">
      <h1>Smart Refrigeration for Dairy Products</h1>
      <h3>IoT Solutions for a Better Future in the Dairy Industry</h3>
      <Button label="Learn More About Our Technology" class="p-button-raised p-button-rounded large-button"></Button>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.hero {
  height: 100vh;
  background-image: url('../assets/img/main.jpg');
  background-size: cover;
  color: white;
  font-family: 'Poppins', sans-serif; /* Apply the same font as the header */
}

h1 {
  font-size: 3rem; /* Increase the size of the main title */
}

h3 {
  font-size: 1.5rem; /* Increase the size of the subtitle */
}

.large-button {
  font-size: 1.25rem; /* Increase the font size of the button */
  padding: 1rem 2rem; /* Increase the padding of the button */
}
</style>