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
        description: "Description of the projects section",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      fields: [
        {
          admin: {
            description: "Show only featured projects",
          },
          defaultValue: false,
          label: "Show Featured Only",
          name: "featuredOnly",
          type: "checkbox",
        },
        {
          admin: {
            description: "Number of projects per row (for grid layout)",
            condition: (data) => data.layout === "grid",
          },
          defaultValue: "3",
          label: "Items per Row",
          name: "itemsPerRow",
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
          ],
          type: "select",
        },
        {
          admin: {
            description: "How to display the projects",
          },
          defaultValue: "grid",
          label: "Layout",
          name: "layout",
          options: [
            { label: "Carousel", value: "carousel" },
            { label: "Grid", value: "grid" },
            { label: "List", value: "list" },
          ],
          type: "select",
        },
        {
          admin: {
            description:
              "Maximum number of projects to display (leave empty for all)",
          },
          label: "Limit Number",
          name: "limit",
          type: "number",
        },
      ],
      label: "Display Options",
      name: "displayOptions",
      type: "group",
    },
    {
      admin: {
        description: "Main title of the projects section",
      },
      label: "Title",
      name: "heading",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Select projects to showcase in this section",
      },
      hasMany: true,
      label: "Projects",
      name: "projects",
      relationTo: "projects",
      type: "relationship",
    },
  ],
  labels: {
    plural: "Projects Sections",
    singular: "Projects Section",
  },
  slug: "projects",
} as Block;
