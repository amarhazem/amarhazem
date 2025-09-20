import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  appleWebApp: {
    title: "Amar Hazem",
  },
  applicationName: "Amar Hazem",
  description: "Amar Hazem",
  generator: "Next.js",
  metadataBase: new URL("https://docs.amarhazem.com"),
  other: {
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-TileColor": "#fff",
  },
  title: {
    absolute: "Amar Hazem",
    template: "%s - Amar Hazem",
  },
  twitter: {
    site: "https://docs.amarhazem.com",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({
  children,
}: RootLayoutProps): Promise<ReactNode> {
  return (
    <html dir="ltr" lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          // banner={<Banner storageKey="banner">Banner</Banner>}
          docsRepositoryBase="https://github.com/amarhazem/amarhazem/tree/main/apps/docs"
          footer={
            <Footer>MIT {new Date().getFullYear()} © Amar Hazem.</Footer>
          }
          navbar={
            <Navbar
              chatLink="https://discord.com/channels/832695688013938759/832695688013938762"
              logo={<b>Amar Hazem</b>}
              projectLink="https://github.com/amarhazem/amarhazem"
            />
          }
          pageMap={await getPageMap()}
          search={<Search />}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
