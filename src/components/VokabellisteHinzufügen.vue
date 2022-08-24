<template>
  <h1 class="notHomeH1">Vokabelliste</h1>
  <div class="addVokabularyDiv">Vokabel hinzufügen:</div>
  <form @submit.prevent="addVokabulary()">
    <div class="textInputDiv">
      <img src="/germany.png" alt="germany" class="flagsBefore" />
      <input
        v-model="vokabularyInputGerman"
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
        v-model="vokabularyInputSwedish"
        type="text"
        id="inputSchwedisch"
        name="&#x1F50D;"
        class="textInput"
        placeholder="Schwedische Bedeutung..."
        required
      />
      <img src="/sweden.png" alt="sweden" class="flagsEnd" />
    </div>
    <button class="addVokabularyButton">Hinzufügen</button>
  </form>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({
  duration: 1500,
  position: "top",

  /* options */
});

const vokabularyInputGerman = ref("");
const vokabularyInputSwedish = ref("");
const alertString = ref("");

interface Vokabulary {
  german: string;
  swedish: string;
}
const vokabularyList = ref<Vokabulary[]>([]);

let importArr = localStorage.getItem(`storageArray`) as string | null;
if (importArr) {
  if (JSON.parse(importArr) !== null)
    vokabularyList.value = JSON.parse(importArr);
}

function addVokabulary() {
  if (
    vokabularyList.value.findIndex(
      (e) => e.german === vokabularyInputGerman.value
    ) === -1
  ) {
    const vokabulary = {
      german: vokabularyInputGerman.value,
      swedish: vokabularyInputSwedish.value,
    };
    vokabularyList.value.push(vokabulary);
    localStorage.setItem(`storageArray`, JSON.stringify(vokabularyList.value));
    alertString.value = `<b>${vokabularyInputGerman.value} : ${vokabularyInputSwedish.value}</b> wurde hinzugefügt!`;
    toaster.success(alertString.value);
  } else {
    alert(`You already added ${vokabularyInputGerman.value}!`);
  }
  vokabularyInputGerman.value = "";
  vokabularyInputSwedish.value = "";
}
</script>

<style lang="scss" scoped>
.addVokabularyDiv {
  font-family: "Cinzel Decorative", cursive;
  color: var(--colorYellow);
  margin-left: 20px;
  padding-bottom: 20px;
  font-size: min(4vw, 40px);
}

.textInputDiv {
  position: relative;
  width: calc(100% - 15vw + 60px);
  height: 39px;
  margin-top: 20px;
  padding-left: calc(15vw - 60px);
}

.textInput {
  height: 100%;
  width: 60vw;
  background-color: var(--colorYellow);
  color: var(--colorBlue);
  font-family: "Indie Flower", cursive;
  font-size: 1.2em;
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

.addVokabularyButton {
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
