import { computed, ref } from 'vue';
import { createToaster } from '@meforma/vue-toaster';

let toaster = createToaster({
  duration: 1500,
  position: 'top',
});

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

export async function fetchVocabularyListData() {
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

export function mutate() {
  for (let e of vocabularyListData.value) {
    e.german.timesAsked = e.german.timesAsked ?? 0;
    e.swedish.timesAsked = e.swedish.timesAsked ?? 0;
    e.german.timesCorrect = e.german.timesCorrect ?? 0;
    e.swedish.timesCorrect = e.swedish.timesCorrect ?? 0;
    e.id = e.id ?? Math.random() + '';
  }
}

export async function addVocabulary(vocabularyInputGerman: string, vocabularyInputSwedish: string) {
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
    let temporaryVocabularyListData = [...vocabularyListData.value];
    temporaryVocabularyListData.push(vocabulary);
    try {
      localStorage.setItem(`storageVocabulary`, JSON.stringify(temporaryVocabularyListData));
      vocabularyListData.value = temporaryVocabularyListData;
      return true;
    } catch (error) {
      toaster.error(`<b>Saving your data is creating an error!</b>`);
      console.error(error);
      return false;
    }
  } else {
    return false;
  }
}

export async function checkGuess(
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
  try {
    localStorage.setItem(`storageVocabulary`, JSON.stringify(vocabularyListData.value));
  } catch (error) {
    toaster.error(`<b>Saving your data is creating an error!</b>`);
    console.error(error);
  }
  return correct;
}

export async function resetStatistics() {
  let temporaryVocabularyListData = JSON.parse(JSON.stringify(vocabularyListData.value));
  for (let e of temporaryVocabularyListData) {
    e.german.timesAsked = 0;
    e.swedish.timesAsked = 0;
    e.german.timesCorrect = 0;
    e.swedish.timesCorrect = 0;
  }
  try {
    localStorage.setItem(`storageVocabulary`, JSON.stringify(temporaryVocabularyListData));
    vocabularyListData.value = temporaryVocabularyListData;
  } catch (error) {
    toaster.error(`<b>Saving your data is creating an error!</b>`);
    console.error(error);
  }
}
