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
        <main>{children}</main>
      </body>
    </html>
  );
}
