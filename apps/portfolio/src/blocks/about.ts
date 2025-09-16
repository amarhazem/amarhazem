import type { Block } from "payload";

export default {
  fields: [
    {
      admin: {
        description: "Additional images to illustrate the content",
      },
      fields: [
        {
          label: "Caption",
          name: "caption",
          type: "text",
        },
        {
          label: "Image",
          name: "image",
          relationTo: "media",
          required: true,
          type: "upload",
        },
      ],
      label: "Additional Images",
      name: "additionalImages",
      type: "array",
    },
    {
      admin: {
        description: "ID for navigation",
      },
      label: "Anchor (#id)",
      name: "anchorId",
      type: "text",
    },
    {
      admin: {
        description: "Main content of the section",
      },
      label: "Main Content",
      name: "body",
      type: "richText",
    },
    {
      admin: {
        description: "Action button",
      },
      fields: [
        {
          label: "Link",
          name: "href",
          required: true,
          type: "text",
        },
        {
          label: "Button Text",
          name: "label",
          required: true,
          type: "text",
        },
        {
          defaultValue: false,
          label: "Open in New Tab",
          name: "openInNewTab",
          type: "checkbox",
        },
        {
          defaultValue: "primary",
          label: "Button Style",
          name: "style",
          options: [
            { label: "Outlined", value: "outlined" },
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
          type: "select",
        },
      ],
      label: "Action Button",
      name: "cta",
      type: "group",
    },
    {
      admin: {
        description: "Main title of the About section",
      },
      label: "Section Title",
      name: "heading",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Main skills to highlight",
      },
      fields: [
        {
          defaultValue: "intermediate",
          label: "Level",
          name: "level",
          options: [
            { label: "Advanced", value: "advanced" },
            { label: "Beginner", value: "beginner" },
            { label: "Expert", value: "expert" },
            { label: "Intermediate", value: "intermediate" },
          ],
          type: "select",
        },
        {
          label: "Skill",
          name: "skill",
          required: true,
          type: "text",
        },
      ],
      label: "Key Skills",
      name: "keySkills",
      type: "array",
    },
    {
      fields: [
        {
          admin: {
            description: "Hexadecimal background color (optional)",
          },
          label: "Background Color",
          name: "backgroundColor",
          type: "text",
        },
        {
          defaultValue: "left",
          label: "Content Alignment",
          name: "contentAlign",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
          type: "select",
        },
        {
          defaultValue: "right",
          label: "Image Position",
          name: "imagePosition",
          options: [
            { label: "Bottom", value: "bottom" },
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
            { label: "Top", value: "top" },
          ],
          type: "select",
        },
      ],
      label: "Layout",
      name: "layout",
      type: "group",
    },
    {
      admin: {
        description: "Profile photo or representative image",
      },
      label: "Profile Image",
      name: "profileImage",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "Statistics to display",
      },
      fields: [
        {
          admin: {
            description: "Icon class or emoji",
          },
          label: "Icon",
          name: "icon",
          type: "text",
        },
        {
          admin: {
            description: "Description of the statistic",
          },
          label: "Label",
          name: "label",
          required: true,
          type: "text",
        },
        {
          admin: {
            description: "Numeric or text value",
          },
          label: "Value",
          name: "value",
          required: true,
          type: "text",
        },
      ],
      label: "Statistics",
      name: "stats",
      type: "array",
    },
    {
      admin: {
        description: "Subtitle or hook (optional)",
      },
      label: "Subtitle",
      name: "subtitle",
      type: "text",
    },
  ],
  labels: {
    plural: "About Sections",
    singular: "About Section",
  },
  slug: "about",
} as Block;
