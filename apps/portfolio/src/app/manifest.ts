import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#000000",
    description: "Amar Hazem | Full Stack Engineer",
    display: "standalone",
    icons: [
      {
        sizes: "48x48",
        src: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    name: "Amar Hazem | Full Stack Engineer",
    short_name: "Amar Hazem",
    start_url: "/",
    theme_color: "#D21DF7",
  };
}
