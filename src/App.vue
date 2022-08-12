<template>
  <HomeButton v-if="state.route !== 'home'"></HomeButton>
  <HomeScreen v-if="state.route === 'home'"></HomeScreen>
  <Training v-if="state.route === 'training'"></Training>
  <TrainingStart v-if="state.route === 'trainingStart'"></TrainingStart>
  <VokabellisteHinzufügen
    v-if="state.route === 'vokabellisteHinzufügen'"
  ></VokabellisteHinzufügen>
  <VokabellisteSuche
    v-if="state.route === 'vokabellisteSuche'"
  ></VokabellisteSuche>
  <Statistik v-if="state.route === 'statistik'"></Statistik>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { state, changeRoute } from "./router";

import HomeButton from "./components/HomeButton.vue";
import HomeScreen from "./components/HomeScreen.vue";
import Training from "./components/Training.vue";
import TrainingStart from "./components/TrainingStart.vue";
import VokabellisteHinzufügen from "./components/VokabellisteHinzufügen.vue";
import VokabellisteSuche from "./components/VokabellisteSuche.vue";
import Statistik from "./components/Statistik.vue";
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
