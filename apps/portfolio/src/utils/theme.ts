"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D21DF7",
    },
    secondary: {
      main: "#1F6CF7",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
