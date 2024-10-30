<script>
export default {
  name: "settings",
  data() {
    return {
      threshold: 30,
    };
  },
};
</script>

<template>
  <section class="settings p-4">
    <h3 class="title">Threshold Settings</h3>
    <p>Adjust the thresholds to receive automatic alerts according to your needs.</p>
    <div class="card">
      <i class="pi pi-sliders-h p-5"></i>
      <h4>Alert Threshold</h4>
      <label for="threshold">Alert Threshold (°C):</label>
      <input
          type="number"
          id="threshold"
          v-model="threshold"
          class="input"
      />
      <p>Current Threshold: {{ threshold }} °C</p>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.settings {
  font-family: 'Poppins', sans-serif;
  background-color: #B3E5FC;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 10px;
}

.settings p {
  font-size: 1.25rem;
  color: #000;
  margin-bottom: 20px;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: 20px;
  text-align: center;
  margin: 10px auto;
  max-width: 400px;
  color: #000;
}

.card i {
  font-size: 5rem;
  color: #007bff;
  margin-bottom: 15px;
}

.card h4 {
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
}

.input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
