"server-only";

import type { SocialNetwork } from "@/payload-types";
import payload from "@/utils/payload";
import { unstable_cache } from "next/cache";
import type { PaginatedDocs } from "payload";
import { cache } from "react";

const getSocialNetworksCached = cache(
  async (): Promise<PaginatedDocs<SocialNetwork>> => {
    const socialNetworks: PaginatedDocs<SocialNetwork> = await payload.find({
      collection: "social-networks",
      pagination: false,
      sort: "position",
    });
    return socialNetworks;
  },
);

export const getSocialNetworksISR = unstable_cache(
  getSocialNetworksCached,
  ["social-networks"],
  { revalidate: 1, tags: ["social-networks"] },
);
