import { App } from "vue";
import axios from "axios";

const BASE_URL = "https://localhost:9000";

export default {
  install: (app: App) => {
    // TODO get the env variables from the container
    const a = axios.create({
      baseURL: BASE_URL,
      timeout: 2000,
      headers: { "X-Custom-Header": "foobar" } // TODO add the user auth
    });

    app.config.globalProperties.$axios = a;
  }
};
