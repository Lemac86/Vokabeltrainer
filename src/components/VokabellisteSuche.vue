<template>
  <h1 class="notHomeH1">Vokabelliste</h1>
  <div class="textInputDiv">
    <input
      type="text"
      id="inputVok"
      class="textInput"
      placeholder="🔍 Vokabel suchen..."
      required
      v-model="searchQuery"
    />
  </div>
  <div class="vokabularyList">
    <div class="vokabularyListHeadline">
      <span>Deutsch</span><span>Schwedisch</span>
    </div>
    <hr />
    <div class="vokabularyListWrap">
      <div class="vokabularyListGrid">
        <template v-for="element of filteredList" :key="element.german">
          <span class="span">{{ `${element.german}` }}</span>
          <span class="span">{{ `${element.swedish}` }}</span>
        </template>
      </div>
    </div>
  </div>
  <button
    class="addVokabularyButton"
    @click="changeRoute('vokabellisteHinzufügen')"
  >
    +
  </button>
</template>

<script setup lang="ts">
import { ref, readonly, computed } from "vue";
import { changeRoute } from "../router";
import { vokabularyList } from "../getLocalStorage";

const searchQuery = ref("");
const filteredList = computed(() =>
  vokabularyList.value.filter(
    (e) =>
      e.german.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      e.swedish.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const vokabularyInputGerman = ref("");
const vokabularyInputSwedish = ref("");
</script>

<style lang="scss" scoped>
.vokabularyListWrap {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 90%;
  flex: 1;
}

hr {
  margin: 5px 0 0 0;
}
.textInputDiv {
  position: relative;
  height: 5vh;
}
.textInput {
  margin-left: 5vw;
  padding: 0px 0px 0px 5vw;
  width: 77vw;
  height: calc(100% - 2px);
  border-radius: 20px;
  background: var(--colorYellow);
  color: var(--colorBlue);
  border: 0.1px solid var(--colorYellow);
  transition: color 500ms, background-color 500ms, border-color 500ms;
  font-family: "Indie Flower", cursive;
  text-align: left;
  transition: all 500ms;
  &:focus {
    color: var(--colorYellow);
    background-color: var(--colorBlue);
    border: 0.1px solid var(--colorYellow);
  }
}

.addVokabularyButton {
  position: absolute;
  display: flex;
  font-size: 100px;
  font-family: "Courier New", Courier, monospace;
  color: var(--colorBlue);
  top: 82%;
  left: calc(50% - 30px);
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

.vokabularyListHeadline {
  display: flex;
  justify-content: space-evenly;
  padding-top: 2vw;
  // padding-left: 8vw;
  font-size: 14px;
  font-weight: 700;
}
.vokabularyListGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px 10px;
  padding: 5px;
}

// ul {
//   list-style: none;
//   margin: 0;
//   padding-top: 5px;
//   padding-left: 22px;
//   padding-right: 5px;
// }
.vokabularyList {
  width: calc(100% - 30px);
  height: 42vh;
  margin-top: 25px;
  margin-left: 15px;
  margin-right: 15px;
  font-family: "Indie Flower", cursive;
  color: var(--colorBlue);
  text-align: center;
  font-size: 12px;
  background-color: var(--colorYellow);
  border: 0.1px solid var(--colorBlue);
  border-radius: 15px;
}

.span {
  overflow-x: hidden;
}
</style>
