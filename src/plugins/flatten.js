import flatten from "flat";

// declare module "@vue/runtime-core" {
//   export interface ComponentCustomProperties {
//     $flat: typeof flatten;
//   }
// }

export default {
  install: app => {
    app.config.globalProperties.$flat = {
      flatten: obj => {
        return flatten(obj);
      },
      unflatten: obj => {
        return flatten.unflatten(obj);
      }
    };
  }
};
