<template>
  <header>
    <h1>Vokabeltrainer</h1>
    <div class="mooseDiv"><img src="/moose.png" alt="Moose" /></div>
  </header>
  <nav></nav>
  <main>
    <button class="button" @click="changeRoute('trainingStart')">
      Training
    </button>
    <button class="button" @click="changeRoute('test')">Test</button>
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

<style lang="scss">
main {
  margin-top: 15vh;
}

img {
  //   width: 100%;
  max-height: 100%;
  object-fit: contain;
  aspect-ratio: 1/1;
}

h1 {
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
  color: #deff08;
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black,
    1.5px 1px 2px black;
  font-size: min(8vw, 80px);
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
  padding: 0;
}

.button {
  font-family: "Cinzel Decorative", cursive;
  background-color: #deff08;
  color: var(--colorBlue);
  border: 1px solid black;
  box-shadow: 1.2px 1px 1px black;
  border-radius: 10px 10px 40px 40px;
  width: 80%;
  height: 5vh;
  margin: 5px 10%;
  font-size: 3vh;
  cursor: pointer;
  transition: margin-left 500ms, color 500ms, background-color 500ms;

  &:hover,
  &:focus {
    background-color: var(--colorBlue);
    color: #deff08;
    margin-left: 8%;
  }
}
</style>
