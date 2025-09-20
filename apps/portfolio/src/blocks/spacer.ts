import type { Block } from "payload";

export default {
  fields: [
    {
      admin: {
        hidden: true,
        readOnly: true,
      },
      defaultValue: "spacer",
      label: "Spacer",
      name: "spacer",
      type: "text",
    },
  ],
  labels: {
    plural: "Spacers",
    singular: "Spacer",
  },
  slug: "spacer",
} as Block;
