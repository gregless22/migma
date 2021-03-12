import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import auth0 from "./auth";
import flat from "./plugins/flatten";
import toast from "vue-dk-toast";
import axios from "./plugins/axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import atomic from "./plugins/atomic";
import "./assets/tailwind.css";

createApp(App)
  .use(atomic)
  .use(store)
  .use(router)
  .use(axios)
  .use(toast)
  .use(flat)
  // .use(auth0)
  .mount("#app");
