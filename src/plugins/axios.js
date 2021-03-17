// import { App } from "vue";
import axios from "axios";

const BASE_URL = "http://localhost:9010";

// declare module "@vue/runtime-core" {
//   export interface ComponentCustomProperties {
//     $axios: typeof axios;
//   }
// }

export default {
  install: app => {
    // TODO get the env variables from the container
    // let headers = new HttpHeaders({
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Headers": "Content-Type",
    //   "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
    //   Authorization: "Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3"
    // });

    const a = axios.create({
      baseURL: BASE_URL,
      timeout: 2000
      // headers: {
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT"
      //   // Authorization: "Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3"
      // } // TODO add the user auth
    });
    app.config.globalProperties.$axios = a;
    // app.provide("axios", );
    // app.config.globalProperties.$test = (): string => {
    //   return "hello plugin";
    // };
  }
};
