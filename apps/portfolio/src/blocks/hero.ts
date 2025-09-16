import type { Block } from "payload";

export default {
  fields: [
    {
      admin: {
        description: "ID for navigation",
      },
      label: "Anchor (#id)",
      name: "anchorId",
      type: "text",
    },
    {
      fields: [
        {
          admin: {
            description: "Delay before animation starts in milliseconds",
          },
          defaultValue: 0,
          label: "Animation Delay (ms)",
          name: "delay",
          type: "number",
        },
        {
          defaultValue: "fadeIn",
          label: "Animation Type",
          name: "type",
          options: [
            { label: "None", value: "none" },
            { label: "Fade In", value: "fadeIn" },
            { label: "Slide Down", value: "slideDown" },
            { label: "Slide Up", value: "slideUp" },
            { label: "Zoom In", value: "zoomIn" },
          ],
          type: "select",
        },
      ],
      label: "Animation",
      name: "animation",
      type: "group",
    },
    {
      admin: {
        description: "Hexadecimal background color",
      },
      label: "Background Color",
      name: "backgroundColor",
      type: "text",
    },
    {
      admin: {
        description: "Background image for hero section (optional)",
      },
      label: "Background Image",
      name: "backgroundImage",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "Background video (optional, replaces image)",
      },
      label: "Background Video",
      name: "backgroundVideo",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "Main action button (optional)",
      },
      fields: [
        {
          label: "Link",
          name: "href",
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
        {
          label: "Button Text",
          name: "label",
          required: true,
          type: "text",
        },
      ],
      label: "Main Button (CTA)",
      name: "cta",
      type: "group",
    },
    {
      admin: {
        condition: (data) => data.textColor === "custom",
        description: "Custom hexadecimal color",
      },
      label: "Custom Color",
      name: "customTextColor",
      type: "text",
    },
    {
      admin: {
        description: "Additional buttons (optional)",
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
          defaultValue: "secondary",
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
      label: "Secondary Buttons",
      name: "secondaryButtons",
      type: "array",
    },
    {
      admin: {
        description: "Subtitle or short description",
      },
      label: "Subtitle",
      name: "subtitle",
      type: "textarea",
    },
    {
      admin: {
        description: "Text content alignment",
      },
      defaultValue: "center",
      label: "Text Alignment",
      name: "textAlign",
      options: [
        { label: "Center", value: "center" },
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Main text color",
      },
      label: "Text Color",
      defaultValue: "white",
      name: "textColor",
      options: [
        { label: "Black", value: "black" },
        { label: "Custom", value: "custom" },
        { label: "White", value: "white" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Main title of the hero section",
      },
      label: "Main Title",
      name: "title",
      required: true,
      type: "text",
    },
  ],
  labels: {
    plural: "Hero Sections",
    singular: "Hero Section",
  },
  slug: "hero",
} as Block;
