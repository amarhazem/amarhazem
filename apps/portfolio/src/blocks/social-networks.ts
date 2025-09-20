import type { Block } from "payload";

export default {
  fields: [
    {
      admin: {
        hidden: true,
        readOnly: true,
      },
      defaultValue: "social-networks",
      label: "Social Networks",
      name: "socialNetworks",
      type: "text",
    },
  ],
  labels: {
    plural: "Social Networks Blocks",
    singular: "Social Networks Block",
  },
  slug: "social-networks-block",
} as Block;
