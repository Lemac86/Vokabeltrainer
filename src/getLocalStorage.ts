import { Ref, ref, watchEffect } from "vue";

export interface Vocabulary {
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
