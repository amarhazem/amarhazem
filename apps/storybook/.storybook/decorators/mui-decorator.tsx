import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";
import type { Decorator } from "@storybook/react";
import { theme } from "../theme";

export const withMuiTheme: Decorator = (Story) => (
  <AppRouterCacheProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            overflowY: "auto !important",
            paddingRight: "0 !important",
          },
        }}
      />
      <InitColorSchemeScript attribute="class" />
      <Story />
    </ThemeProvider>
  </AppRouterCacheProvider>
);
