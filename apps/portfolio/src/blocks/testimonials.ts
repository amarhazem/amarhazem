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
      admin: {
        description: "Description of the testimonials section",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      fields: [
        {
          admin: {
            condition: (data) => data.layout === "carousel",
            description: "Automatically rotate testimonials (for carousel)",
          },
          defaultValue: true,
          label: "Auto Rotate",
          name: "autoRotate",
          type: "checkbox",
        },
        {
          admin: {
            description: "Show only featured testimonials",
          },
          defaultValue: false,
          label: "Show Featured Only",
          name: "featuredOnly",
          type: "checkbox",
        },
        {
          admin: {
            condition: (data) => data.layout === "grid",
            description: "Number of testimonials per row (for grid layout)",
          },
          defaultValue: "1",
          label: "Items per Row",
          name: "itemsPerRow",
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
          ],
          type: "select",
        },
        {
          admin: {
            description: "How to display the testimonials",
          },
          defaultValue: "carousel",
          label: "Layout",
          name: "layout",
          options: [
            { label: "Carousel", value: "carousel" },
            { label: "Grid", value: "grid" },
            { label: "List", value: "list" },
            { label: "Single", value: "single" },
          ],
          type: "select",
        },
        {
          admin: {
            condition: (data) => data.layout === "carousel" && data.autoRotate,
            description: "Time between rotations in seconds",
          },
          defaultValue: 5,
          label: "Rotation Speed (seconds)",
          name: "rotationSpeed",
          type: "number",
        },
        {
          admin: {
            description: "Display company and position information",
          },
          defaultValue: true,
          label: "Show Company Info",
          name: "showCompany",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display client profile photos",
          },
          defaultValue: true,
          label: "Show Client Photos",
          name: "showPhotos",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display star ratings",
          },
          defaultValue: true,
          label: "Show Ratings",
          name: "showRatings",
          type: "checkbox",
        },
      ],
      label: "Display Options",
      name: "displayOptions",
      type: "group",
    },
    {
      admin: {
        description: "Main title of the testimonials section",
      },
      label: "Title",
      name: "heading",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Select testimonials to display in this section",
      },
      hasMany: true,
      label: "Testimonials",
      name: "testimonials",
      relationTo: "testimonials",
      type: "relationship",
    },
  ],
  labels: {
    plural: "Testimonials Sections",
    singular: "Testimonials Section",
  },
  slug: "testimonials",
} as Block;
