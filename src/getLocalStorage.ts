import { Ref, ref, watchEffect } from "vue";

export interface Vocabulary {
  timesAskedGerman: number;
  timesAskedSwedish: number;
  timesCorrectGerman: number;
  timesCorrectSwedish: number;
  german: string;
  swedish: string;
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
