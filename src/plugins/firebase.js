import firebase from "firebase";
// import 'firebase/analytics'
// TODO delete the analytics as it wont be necessary
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjU5h1PASgnfcEYx6Tn5FSCPyzwsXLm-U",
  authDomain: "iplant-a019b.firebaseapp.com",
  projectId: "iplant-a019b",
  storageBucket: "iplant-a019b.appspot.com",
  messagingSenderId: "802643182009",
  appId: "1:802643182009:web:8b8e219bcfc15348503668",
  measurementId: "G-N5FX2W0FLN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// declare module "@vue/runtime-core" {
//   export interface ComponentCustomProperties {
//     // $storage: typeof firebase.storage.Storage;
//     $auth: typeof Auth;
//   }
// }

export default {
  install: app => {
    app.config.globalProperties.$auth = firebaseApp.auth();
    app.config.globalProperties.$storage = firebaseApp.storage();
  }
};
