import anyone from "@/access/anyone";
import authenticated from "@/access/authenticated";
import Brand from "@/blocks/brand";
import License from "@/blocks/license";
import Spacer from "@/blocks/spacer";
import Version from "@/blocks/version";
import type { GlobalConfig } from "payload";

export default {
  access: {
    read: anyone,
    update: authenticated,
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
  labels: {
    plural: "Footers",
    singular: "Footer",
  },
  slug: "footer",
} as GlobalConfig;
