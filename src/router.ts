import { Ref, ref } from "vue";

export const state = ref<State>({
  route: "home",
});

interface State {
  route:
    | "home"
    | "test"
    | "trainingStart"
    | "training"
    | "statistik"
    | "vokabellisteSuche"
    | "vokabellisteHinzufügen";
}

export function changeRoute(stateRoute: State["route"]) {
  setTimeout(() => (state.value.route = stateRoute), 500);
}
