import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme, darkTheme } from "./theme";
import type { ReactNode } from "react";

interface ThemeWrapperProps {
  children: ReactNode;
  mode?: "light" | "dark";
}

export function ThemeWrapper({ children, mode = "light" }: ThemeWrapperProps) {
  const selectedTheme = mode === "dark" ? darkTheme : theme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export { theme, darkTheme };
export { ThemeProvider, CssBaseline };
