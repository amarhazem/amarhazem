import type { CollectionConfig } from "payload";

export default {
  access: {
    create: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    description: "Manage external applications and services",
    group: "Navigation",
    useAsTitle: "name",
  },
  fields: [
    {
      admin: {
        description: "Show this application in navigation",
      },
      defaultValue: true,
      label: "Active",
      name: "active",
      type: "checkbox",
    },
    {
      admin: {
        description: "Hexadecimal color of the icon",
      },
      label: "Icon Color",
      name: "color",
      type: "text",
    },
    {
      admin: {
        description: "Short description of the application",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description: "SVG icon code (without <svg> tags)",
        language: "html",
      },
      label: "SVG Icon",
      name: "icon",
      required: true,
      type: "code",
    },
    {
      admin: {
        description: "Display name of the application",
      },
      label: "Application Name",
      name: "name",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Open link in a new tab",
      },
      label: "Open in New Tab",
      defaultValue: true,
      name: "openInNewTab",
      type: "checkbox",
    },
    {
      admin: {
        description: "Display order (smaller = higher)",
      },
      label: "Display Position",
      name: "position",
      required: true,
      type: "number",
    },
    {
      admin: {
        description: "Link to the application or profile",
      },
      label: "Application URL",
      name: "url",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "SVG icon viewBox",
      },
      defaultValue: "0 0 24 24",
      label: "SVG ViewBox",
      name: "viewBox",
      required: true,
      type: "text",
    },
  ],
  labels: {
    plural: "Apps",
    singular: "App",
  },
  slug: "apps",
  versions: {
    drafts: true,
  },
} as CollectionConfig;
