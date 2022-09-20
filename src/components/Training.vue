<template>
  <div class="searchedVocabulary">
    {{ rightVocabulary?.[language].value }}
  </div>
  <div class="answerOptions">
    <button
      @click="(selectedButton = index), pushButton()"
      :class="[
        { selected: selectedButton === index },
        {
          true:
            correct !== null &&
            answer === rightVocabulary?.[otherLanguage].value,
        },
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
import { ref, toRefs } from "vue";
import { vocabularyList, Vocabulary } from "../API";

const disableButton = ref(false);
const props = defineProps<{
  language: "german" | "swedish";
}>();
const { language } = toRefs(props);

let otherLanguage: "german" | "swedish" = "german";
if (language.value === "german") {
  otherLanguage = "swedish";
} else {
  otherLanguage = "german";
}

const answerArr = ref<string[]>([]);
const sortedAnswerArr = ref<string[]>([]);
const selectedButton = ref<number | null>(null);
const correct = ref<number | null>(null);

const rightVocabulary = ref<Vocabulary>();
const wrongVocabulary1 = ref<Vocabulary>();
const wrongVocabulary2 = ref<Vocabulary>();

function getSearchedForVocabulary() {
  rightVocabulary.value =
    vocabularyList.value[
      Math.floor(Math.random() * vocabularyList.value.length)
    ];
  do {
    wrongVocabulary1.value =
      vocabularyList.value[
        Math.floor(Math.random() * vocabularyList.value.length)
      ];
    wrongVocabulary2.value =
      vocabularyList.value[
        Math.floor(Math.random() * vocabularyList.value.length)
      ];
  } while (
    rightVocabulary.value.german.value ===
      wrongVocabulary1.value.german.value ||
    rightVocabulary.value.german.value ===
      wrongVocabulary2.value.german.value ||
    wrongVocabulary1.value.german.value === wrongVocabulary2.value.german.value
  );

  answerArr.value = [];
  answerArr.value.push(
    rightVocabulary.value[otherLanguage].value,
    wrongVocabulary1.value[otherLanguage].value,
    wrongVocabulary2.value[otherLanguage].value
  );
  sortedAnswerArr.value = answerArr.value.shuffle();
}

getSearchedForVocabulary();

function pushButton() {
  if (rightVocabulary.value) {
    rightVocabulary.value[language.value].timesAsked += 1;
    if (
      selectedButton.value !== null &&
      sortedAnswerArr.value[selectedButton.value] ===
        rightVocabulary.value[otherLanguage].value
    ) {
      correct.value = 1;
      rightVocabulary.value[language.value].timesCorrect += 1;
    } else {
      correct.value = 0;
    }
  }

  disableButton.value = true;
  setTimeout(() => {
    getSearchedForVocabulary();
    disableButton.value = false;
    selectedButton.value = null;
    correct.value = null;
  }, 1200);
}

// richtige Antwort anzeigen lassen!
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
