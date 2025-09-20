import type { Block } from "payload";

export default {
  fields: [
    {
      defaultValue: "mit",
      label: "License Type",
      name: "licenseType",
      options: [
        {
          label: "Apache 2.0",
          value: "apache",
        },
        {
          label: "GPL v3",
          value: "gpl",
        },
        {
          label: "MIT",
          value: "mit",
        },
        {
          label: "Proprietary",
          value: "proprietary",
        },
      ],
      type: "select",
    },
    {
      label: "License Text",
      name: "licenseText",
      type: "textarea",
    },
    {
      label: "Full License URL",
      name: "licenseUrl",
      type: "text",
    },
  ],
  labels: {
    plural: "Licenses",
    singular: "License",
  },
  slug: "license",
} as Block;
