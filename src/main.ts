import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

declare global {
  interface Array<T> {
    shuffle(): T[];
  }
}
Object.defineProperty(Array.prototype, "shuffle", {
  value: function () {
    let shuffelArr = [...this];
    for (let i = 0; i < shuffelArr.length - 1; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffelArr[i], shuffelArr[j]] = [shuffelArr[j], shuffelArr[i]];
    }
    return shuffelArr;
  },
});

createApp(App).mount("#app");
