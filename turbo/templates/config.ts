import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("app", {
    actions: [
      {
        type: "addMany",
        destination: "apps/{{name}}",
        base: "templates/app",
        templateFiles: "templates/app/**/*",
      },
    ],
    description: "Creates a new app",
    prompts: [
      {
        message: "What is the name of your app?",
        name: "name",
        type: "input",
      },
    ],
  });

  plop.setGenerator("package", {
    actions: [
      {
        type: "addMany",
        destination: "packages/{{name}}",
        base: "templates/package",
        templateFiles: "templates/package/**/*",
      },
    ],
    description: "Creates a new package",
    prompts: [
      {
        message: "What is the name of your package?",
        name: "name",
        type: "input",
      },
    ],
  });

  plop.setGenerator("service", {
    actions: [
      {
        type: "addMany",
        destination: "services/{{name}}",
        base: "templates/service",
        templateFiles: "templates/service/**/*",
      },
    ],
    description: "Creates a new service",
    prompts: [
      {
        message: "What is the name of your service?",
        name: "name",
        type: "input",
      },
    ],
  });
}
