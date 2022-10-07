<template>
  <h1 class="notHomeH1">Statistik</h1>
  <h2>Beantwortete Vokabeln:</h2>
  <div class="asked">
    <h3>Insgesamt</h3>
    <h3>
      {{ germanVocabularyAsked + swedishVocabularyAsked }}
    </h3>
    <h3>Deutsch</h3>
    <h3>{{ germanVocabularyAsked }}</h3>
    <h3>Schwedisch</h3>
    <h3>{{ swedishVocabularyAsked }}</h3>
  </div>

  <h2>Verhältnis richtig zu falsch:</h2>
  <div class="ratio">
    <h3 class="right">
      {{ germanVocabularyCorrect + swedishVocabularyCorrect }}
    </h3>
    <h3>Insgesamt</h3>
    <h3 class="wrong">
      {{ germanVocabularyAsked - germanVocabularyCorrect + (swedishVocabularyAsked - swedishVocabularyCorrect) }}
    </h3>
    <h3 class="right">
      {{ germanVocabularyCorrect }}
    </h3>
    <h3>Deutsch</h3>
    <h3 class="wrong">
      {{ germanVocabularyAsked - germanVocabularyCorrect }}
    </h3>
    <h3 class="right">{{ swedishVocabularyCorrect }}</h3>
    <h3>Schwedisch</h3>
    <h3 class="wrong">
      {{ swedishVocabularyAsked - swedishVocabularyCorrect }}
    </h3>
  </div>
  <div class="reset">
    <button class="resetButton" @click="resetStatistics()">Statistik zurücksetzen</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { vocabularyList } from '../API';
import * as API from '../API';

const germanVocabularyAsked = computed(() => vocabularyList.value.reduce((x, y) => x + y.german.timesAsked, 0));
const swedishVocabularyAsked = computed(() => vocabularyList.value.reduce((x, y) => x + y.swedish.timesAsked, 0));
const germanVocabularyCorrect = computed(() => vocabularyList.value.reduce((x, y) => x + y.german.timesCorrect, 0));
const swedishVocabularyCorrect = computed(() => vocabularyList.value.reduce((x, y) => x + y.swedish.timesCorrect, 0));

async function resetStatistics() {
 await API.resetStatistics();
}
</script>
<style lang="scss" scoped>
div {
  margin-left: 5px;
}
.asked {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
.ratio {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
h2 {
  text-decoration: underline;
  font-family: 'Indie Flower', cursive;
  color: var(--colorYellow);
  font-size: 2.6vh;
  text-align: center;
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black, 1.5px 1px 2px black;
}
h3 {
  margin: 4px 0;
  font-family: 'Indie Flower', cursive;
  color: var(--colorYellow);
  font-size: 2.4vh;
  text-align: center;
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black, 1.5px 1px 2px black;
  font-weight: 100;
}
.right {
  text-align: center;
  width: 6vh;
  background-color: green;
  border: 0.1px solid green;
  border-radius: 25px;
  box-shadow: -0.5px 0 var(--colorYellow), 0 0.5px var(--colorYellow), 1px 0 var(--colorYellow), 0 -0.5px var(--colorYellow),
    1px 0.5px 1px var(--colorYellow);
}

.wrong {
  width: 6vh;
  background-color: rgb(179, 6, 6);
  border: 0.1px solid rgb(179, 6, 6);
  border-radius: 25px;
  box-shadow: -0.5px 0 var(--colorYellow), 0 0.5px var(--colorYellow), 1px 0 var(--colorYellow), 0 -0.5px var(--colorYellow),
    1px 0.5px 1px var(--colorYellow);
}
.resetButton {
  background-color: var(--colorBlue);
  color: var(--colorYellow);
  border: 2px solid var(--colorYellow);
  border-radius: 15px;
  font-size: 3vh;
  font-family: 'Indie Flower', cursive;
  padding: 10px 15px;
  box-shadow: 1px 3px 10px;
  transition: all 100ms;
}

.reset {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8vh;
  height: 4vh;
}
</style>
