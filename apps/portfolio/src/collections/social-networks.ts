import type { CollectionConfig } from "payload";

export default {
  access: {
    create: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    description: "Manage social media links and profiles",
    group: "Navigation",
    useAsTitle: "name",
  },
  fields: [
    {
      admin: {
        description: "Show this social network in navigation",
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
        description: "Brief description of your presence on this platform",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description: "Number of followers (optional, for display)",
      },
      label: "Follow Count",
      name: "followCount",
      type: "number",
    },
    {
      admin: {
        description: "Color when hovering over the icon (optional)",
      },
      label: "Hover Color",
      name: "hoverColor",
      type: "text",
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
        description: "Name of the social media platform",
      },
      label: "Platform Name",
      name: "name",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Open link in a new tab",
      },
      defaultValue: true,
      label: "Open in New Tab",
      name: "openInNewTab",
      type: "checkbox",
    },
    {
      admin: {
        description: "Type of platform for categorization",
      },
      defaultValue: "social",
      label: "Platform Type",
      name: "platformType",
      options: [
        { label: "Creative", value: "creative" },
        { label: "Professional", value: "professional" },
        { label: "Other", value: "other" },
        { label: "Social Media", value: "social" },
        { label: "Technical", value: "technical" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Order of display (smaller = higher)",
      },
      label: "Display Position",
      name: "position",
      required: true,
      type: "number",
    },
    {
      admin: {
        description: "Link to your profile on this platform",
      },
      label: "Profile URL",
      name: "url",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Your username or handle on this platform",
      },
      label: "Username/Handle",
      name: "username",
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
    plural: "Social Networks",
    singular: "Social Network",
  },
  slug: "social-networks",
  versions: {
    drafts: true,
  },
} as CollectionConfig;
