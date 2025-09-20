"server-only";

import type { Locale } from "@/i18n/request";
import type { Page } from "@/payload-types";
import payload from "@/utils/payload";
import { getLocale } from "next-intl/server";
import type { PaginatedDocs } from "payload";
import { cache } from "react";

export const getPageBySlug = cache(
  async (slug: string, language?: Locale): Promise<Page> => {
    const locale = language || (await getLocale());

    const pages: PaginatedDocs<Page> = await
    payload.find({
      collection: "pages",
      locale: locale as "en" | "fr" | "ja",
      pagination: false,
      sort: "position",
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    return pages.docs[0];
  },
);
