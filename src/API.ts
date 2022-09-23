import { computed, ref } from 'vue';

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
    localStorage.setItem(`storageVocabulary`, JSON.stringify(vocabularyListData.value));

    return true;
  } else {
    return false;
  }
}

export function editVocabulary(vocabulary: Vocabulary) {
  vocabularyListData.value.find(e => e.id === vocabulary.id);
}

export function checkGuess(
  vocabulary: Vocabulary,
  language: 'german' | 'swedish',
  otherLanguage: 'german' | 'swedish',
  checkedAnswer: string,
  correct: number | null
) {
  if (vocabulary) {
    vocabulary[language].timesAsked += 1;
    if (checkedAnswer === vocabulary[otherLanguage].value) {
      correct = 1;
      vocabulary[language].timesCorrect += 1;
    } else {
      correct = 0;
    }
  }
  let checkedVocabulary = vocabularyListData.value.find(e => e.id === vocabulary.id);
  if (checkedVocabulary) checkedVocabulary = vocabulary;
  localStorage.setItem(`storageVocabulary`, JSON.stringify(vocabularyListData.value));
  return correct;
}
