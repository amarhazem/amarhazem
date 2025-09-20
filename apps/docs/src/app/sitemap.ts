import fs from "fs";
import type { MetadataRoute } from "next";
import path from "path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://docs.amarhazem.com";

  try {
    const pagesDir = path.join(process.cwd(), "src/app");
    const sitemapEntries: MetadataRoute.Sitemap = [];

    const scanDirectory = (dir: string, route = ""): void => {
      const items = fs.readdirSync(dir, { withFileTypes: true });

      items.forEach((item) => {
        if (item.isDirectory() && !item.name.startsWith("_")) {
          const newRoute = `${route}/${item.name}`;
          scanDirectory(path.join(dir, item.name), newRoute);
        } else if (
          item.isFile() &&
          (item.name === "page.mdx" || item.name === "page.tsx")
        ) {
          const url = `${baseUrl}${route}`;
          const priority = route === "" ? 1 : 0.8;
          const changeFrequency = route === "" ? "weekly" : "monthly";

          sitemapEntries.push({
            url,
            lastModified: new Date(),
            changeFrequency: changeFrequency as any,
            priority,
          });
        }
      });
    };

    scanDirectory(pagesDir);

    return sitemapEntries;
  } catch (error) {
    console.error("Error generating sitemap:", error);

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
    ];
  }
}
