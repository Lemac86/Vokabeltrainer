<template>
  <HomeButton v-if="state.route !== 'home'"></HomeButton>
  <HomeScreen v-if="state.route === 'home'"></HomeScreen>
  <Training v-if="state.route === 'training'"></Training>
  <TrainingStart v-if="state.route === 'trainingStart'"></TrainingStart>
  <Test v-if="state.route === 'test'"></Test>
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
import Test from "./components/Test.vue";
import TrainingStart from "./components/TrainingStart.vue";
import VokabellisteHinzufügen from "./components/VokabellisteHinzufügen.vue";
import VokabellisteSuche from "./components/VokabellisteSuche.vue";
import Statistik from "./components/Statistik.vue";
</script>

<style lang="scss">
:root {
  --colorBlue: #2b25d3;
  --colorYellow: #deff08;
}

#app {
  padding: 10px;
}

body {
  margin: 0;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to left,
      transparent 95vw,
      var(--colorYellow) 5vw
    ),
    linear-gradient(to bottom, var(--colorBlue) 95vh, var(--colorYellow) 5vh);
}

.notHomeH1 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Cinzel Decorative", cursive;
  font-weight: 400;
  padding: 0;
  margin-top: 1vh;
  height: 50%;
  width: 100%;
  color: var(--colorYellow);
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black,
    1.5px 1px 2px black;
  font-size: min(8vw, 80px);
}

.homeH1 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Cinzel Decorative", cursive;
  font-weight: 400;
  padding: 0;
  margin: 0;
  height: 50%;
  width: 100%;
  color: var(--colorYellow);
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black,
    1.5px 1px 2px black;
  font-size: min(8vw, 80px);
}

.mooseImg {
  max-height: 100%;
  object-fit: contain;
  aspect-ratio: 1/1;
}
</style>
