<script>
export default {
  name: "dashboard",
  data() {
    return {
      temperature: 20,
    };
  },
  methods: {
    generateRandomTemperature() {
      this.temperature = (Math.random() * 10 + 20).toFixed(1);
    },
  },
};
</script>

<template>
  <section class="dashboard p-4">
    <h3 class="title">Real-Time Temperature Monitoring</h3>
    <p>
      Monitor the system's temperature to ensure optimal conditions for your products.
    </p>
    <div class="card">
      <i class="pi pi-gauge p-5"></i>
      <h4>Current Temperature</h4>
      <p>{{ temperature }} °C</p>
      <button @click="generateRandomTemperature" class="btn">Update Temperature</button>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.dashboard {
  font-family: 'Poppins', sans-serif;
  background-color: #B3E5FC;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 10px;
}

.dashboard p {
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

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
