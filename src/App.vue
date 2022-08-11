<template>
  <HomeScreen></HomeScreen>
</template>

<script setup lang="ts">
import Training from "./components/Training.vue";
import HomeScreen from "./components/HomeScreen.vue";
import TrainingStart from "./components/TrainingStart.vue";
import Statistik from "./components/Statistik.vue";
import VokabellisteHinzufügen from "./components/VokabellisteHinzufügen.vue";
import VokabellisteSuche from "./components/VokabellisteSuche.vue";
</script>

<style lang="scss">
:root {
  --colorBlue: #2b25d3;
}

#app {
  padding: 10px;
}

body {
  margin: 0;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: linear-gradient(
    to bottom,
    var(--colorBlue),
    var(--colorBlue),
    var(--colorBlue),
    #deff08
  );
}
</style>
