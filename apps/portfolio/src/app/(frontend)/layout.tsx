import Account from "@/components/account/account";
import Apps from "@/components/apps/apps";
import SocialNetworks from "@/components/social-networks/social-networks";
import { theme } from "@/utils/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  description: "Amar Hazem | Full Stack Engineer",
  title: "Amar Hazem | Full Stack Engineer",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({
  children,
}: RootLayoutProps): Promise<ReactNode> {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Analytics />
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
            <SpeedInsights />
            <AppBar position="sticky">
              <Toolbar sx={{ alignItems: "stretch" }}>
                <Button
                  color="inherit"
                  href="/"
                  sx={{ fontSize: "1.5rem", textWrap: "nowrap" }}
                >
                  Amar Hazem
                </Button>
                <Box sx={{ flexGrow: 1 }} />
                <SocialNetworks />
                <Apps />
                <Account />
              </Toolbar>
            </AppBar>
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
