<script>
import Dashboard from "./dashboard.vue";
import Alerts from "./alerts.vue";
import Reports from "./reports.vue";
import Settings from "./settings.vue";

export default {
  name: "simulator",
  components: {Settings, Reports, Alerts, Dashboard},

}
</script>

<template>
  <div id="simulator">
    <dashboard/>
    <alerts/>
    <reports/>
    <settings/>
  </div>
</template>

<style scoped>

</style>