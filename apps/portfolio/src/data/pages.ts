"server-only";

import type { Page } from "@/payload-types";
import payload from "@/utils/payload";
import type { PaginatedDocs } from "payload";
import { cache } from "react";

export const getPageBySlug = cache(async (slug: string): Promise<Page> => {
  const pages: PaginatedDocs<Page> = await payload.find({
    collection: "pages",
    pagination: false,
    sort: "position",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return pages.docs[0];
});
