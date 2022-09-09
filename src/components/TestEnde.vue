<template>
  <h2>Test abgeschlossen!</h2>
  <h3>
    Du hast {{ correctAnswersPerTestround }} von {{ questionsAsked }} Fragen
    richtig beantwortet.
  </h3>
  <div class="buttonDiv">
    <button class="button" @click="reset(), changeRoute('teststart')">
      Wiederholen
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  questionsAsked,
  correctAnswersPerTestround,
  endeTest,
  startTest,
} from "../global";
import { changeRoute } from "../router";

function reset() {
  startTest.value = false;
  endeTest.value = false;
}
</script>

<style lang="scss" scoped>
h2 {
  font-family: "Indie Flower", cursive;
  color: var(--colorYellow);
  text-align: center;
  font-size: 32px;
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black,
    1.5px 1px 2px black;
  margin-bottom: 10vh;
}

h3 {
  font-family: "Indie Flower", cursive;
  color: var(--colorYellow);
  text-align: start;
  padding-left: 15px;
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black,
    1.5px 1px 2px black;
}

.buttonDiv {
  display: flex;
}
.button {
  background-color: var(--colorYellow);
  color: var(--colorBlue);
  font-family: "Indie Flower", cursive;
  border: 2px solid black;
  border-radius: 25px;
  height: 10vh;
  padding: 0 5vw;
  margin: 10vh auto;
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
</style>
