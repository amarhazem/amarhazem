import type { Block } from "payload";

export default {
  fields: [
    {
      admin: {
        hidden: true,
        readOnly: true,
      },
      defaultValue: "language-selection",
      label: "Language Selection",
      localized: true,
      name: "language-selection",
      type: "text",
    },
  ],
  labels: {
    plural: "Language Selection Blocks",
    singular: "Language Selection Block",
  },
  slug: "language-selection-block",
} as Block;
