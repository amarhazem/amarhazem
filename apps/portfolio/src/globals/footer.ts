import Brand from "@/blocks/brand";
import License from "@/blocks/license";
import Spacer from "@/blocks/spacer";
import Version from "@/blocks/version";
import type { GlobalConfig } from "payload";

export default {
  access: {
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    group: "Layout",
  },
  fields: [
    {
      blocks: [Brand, License, Spacer, Version],
      label: "Footer Blocks",
      name: "blocks",
      type: "blocks",
    },
  ],
  slug: "footer",
} as GlobalConfig;
