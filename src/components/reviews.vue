<script>
export default {
  name: "reviews"
}
</script>

<template>
  <section id="reviews" class="reviews p-4">
    <h3 class="title">What our clients say:</h3>
    <div class="reviews-list">
      <div class="card">
        <p>“LactoSense has revolutionized the way we manage our refrigeration systems, saving us time and ensuring product quality.”</p>
        <p>— Dairy Co.</p>
      </div>
      <div class="card">
        <p>“With real-time data and alerts, we’ve reduced product spoilage and optimized our operations.”</p>
        <p>— FreshMilk Enterprises</p>
      </div>
      <div class="card">
        <p>“Their IoT solution is a game-changer in dairy product management. We couldn’t be happier!”</p>
        <p>— Quality Lacto</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.reviews {
  font-family: 'Poppins', sans-serif; /* Apply the same font as the header */
  background-color: #B3E5FC; /* Same color as the header without transparency */
  text-align: center; /* Center the titles */
}

.title {
  font-size: 2.5rem; /* Increase the font size of the title */
  color: #000; /* Black text */
}

.reviews-list {
  display: flex;
  justify-content: space-around; /* Distribute cards evenly */
  margin-top: 20px;
}

.card {
  background-color: #fff; /* White background */
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Black shadow */
  padding: 30px; /* Increase padding */
  text-align: center;
  margin: 10px;
  color: #000; /* Black text */
  width: 30%; /* Increase width */
}

.card p {
  margin: 0;
}
</style>