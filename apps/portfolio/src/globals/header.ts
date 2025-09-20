import Account from "@/blocks/account";
import Apps from "@/blocks/apps";
import Brand from "@/blocks/brand";
import SocialNetworks from "@/blocks/social-networks";
import Spacer from "@/blocks/spacer";
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
      blocks: [Account, Apps, Brand, Spacer, SocialNetworks],
      label: "Header Blocks",
      name: "blocks",
      type: "blocks",
    },
  ],
  labels: {
    plural: "Headers",
    singular: "Header",
  },
  slug: "header",
} as GlobalConfig;
