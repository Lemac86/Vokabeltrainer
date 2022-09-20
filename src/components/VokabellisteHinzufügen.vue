<template>
  <h1 class="notHomeH1">Vokabelliste</h1>
  <div class="addVocabularyDiv">Vokabel hinzufügen:</div>
  <form @submit.prevent="addVocabulary()">
    <div class="textInputDiv">
      <img src="/germany.png" alt="germany" class="flagsBefore" />
      <input
        v-model="vocabularyInputGerman"
        type="text"
        id="inputDeutsch"
        name="&#x1F50D;"
        class="textInput"
        placeholder="Deutsche Bedeutung..."
        required
      />
      <img src="/germany.png" alt="germany" class="flagsEnd" />
    </div>
    <div class="textInputDiv">
      <img src="/sweden.png" alt="sweden" class="flagsBefore" />
      <input
        v-model="vocabularyInputSwedish"
        type="text"
        id="inputSchwedisch"
        name="&#x1F50D;"
        class="textInput"
        placeholder="Schwedische Bedeutung..."
        required
      />
      <img src="/sweden.png" alt="sweden" class="flagsEnd" />
    </div>
    <button class="addVocabularyButton">Hinzufügen</button>
  </form>
</template>

<script setup lang="ts">
import { ref, Ref, watchEffect } from "vue";
import { createToaster } from "@meforma/vue-toaster";
import * as API from "../API";

const toaster = createToaster({
  duration: 1500,
  position: "top",

  /* options */
});

const vocabularyInputGerman = ref("");
const vocabularyInputSwedish = ref("");

function addVocabulary() {
  if (
    API.addVocabulary(vocabularyInputGerman.value, vocabularyInputSwedish.value)
  ) {
    toaster.success(
      `<b>${vocabularyInputGerman.value} : ${vocabularyInputSwedish.value}</b> wurde hinzugefügt!`
    );
  } else {
    alert(`You already added ${vocabularyInputGerman.value}!`);
  }
  vocabularyInputGerman.value = "";
  vocabularyInputSwedish.value = "";
}
</script>

<style lang="scss" scoped>
.addVocabularyDiv {
  font-family: "Indie Flower", cursive;
  color: var(--colorYellow);
  margin-left: 12px;
  padding-bottom: 20px;
  font-size: min(5vw, 40px);
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black,
    1.5px 1px 2px black;
}

.textInputDiv {
  position: relative;
  width: calc(100% - 15vw + 60px);
  height: 39px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: calc(15vw - 60px);
}

.textInput {
  height: 100%;
  width: 60vw;
  background-color: var(--colorYellow);
  color: var(--colorBlue);
  font-family: "Indie Flower", cursive;
  font-size: 1em;
  font-weight: 700;
  padding: 0 5px;
  margin-left: 55px;
  text-align: center;
  border: 0.1px solid var(--colorBlue);
  border-radius: 5px;
  transition: all 500ms;
  &:focus {
    background-color: var(--colorBlue);
    color: var(--colorYellow);
    border-color: var(--colorYellow);
  }
}

.flagsBefore {
  position: absolute;
  aspect-ratio: 4/3;
  height: 120%;
  transform: translate(-2%, -4%);
}

.flagsEnd {
  position: absolute;
  aspect-ratio: 4/3;
  height: 120%;
  transform: translate(-10%, -4%);
}

.addVocabularyButton {
  height: 15vh;
  width: 70vw;
  margin-left: calc(50% - 35vw);
  margin-top: 15vh;
  font-weight: 700;
  font-family: "Indie Flower", cursive;
  font-size: 35px;
  background-color: var(--colorYellow);
  color: var(--colorBlue);
  border: 0.1px solid var(--colorBlue);
  border-radius: 25px;
  transition: background-color 500ms, color 500ms, border-color 50ms,
    transform 200ms;
  &:hover {
    background-color: var(--colorBlue);
    color: var(--colorYellow);
    border-color: var(--colorYellow);
  }
  &:focus {
    background-color: var(--colorBlue);
    color: var(--colorYellow);
    transform: translateY(4px);
    border-color: var(--colorYellow);
  }
}
</style>
