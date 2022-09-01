<template>
  <h1 class="notHomeH1">Statistik</h1>
  <h2>
    Du hast insgesamt
    {{ germanVokabularyAsked + swedishVokabularyAsked }} Vokabeln beantwortet
  </h2>
  <h2>Du hast {{ germanVokabularyAsked }} deutsche Vokabeln beantwortet</h2>
  <h2>Du hast {{ swedishVokabularyAsked }} schwedische Vokabeln beantwortet</h2>
  <h2>
    Du lagst dabei insgesamt
    {{ germanVokabularyCorrect + swedishVokabularyCorrect }} Mal richtig und
    {{
      germanVokabularyAsked -
      germanVokabularyCorrect +
      (swedishVokabularyAsked - swedishVokabularyCorrect)
    }}
    Mal falsch
  </h2>
  <h2>
    Davon lagst du bei den deutschen Vokabeln {{ germanVokabularyCorrect }} Mal
    richtig und {{ germanVokabularyAsked - germanVokabularyCorrect }} Mal falsch
  </h2>
  <h2>
    Davon lagst du bei den schwedischen Vokabeln
    {{ swedishVokabularyCorrect }} Mal richtig und
    {{ swedishVokabularyAsked - swedishVokabularyCorrect }} Mal falsch
  </h2>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { vokabularyList } from "../getLocalStorage";

const germanVokabularyAsked = computed(() =>
  vokabularyList.value.reduce((x, y) => x + y.timesAskedGerman, 0)
);
const swedishVokabularyAsked = computed(() =>
  vokabularyList.value.reduce((x, y) => x + y.timesAskedSwedish, 0)
);
const germanVokabularyCorrect = computed(() =>
  vokabularyList.value.reduce((x, y) => x + y.timesCorrectGerman, 0)
);
const swedishVokabularyCorrect = computed(() =>
  vokabularyList.value.reduce((x, y) => x + y.timesCorrectSwedish, 0)
);
</script>
<style lang="scss" scoped></style>
