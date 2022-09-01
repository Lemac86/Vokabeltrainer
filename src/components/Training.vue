<template>
  <h1 class="notHomeH1">Training</h1>
  <div class="searchedVokabulary">{{ question }}</div>
  <div class="answerOptions">
    <button
      @click="(selectedButton = index), pushButton()"
      :class="[
        { selected: selectedButton === index },
        { true: correct === 1 && selectedButton === index },
        { false: correct === 0 && selectedButton === index },
      ]"
      :disabled="disableButton"
      v-for="(answer, index) in sortedAnswerArr"
    >
      {{ answer }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref, toRefs } from "vue";
import { vokabularyList } from "../getLocalStorage";

const disableButton = ref(false);
const props = defineProps<{
  language: "german" | "swedish";
}>();
const { language } = toRefs(props);

const swedishMeaning = ref("");
const germanMeaning = ref("");
const swedishWrong1 = ref("");
const germanWrong1 = ref("");
const swedishWrong2 = ref("");
const germanWrong2 = ref("");

const question = ref("");
const rightAnswer = ref("");
const wrongAnswer1 = ref("");
const wrongAnswer2 = ref("");
const answerArr = ref<string[]>([]);
const sortedAnswerArr = ref<string[]>([]);
const selectedButton = ref<number | null>(null);
const correct = ref<number | null>(null);

function getSearchedForVokabulary() {
  let i = Math.floor(Math.random() * vokabularyList.value.length);
  germanMeaning.value = vokabularyList.value[i].german;
  swedishMeaning.value = vokabularyList.value[i].swedish;
  let j, k;
  do {
    j = Math.floor(Math.random() * vokabularyList.value.length);
    germanWrong1.value = vokabularyList.value[j].german;
    swedishWrong1.value = vokabularyList.value[j].swedish;
    k = Math.floor(Math.random() * vokabularyList.value.length);
    germanWrong2.value = vokabularyList.value[k].german;
    swedishWrong2.value = vokabularyList.value[k].swedish;
  } while (i === j || i === k || j === k);

  if (language.value === "german") {
    console.log(
      vokabularyList.value[i].timesAskedGerman,
      vokabularyList.value[i]
    );
    vokabularyList.value[i].timesAskedGerman += 1;

    question.value = germanMeaning.value;
    rightAnswer.value = swedishMeaning.value;
    wrongAnswer1.value = swedishWrong1.value;
    wrongAnswer2.value = swedishWrong2.value;
  } else {
    console.log(
      vokabularyList.value[i].timesAskedSwedish,
      vokabularyList.value[i]
    );
    vokabularyList.value[i].timesAskedSwedish += 1;

    question.value = swedishMeaning.value;
    rightAnswer.value = germanMeaning.value;
    wrongAnswer1.value = germanWrong1.value;
    wrongAnswer2.value = germanWrong2.value;
  }
  answerArr.value = [];
  answerArr.value.push(
    rightAnswer.value,
    wrongAnswer1.value,
    wrongAnswer2.value
  );
  sortedAnswerArr.value = [...answerArr.value].sort();
}

getSearchedForVokabulary();

function pushButton() {
  if (
    selectedButton.value !== null &&
    sortedAnswerArr.value[selectedButton.value] === rightAnswer.value
  ) {
    correct.value = 1;
    let correctVokabulary = vokabularyList.value.find(
      (e) => e.german === germanMeaning.value
    );
    if (language.value === "german" && correctVokabulary) {
      correctVokabulary.timesCorrectGerman += 1;
    } else if (language.value === "swedish" && correctVokabulary) {
      correctVokabulary.timesCorrectSwedish += 1;
    }
  } else {
    correct.value = 0;
  }
  disableButton.value = true;
  setTimeout(() => {
    getSearchedForVokabulary();
    disableButton.value = false;
    selectedButton.value = null;
    correct.value = null;
  }, 1200);
}
</script>

<style lang="scss" scoped>
.searchedVokabulary {
  padding: 8px 0;
  margin: 2vh auto;
  width: 70vw;
  text-align: center;
  background-color: var(--colorYellow);
  color: var(--colorBlue);
  font-family: "Indie Flower", cursive;
  font-weight: 700;
  font-size: 8vw;
  border: 0.1px solid var(--colorBlue);
  border-radius: 15px;
}

.answerOptions {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  padding: 5px 0;
  margin: 8vh auto;
  height: 40vh;
  background-color: var(--colorBlue);
  width: 70vw;
}

button {
  background-color: var(--colorBlue);
  color: var(--colorYellow);
  border: 2px solid var(--colorYellow);
  border-radius: 15px;
  font-size: 8vw;
  font-family: "Indie Flower", cursive;
  padding: 8px;
  box-shadow: 1px 3px 10px;
  transition: all 100ms;
}
.selected {
  transform: translateY(2px);
}
.true {
  background-color: rgb(22, 112, 22);
}

.false {
  background-color: rgb(163, 22, 22);
}
</style>
