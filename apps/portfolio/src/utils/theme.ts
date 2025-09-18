"use client";

import { createTheme, type Theme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

// Palette commune
const commonPalette = {
  primary: {
    main: "#D21DF7",
  },
  secondary: {
    main: "#1F6CF7",
  },
};

export const theme: Theme = createTheme({
  colorSchemes: {
    light: {
      palette: commonPalette,
    },
    dark: {
      palette: commonPalette,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }: any): any => ({
          zIndex: theme.zIndex.drawer + 1,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
    MuiIconButton: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
