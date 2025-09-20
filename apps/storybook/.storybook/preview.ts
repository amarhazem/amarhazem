import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/nextjs-vite";
import { theme } from "./theme";

export const decorators = [
  withThemeFromJSXProvider({
    defaultTheme: "light",
    GlobalStyles: CssBaseline,
    Provider: ThemeProvider,
    themes: {
      light: theme,
      dark: theme,
    },
  }),
];

export default {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} as Preview;
