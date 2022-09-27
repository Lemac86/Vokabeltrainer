import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

declare global {
  interface Array<T> {
    shuffle(): T[];
  }
}
Object.defineProperty(Array.prototype, 'shuffle', {
  value: function () {
    let shuffelArr = [...this];
    for (let i = 0; i < shuffelArr.length - 1; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffelArr[i], shuffelArr[j]] = [shuffelArr[j], shuffelArr[i]];
    }
    return shuffelArr;
  },
});

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCYo7DrxX840sDbRKv0jJYg7LwLIf9imQ',
  authDomain: 'vokabeltrainer-43fe7.firebaseapp.com',
  projectId: 'vokabeltrainer-43fe7',
  storageBucket: 'vokabeltrainer-43fe7.appspot.com',
  messagingSenderId: '281835588906',
  appId: '1:281835588906:web:303aa72d9836e4a63e6253',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).mount('#app');
