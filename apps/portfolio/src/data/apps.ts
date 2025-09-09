"server-only";

import type { App } from "@/payload-types";
import payload from "@/utils/payload";
import { unstable_cache } from "next/cache";
import type { PaginatedDocs } from "payload";
import { cache } from "react";

const getAppsCached = cache(async (): Promise<PaginatedDocs<App>> => {
  const apps: PaginatedDocs<App> = await payload.find({
    collection: "apps",
    pagination: false,
    sort: "position",
  });
  return apps;
});

export const getAppsISR = unstable_cache(getAppsCached, ["apps"], {
  revalidate: 1,
  tags: ["apps"],
});
