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
  <button class="addVokabularyButton">
    <span class="addButtonText" @click="changeRoute('vokabellisteHinzufügen')"
      >+</span
    >
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
  margin-left: calc(10vw - 10px);
  width: 80vw;
  height: 100%;
  border-radius: 20px;
  background: var(--colorYellow);
  color: var(--colorBlue);
  border: 0.1px solid var(--colorBlue);
  transition: color 500ms, background-color 500ms, border-color 500ms;
  font-family: "Cinzel Decorative", cursive;
  text-align: center;
  &:focus {
    color: var(--colorYellow);
    background-color: var(--colorBlue);
    border: 0.1px solid var(--colorYellow);
  }
}

.searchButton {
  position: absolute;
  height: 100%;
  width: 15vw;
  border-radius: 20px;
  font-family: "Cinzel Decorative", cursive;
  background: var(--colorBlue);
  transform: translateX(calc(-15vh - 10px));

  margin-right: calc(10vw - 10px);
  color: var(--colorYellow);
  font-family: "Cinzel Decorative", cursive;
}

.addVokabularyButton {
  position: relative;
  margin: 0;
  padding: 0;
  top: 40%;
  left: calc(50% - 40px);
  justify-content: end;
  align-items: flex-end;
  height: 80px;
  width: 80px;
  background-color: var(--colorYellow);
  border-radius: 10px;
}

.addButtonText {
  font-size: 120px;
  font-family: "Courier New", Courier, monospace;
  color: var(--colorBlue);
  position: absolute;
  margin: 0;
  padding: 0;
  transform: translate(-36px, -65px);
}
</style>
