// Create a simple Vue plugin to expose the wrapper object throughout the application
import { App } from "vue";

const toKebabCase = (str: string | undefined) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map(x => x.toLowerCase())
    .join("-");

export default {
  install: (app: App) => {
    const requireComponent = require.context(
      // The relative path of the components folder
      "@/components",
      // Whether or not to look in subfolders
      true,
      // The regular expression used to match base component filenames
      /(atoms|molecules|organisms|templates)\/[A-Z]\w+\.(vue|js)$/
    );

    requireComponent.keys().forEach((fileName: string) => {
      // Get component config
      const componentConfig = requireComponent(fileName);

      // Get PascalCase name of component
      const component = fileName.split("/");

      const componentName = component.pop()?.replace(/\.\w+$/, "");
      const componentType = component.pop();

      //   // Register component globally
      app.component(
        toKebabCase(
          `${componentType?.split("")[0].toUpperCase()} ${componentName}`
        ) || "error",
        componentConfig.default || componentConfig
      );
    });
  }
};
