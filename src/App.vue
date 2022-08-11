<template>
  <header>
    <div class="headDiv">
      <h1>Vokabeltrainer</h1>
      <div class="mooseDiv"><Moose></Moose></div>
    </div>
  </header>
  <nav></nav>
  <main>
    <button class="button">Training</button>
    <button class="button">Test</button>
    <button class="button">Vokabelliste</button>
    <button class="button">Statistik</button>
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import Training from "./components/Training.vue";
import Moose from "./components/Moose.vue";
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

main {
  margin-top: 15vh;
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
  height: 60%;
  width: 100%;
  color: #deff08;
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black,
    1.5px 1px 2px black;
  font-size: min(10vw, 96px);
}

.mooseDiv {
  display: flex;
  height: 40%;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: center;
}

.headDiv {
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100%;
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
  transition: margin-left 300ms, color 300ms, background-color 300ms;

  &:hover,
  &:focus {
    background-color: var(--colorBlue);
    color: #deff08;
    margin-left: 8%;
  }
}

header {
  height: 45vh;
  display: flex;
  align-items: center;
}
</style>
