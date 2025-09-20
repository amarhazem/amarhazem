import type { Block } from "payload";

export default {
  fields: [
    {
      defaultValue: "spacer",
      admin: {
        hidden: true,
        readOnly: true,
      },
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
