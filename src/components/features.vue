<template>
  <section id="services" class="services p-4">
    <h3 class="title">Key Features and Services</h3>
    <p>Our platform integrates smart sensors and IoT technology to provide a seamless refrigeration management experience.</p>
    <div class="grid grid-nogutter">
      <div class="col-4">
        <div class="card">
          <i class="pi pi-desktop p-5"></i>
          <h4>Real-Time Monitoring</h4>
          <p>Our intelligent sensors monitor temperature and humidity 24/7, providing real-time data and alerts.</p>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <i class="pi pi-chart-bar p-5"></i>
          <h4>Data Analysis</h4>
          <p>Analyze trends and improve your refrigeration efficiency with detailed data analytics tools.</p>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <i class="pi pi-bell p-5"></i>
          <h4>Automatic Alerts</h4>
          <p>Receive real-time notifications for any temperature changes to prevent quality issues.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.services {
  font-family: 'Poppins', sans-serif; /* Apply the same font as the header */
  background-color: #B3E5FC; /* Same color as the header without transparency */
  text-align: center; /* Center the titles */
}

.title {
  font-size: 2.5rem; /* Increase the font size of the title */
  color: #000; /* Black text */
}

.services p {
  font-size: 1.25rem; /* Increase the font size of the paragraph */
  color: #000; /* Black text */
}

.card {
  background-color: #fff; /* White background */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Black shadow */
  padding: 20px;
  text-align: center;
  margin: 10px;
  color: #000; /* Black text */
}

.card i {
  font-size: 5rem;
  color: #007bff;
}

.card h4 {
  font-size: 1.5rem;
  margin-top: 10px;
}

.card p {
  font-size: 1rem;
  color: #000; /* Black text */
}
</style>