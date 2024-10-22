<template>
  <section id="our-work" class="our-work p-4">
    <h3 class="title">Our Intelligent Monitoring Solution</h3>
    <p>
      At LactoSense, we provide cutting-edge IoT technology designed to optimize the refrigeration of dairy products.
    </p>
    <div class="grid grid-nogutter">
      <div class="col-6">
        <div class="card">
          <img src="../assets/img/workteam.jpg" alt="work team">
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <img src="../assets/img/milk.jpg" alt="milk">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.our-work {
  font-family: 'Poppins', sans-serif; /* Apply the same font as the header */
  background-color: #B3E5FC; /* Same color as the header without transparency */
  text-align: center; /* Center the titles */
}

.title {
  font-size: 2.5rem; /* Increase the font size of the title */
  color: #000; /* Black text */
}

.our-work p {
  font-size: 1.25rem; /* Increase the font size of the paragraph */
  color: #000; /* Black text */
}

.grid {
  display: flex;
  justify-content: space-between;
}

.card {
  background-color: #fff; /* White background */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Black shadow */
  padding: 20px;
  text-align: center;
  margin: 10px;
  color: #000; /* Black text */
  flex: 1; /* Make cards take up equal space */
}

.card img {
  width: 100%;
  height: 500px; /* Set a fixed height */
  object-fit: cover; /* Ensure the image covers the area */
  border-radius: 8px;
}
</style>