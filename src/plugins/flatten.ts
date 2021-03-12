import { App } from "vue";
import flatten from "flat";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $flat: typeof flatten;
  }
}

export default {
  install: (app: App) => {
    app.config.globalProperties.$flat = {
      flatten: (obj: unknown) => {
        return flatten(obj);
      },
      unflatten: (obj: unknown) => {
        return flatten.unflatten(obj);
      }
    };
  }
};
