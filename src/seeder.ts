import { vocabularyList } from "./API";

export function mutate() {
  for (let e of vocabularyList.value) {
    e.german.timesAsked = e.german.timesAsked ?? 0;
    e.swedish.timesAsked = e.swedish.timesAsked ?? 0;
    e.german.timesCorrect = e.german.timesCorrect ?? 0;
    e.swedish.timesCorrect = e.swedish.timesCorrect ?? 0;
  }
}
