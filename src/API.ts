import { Ref, ref, watchEffect } from "vue";

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

export const vocabularyList = ref<Vocabulary[]>([]);

export function fetchVocabularyList() {
  let importArr = localStorage.getItem(`storageVocabulary`) as string | null;
  if (importArr) {
    if (JSON.parse(importArr) !== null)
      vocabularyList.value = JSON.parse(importArr);
  }
  watchEffect(() =>
    localStorage.setItem(
      `storageVocabulary`,
      JSON.stringify(vocabularyList.value)
    )
  );
}

export function addVocabulary(
  vocabularyInputGerman: string,
  vocabularyInputSwedish: string
) {
  if (
    vocabularyList.value.findIndex(
      (e) => e.german.value === vocabularyInputGerman
    ) === -1
  ) {
    const vocabulary = {
      id: Math.random() + "",
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

    vocabularyList.value.push(vocabulary);

    return true;
  } else {
    return false;
  }
}

export function editVocabulary(vocabulary: Vocabulary) {}
