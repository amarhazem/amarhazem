import type { Block } from "payload";

export default {
  fields: [
    {
      admin: {
        hidden: true,
        readOnly: true,
      },
      defaultValue: "apps",
      label: "Apps",
      name: "apps",
      type: "text",
    },
  ],
  labels: {
    plural: "Apps Blocks",
    singular: "Apps Block",
  },
  slug: "apps-block",
} as Block;
