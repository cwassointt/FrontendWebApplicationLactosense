<script>
export default {
  name: "header.vue"
}
</script>

<template>
  <header class="flex align-items-center justify-content-between p-1">
    <h2><a href="#">LactoSense</a></h2>
    <nav class="flex gap-2">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#our-work">Our Solution</a></li>
        <li><a href="#services">Features</a></li>
        <li><a href="#reviews">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
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