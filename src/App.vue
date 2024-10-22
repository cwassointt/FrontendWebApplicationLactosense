<template>
  <div id="app">
    <header-toolbar/>
    <router-view></router-view>
    <footer-component/>
  </div>
</template>

<script>
import headerToolbar from "./components/header-toolbar.vue";
import footerComponent from "./components/footer.component.vue";

export default {
  components: {footerComponent, headerToolbar }
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
