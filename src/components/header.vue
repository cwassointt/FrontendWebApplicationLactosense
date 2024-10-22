<script>
export default {
  name: "header.vue",
  methods: {
    scrollToSection(event, sectionId) {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      const headerOffset = document.querySelector('header').offsetHeight;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<template>
  <header class="flex align-items-center justify-content-between p-1">
    <h2><a href="#">LactoSense</a></h2>
    <nav class="flex gap-2">
      <ul>
        <li><a href="#hero" @click="scrollToSection($event, 'hero')">Home</a></li>
        <li><a href="#ourwork" @click="scrollToSection($event, 'ourwork')">Our Solution</a></li>
        <li><a href="#services" @click="scrollToSection($event, 'services')">Features</a></li>
        <li><a href="#reviews" @click="scrollToSection($event, 'reviews')">Testimonials</a></li>
        <li><a href="#contact" @click="scrollToSection($event, 'contact')">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(179, 229, 252, 0.8); /* Light blue with transparency */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-family: 'Poppins', sans-serif; /* Minimalist and rounded typography */
  padding: 1px 5px; /* Further reduce vertical size */
  z-index: 1000; /* Ensure header is on top */
}

h2 a {
  text-decoration: none; /* Remove underline */
  color: #000; /* Change color to black */
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  display: inline;
  margin: 0 15px;
}

nav a {
  text-decoration: none;
  color: #000; /* Text color */
  font-weight: 600; /* Font weight */
}
</style>