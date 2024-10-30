<script>
export default {
  name: "alerts",
  data() {
    return {
      alert: false,
      threshold: 30,
    };
  },
  methods: {
    checkTemperature() {
      const temp = Math.random() * 50;
      this.alert = temp > this.threshold;
    },
  },
};
</script>

<template>
  <section class="alerts p-4">
    <h3 class="title">Automatic Alerts</h3>
    <p>
      Check if the temperature has exceeded the set limits to prevent product issues.
    </p>
    <div class="card">
      <i class="pi pi-bell p-5"></i>
      <h4>Alert Status</h4>
      <p v-if="alert">⚠️ Alert: Temperature has exceeded the limits!</p>
      <p v-else>✅ All good. Temperature is within the range.</p>
      <button @click="checkTemperature" class="btn">Check Temperature</button>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.alerts {
  font-family: 'Poppins', sans-serif;
  background-color: #B3E5FC;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 10px;
}

.alerts p {
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
