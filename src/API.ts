import { computed, ref } from 'vue';
import { createToaster } from '@meforma/vue-toaster';
import {
  addDoc,
  AddPrefixToKeys,
  collection,
  doc,
  DocumentData,
  getDocs,
  getFirestore,
  QueryDocumentSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

let toaster = createToaster({
  duration: 1500,
  position: 'top',
});

export type Language = 'german' | 'swedish';

export type Vocabulary = {
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
};

const vocabularyListData = ref<Vocabulary[]>([]);

export const vocabularyList = computed(() => vocabularyListData.value);

export async function fetchVocabularyListData() {
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  const vocabularyCollection = await getDocs(collection(getFirestore(), 'Vokabeln'));
  vocabularyCollection.forEach(doc => {
    docs.push(doc);
  });
  vocabularyListData.value = docs.map(doc => ({ ...doc.data() })) as Vocabulary[];
  //   let importArr = localStorage.getItem(`storageVocabulary`) as string | null;
  //   if (importArr) {
  //     if (JSON.parse(importArr) !== null) vocabularyListData.value = JSON.parse(importArr);
  //   }
}

// watchEffect(() =>
//   localStorage.setItem(
//     `storageVocabulary`,
//     JSON.stringify(vocabularyListData.value)
//   )
// );

// export function mutate() {
//   for (let e of vocabularyListData.value) {
//     e.german.timesAsked = e.german.timesAsked ?? 0;
//     e.swedish.timesAsked = e.swedish.timesAsked ?? 0;
//     e.german.timesCorrect = e.german.timesCorrect ?? 0;
//     e.swedish.timesCorrect = e.swedish.timesCorrect ?? 0;
//     e.id = e.id ?? Math.random() + '';
//   }
// }

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
    try {
      const docRef = await setDoc(doc(getFirestore(), 'Vokabeln', vocabulary.id), vocabulary);
      vocabularyListData.value.push(vocabulary);
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

export async function checkGuess(vocabulary: Vocabulary, language: Language, otherLanguage: 'german' | 'swedish', checkedAnswer: string) {
  let correct: number = 0;
  let temporaryVocabulary: Vocabulary = JSON.parse(JSON.stringify(vocabulary));
  if (temporaryVocabulary) {
    temporaryVocabulary[language].timesAsked += 1;
    if (checkedAnswer === temporaryVocabulary[otherLanguage].value) {
      correct = 1;
      temporaryVocabulary[language].timesCorrect += 1;
    }
    try {
      await updateDoc(doc(getFirestore(), 'Vokabeln', temporaryVocabulary.id), temporaryVocabulary);
    } catch (error) {
      toaster.error(`<b>Checking created an error!</b>`);
      console.error(error);
    }
    fetchVocabularyListData();
  }
  return correct;
}

// export async function resetStatistics() {
//   let temporaryVocabularyListData = JSON.parse(JSON.stringify(vocabularyListData.value));
//   for (let e of temporaryVocabularyListData) {
//     e.german.timesAsked = 0;
//     e.swedish.timesAsked = 0;
//     e.german.timesCorrect = 0;
//     e.swedish.timesCorrect = 0;
//   }
//   try {
//     localStorage.setItem(`storageVocabulary`, JSON.stringify(temporaryVocabularyListData));
//     vocabularyListData.value = temporaryVocabularyListData;
//   } catch (error) {
//     toaster.error(`<b>Saving your data is creating an error!</b>`);
//     console.error(error);
//   }
// }

export async function resetStatistics() {
  let temporaryVocabularyListData = vocabularyList.value;
  try {
    for (let e of temporaryVocabularyListData) {
      e.german.timesAsked = 0;
      e.swedish.timesAsked = 0;
      e.german.timesCorrect = 0;
      e.swedish.timesCorrect = 0;
      await updateDoc(doc(getFirestore(), 'Vokabeln', e.id), e);
    }
    fetchVocabularyListData();
  } catch (error) {
    toaster.error(`<b>Resetting your statistics is creating an error!</b>`);
    console.error(error);
  }
}
