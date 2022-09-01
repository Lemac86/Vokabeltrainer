import { Ref, ref, watchEffect } from "vue";

interface Vokabulary {
  timesAskedGerman: number;
  timesAskedSwedish: number;
  timesCorrectGerman: number;
  timesCorrectSwedish: number;
  german: string;
  swedish: string;
}

export const vokabularyList = ref<Vokabulary[]>([]);

export function fetchVokabularyList() {
  let importArr = localStorage.getItem(`storageVokabulary`) as string | null;
  if (importArr) {
    if (JSON.parse(importArr) !== null)
      vokabularyList.value = JSON.parse(importArr);
  }
  watchEffect(() =>
    localStorage.setItem(
      `storageVokabulary`,
      JSON.stringify(vokabularyList.value)
    )
  );
}
