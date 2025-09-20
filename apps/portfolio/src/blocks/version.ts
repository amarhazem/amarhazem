import type { Block } from "payload";

export default {
  fields: [
    {
      label: "Version Number",
      name: "versionNumber",
      required: true,
      type: "text",
    },
    {
      label: "Changelog URL",
      name: "changelogUrl",
      required: true,
      type: "text",
    },
    {
      defaultValue: "View changelog",
      label: "Link Text",
      name: "linkText",
      type: "text",
    },
  ],
  labels: {
    plural: "Versions",
    singular: "Version",
  },
  slug: "version",
} as Block;
