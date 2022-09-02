<template>
  <header>
    <h1 class="homeH1">Vokabeltrainer</h1>
    <div class="mooseDiv">
      <img src="/moose.png" alt="Moose" class="mooseImg" />
    </div>
  </header>
  <nav></nav>
  <main>
    <button class="button" @click="changeRoute('trainingStart')">
      Training
    </button>
    <button class="button" @click="changeRoute('teststart')">Test</button>
    <button class="button" @click="changeRoute('vokabellisteSuche')">
      Vokabelliste
    </button>
    <button class="button" @click="changeRoute('statistik')">Statistik</button>
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import { changeRoute } from "../router";
</script>

<style lang="scss" scoped>
main {
  margin-top: 15vh;
}

.mooseDiv {
  display: flex;
  height: 50%;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
}

header {
  height: 45vh;
}

.button {
  font-family: "Cinzel Decorative", cursive;
  background-color: var(--colorYellow);
  color: var(--colorBlue);
  border: 0.1px solid var(--colorBlue);
  border-radius: 10px 10px 40px 40px;
  width: 80%;
  height: 5vh;
  margin: 5px 10%;
  font-size: 3vh;
  cursor: pointer;
  transition: margin-left 500ms, color 500ms, background-color 500ms,
    transform 100ms;

  &:hover,
  &:focus {
    border-color: var(--colorYellow);
    background-color: var(--colorBlue);
    color: var(--colorYellow);
    margin-left: 7%;
  }
}
</style>
