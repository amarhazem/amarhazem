import type { StorybookConfig } from "@storybook/nextjs-vite";
import { dirname, join } from "path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

export default {
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs-vite"),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  staticDirs: ["../public"],
  stories: ["../../../packages/blocks/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
} as StorybookConfig;
