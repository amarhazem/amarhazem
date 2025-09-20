import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import env from "@/utils/env";
import payload from "@/utils/payload";
import { theme } from "@/utils/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  description: "Amar Hazem | Full Stack Engineer",
  metadataBase: new URL(env.APP_URL),
  openGraph: {
    description: "Amar Hazem | Full Stack Engineer",
    images: [
      {
        alt: "Amar Hazem | Full Stack Engineer",
        height: 180,
        url: "/opengraph-image.png",
        width: 180,
      },
    ],
    title: "Amar Hazem | Full Stack Engineer",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
      noimageindex: false,
    },
  },
  title: "Amar Hazem | Full Stack Engineer",
  twitter: {
    card: "summary_large_image",
    description: "Amar Hazem | Full Stack Engineer",
    images: ["/twitter-image.png"],
    title: "Amar Hazem | Full Stack Engineer",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({
  children,
}: RootLayoutProps): Promise<ReactNode> {
  const language = await getLocale();
  const footerData = await payload.findGlobal({
    locale: language as "en" | "fr" | "ja",
    slug: "footer",
  });
  const headerData = await payload.findGlobal({
    locale: language as "en" | "fr" | "ja",
    slug: "header",
  });
  const shouldInjectToolbar = env.NODE_ENV === "development";

  return (
    <html lang={language} suppressHydrationWarning>
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
            {shouldInjectToolbar && <VercelToolbar />}
            <Header headerData={headerData} />
            <Box
              component="main"
              sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              {children}
            </Box>
            <Footer footerData={footerData} />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
