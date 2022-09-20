import { computed, ref, watchEffect } from 'vue';

export interface Vocabulary {
  id: string;
  german: {
    timesAsked: number;
    timesCorrect: number;
    value: string;
  };
  swedish: {
    timesAsked: number;
    timesCorrect: number;
    value: string;
  };
}

const vocabularyListData = ref<Vocabulary[]>([]);

export const vocabularyList = computed(() => vocabularyListData.value);

export function fetchVocabularyListData() {
  let importArr = localStorage.getItem(`storageVocabulary`) as string | null;
  if (importArr) {
    if (JSON.parse(importArr) !== null) vocabularyListData.value = JSON.parse(importArr);
  }
  // watchEffect(() =>
  //   localStorage.setItem(
  //     `storageVocabulary`,
  //     JSON.stringify(vocabularyListData.value)
  //   )
  // );
}

export function addVocabulary(vocabularyInputGerman: string, vocabularyInputSwedish: string) {
  if (vocabularyListData.value.findIndex(e => e.german.value === vocabularyInputGerman) === -1) {
    const vocabulary = {
      id: Math.random() + '',
      german: {
        timesAsked: 0,
        timesCorrect: 0,
        value: vocabularyInputGerman,
      },
      swedish: {
        timesAsked: 0,
        timesCorrect: 0,
        value: vocabularyInputSwedish,
      },
    };

    vocabularyListData.value.push(vocabulary);

    return true;
  } else {
    return false;
  }
}

export function editVocabulary(vocabulary: Vocabulary) {
  localStorage.setItem(`storageVocabulary`, JSON.stringify(vocabularyListData.value));

  vocabularyListData.value.find(e => e.id === vocabulary.id);
}

export function checkGuess(
  vocabulary: Vocabulary,
  language: 'german' | 'swedish',
  otherLanguage: 'german' | 'swedish',
  selectedButton: number | null,
  correct: number | null,
  sortedAnswerArr: string[]
) {
  if (vocabulary) {
    vocabulary[language].timesAsked += 1;
    if (selectedButton !== null && sortedAnswerArr[selectedButton] === vocabulary[otherLanguage].value) {
      correct = 1;
      vocabulary[language].timesCorrect += 1;
    } else {
      correct = 0;
    }
  }
}
