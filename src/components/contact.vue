<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: "contact",
  components: { InputText, Button }
}
</script>

<template>
  <section id="contact" class="contact p-4">
    <h3 class="title">Stay Updated with LactoSense</h3>
    <form class="p-fluid">
      <InputText placeholder="Email" />
      <Button label="Subscribe now" class="p-button-rounded"></Button>
    </form>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.contact {
  font-family: 'Poppins', sans-serif; /* Apply the same font as the header */
  background-color: #B3E5FC; /* Same color as the header without transparency */
  text-align: center; /* Center the titles */
}

.title {
  font-size: 2.5rem; /* Increase the font size of the title */
  color: #000; /* Black text */
}

.p-fluid {
  font-size: 1.25rem; /* Increase the font size of the form text */
  color: #000; /* Black text */
}
</style>