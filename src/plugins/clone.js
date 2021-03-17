import rfdc from "rfdc";

// declare module "@vue/runtime-core" {
//   export interface ComponentCustomProperties {
//     $clone: typeof undefined;
//   }
// }

export default {
  install: app => {
    const cloner = rfdc();
    const c = sheep => cloner(sheep);
    app.config.globalProperties.$clone = c;
  }
};
