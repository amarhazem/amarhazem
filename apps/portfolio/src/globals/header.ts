import anyone from "@/access/anyone";
import authenticated from "@/access/authenticated";
import Account from "@/blocks/account";
import Apps from "@/blocks/apps";
import Brand from "@/blocks/brand";
import SocialNetworks from "@/blocks/social-networks";
import Spacer from "@/blocks/spacer";
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
