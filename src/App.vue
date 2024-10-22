<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Header, Footer }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}
html {
  scroll-behavior: smooth;
}
</style>
