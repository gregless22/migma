import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import auth0 from "./auth";
import axios from "./plugins/axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import atomic from "./plugins/atomic";
import "./assets/tailwind.css";

createApp(App)
  .use(atomic)
  .use(store)
  .use(router)
  .use(axios)
  // .use(auth0)
  .mount("#app");
