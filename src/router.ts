import { Ref, ref } from "vue";

export const state = ref<State>({
  route: "home",
});

interface State {
  route:
    | "home"
    | "teststart"
    | "trainingStart"
    | "statistik"
    | "vokabellisteSuche"
    | "vokabellisteHinzufügen";
}
/**
 *
 * @param stateRoute route to be changed to
 */
export function changeRoute(stateRoute: State["route"]) {
  setTimeout(() => (state.value.route = stateRoute), 500);
}
