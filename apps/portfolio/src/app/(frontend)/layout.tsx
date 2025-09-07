import { theme } from "@/utils/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { type ReactNode } from "react";

export const metadata = {
  description: "Amar Hazem | Full Stack Developer",
  title: "Amar Hazem | Full Stack Developer",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({
  children,
}: RootLayoutProps): Promise<ReactNode> {
  return (
    <html lang="en">
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
            <SpeedInsights />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
