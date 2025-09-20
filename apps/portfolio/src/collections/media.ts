import type { CollectionConfig } from "payload";

export default {
  access: {
    create: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    description: "Manage media files",
    group: "Content",
    useAsTitle: "filename",
  },
  fields: [
    {
      admin: {
        description: "Alternative text for accessibility",
      },
      label: "Alt Text",
      name: "alt",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Optional caption for the media",
      },
      label: "Caption",
      name: "caption",
      type: "text",
    },
    {
      admin: {
        description: "Media category for organization",
      },
      defaultValue: "images",
      label: "Category",
      name: "category",
      options: [
        { label: "Documents", value: "documents" },
        { label: "Icons", value: "icons" },
        { label: "Images", value: "images" },
        { label: "Logos", value: "logos" },
        { label: "Other", value: "other" },
        { label: "Videos", value: "videos" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Copyright information",
      },
      label: "Copyright",
      name: "copyright",
      type: "text",
    },
    {
      admin: {
        description: "Name of the photographer or content creator",
      },
      label: "Photographer/Creator",
      name: "creator",
      type: "text",
    },
    {
      admin: {
        description: "Detailed description of the media content",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description: "Mark as featured media",
      },
      defaultValue: false,
      label: "Featured",
      name: "featured",
      type: "checkbox",
    },
    {
      admin: {
        description: "Make this media available for use",
      },
      defaultValue: true,
      label: "Published",
      name: "published",
      type: "checkbox",
    },
    {
      admin: {
        description: "Tags to organize and search media",
      },
      fields: [
        {
          label: "Tag",
          name: "tag",
          required: true,
          type: "text",
        },
      ],
      label: "Tags",
      name: "tags",
      type: "array",
    },
    {
      admin: {
        description: "Usage rights for this media",
      },
      defaultValue: "all-rights",
      label: "Usage Rights",
      name: "usageRights",
      options: [
        { label: "All Rights Reserved", value: "all-rights" },
        { label: "Creative Commons", value: "creative-commons" },
        { label: "Custom License", value: "custom" },
        { label: "Fair Use", value: "fair-use" },
        { label: "Public Domain", value: "public-domain" },
      ],
      type: "select",
    },
  ],
  labels: {
    plural: "Media",
    singular: "Medium",
  },
  slug: "media",
  upload: {
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        height: 1024,
        name: "card",
        position: "centre",
        width: 768,
      },
      {
        height: undefined,
        name: "tablet",
        position: "centre",
        width: 1024,
      },
      {
        height: 300,
        name: "thumbnail",
        position: "centre",
        width: 400,
      },
    ],
    mimeTypes: ["application/pdf", "image/*", "video/*"],
  },
  versions: {
    drafts: true,
  },
} as CollectionConfig;
