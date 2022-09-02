<template>
  <div class="searchedVocabulary">{{ question }}</div>
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
import { vocabularyList, Vocabulary } from "../getLocalStorage";

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

const rightAnswer = ref("");
const answerArr = ref<string[]>([]);
const sortedAnswerArr = ref<string[]>([]);
const selectedButton = ref<number | null>(null);
const correct = ref<number | null>(null);

const question = ref<Vocabulary>();
const wrongAnswer1 = ref<Vocabulary>();
const wrongAnswer2 = ref<Vocabulary>();

function getSearchedForVocabulary() {
  question.value =
    vocabularyList.value[
      Math.floor(Math.random() * vocabularyList.value.length)
    ];
  let j, k;
  do {
    j = Math.floor(Math.random() * vocabularyList.value.length);
    germanWrong1.value = vocabularyList.value[j].german;
    swedishWrong1.value = vocabularyList.value[j].swedish;
    k = Math.floor(Math.random() * vocabularyList.value.length);
    germanWrong2.value = vocabularyList.value[k].german;
    swedishWrong2.value = vocabularyList.value[k].swedish;
  } while (i === j || i === k || j === k);

  if (language.value === "german") {
    question.value = germanMeaning.value;
    rightAnswer.value = swedishMeaning.value;
    wrongAnswer1.value = swedishWrong1.value;
    wrongAnswer2.value = swedishWrong2.value;
  } else {
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

getSearchedForVocabulary();

function pushButton() {
  let thisVocabulary = vocabularyList.value.find(
    (e) => e.german === germanMeaning.value
  );
  if (language.value === "german" && thisVocabulary) {
    thisVocabulary.timesAskedGerman += 1;
  }
  if (language.value === "swedish" && thisVocabulary) {
    thisVocabulary.timesAskedSwedish += 1;
  }
  if (
    selectedButton.value !== null &&
    sortedAnswerArr.value[selectedButton.value] === rightAnswer.value
  ) {
    correct.value = 1;
    if (language.value === "german" && thisVocabulary) {
      thisVocabulary.timesCorrectGerman += 1;
    } else if (language.value === "swedish" && thisVocabulary) {
      thisVocabulary.timesCorrectSwedish += 1;
    }
  } else {
    correct.value = 0;
  }
  disableButton.value = true;
  setTimeout(() => {
    getSearchedForVocabulary();
    disableButton.value = false;
    selectedButton.value = null;
    correct.value = null;
  }, 1200);
}
</script>

<style lang="scss" scoped>
.searchedVocabulary {
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
