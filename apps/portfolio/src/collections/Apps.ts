import type { CollectionConfig } from "payload";

export const Apps: CollectionConfig = {
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      admin: {
        language: "html",
      },
      name: "icon",
      required: true,
      type: "code",
    },
    {
      name: "name",
      required: true,
      type: "text",
    },
    {
      name: "position",
      required: true,
      type: "number",
    },
    {
      name: "url",
      required: true,
      type: "text",
    },
    {
      defaultValue: "0 0 24 24",
      name: "viewBox",
      required: true,
      type: "text",
    },
  ],
  slug: "apps",
};
