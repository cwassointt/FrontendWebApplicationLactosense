<script>
export default {
  name: "footer"
}
</script>

<template>
  <footer class="footer flex justify-content-center align-items-center p-3">
    <ul class="flex gap-3">
      <li><a href="#"><i class="pi pi-twitter"></i></a></li>
      <li><a href="#"><i class="pi pi-facebook"></i></a></li>
      <li><a href="#"><i class="pi pi-linkedin"></i></a></li>
      <li><a href="#"><i class="pi pi-github"></i></a></li>
    </ul>
    <p>LactoSense © 2024. All rights reserved.</p>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.footer {
  font-family: 'Poppins', sans-serif; /* Apply the same font as reviews */
  background-color: #333; /* Dark background color */
  color: #fff; /* White text */
  text-align: center; /* Center the text */
  padding: 20px; /* Add some padding */
}

.footer ul {
  list-style: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
}

.footer p {
  margin: 0;
  font-size: 1.25rem; /* Increase the font size */
}

.footer a {
  color: #fff; /* White color for icons */
  font-size: 1.5rem; /* Increase the size of the icons */
}

.footer a:hover {
  color: #B3E5FC; /* Light blue color on hover */
}
</style>