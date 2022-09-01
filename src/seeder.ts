import { vokabularyList } from "./getLocalStorage";

export function mutate() {
  for (let e of vokabularyList.value) {
    e["timesAskedGerman"] = e["timesAskedGerman"] ?? 0;
    e["timesAskedSwedish"] = e["timesAskedSwedish"] ?? 0;
    e["timesCorrectGerman"] = e["timesCorrectGerman"] ?? 0;
    e["timesCorrectSwedish"] = e["timesCorrectSwedish"] ?? 0;
  }
}
