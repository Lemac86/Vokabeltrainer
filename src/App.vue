<template>
  <HomeButton v-if="state.route !== 'home'"></HomeButton>
  <HomeScreen v-if="state.route === 'home'"></HomeScreen>
  <TrainingStart v-if="state.route === 'trainingStart'"></TrainingStart>
  <TestStart v-if="state.route === 'teststart'"></TestStart>
  <VokabellisteHinzufügen v-if="state.route === 'vokabellisteHinzufügen'"></VokabellisteHinzufügen>
  <VokabellisteSuche v-if="state.route === 'vokabellisteSuche'"></VokabellisteSuche>
  <Statistik v-if="state.route === 'statistik'"></Statistik>
</template>

<script setup lang="ts">
import { state } from './router';
import { fetchVocabularyListData } from './API';
import HomeButton from './components/HomeButton.vue';
import HomeScreen from './components/HomeScreen.vue';
import TestStart from './components/TestStart.vue';
import TrainingStart from './components/TrainingStart.vue';
import VokabellisteHinzufügen from './components/VokabellisteHinzufügen.vue';
import VokabellisteSuche from './components/VokabellisteSuche.vue';
import Statistik from './components/Statistik.vue';

(async () => {
  await fetchVocabularyListData();
})();

// mutate();
</script>

<style lang="scss">
:root {
  border-radius: 25px;
  --colorBlue: #2b25d3;
  --colorYellow: #deff08;
}

#app {
  border-radius: 25px;
  padding-right: 10px;
  padding-top: 10px;
  padding-left: 5vw;
  padding-bottom: 5vh;
  height: calc(100% - 10px - 5vh);
}

body {
  border-radius: 25px;
  margin: 0;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: linear-gradient(to left, transparent 95vw, var(--colorYellow) 5vw),
    linear-gradient(to bottom, var(--colorBlue) 95vh, var(--colorYellow) 5vh);
}

.notHomeH1 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Indie Flower', cursive;
  font-weight: 400;
  margin: 0;
  height: 22.5%;
  width: 100%;
  color: var(--colorYellow);
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black, 1.5px 1px 2px black;
  font-size: min(8vw, 80px);
}

.homeH1 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cinzel Decorative', cursive;
  font-weight: 400;
  margin: 0;
  height: 50%;
  width: 100%;
  color: var(--colorYellow);
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black, 1.5px 1px 2px black;
  font-size: min(8vw, 80px);
}

.mooseImg {
  max-height: 100%;
  object-fit: contain;
  aspect-ratio: 1/1;
}
</style>
