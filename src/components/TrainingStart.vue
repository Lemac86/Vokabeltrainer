<template>
  <h1 class="notHomeH1">Training</h1>
  <div v-if="!startTraining">
    <h3 class="languageSelect">Wähle eine Sprache:</h3>
    <div class="flagsDiv">
      <button class="flagsButtons">
        <img
          src="/germany.png"
          alt="germany"
          class="flags"
          @click="languageSelected = 'german'"
        />
      </button>
      <button class="flagsButtons">
        <img
          src="/sweden.png"
          alt="sweden"
          class="flags"
          @click="languageSelected = 'swedish'"
        />
      </button>
    </div>
    <div class="startButtonDiv">
      <button
        class="startButton"
        :disabled="startDisabled"
        @click="startTraining = true"
      >
        Start
      </button>
    </div>
  </div>
  <Training
    :language="languageSelected"
    v-if="startTraining && languageSelected"
  ></Training>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import Training from "./Training.vue";
import { Language } from "../API";

const startTraining = ref(false);
const languageSelected = ref<Language | "">("");
const startDisabled = computed(() => languageSelected.value === "");
</script>

<style lang="scss" scoped>
.languageSelect {
  margin-top: 10vh;
  padding-left: 15vw;
  font-weight: 200;
  color: var(--colorYellow);
  font-family: "Indie Flower", cursive;
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black,
    1.5px 1px 2px black;
  font-size: min(5vw, 36px);
}

.flags {
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.flagsDiv {
  display: flex;
  justify-content: space-evenly;
  margin-top: 3vh;
}

.flagsButtons {
  width: 30vw;
  max-width: 180px;
  aspect-ratio: 4/3;
  background-color: transparent;
  border: none;
  transition: transform 500ms;

  &:hover,
  &:focus {
    transform: scale(135%);
  }
}

.startButton {
  background-color: var(--colorYellow);
  color: var(--colorBlue);
  font-family: "Indie Flower", cursive;
  border: 2px solid black;
  border-radius: 25px;
  height: 10vh;
  padding: 0 10px;
  font-size: 5vh;
  font-weight: 700;
  cursor: pointer;
  transition: transform 25ms, color 500ms, background-color 500ms,
    border-color 500ms;
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

.startButtonDiv {
  display: flex;
  justify-content: center;
  margin-top: 15vh;
}
</style>
