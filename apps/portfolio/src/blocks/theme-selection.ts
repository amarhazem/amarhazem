import type { Block } from "payload";

export default {
  fields: [
    {
      admin: {
        hidden: true,
        readOnly: true,
      },
      defaultValue: "theme-selection",
      label: "Theme Selection",
      localized: true,
      name: "theme-selection",
      type: "text",
    },
  ],
  labels: {
    plural: "Theme Selection Blocks",
    singular: "Theme Selection Block",
  },
  slug: "theme-selection-block",
} as Block;
