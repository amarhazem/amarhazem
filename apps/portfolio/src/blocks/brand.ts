import type { Block } from "payload";

export default {
  fields: [
    {
      label: "Application Name",
      name: "appName",
      required: true,
      type: "text",
    },
    {
      label: "Logo",
      name: "logo",
      relationTo: "media",
      type: "upload",
    },
  ],
  labels: {
    plural: "Brands",
    singular: "Brand",
  },
  slug: "brand",
} as Block;
