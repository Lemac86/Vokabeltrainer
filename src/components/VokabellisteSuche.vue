<template>
  <h1 class="notHomeH1">Vokabelliste</h1>
  <div class="textInputDiv">
    <input
      type="text"
      id="inputVok"
      name="&#x1F50D;"
      class="textInput"
      placeholder="&#x1F50D; Vokabel suchen..."
      required
    />
    <button class="searchButton">Suchen</button>
  </div>
  <button
    class="addVokabularyButton"
    @click="changeRoute('vokabellisteHinzufügen')"
  >
    +
  </button>
</template>

<script setup lang="ts">
import { changeRoute } from "../router";
</script>

<style lang="scss" scoped>
.textInputDiv {
  position: relative;
  height: 5vh;
}
.textInput {
  margin-left: 5vw;
  padding: 0px 0px 0px 5vw;
  width: 75vw;
  height: calc(100% - 2px);
  border-radius: 20px;
  background: var(--colorYellow);
  color: var(--colorBlue);
  border: 0.1px solid var(--colorYellow);
  transition: color 500ms, background-color 500ms, border-color 500ms;
  font-family: "Cinzel Decorative", cursive;
  text-align: left;
  transition: all 500ms;
  &:focus {
    color: var(--colorYellow);
    background-color: var(--colorBlue);
    border: 0.1px solid var(--colorYellow);
  }
}

.searchButton {
  position: absolute;
  height: 100%;
  width: 20vw;
  border: 0.1px solid var(--colorYellow);
  border-radius: 0 20px 20px 0;
  font-family: "Cinzel Decorative", cursive;
  background: var(--colorBlue);
  transform: translate(-20vw, 0px);

  margin-right: calc(10vw - 10px);
  color: var(--colorYellow);
  font-family: "Cinzel Decorative", cursive;
  transition: all 500ms;
  &:hover,
  &:focus {
    background-color: var(--colorYellow);
    border-color: var(--colorYellow);
    color: var(--colorBlue);
  }
}

.addVokabularyButton {
  position: absolute;
  display: flex;
  font-size: 100px;
  font-family: "Courier New", Courier, monospace;
  color: var(--colorBlue);
  margin: 0;
  padding: 0;
  top: 80%;
  left: calc(50% - 40px);
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  background-color: var(--colorYellow);
  border: 0.1px solid var(--colorBlue);
  border-radius: 25px;
  transition: background-color 500ms, border-color 500ms, color 200ms,
    transform 500ms;
  &:hover,
  &:focus {
    background-color: var(--colorBlue);
    border-color: var(--colorYellow);
    color: var(--colorYellow);
  }
  &:focus {
    transform: translateY(4px);
  }
}
</style>
