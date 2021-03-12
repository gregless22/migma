import { App } from "vue";
import rfdc from "rfdc";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $clone: typeof undefined;
  }
}

export default {
  install: (app: App) => {
    const cloner = rfdc();
    const c = (sheep: Record<string, unknown>): Record<string, unknown> =>
      cloner(sheep);
    app.config.globalProperties.$clone = c;
  }
};
