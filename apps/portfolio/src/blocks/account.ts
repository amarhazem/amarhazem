import type { Block } from "payload";

export default {
  fields: [
    {
      admin: {
        hidden: true,
        readOnly: true,
      },
      defaultValue: "account",
      label: "Account",
      name: "account",
      type: "text",
    },
  ],
  labels: {
    plural: "Accounts",
    singular: "Account",
  },
  slug: "account",
} as Block;
