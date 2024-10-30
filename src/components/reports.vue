<script>
export default {
  name: "reports",
  data() {
    return {
      temperatures: [],
    };
  },
  methods: {
    generateReport() {
      this.temperatures = Array.from(
          { length: 10 },
          () => (Math.random() * 10 + 20).toFixed(1)
      );
    },
  },
};
</script>

<template>
  <section class="reports p-4">
    <h3 class="title">Data Analysis</h3>
    <p>
      Review past temperature records to analyze system performance.
    </p>
    <div class="card">
      <i class="pi  pi-chart-bar p-5"></i>
      <h4>Generated Records</h4>
      <ul>
        <li v-for="(temp, index) in temperatures" :key="index">
          Record {{ index + 1 }}: {{ temp }} °C
        </li>
      </ul>
      <button @click="generateReport" class="btn">Generate Mock Report</button>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.reports {
  font-family: 'Poppins', sans-serif;
  background-color: #B3E5FC;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 10px;
}

.reports p {
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

.card ul {
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
}

.card li {
  font-size: 1rem;
  margin: 5px 0;
}

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
